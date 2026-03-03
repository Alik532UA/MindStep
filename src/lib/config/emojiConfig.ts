export type EmojiStyle = 'color' | 'mono';

/**
 * @deprecated Проект перейшов на lucide-svelte. 
 * Ця конфігурація залишена для сумісності з типами, але шляхи до стаціонарних емодзі видалені.
 */
export const EMOJI_CONFIG = {
    // Стиль іконок (впливає на мапінг кольорів у NotoEmoji.svelte)
    style: 'color' as EmojiStyle
};
