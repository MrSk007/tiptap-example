import React from 'react';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => editor.chain().focus().setColor('#94FADB').run()}
        className={
          editor.isActive('textStyle', { color: '#94FADB' }) ? 'is-active' : ''
        }
      >
        teal
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#B9F18D').run()}
        className={
          editor.isActive('textStyle', { color: '#B9F18D' }) ? 'is-active' : ''
        }
      >
        green
      </button>
      <button onClick={() => editor.chain().focus().undo().run()}>undo</button>
      <button onClick={() => editor.chain().focus().redo().run()}>redo</button>
      <button
        onClick={() =>
          editor.commands.setContent(document.getElementById("codeView").textContent)
        }
      >
        save
      </button>
    </>
  );
};

export default MenuBar;
