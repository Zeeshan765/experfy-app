import { source as r1 } from './data/hero-1';
import { source as r1s } from './data/icons/hero-1';
import { source as r2 } from './data/hero-2';
import { source as r2s } from './data/icons/hero-2';
import { source as r3 } from './data/hero-3';
import { source as r3s } from './data/icons/hero-3';

const sources = [
  {
    id: 'hero-block-1',
    class: 'full-width-image benefits',
    label: r1s,
    name: 'benefits',
    content: r1,
    category: 'Benefits ',
    order: 1,
  },
  {
    id: 'hero-block-2',
    class: 'full-width-image benefits',
    label: r2s,
    name: 'benefits',
    content: r2,
    category: 'Benefits',
    order: 1,
  },
  {
    id: 'hero-block-3',
    class: 'full-width-image benefits',
    label: r3s,
    name: 'benefits',
    content: r3,
    category: 'Benefits',
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
