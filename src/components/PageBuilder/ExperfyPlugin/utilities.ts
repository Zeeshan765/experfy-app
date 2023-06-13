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
    console.log("hello",sector.attributes.id)

    switch (sector.attributes.id) {
      case 'button':
        editor.select(wrapperCmp.find('button')[0]);
        break;
      case 'image':
        editor.select(wrapperCmp.find('img')[0]);
        break;
      case 'body-text':
        editor.select(wrapperCmp.find('p')[0]);
        break;
      case 'h1':
        editor.select(wrapperCmp.find('h1')[0]);
        break;
      case 'h2':
        editor.select(wrapperCmp.find('h2')[0]);
        break;
      case 'h3':
        editor.select(wrapperCmp.find('h3')[0]);
        break;
      case 'h4':
        editor.select(wrapperCmp.find('h4')[0]);
        break;
      case 'h5':
        editor.select(wrapperCmp.find('h5')[0]);
        break;
      case 'h6':
        editor.select(wrapperCmp.find('h6')[0]);
        break;
      case 'a':
        editor.select(wrapperCmp.find('a')[0]);
        break;
      case 'label':
        editor.select(wrapperCmp.find('span')[0]);
        break;
      case 'input':
        editor.select(wrapperCmp.find('input')[0]);
        break;
      default:
        editor.StyleManager.select();
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

let dataArray = [
  // {
  //   name: 'AI & Machine Learning',
  //   type: 'AI-ML',
  // },
  // {
  //   name: 'Big Data',
  //   type: 'Big-Data',
  // },
  // {
  //   name: 'Cloud Computing',
  //   type: 'Cloud-Computing',
  // },
  // {
  //   name: 'DevOps',
  //   type: 'DevOps',
  // },
  // {
  //   name: 'Business Intelligence',
  //   type: 'Business-Intelligence',
  // },
  // {
  //   name: 'Software/Web Development',
  //   type: 'Software-Web-Development',
  // },
  // {
  //   name: 'QA',
  //   type: 'QA',
  // },
  // {
  //   name: 'UX/UI Design',
  //   type: 'UX-UI-Design',
  // },
  // {
  //   name: 'Mobile',
  //   type: 'Mobile',
  // },
  // {
  //   name: 'Marketing',
  //   type: 'Marketing',
  // },
  // {
  //   name: 'Internet of Things',
  //   type: 'Internet-of-Things',
  // },
  // {
  //   name: 'BlockChain',
  //   type: 'BlockChain',
  // },
  // {
  //   name: 'Robotics Process Automation',
  //   type: 'Robotics-Process-Automation',
  // },
  // {
  //   name: 'Cyber Security',
  //   type: 'Cyber-Security',
  // },
];

export const practiceAreaData = () => {
  let htmlData = '';

  dataArray.forEach((item, i) => {
    const { name, type } = item;

    htmlData += `
        <div data-gjs-type=${type} class='box-icon-text-holder'>
          <div class='box-icon-div'>
           <img src='' />
          </div>
          <div class='box-text-div'>
            <p>${name}</p>
          </div>
        </div>`;
  });
  return htmlData;
};
