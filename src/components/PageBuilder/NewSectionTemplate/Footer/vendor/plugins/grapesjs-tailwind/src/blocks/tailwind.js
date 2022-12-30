import { source as z1 } from './data/footer-1';
import { source as z1s } from './data/icons/footer-1';
import { source as z2 } from './data/footer-2';
import { source as z2s } from './data/icons/footer-2';
import { source as z3 } from './data/footer-3';
import { source as z3s } from './data/icons/footer-3';
import { source as z4 } from './data/footer-4';
import { source as z4s } from './data/icons/footer-4';

const sources = [
  {
    id: 'footer-block-1',
    class: '',
    label: z1s,
    content: z1,
    category: 'Footer',
  },
  {
    id: 'footer-block-2',
    class: '',
    label: z2s,
    content: z2,
    category: 'Footer',
  },
  {
    id: 'footer-block-3',
    class: '',
    label: z3s,
    content: z3,
    category: 'Footer',
  },
  // {
  //   id: 'footer-block-4',
  //   class: '',
  //   label: z4s,
  //   content: z4,
  //   category: 'Footer',
  //   // order: 1
  // },
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
