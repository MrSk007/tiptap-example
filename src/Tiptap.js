import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import MenuBar from './MenuBar';
import Bold from '@tiptap/extension-bold'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Italic from '@tiptap/extension-italic'
import Heading from '@tiptap/extension-heading'
import CodeBlock from '@tiptap/extension-code-block'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import History from '@tiptap/extension-history'

const limit = 280

const Tiptap = () => {
  const [editorContent, setEditorContent] = useState('');
  const [editorContentJson, setEditorContentJson] = useState({});

  const editor = useEditor({
    extensions: [
      Document, 
      Paragraph, 
      Text, 
      Bold, 
      Italic,
      Heading.configure({
        levels: [2, 3],
      }),
      CodeBlock,
      BulletList,
      OrderedList,
      ListItem,
      History
    ],
    content: '<p>Hello World!</p>',
    onUpdate({ editor }) {
      setEditorContent(editor.getHTML());
      setEditorContentJson(editor.getJSON());
    },
    autofocus: false
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <div className="outputHTML">{editorContent}</div>
      <div className="outputJSON">{JSON.stringify(editorContentJson)}</div>
    </div>
  );
};

export default Tiptap;