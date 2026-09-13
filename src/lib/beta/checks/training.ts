import type { BetaCheck } from '../betaChecklist.types';

/**
 * Пункти вкладки «training».
 *
 * Вкладка — це і є одиниця відповідальності чеклиста: людина проходить її
 * цілком за один захід, і правиться вона разом із тим екраном, про який вона.
 * Доти всі вісім лежали одним файлом, і кожен новий пункт підводив його до
 * стелі § 7, яку в цьому проєкті піднімати не можна: перелік лише скорочується.
 */
export const TRAINING_CHECKS: readonly BetaCheck[] = [
	// ────────────────────────── Тренування ──────────────────────────
	{
		id: 'training_1',
		category: { uk: 'Підказки', en: 'Hints' },
		coverage: 'manual',
		text: {
			uk: 'Почніть тренування. Доступні ходи видно на дошці, і поруч є пояснення, що робити далі.',
			en: 'Start training. The available moves are visible on the board, and an explanation of what to do next sits alongside.'
		}
	},
	{
		id: 'training_2',
		category: { uk: 'Підказки', en: 'Hints' },
		coverage: 'covered',
		test: 'src/lib/controllers/LocalGameController.spec.ts',
		text: {
			uk: 'У тренуванні немає таймера ходу — на панелі керування його не показано зовсім.',
			en: 'Training has no turn clock — it is not shown on the control panel at all.'
		}
	},
	{
		id: 'training_3',
		category: { uk: 'Підказки', en: 'Hints' },
		coverage: 'manual',
		negative: true,
		text: {
			uk: 'Зробіть у тренуванні хід за межі дошки. Рахунок НЕ мусить піти в мінус — тренування не карає балами.',
			en: 'In training, move beyond the edge of the board. The score must NOT go negative — training does not punish with points.'
		}
	},
];
