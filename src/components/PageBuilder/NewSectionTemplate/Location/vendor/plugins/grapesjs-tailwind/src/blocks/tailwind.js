
import { source as q1 } from './data/step-1';
import { source as q1s } from './data/icons/step-1';
import { source as q2 } from './data/step-2';
import { source as q2s } from './data/icons/step-2';
import { source as q3 } from './data/step-3';
import { source as q3s } from './data/icons/step-3';


const sources = [
 
  {
    id: 'step-block-1',
    class: 'full-width-image location',
    label: q1s,
    name: 'location',
    name: q1s,
    content: q1,
    category: 'Location',
    order: 1
  },
  {
    id: 'step-block-2',
    class: 'full-width-image location',
    label: q2s,
    name: 'location',
    content: q2,
    category: 'Location',
    order: 1
  },
  {
    id: 'step-block-3',
    class: 'full-width-image location',
    label: q3s,
    name: 'location',
    content: q3,
    category: 'Location',
    order: 1
  },
 
];

export default (editor, options = {}) => {
  const bm = editor.Blocks;

  sources.forEach((s) => {
    // console.log('zeeshan', s)
    bm.add(s.id, {
      label: s.label,
      attributes: { class: s.class },
      content: s.content,
      category: { label: s.category, open: s.category === 'Blog' },
      class:  s?.class
    })
  })
}
