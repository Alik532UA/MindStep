<script lang="ts">
	import Header from "$lib/components/layouts/Header.svelte";
	import "../app.css";
	import { appInitializationService } from "$lib/services/appInitializationService";
	import { versionState } from "$lib/stores/versionState.svelte";
	import { onMount, onDestroy } from "svelte";
	import { get } from "svelte/store";
	import { base } from "$app/paths";
	import UpdateNotification from "$lib/components/UpdateNotification.svelte";
	import ReloadPrompt from "$lib/components/pwa/ReloadPrompt.svelte";
	import { clearCache } from "$lib/utils/cacheManager.js";
	import Modal from "$lib/components/Modal.svelte";
	import { modalStateRune } from "$lib/stores/modalState.svelte";
	import { afterNavigate, goto } from "$app/navigation";
	        import { page } from "$app/stores";
	        import { logService } from "$lib/services/logService.svelte";
	        import { notificationService } from "$lib/services/notificationService";
	        import TestModeWidget from "$lib/components/widgets/TestModeWidget.svelte";	import { tooltipState } from "$lib/stores/tooltipState.svelte";
	import { uiState } from "$lib/stores/uiState.svelte";
	import Tooltip from "$lib/components/Tooltip.svelte";
	import ModalManager from "$lib/components/ModalManager.svelte";
	import { testModeState } from "$lib/stores/testModeState.svelte";
	import { resetAllStores } from "$lib/services/testingService";
	import hotkeyService from "$lib/services/hotkeyService";
	import { i18nReady } from "$lib/i18n/init.js";
	import RewardNotification from "$lib/components/rewards/RewardNotification.svelte";
	import ErrorBoundary from "$lib/components/ErrorBoundary.svelte";

	// Imports for Menus
	import FlexibleMenu from "$lib/components/ui/FlexibleMenu/FlexibleMenu.svelte";
	import type { IMenuItem } from "$lib/components/ui/FlexibleMenu/FlexibleMenu.types";
	import GameModeModal from "$lib/components/GameModeModal.svelte";
	import DevMenu from "$lib/components/main-menu/DevMenu.svelte";
	import FeedbackModal from "$lib/components/modals/FeedbackModal.svelte";
	import NetworkMonitorWidget from "$lib/components/widgets/test-mode/NetworkMonitorWidget.svelte";

	import { roomService } from "$lib/services/roomService";
	import "$lib/services/commandService";
	import ToastContainer from "$lib/components/ui/ToastContainer.svelte";
	import LogCopyButton from "$lib/components/widgets/LogCopyButton.svelte";
	import { errorHandlerService } from "$lib/services/errorHandlerService";
	import { audioService } from "$lib/services/audioService";

	import { untrack } from "svelte";

	import { storageService } from "$lib/services/storage.ts";
	import { migrateStorage } from "$lib/services/storageMigration";

	interface Props {
		children?: import("svelte").Snippet;
	}

	let { children }: Props = $props();

	let showUpdateNotice = $state(false);
	const APP_VERSION_KEY = "app_version";

	let testModeEnabled = false;
	let unsubscribeTestMode: () => void;

	onMount(() => {
		// Міграція старого сховища до нової системи з префіксами
		migrateStorage();

		// Centralized initialization
		appInitializationService.initialize();
		errorHandlerService.initGlobalHandlers();

		// Unlock audio on first click
		const unlockAudio = () => {
			audioService.unlock();
			window.removeEventListener("click", unlockAudio);
			window.removeEventListener("touchstart", unlockAudio);
		};
		window.addEventListener("click", unlockAudio);
		window.addEventListener("touchstart", unlockAudio);

		unsubscribeTestMode = testModeState.subscribe((state) => {
			testModeEnabled = state.isEnabled;
		});

		// Subscribe to version changes to show update notice
		const unsubscribeVersion = versionState.subscribe((versionInfo) => {
			const localVersion = storageService.get(APP_VERSION_KEY);
			if (
				versionInfo.current &&
				localVersion &&
				localVersion !== versionInfo.current
			) {
				showUpdateNotice = true;
			}
		});

		const isTest = import.meta.env.MODE === 'test' || (typeof window !== 'undefined' && (window as any).__playwright_test__);

		if (import.meta.env.DEV || isTest) {
			(window as any).toggleTestMode = () => testModeState.toggle();
			(window as any).resetAllStores = resetAllStores;
		}

		// REMOVED: Global hotkeys registration
		// hotkeyService.register("global", "[", ...);
		// hotkeyService.register("global", "t", ...);

		// Remove old 'sw.js' service worker to fix 404 errors during migration to 'service-worker.js'
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker.getRegistrations().then((registrations) => {
				for (const registration of registrations) {
					if (
						registration.active &&
						registration.active.scriptURL.endsWith("/sw.js")
					) {
						logService.init(
							"[Layout] Unregistering old sw.js service worker",
						);
						registration.unregister().then(() => {
							window.location.reload();
						});
					}
				}
			});
		}

		return () => {
			appInitializationService.cleanup();
			unsubscribeVersion();
		};
	});

	onDestroy(() => {
		if (unsubscribeTestMode) unsubscribeTestMode();
	});

	let isAbandonedModalOpen = false;

	async function checkOnlineSession(currentPath: string) {
		const session = roomService.getSession();

		if (session.roomId && session.playerId) {
			const basePath = base || "";

			// Safe zones where we DO NOT show the modal
			const isLobby = currentPath.includes(
				`${basePath}/online/lobby/${session.roomId}`,
			);
			const isGame = currentPath.includes(`${basePath}/game/online`);

			const isSafeZone = isLobby || isGame;

			logService.init(
				`[Layout] checkOnlineSession: path=${currentPath}, roomId=${session.roomId}, isSafeZone=${isSafeZone}`,
			);

			if (!isSafeZone && !isAbandonedModalOpen) {
				isAbandonedModalOpen = true;
				// Determine if we should show the modal
				modalStateRune.showModal({
					titleKey: "onlineMenu.abandonedGame.title",
					dataTestId: "abandoned-game-modal",
					component: (
						await import(
							"$lib/components/modals/AbandonedGameModal.svelte"
						)
					).default,
					props: {
						roomId: session.roomId,
						playerId: session.playerId,
					},
					variant: "menu",
					closeOnOverlayClick: false,
					buttons: [],
					onClose: () => {
						isAbandonedModalOpen = false;
					}
				});
			} else if (isSafeZone && isAbandonedModalOpen) {
				// Якщо користувач повернувся в гру іншим шляхом (напр. через URL)
				modalStateRune.closeModal();
				isAbandonedModalOpen = false;
			}
		}
	}

	function handleReload() {
		clearCache({ keepAppearance: true });
	}

	afterNavigate(({ from, to }) => {
		if (sessionStorage.getItem("isRestoringReplay")) {
			sessionStorage.removeItem("isRestoringReplay");
			return;
		}
		
		// FIX: Закриваємо ВСІ модалки тільки при зміні шляху (pathname), 
		// а не при зміні параметрів (?mode=... і т.д.).
		// Використовуємо closeAllModals замість closeModal, щоб очистити стек.
		if (from?.url?.pathname !== to?.url?.pathname) {
			modalStateRune.closeAllModals();
		}

		logService.ui("[layout] afterNavigate: hiding tooltip");
		tooltipState.hide();
	});

	// --- URL as State Sync ---
	$effect(() => {
		const url = $page.url;
		untrack(() => {
			modalStateRune.syncWithUrl(url);
		});
	});

	// --- Menu Logic ---
	function handlePlayVirtualPlayer() {
		modalStateRune.open("game-mode-modal");
	}

	function handleFeedback() {
		logService.action('Click: "Feedback" (Layout)');
		modalStateRune.open("feedback-modal");
	}

	const menuItems: IMenuItem[] = [
		{
			id: "rewards",
			emoji: "trophy",
			tooltip: "Нагороди",
			onClick: () => goto(`${base}/rewards`),
		},
		{
			id: "donate",
			emoji: "coins",
			tooltip: "Підтримати",
			dataTestId: "donate-btn",
			onClick: () => goto(`${base}/supporters`),
		},
		{
			id: "play",
			emoji: "crown",
			tooltip: "Грати",
			onClick: handlePlayVirtualPlayer,
			primary: true,
		},
		{
			id: "settings",
			emoji: "gear",
			tooltip: "Налаштування",
			onClick: () => goto(`${base}/settings`),
		},
		{
			id: "feedback",
			emoji: "speech_balloon",
			tooltip: "Відгук",
			onClick: handleFeedback,
			dataTestId: "feedback-btn",
		},
	];

	function openDevMenuModal() {
		modalStateRune.open("dev-menu-modal");
	}

	const devMenuItems = $derived($i18nReady
		? [
				                                                                                                                                {
				                                                                                                                                        id: "main-menu-link",
				                                                                                                                                        emoji: "house", // FIX: Changed from 🏠 to house
				                                                                                                                                        tooltip: "На головну",
				                                                                                                                                        onClick: () => goto(`${base}/`),
				                                                                                                                                        dataTestId: "left-menu-slot-0",
				                                                                                                                                },
				                                                                                                                                                                {
				                                                                                                                                                                        id: "copy-logs-btn",
				                                                                                                                                                                        emoji: "memo", // memo emoji exists
				                                                                                                                                                                        tooltip: "Копіювати логи",
				                                                                                                                                                                        onClick: () => {
				                                                                                                                                                                            const report = logService.getLogReport();
				                                                                                                                                                                            const timestamp = new Date().toLocaleString();
				                                                                                                                                                                            const header = `--- MindStep DEBUG LOG (VERSION: ${logService.version}) ---\nGenerated: ${timestamp}\n-----------------------------------------------\n\n`;
				                                                                                                                                                                            
				                                                                                                                                                                            navigator.clipboard.writeText(header + report).then(() => {
				                                                                                                                                                                                notificationService.show({ type: 'info', messageRaw: 'Logs copied to clipboard' });
				                                                                                                                                                                            });
				                                                                                                                                                                        },
				                                                                                                                                                                        dataTestId: "left-menu-slot-1",
				                                                                                                                                                                },				                                                                {
				                                                                        id: "test-mode-btn",
				                                                                        emoji: "gear", // FIX: Changed from 🛠️ to gear
				                                                                        tooltip: "Тестовий режим",
				                                                                        onClick: () => testModeState.toggle(),
				                                                                        primary: true,
				                                                                        isActive: testModeState.state.isEnabled,
				                                                                },				{
					id: "dev-menu-modal",
					emoji: "menu", // FIX: Changed from hamburger-menu icon to menu emoji (mapped to Lucide)
					tooltip: "Dev Меню",
					onClick: openDevMenuModal,
				},
				{
					id: "dev-clear-cache-btn",
					emoji: "broom", // FIX: Changed from clear-cache icon to broom emoji (mapped to Lucide Eraser)
					tooltip: "Очистити кеш",
					onClick: () => clearCache({ keepAppearance: false }),
				},
			]
		: []);
</script>

{#if showUpdateNotice}
	<UpdateNotification on:reload={handleReload} />
{/if}

<RewardNotification />

<ErrorBoundary>
	<div class="app">
		{#if import.meta.env.DEV || (typeof window !== 'undefined' && (window as any).__playwright_test__)}
			<FlexibleMenu
				items={devMenuItems}
				position="left"
				persistenceKey="main-left-menu"
				dataTestId="flexible-menu-left-wrapper"
			/>
		{/if}

		<main class:tab-hidden={!uiState.state.isTabVisible}>
			{#if $i18nReady}
				{@render children?.()}
			{:else}
				<div class="loading-screen">Loading...</div>
			{/if}
		</main>

		{#if import.meta.env.DEV || (typeof window !== 'undefined' && (window as any).__playwright_test__)}
			<FlexibleMenu
				items={menuItems}
				position="right"
				persistenceKey="main-right-menu"
				dataTestId="flexible-menu-right-wrapper"
				startOpen={false}
			/>
		{/if}
	</div>

	{#if tooltipState.state.isVisible}
		<Tooltip
			content={tooltipState.state.content}
			x={tooltipState.state.x}
			y={tooltipState.state.y}
		/>
	{/if}
	<Modal />
	<ModalManager />
	<ToastContainer />

	{#if testModeState.state.isEnabled}
		<div
			class="test-mode-container"
			data-testid="test-mode-widget-container"
		>
			<TestModeWidget />
		</div>
	{/if}

	{#if import.meta.env.DEV}
		<NetworkMonitorWidget />
	{/if}

	<!-- PWA Update Prompt -->
	<ReloadPrompt />
</ErrorBoundary>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.test-mode-container {
		position: fixed;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
		z-index: 1001;
	}
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		transition: filter 0.3s ease;
	}
	main.tab-hidden {
		filter: blur(10px) grayscale(0.5);
		pointer-events: none;
	}
	.loading-screen {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		color: var(--text-secondary);
	}
</style>
