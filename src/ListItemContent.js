// import { Node, mergeAttributes } from '@tiptap/core';
// import ListItem from '@tiptap/extension-list-item'

// export default Node.create({
//   name: 'listItemContent',
//   group: 'block',
//   content: 'inline*',

//   parseHTML() {
//     return [
//       {
//         tag: 'span',
//         getAttrs: (element) => {
//           if (element.parentNode.tagName === 'LI') {
//             return null;
//           }
//           return false;
//         },
//       },
//     ];
//   },

//   renderHTML({ HTMLAttributes }) {
//     return ['span', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
//   },
// });

// export const CustomListItem = ListItem.extend({
//     // content: 'text*'
//     content: 'listItemContent block*',
// });