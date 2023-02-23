import { getSectors } from './blocks/getSectors';
import GrapesJS from 'grapesjs';

const sectorsIds = [
  'buttons',
  'images',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'links',
  'labels',
  'fields',
];
export function ComponentSelection(
  sector: GrapesJS.Sector,
  editor: GrapesJS.Editor
) {
  if (sector.isOpen()) {
    const wrapperCmp = editor.DomComponents.getWrapper();
    console.log('wrapperCmp: ', wrapperCmp);
    console.log('finding component for: ', sector.attributes.id);
    switch (sector.attributes.id) {
      case 'buttons':
        editor.SelectorManager.select(wrapperCmp.find('button')[0]);
        break;
      case 'images':
        editor.SelectorManager.select(wrapperCmp.find('img')[0]);
        break;
      case 'h1':
        editor.SelectorManager.select(wrapperCmp.find('h1')[0]);
        break;
      case 'h2':
        editor.SelectorManager.select(wrapperCmp.find('h2')[0]);
        break;
      case 'h3':
        editor.SelectorManager.select(wrapperCmp.find('h3')[0]);
        break;
      case 'h4':
        editor.SelectorManager.select(wrapperCmp.find('h4')[0]);
        break;
      case 'h5':
        editor.SelectorManager.select(wrapperCmp.find('h5')[0]);
        break;
      case 'h6':
        editor.SelectorManager.select(wrapperCmp.find('h6')[0]);
        break;
      case 'links':
        editor.SelectorManager.select(wrapperCmp.find('a')[0]);
        break;
      case 'labels':
        editor.SelectorManager.select(wrapperCmp.find('label')[0]);
        break;
      case 'fields':
        editor.SelectorManager.select(wrapperCmp.find('input')[0]);
        break;
      default:
        editor.SelectorManager.select('wrapper');
    }
  }
}

export function CloseAllSectors(selectedId: any, _editor: GrapesJS.Editor) {
  sectorsIds.forEach((id) => {
    const sector = _editor.StyleManager.getSector(id);
    if (sector.attributes.id !== selectedId && sector.isOpen()) {
      sector.setOpen(false);
    }
  });
}
