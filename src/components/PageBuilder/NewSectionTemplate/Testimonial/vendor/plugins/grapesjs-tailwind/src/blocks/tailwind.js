import { source as m1 } from './data/testimonial-1';
import { source as m1s } from './data/icons/testimonial-1';
import { source as m2 } from './data/testimonial-2';
import { source as m2s } from './data/icons/testimonial-2';
import { source as m3 } from './data/testimonial-3';
import { source as m3s } from './data/icons/testimonial-3';

const sources = [
  {
    id: 'testimonial-block-1',
    class: 'full-width-image testimonials',
    label: m1s,
    name: 'testimonials',
    content: m1,
    category: 'Testimonials',
    order: 1,
  },
  {
    id: 'testimonial-block-2',
    class: '',
    label: m2s,
    content: m2,
    category: 'Testimonials',
    order: 1,
  },
  {
    id: 'testimonial-block-3',
    class: '',
    label: m3s,
    content: m3,
    category: 'Testimonials',
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
