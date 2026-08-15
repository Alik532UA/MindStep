# MindStep

"MindStep" - це ігрова платформа, що пропонує стратегічну настільну гру "Втримайся". Основна концепція полягає в тому, щоб якомога довше утримувати спільну ігрову фішку на дошці, уникаючи заблокованих клітинок.

## ✨ Основні можливості

*   **Гра проти ШІ:** Кілька рівнів складності віртуального гравця.
*   **Локальний режим:** Можливість грати вдвох на одному пристрої.
*   **Онлайн-режим:** Гра через мережу з іншими гравців.
*   **Кастомізація UI:** Гнучке налаштування розташування віджетів (Drag-and-Drop).
*   **Система реплеїв:** Перегляд та аналіз завершених ігор.
*   **Гнучкі налаштування:** Розмір дошки, гарячі клавіші, озвучування ходів (TTS) та підтримка кількох мов.

## 🚀 Швидкий старт

### Вимоги

*   [Node.js](https://nodejs.org/) (версія 18+)
*   `npm` або `pnpm`

### Установка та запуск

1.  Клонуйте репозиторій.
2.  Встановіть залежності: `npm install`
3.  Запустіть у режимі розробки: `npm run dev`
4.  Відкрийте `http://localhost:5173`.

## 🏗️ Архітектура

Проєкт побудований на **SvelteKit** та використовує гібридну систему стану:
- **Svelte 5 Runes ($state, $derived):** Основне джерело правди (SSoT) для ігрової логіки.
- **Bridge Pattern:** Спеціальні стори (`.svelte.ts`), що надають сумісність зі Svelte 4 компонентами.

### Ключові принципи
- **Розділення логіки та візуалізації:** Ігровий рушій (`GameEngine.ts`) та `center-info` працюють миттєво, не чекаючи завершення анімацій на дошці.
- **Event-Driven UI:** Взаємодія між модулями через `gameEventBus`.
- **SSoT (Single Source of Truth):** Всі дані зберігаються в централізованих сторах.

## 🛠️ Сервіси (Services)

### modalService
Керує відображенням модальних вікон. Підтримує кастомні компоненти та пресети (GameOver, BoardResize).

```typescript
import { modalService } from '$lib/services/modalService';

// Відкрити стандартне модальне вікно через SimpleModalContent
modalService.showModal({
  variant: 'menu',
  props: {
    titleKey: 'modal.confirmTitle',
    contentKey: 'modal.confirmContent',
    actions: [
      { labelKey: 'modal.confirm', onClick: () => { /* ... */ } }
    ]
  }
});

// Закрити модальне вікно
modalService.closeModal();
```

### logService
Категоризоване логування з підтримкою сесійних звітів.

```typescript
import { logService } from '$lib/services/logService';

logService.logicMove('Player moved to', { row: 1, col: 2 });
logService.score('New score updated');
logService.error('Something went wrong');

// Отримати повний звіт для діагностики (останні 100 логів)
const report = logService.getLogReport();
```

### speechService
Централізований сервіс для озвучення тексту (TTS).

## 🌐 Деплой і адреса

**https://alik532ua.github.io/MindStep/** — спільний домен, власного тут немає. Тому `paths.base` дорівнює `/MindStep` (у dev — порожня), а всі ключі сховища мають префікс `mindstep_`: origin ділиться з шістьма сусідніми проєктами, і `localStorage.clear()` зачепив би їх усі.

Деплой — GitHub Pages з гілки `main` через `.github/workflows/deploy.yml`.

Про переїзд на власний домен — [CUSTOM-DOMAIN-v8.md](../sveltekit-canon/selection_criteria/v8/ops/CUSTOM-DOMAIN-v8.md). Окремо: тут деплой іде через `peaceiris/actions-gh-pages`, який **перезаписує гілку публікації**, тож за власного домену знадобився б `static/CNAME` — інакше прив'язка злетить після першого ж деплою.

```typescript
import { speakText, speakMove } from '$lib/services/speechService';

// Озвучити довільний текст
speakText('Ваш хід', 'uk', null);

// Озвучити ігровий хід
speakMove({ direction: 'up', distance: 1 }, 'uk', null);
```

## 📊 Стори (Stores)

| Store | Тип | Опис |
| :--- | :--- | :--- |
| `boardStore` | Bridge / Rune | Стан дошки, позиція фішки, історія ходів. |
| `playerStore` | Bridge / Rune | Список гравців та поточний хід. |
| `gameSettingsState` | Rune | Налаштування гри та пресети складності. |
| `uiStateStore` | Rune | Стан інтерфейсу та завантаження. |
| `modalStore` | Rune | Стан та вміст поточного модального вікна. |

## 🧪 Тестування

*   **E2E (Playwright):** `npx playwright test`
*   **Unit (Vitest):** `npm run test:unit`
*   **Type Check:** `npm run check`

---
*MindStep - крок за кроком до перемоги.*
