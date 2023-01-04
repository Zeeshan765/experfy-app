import { source as h1 } from './data/header-1';
import { source as h1s } from './data/icons/header-1';
import { source as h2 } from './data/header-2';
import { source as h2s } from './data/icons/header-2';
import { source as h3 } from './data/header-3';
import { source as h3s } from './data/icons/header-3';
import { source as h4 } from './data/header-4';
import { source as h4s } from './data/icons/header-4';


const sources = [
  
  {
    id: 'header-block-1',
    class: 'full-width-image header',
    label: h1s,
    content: h1,
    category: 'Header',
  
  },
  {
    id: 'header-block-2',
    class: '',
    label: h2s,
    content: h2,
    category: 'Header',
    
  },
  {
    id: 'header-block-3',
    class: '',
    label: h3s,
    content: h3,
    category: 'Header',
    // order: 1
  },
  // {
  //   id: 'header-block-4',
  //   class: '',
  //   label: h4s,
  //   content: h4,
  //   category: 'Header',
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
      class:  s?.class
    })
  })
}
