import { source as b2 } from './data/blog-2';
import { source as b2s } from './data/icons/blog-1';

const sources = [
  {
    id: 'blog-block-2',
    class: 'full-width-image talent_cloud',
    label: b2s,
    name: 'talentcloud',
    content: b2,
    category: 'TalentCloud',
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
