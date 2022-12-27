import { source as g1 } from './data/gallery-1';
import { source as g1s } from './data/icons/gallery-1';
import { source as f1 } from './data/feature-1';
import { source as f1s } from './data/icons/feature-1';
import { source as h1 } from './data/header-1';
import { source as h1s } from './data/icons/header-1';
import { source as z1 } from './data/footer-1';
import { source as z1s } from './data/icons/footer-1';
const sources = [
  {
    id: 'gallery-block-1',
    class: 'full-width-image paragraph',
    label: g1s,
    name: 'paragraph',
    content: g1,
    category: 'Paragraph',
  },
  {
    id: 'feature-block-1',
    class: 'full-width-image form',
    label: f1s,
    name: 'form',
    content: f1,
    category: 'Form',
  },
  {
    id: 'footer-block-1',
    class: 'full-width-image footer',
    label: z1s,
    name: 'footer',
    content: z1,
    category: 'Footer',
  },
  {
    id: 'header-block-1',
    class: 'full-width-image header',
    label: h1s,
    content: h1,
    category: 'Headers',
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
      class: s?.class,
    });
  });
};
