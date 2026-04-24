const fs = require('fs');
let content = fs.readFileSync('src/routes/+layout.svelte', 'utf8');

// 1. Add LogCopyButton import
content = content.replace(
    'import ToastContainer from "$lib/components/ui/ToastContainer.svelte";',
    'import ToastContainer from "$lib/components/ui/ToastContainer.svelte";\n\timport LogCopyButton from "$lib/components/widgets/LogCopyButton.svelte";'
);

// 2. Add LogCopyButton tag
content = content.replace(
    '<NetworkMonitorWidget />\n\t{/if}',
    '<NetworkMonitorWidget />\n\t\t<LogCopyButton />\n\t{/if}'
);

// 3. Update logService import to .svelte
content = content.replace(
    'import { logService } from "$lib/services/logService.js";',
    'import { logService } from "$lib/services/logService.svelte";'
);

fs.writeFileSync('src/routes/+layout.svelte', content);
