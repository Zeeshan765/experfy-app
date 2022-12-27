import { source as g1 } from './data/gallery-1';
import { source as g1s } from './data/icons/gallery-1';
import { source as f1 } from './data/feature-1';
import { source as f1s } from './data/icons/feature-1';
import { source as h1 } from './data/header-1';
import { source as h1s } from './data/icons/header-1';
import { source as z1 } from './data/footer-1';
import { source as z1s } from './data/icons/footer-1';
import { source as s1 } from './data/statistic-1';
import { source as s1s } from './data/icons/statistic-1';
import { source as p1 } from './data/pricing-1';
import { source as p1s } from './data/icons/pricing-1';
import { source as q1 } from './data/step-1';
import { source as q1s } from './data/icons/step-1';
import { source as t1 } from './data/team-1';
import { source as t1s } from './data/icons/team-1';
import { source as m1 } from './data/testimonial-1';
import { source as m1s } from './data/icons/testimonial-1';
import { source as r1 } from './data/hero-1';
import { source as r1s } from './data/icons/hero-1';
import { source as b1 } from './data/blog-1';
import { source as b1s } from './data/icons/blog-2';
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
  {
    id: 'hero-block-1',
    class: 'full-width-image benefits',
    label: r1s,
    name: 'benefits',
    content: r1,
    category: 'Benefits ',
  },
  {
    id: 'pricing-block-1',
    class: 'full-width-image number',
    label: p1s,
    name: 'numbers',
    content: p1,
    category: 'Numbers',
  },
  {
    id: 'statistic-block-1',
    class: 'full-width-image guideline',
    label: s1s,
    name: 'guideline',
    content: s1,
    category: 'Guideline',
  },
  {
    id: 'step-block-1',
    class: 'full-width-image location',
    label: q1s,
    name: 'location',
    name: q1s,
    content: q1,
    category: 'Location',
  },
  {
    id: 'team-block-1',
    class: 'full-width-image video',
    label: t1s,
    name: 'video',
    content: t1,
    category: 'Video',
  },
  {
    id: 'testimonial-block-1',
    class: 'full-width-image testimonials',
    label: m1s,
    name: 'testimonials',
    content: m1,
    category: 'Testimonials',
  },
  {
    id: 'blog-block-1',
    class: 'full-width-image img_text',
    label: b1s,
    name: 'image-text',
    content: b1,
    category: 'Image and Text',
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
