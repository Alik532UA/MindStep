import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Синхронізує `static/version.json` із `package.json` перед збіркою.
 *
 * Локально це зазвичай no-op: pre-commit хук (`scripts/auto-version.js`) уже
 * записав туди ту саму версію. Крок потрібен для CI, де хук не виконується
 * ніколи, і для випадку, коли версію правили руками.
 *
 * ЧОМУ ТУТ НЕМАЄ `buildTime`. Раніше скрипт дописував сюди час збірки, і через
 * це кожен локальний `npm run build` робив ВІДСТЕЖУВАНИЙ файл зміненим. Наслідки
 * два, і обидва названі в каноні: артефакт збірки потрапляв у коміт разом із
 * рештою змін (AI-AGENT-PITFALLS-v8 § 5.3), а крок `git diff --exit-code`, яким
 * CI-CD-AND-TOOLS-v8 § 1.5 перевіряє «збірка не бруднить дерево», не міг би
 * існувати взагалі — він падав би на кожному прогоні.
 *
 * Значення `buildTime` при цьому не читав ніхто: `appInitializationService`
 * бере з цього файлу лише `version`.
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

const outputPath = path.join(__dirname, '..', 'static', 'version.json');
// Формат — байт у байт той самий, що пише pre-commit хук: інакше `git diff`
// після збірки бачив би зміну там, де змінився лише відступ.
fs.writeFileSync(outputPath, JSON.stringify({ version: packageJson.version }, null, 2));

console.log(`✅ static/version.json синхронізовано з package.json: ${packageJson.version}`);
