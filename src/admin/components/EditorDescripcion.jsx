// IMPORTACIONES DE TERCEROS
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useEffect } from "react"

// IMPORTACIONES PROPIAS


export const EditorDescripcion = ({ value, onChange }) => {

    const editor = useEditor({
        extensions: [StarterKit],
        content: value,
        onUpdate: ({ editor }) => {
            onchange(editor.getHTML())
        }
    });
    // Limpia al desmontar el componente
    useEffect(() => {
        return () => editor?.destroy();
    }, [editor]);

    if (!editor) return null;

  return (
    <>
    <div className="editor-container">
        {/*Toolbar*/}
        <div className="toolbar">
            <button type="button" onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "active" : "" }>Negrita</button>

            <button type="button" onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("italic") ? "active" : "" }>Cursiva</button>

            <button type="button" onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bulletList") ? "active" : "" }>Lista</button>
        </div>
        {/*Edición*/}
        <EditorContent editor={editor} className="editor" />
    </div>
    </>
  )
}
