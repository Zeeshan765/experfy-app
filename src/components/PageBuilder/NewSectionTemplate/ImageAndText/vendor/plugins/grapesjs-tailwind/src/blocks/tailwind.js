import { source as b1 } from './data/blog-1';
import { source as b1s } from './data/icons/blog-2';
import { source as b2 } from './data/blog-2';
import { source as b2s } from './data/icons/blog-1';
import { source as b3 } from './data/blog-3';
import { source as b3s } from './data/icons/blog-3';
import { source as b4 } from './data/blog-4';
import { source as b4s } from './data/icons/blog-4';

const sources = [
  {
    id: 'blog-block-1',
    class: 'full-width-image img_text',
    label: b1s,
    name: 'image-text',
    content: b1,
    category: 'Image and Text',
    order: 1,
  },
  // {
  //   id: 'blog-block-2',
  //   class: '',
  //   label: b2s,
  //   content: b2,
  //   category: 'Practice Area',
  //   // order: 1
  // },
  {
    id: 'blog-block-3',
    class: 'full-width-image img_text',
    label: b3s,
    name: 'image-text',
    content: b3,
    category: 'Image and Text',
    order: 1,
  },
  {
    id: 'blog-block-4',
    class: 'full-width-image img_text',
    label: b4s,
    name: 'image-text',
    content: b4,
    category: 'Image and Text',
    order: 1,
  },
];

export default (editor, options = {}) => {
  const bm = editor.Blocks;

  sources.forEach((s) => {
    // console.log('zeeshan', s)
    bm.add(s.id, {
      label: s.label,
      attributes: { class: s.class },
      content: s.content,
      category: { label: s.category, open: s.category === 'Blog' },
      class: s?.class,
    });
  });
};
