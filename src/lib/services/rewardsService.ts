import type { Achievement, RewardConditionContext } from '$lib/types/rewards';
import { rewardsState } from '$lib/stores/rewardsState.svelte';
import { logService } from "./logService.svelte";
import { notificationService } from './notificationService';

// Базові нагороди
const BASE_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'score_11_any',
    titleKey: 'rewards.score11Any.title',
    descriptionKey: 'rewards.score11Any.description',
    icon: 'trophy', // Було trophy_bronze
    condition: (context: RewardConditionContext) => {
      return context.score >= 11;
    }
  },
  {
    id: 'score_5_local',
    titleKey: 'rewards.score5Local.title',
    descriptionKey: 'rewards.score5Local.description',
    icon: 'busts_in_silhouette', // Замінено з handshake, оскільки його немає в Noto
    condition: (context: RewardConditionContext) => {
      return context.score >= 5 && (context.gameMode === 'local' || context.gameMode?.includes('local'));
    }
  }
];

const BOARD_SIZES = [2, 3, 4, 5, 6, 7, 8, 9];

// 1. Спринтер Test
const SPRINTER_TEST_ACHIEVEMENTS: Achievement[] = BOARD_SIZES.map(size => ({
  id: `score_11_timed_${size}`,
  groupId: 'sprinter_test',
  variantLabel: `${size}x${size}`,
  titleKey: 'rewards.score11Timed.title',
  descriptionKey: 'rewards.score11Timed.description',
  icon: 'stopwatch', // Було stopwatch_gold
  condition: (context: RewardConditionContext) => {
    return context.score >= 11 &&
      (context.gameMode === 'timed' || context.gameMode?.includes('timed')) &&
      context.boardSize === size;
  }
}));

// 2. Спринтер
const SPRINTER_ACHIEVEMENTS: Achievement[] = BOARD_SIZES.map(size => ({
  id: `score_111_timed_${size}`,
  groupId: 'sprinter',
  variantLabel: `${size}x${size}`,
  titleKey: 'rewards.score111Timed.title',
  descriptionKey: 'rewards.score111Timed.description',
  icon: 'stopwatch', // Було stopwatch_gold
  condition: (context: RewardConditionContext) => {
    return context.score >= 111 &&
      (context.gameMode === 'timed' || context.gameMode?.includes('timed')) &&
      context.boardSize === size;
  }
}));

// 3. Alik
const ALIK_ACHIEVEMENTS: Achievement[] = BOARD_SIZES.map(size => ({
  id: `score_532_timed_${size}`,
  groupId: 'alik',
  variantLabel: `${size}x${size}`,
  titleKey: 'rewards.score532Timed.title',
  descriptionKey: 'rewards.score532Timed.description',
  icon: 'trophy', // Було trophy_bronze
  condition: (context: RewardConditionContext) => {
    return context.score >= 532 &&
      (context.gameMode === 'timed' || context.gameMode?.includes('timed')) &&
      context.boardSize === size;
  }
}));

export const ACHIEVEMENTS: Achievement[] = [
  ...BASE_ACHIEVEMENTS,
  ...SPRINTER_TEST_ACHIEVEMENTS,
  ...SPRINTER_ACHIEVEMENTS,
  ...ALIK_ACHIEVEMENTS
];

class RewardsService {
  constructor() { }

  init() {
    rewardsState.init();
  }

  checkAchievements(context: { score: number; gameMode: string; boardSize: number }) {
    const state = rewardsState.state;
    logService.info(`[RewardsService] checkAchievements called with: score=${context.score}, gameMode=${context.gameMode}, boardSize=${context.boardSize}`);
    logService.info(`[RewardsService] Already unlocked rewards: ${Object.keys(state.unlockedRewards).join(', ') || 'none'}`);

    ACHIEVEMENTS.forEach(achievement => {
      if (state.unlockedRewards[achievement.id]) {
        logService.info(`[RewardsService] Skipping '${achievement.id}' — already unlocked`);
        return;
      }

      const conditionMet = achievement.condition(context);
      if (conditionMet) {
        logService.info(`[RewardsService] ✅ Condition MET for '${achievement.id}'. Unlocking!`);
        this.unlockAchievement(achievement);
      }
    });
  }

  private unlockAchievement(achievement: Achievement) {
    rewardsState.unlock(achievement.id);

    notificationService.show({
      type: 'achievement',
      titleKey: achievement.titleKey,
      messageKey: achievement.descriptionKey,
      icon: achievement.icon,
      duration: 4000
    });

    logService.info(`[RewardsService] Achievement unlocked: ${achievement.id}`);
  }
}

export const rewardsService = new RewardsService();