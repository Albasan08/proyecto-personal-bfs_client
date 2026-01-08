// IMPORTACIONES DE TERCEROS
import { EditorContent, useEditorState } from "@tiptap/react"

// IMPORTACIONES PROPIAS 
import './EditorDescripcion.scss'

export const EditorDescripcion = ({ editor }) => {

    if(!editor) return null

    const editorState = useEditorState({
        editor, 
        selector: ctx => {
        return { 
            isBold: ctx.editor.isActive('bold') ?? false,
            canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
            isBulletList: ctx.editor.isActive('bulletList') ?? false,
            isOrderedList: ctx.editor.isActive('orderedList') ?? false,
            canUndo: ctx.editor.can().chain().undo().run() ?? false,
            canRedo: ctx.editor.can().chain().redo().run() ?? false,
            }
        },
    });

  return (
    <div className="control-group">
      <div>
        <button 
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editorState.canBold}
          className={editorState.isBold ? 'is-active' : ''}
        >
          Negrita
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editorState.isOrderedList ? 'is-active' : ''}
        >
          Lista de puntos
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editorState.isOrderedList ? 'is-active' : ''}
        >
          Lista ordenada
        </button>
        <button onClick={() => editor.chain().focus().undo().run()} disabled={!editorState.canUndo}>
          Deshacer
        </button>
        <button onClick={() => editor.chain().focus().redo().run()} disabled={!editorState.canRedo}>
          Rehacer
        </button>

        <div className="editor-input"> 
            <EditorContent editor={editor} />
        </div>
      </div>
    </div>
  )
}
