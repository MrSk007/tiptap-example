import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import MenuBar from './MenuBar';
import Bold from '@tiptap/extension-bold';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Italic from '@tiptap/extension-italic';
import Heading from '@tiptap/extension-heading';
import CodeBlock from '@tiptap/extension-code-block';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import History from '@tiptap/extension-history';
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import { mergeAttributes } from "@tiptap/core";
const limit = 280;

const CustomTextStyle = TextStyle.extend({
  name: "textStyle",

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      ...this.parent?.(),
      style: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (dom) => {
          const element = dom;

          return {
            style: element.getAttribute("style"),
          };
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["span", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
});


const Tiptap = () => {
  const [editorContent, setEditorContent] = useState('');
  const [editorContentJson, setEditorContentJson] = useState({});

  const editor = useEditor({
    extensions: [
      Document,
      CustomTextStyle,
      Color,
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
      History,
    ],
    content: '<p>Hello <span style="color: red">not Work</span></p>',
    onUpdate({ editor }) {
      localStorage.setItem('editor', editor.getHTML());
      setEditorContent(localStorage.getItem('editor'));
      setEditorContentJson(editor.getJSON());
    },
    autofocus: true,
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <textarea
      style={{"width": "100%","margin":"10px 0"}}
        name=""
        id="codeView"
        value={editorContent}
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default Tiptap;
