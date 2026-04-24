const fs = require('fs');
const path = require('path');
function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory() && !file.includes('node_modules') && !file.includes('.svelte-kit') && !file.includes('build')) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.svelte')) {
            results.push(file);
        }
    });
    return results;
}
const files = walk('src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // Replace imports from "*logService" or "*logService.js" with "*logService.svelte"
    // using regex
    let updated = content.replace(/from\s+['"]([^'"]*)logService(?:\.js)?['"]/g, 'from "$1logService.svelte"');
    if (content !== updated) {
        fs.writeFileSync(file, updated);
        console.log('Updated ' + file);
    }
});
