"use client";

import { useEffect, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// function ToolbarButton({
//   onClick,
//   active = false,
//   disabled = false,
//   children,
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       disabled={disabled}
//       className={`rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
//         active
//           ? "bg-primary/10 text-primary"
//           : "text-muted hover:bg-background hover:text-foreground"
//       } disabled:cursor-not-allowed disabled:opacity-40`}
//     >
//       {children}
//     </button>
//   );
// }

function ToolbarButton({
  onClick,
  active = false,
  disabled = false,
  children,
}) {
  return (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()} // 👈 stops the editor from losing focus/selection
      onClick={onClick}
      disabled={disabled}
      className={`rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "bg-primary/10 text-primary"
          : "text-muted hover:bg-background hover:text-foreground"
      } disabled:cursor-not-allowed disabled:opacity-40`}
    >
      {children}
    </button>
  );
}

export default function RichTextEditor({ value, onChange }) {
  // Always holds the latest onChange, so the editor's onUpdate
  // never fires a stale closure.
  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  const editor = useEditor(
    {
      extensions: [
        StarterKit.configure({
          link: {
            openOnClick: false,
          },
        }),
      ],

      content: value || {
        type: "doc",
        content: [{ type: "paragraph" }],
      },

      immediatelyRender: false,

      onUpdate: ({ editor }) => {
        onChangeRef.current?.(editor.getJSON());
      },

      editorProps: {
        attributes: {
          class:
            "min-h-[400px] px-5 py-5 outline-none prose prose-sm max-w-none text-foreground",
        },
      },
    },
    [],
  ); // create once

  // Sync external value changes (e.g. async-loaded content) into the editor.
  useEffect(() => {
    if (!editor || !value) return;

    const current = JSON.stringify(editor.getJSON());
    const incoming = JSON.stringify(value);

    if (current !== incoming) {
      // false = don't emit another onUpdate for this programmatic change
      editor.commands.setContent(value, false);
    }
  }, [editor, value]);

  if (!editor) {
    return (
      <div className="min-h-[400px] animate-pulse rounded-lg bg-background" />
    );
  }

  const addLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Enter URL", previousUrl || "");
    if (url === null) return;

    if (url.trim() === "") {
      editor.chain().focus().unsetLink().run();
      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url.trim() })
      .run();
  };

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface">
      <div className="flex flex-wrap items-center gap-1 border-b border-border bg-background p-2">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
        >
          B
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
        >
          <span className="italic">I</span>
        </ToolbarButton>
        <div className="mx-1 h-6 w-px bg-border" />
        <ToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          active={editor.isActive("heading", { level: 2 })}
        >
          H2
        </ToolbarButton>
        <ToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          active={editor.isActive("heading", { level: 3 })}
        >
          H3
        </ToolbarButton>
        <div className="mx-1 h-6 w-px bg-border" />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
        >
          • List
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive("orderedList")}
        >
          1. List
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive("blockquote")}
        >
          Quote
        </ToolbarButton>
        <ToolbarButton onClick={addLink} active={editor.isActive("link")}>
          Link
        </ToolbarButton>
        <div className="mx-1 h-6 w-px bg-border" />
        <ToolbarButton
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          Undo
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          Redo
        </ToolbarButton>
        <ToolbarButton
          onClick={() =>
            editor.chain().focus().clearNodes().unsetAllMarks().run()
          }
        >
          Clear
        </ToolbarButton>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}
