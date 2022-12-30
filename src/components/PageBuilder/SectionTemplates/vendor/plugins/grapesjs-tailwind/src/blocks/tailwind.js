import { source as g1 } from './data/gallery-1';
import { source as g1s } from './data/icons/gallery-1';

const sources = [
  {
    id: 'gallery-block-1',
    class: 'full-width-image paragraph',
    label: g1s,
    name: 'paragraph',
    content: g1,
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
      class: s?.class,
    });
  });
};
