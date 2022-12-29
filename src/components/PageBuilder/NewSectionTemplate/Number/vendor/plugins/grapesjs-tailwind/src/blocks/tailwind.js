import { source as p1 } from './data/pricing-1';
import { source as p1s } from './data/icons/pricing-1';
import { source as p2 } from './data/pricing-2';
import { source as p2s } from './data/icons/pricing-2';

const sources = [
  {
    id: 'pricing-block-1',
    class: 'full-width-image number',
    label: p1s,
    name: 'numbers',
    content: p1,
    category: 'Numbers',
    order: 1,
  },
  {
    id: 'pricing-block-2',
    class: 'full-width-image number',
    label: p2s,
    name: 'numbers',
    content: p2,
    category: 'Numbers',
    order: 1,
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
