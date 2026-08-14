/**
 * Префікс усіх ключів сховища (STORAGE-NAMESPACE-v8 § 1).
 *
 * Проєкт живе на GitHub Pages — origin спільний із рештою проєктів акаунта.
 * Без префікса ключ `theme` тут і `theme` у сусідньому проєкті — один ключ.
 *
 * Єдине джерело: раніше константа була продубльована у `services/storage.ts`
 * і `services/storageMigration.ts`. Два однакові літерали, які МУСЯТЬ бути
 * рівні, — це не дублювання коду, а тиха пастка: розійдуться вони саме тоді,
 * коли префікс колись зміниться, і міграція почне шукати не те.
 */
export const STORAGE_PREFIX = 'mindstep_';

/** Єдиний спосіб отримати повний ключ. */
export function getStorageKey(key: string): string {
	return STORAGE_PREFIX + key;
}
