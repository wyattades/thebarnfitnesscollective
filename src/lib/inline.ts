/**
 * Convert simple inline markdown links [text](href) into anchor tags.
 * Used for FAQ answers so content stays plain-text-friendly to edit.
 * External links open in a new tab.
 */
export function renderInlineLinks(text: string): string {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, href) => {
    const external = /^https?:\/\//.test(href) || href.startsWith("mailto:");
    const attrs = external ? ' target="_blank" rel="noopener"' : "";
    return `<a href="${href}"${attrs}>${label}</a>`;
  });
}
