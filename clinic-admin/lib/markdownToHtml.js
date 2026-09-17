import { marked } from "marked";

marked.setOptions({
  gfm: true,
  breaks: true,
});

export function markdownToHtml(markdown) {
  if (!markdown?.trim()) {
    return "";
  }

  return marked.parse(markdown);
}
