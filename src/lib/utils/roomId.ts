/**
 * Ідентифікатор кімнати: ВИПАДКОВИЙ префікс, а потім позначка часу.
 *
 * Доти він починався з дати (`2026-08-18_12-30-01_123_456`) — тобто був
 * монотонним у часі, і це документована гаряча ділянка записів Firestore.
 * База розкладає документи по діапазонах ключів і масштабується, РОЗДІЛЯЮЧИ
 * ці діапазони; ключ, монотонний у часі, зводить усі записи в один діапазон —
 * той, що на кінці, — і розділити його неможливо, бо наступний запис однаково
 * піде в останній. Межа — близько 500 записів за секунду, і виглядає її
 * досягнення як затримки й відмови під навантаженням, а не як помилка в коді
 * (CLOUD-DATABASE-v8 § 6.5).
 *
 * Читабельність лишається: дата в ідентифікаторі стоїть, просто не першою.
 * Сортувати за нею все одно нікому не треба — лобі сортує за полем
 * `lastActivity`, для якого є індекс.
 */
export function generateRoomId(): string {
    const now = new Date();
    const pad = (num: number) => num.toString().padStart(2, '0');
    const padMs = (num: number) => num.toString().padStart(3, '0');

    const year = now.getFullYear();
    const month = pad(now.getMonth() + 1);
    const day = pad(now.getDate());
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    const ms = padMs(now.getMilliseconds());

    // Чотири символи з 36 — понад мільйон початків діапазону, тож послідовні
    // кімнати розходяться по різних ділянках.
    const prefix = Math.random().toString(36).slice(2, 6).padEnd(4, '0');

    return `${prefix}_${year}-${month}-${day}_${hours}-${minutes}-${seconds}_${ms}`;
}

