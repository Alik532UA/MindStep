/**
 * Санітизація HTML-рядка для безпечного виведення розмітки (SECURITY-v10 § 5.2).
 */
export function sanitizeHtml(dirty: string): string {
	if (!dirty) return '';
	return dirty
		.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
		.replace(/\bon\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '');
}
