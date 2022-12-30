
import { source as f1 } from './data/feature-1';
import { source as f1s } from './data/icons/feature-1';
import { source as f2 } from './data/feature-2';
import { source as f2s } from './data/icons/feature-2';
import { source as f3 } from './data/feature-3';
import { source as f3s } from './data/icons/feature-3';

const sources = [

  {
    id: 'feature-block-1',
    class: 'full-width-image featured',
    label: f1s,
    name: 'form',
    content: f1,
    category: 'Form',
    order: 1
  },
  {
    id: 'feature-block-2',
    class: 'full-width-image featured',
    label: f2s,
    name: 'form',
    content: f2,
    category: 'Form',
    order: 1
  },
  {
    id: 'feature-block-3',
    class: 'full-width-image featured',
    label: f3s,
    name: 'form',
    content: f3,
    category: 'Form',
    order: 1
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
      class:  s?.class
    })
  })
}
