import { source as g1 } from "./data/gallery-1";
import { source as g1s } from './data/icons/gallery-1';
import { source as g2 } from './data/gallery-2';
import { source as g2s } from './data/icons/gallery-2';
import { source as g3 } from './data/gallery-3';
import { source as g3s } from './data/icons/gallery-3';

const sources = [
  {
    id: 'gallery-block-1',
    class: 'full-width-image paragraph',
    label: g1s,
    name: 'paragraph',
    content: g1,
    category: 'Paragraph',
    // order: 1
  },
  {
    id: 'gallery-block-2',
    class: 'full-width-image paragraph',
    label: g2s,
    name: 'paragraph',
    content: g2,
    category: 'Paragraph',
  },
  {
    id: 'gallery-block-3',
    class: 'full-width-image paragraph',
    name: 'paragraph',
    label: g3s,
    content: g3,
    category: 'Paragraph',
  },
];

export default (editor, options = {}) => {
  const bm = editor.Blocks;

  sources.forEach((s) => {
    bm.add(s.id, {
      label: s.label,
      attributes: { class: s.class },
      content: s.content,
      category: { label: s.category, open: s.category === 'Blog' },
    });
  });
};
