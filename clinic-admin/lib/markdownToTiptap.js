import { marked } from "marked";

export function markdownToTiptap(markdown) {
  if (!markdown?.trim()) {
    return {
      type: "doc",
      content: [{ type: "paragraph" }],
    };
  }

  const tokens = marked.lexer(markdown);
  const content = tokensToTiptap(tokens);

  return {
    type: "doc",
    content: content.length ? content : [{ type: "paragraph" }],
  };
}

function tokensToTiptap(tokens) {
  const content = [];

  for (const token of tokens) {
    switch (token.type) {
      case "paragraph":
        content.push({
          type: "paragraph",
          content: inlineTokensToTiptap(token.tokens),
        });
        break;

      case "heading":
        // We only support H2 and H3 for blog content.
        // H1 is reserved for the Blog title field.
        if (token.depth === 2 || token.depth === 3) {
          content.push({
            type: "heading",
            attrs: {
              level: token.depth,
            },
            content: inlineTokensToTiptap(token.tokens),
          });
        }
        break;

      case "blockquote":
        content.push({
          type: "blockquote",
          content: tokensToTiptap(token.tokens),
        });
        break;

      case "list":
        content.push({
          type: token.ordered ? "orderedList" : "bulletList",
          ...(token.ordered
            ? {
                attrs: {
                  start: token.start || 1,
                },
              }
            : {}),
          content: token.items.map((item) => ({
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: inlineTokensToTiptap(item.tokens || []),
              },
            ],
          })),
        });
        break;

      case "hr":
        content.push({
          type: "horizontalRule",
        });
        break;

      case "space":
        break;

      default:
        break;
    }
  }

  return content;
}

function inlineTokensToTiptap(tokens = []) {
  const content = [];

  for (const token of tokens) {
    switch (token.type) {
      case "text":
        if (token.text) {
          content.push({
            type: "text",
            text: token.text,
          });
        }
        break;

      case "strong":
        content.push(
          ...applyMarkToText(inlineTokensToTiptap(token.tokens), "bold"),
        );
        break;

      case "em":
        content.push(
          ...applyMarkToText(inlineTokensToTiptap(token.tokens), "italic"),
        );
        break;

      case "link":
        content.push(
          ...applyMarkToText(inlineTokensToTiptap(token.tokens), "link", {
            href: token.href,
            target: "_blank",
            rel: "noopener noreferrer",
          }),
        );
        break;

      case "codespan":
        content.push({
          type: "text",
          text: token.text,
          marks: [{ type: "code" }],
        });
        break;

      case "br":
        content.push({
          type: "hardBreak",
        });
        break;

      case "del":
        content.push(
          ...applyMarkToText(inlineTokensToTiptap(token.tokens), "strike"),
        );
        break;

      case "escape":
        content.push({
          type: "text",
          text: token.text,
        });
        break;

      default:
        break;
    }
  }

  return content;
}

function applyMarkToText(nodes, markType, attrs) {
  return nodes.map((node) => {
    if (node.type !== "text") {
      return node;
    }

    return {
      ...node,
      marks: [
        ...(node.marks || []),
        {
          type: markType,
          ...(attrs ? { attrs } : {}),
        },
      ],
    };
  });
}
