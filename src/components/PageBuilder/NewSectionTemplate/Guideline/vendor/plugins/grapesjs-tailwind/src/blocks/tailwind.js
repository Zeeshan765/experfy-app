import { source as s1 } from './data/statistic-1';
import { source as s1s } from './data/icons/statistic-1';
import { source as s2 } from './data/statistic-2';
import { source as s2s } from './data/icons/statistic-2';
import { source as s3 } from './data/statistic-3';
import { source as s3s } from './data/icons/statistic-3';

const sources = [
  {
    id: 'statistic-block-1',
    class: 'full-width-image guideline',
    label: s1s,
    name: 'guideline',
    content: s1,
    category: 'Guideline',
    order: 1,
  },
  {
    id: 'statistic-block-2',
    class: 'full-width-image guideline',
    label: s2s,
    name: 'guideline',
    content: s2,
    category: 'Guideline',
    order: 1,
  },
  {
    id: 'statistic-block-3',
    class: 'full-width-image guideline',
    label: s3s,
    name: 'guideline',
    content: s3,
    category: 'Guideline',
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
