// import grapesjs from 'grapesjs';
// import React from 'react';
// import './builder.css';
// // import plugin from 'grapesjs-preset-webpage';
// import plugin1 from 'grapesjs-tailwind';
// import plugin2 from 'grapesjs-preset-newsletter';
// // import plugin from 'grapesjs-tui-image-editor';
// import Basics from 'grapesjs-blocks-basic';
// // import plugin from 'grapesjs-plugin-toolbox';
// // import plugin from 'grapesjs-ga';
// import axios from 'axios';
// //import 'grapesjs-plugin-forms';
// // import thePlugin from 'grapesjs-plugin-export';
// // import pluginTooltip from 'grapesjs-tooltip';
// // import plugin from 'grapesjs-blocks-basic';
// import grapesJSMJML from 'grapesjs-mjml';
// // import { image, video } from './customPlugins';

// function PageBuilder() {
//   const [editor, setEditor] = React.useState(null);
// // console.log ("xxx", plugin1.plugins)
//   function component(editor) {
//     editor.Components.addType('cmp-Y', {
//       // You don't need `isComponent` anymore as you declare types already on elements
//       model: {
//         defaults: {
//           name: 'Component Y', // Simple custom name
//           draggable: '.el-X', // Add `draggable` logic
//         },
//       },
//     });
//   }
//   const myNewComponentTypes = (editor) => {
//     editor.BlockManager.add('cmp-Y', {
//       label: 'Test Component',
//       content: '<div data-gjs-type="test-component">Test Component</div>',
//     });
//   };




//   const projectID = 1;
//   const projectEndpoint = `http://localhost:3001/api/v1/admin/portals/1/pages`;

//   React.useEffect(() => {
//     const editor = grapesjs.init({
//       container: '#editor',
//       plugins: [ plugin2,plugin1],

//       // storageManager: {
//       //   type: 'local', // Storage type. Available: local | remote
//       //   contentTypeJson: true,
//       //   headers: {
//       //     'Content-Type': 'application/json',
//       //   },
//       //   urlLoad: projectEndpoint,
//       //   urlStore: projectEndpoint,
//       //   storeStyles: true,
//       //   autosave: true, // Store data automatically
//       //   // autoload: true, // Autoload stored data on init
//       //   stepsBeforeSave: 1, // If autosave is enabled, indicates how many changes are necessary before the store method is triggered
//       // },
//     });
//     setEditor(editor);

//     editor.on('storage:start', () => {
//       console.log(editor);
//     });





//   }, []);
//   function image (editor){
//     editor.BlockManager.add('image', {
//       // category: 'extra',
//       label: 'VIDEO',

//       media: `<img
//         className="zeeshan"
//           alt=""
//           height="34px"
//           width="34px"
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQeTDGAbZbV41ZNXZ2kAWVvSWRMx164YQZQ&usqp=CAU"
//         />`,
//       content: [{ type: 'video' }],
//     });
//   }
//   function video(editor) {
//     editor.BlockManager.add('video', {
//       label: 'IMAGE',
//       // category: 'extra',
//       media: `
//       <svg id="noun_Image_777906" xmlns="http://www.w3.org/2000/svg" width="27.787" height="23.455" viewBox="0 0 27.787 23.455">
//   <g id="Layer_2" data-name="Layer 2">
//     <g id="Layer_2-2" data-name="Layer 2">
//       <path id="Path_33104" data-name="Path 33104" d="M25.549,23.455H2.239A2.274,2.274,0,0,1,0,21.147V2.308A2.274,2.274,0,0,1,2.239,0h23.31a2.274,2.274,0,0,1,2.239,2.308V21.147a2.274,2.274,0,0,1-2.238,2.308ZM2.239,1.8a.5.5,0,0,0-.493.508V21.147a.5.5,0,0,0,.493.508h23.31a.5.5,0,0,0,.489-.508V2.308a.5.5,0,0,0-.489-.508Z" fill="#7c8189"/>
//       <path id="Path_33105" data-name="Path 33105" d="M11.021,32.606H26.393a.659.659,0,0,0,.6-.484,1.192,1.192,0,0,0-.053-.954l-2.12-3.956a.647.647,0,0,0-.476-.371.565.565,0,0,0-.516.253L21.65,29.944l-5.058-9.435a.617.617,0,0,0-.549-.368.647.647,0,0,0-.533.411l-5.058,10.66a1.2,1.2,0,0,0-.022.933A.652.652,0,0,0,11.021,32.606Z" transform="translate(-4.816 -12.459)" fill="#7c8189"/>
//       <circle id="Ellipse_626" data-name="Ellipse 626" cx="3.17" cy="3.17" r="3.17" transform="translate(15.81 3.906)" fill="#7c8189"/>
//     </g>
//   </g>
// </svg>`,
//       content: [{ type: 'image' }],
//     });
//   }
//   return (
//     <div className='main'>
//       <div id="editor"></div>
//     </div>
//   );
// }

// export default PageBuilder;




















import grapesjs from 'grapesjs';
import React from 'react';
// import './builder.css';
import './custom_grapes.css';
import plugin2 from 'grapesjs-preset-newsletter';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FormSwitch from '../../../blocks/FormSwitch';
import plugin1 from './vendor/plugins/grapesjs-tailwind/src/index';
import Basics from 'grapesjs-blocks-basic';
function PageBuilder() {
  const [editor, setEditor] = React.useState(null);
  // const myFirstBlock = (editor) => {
  //   var blockManager = editor.BlockManager
  //   // 'my-first-block' is the ID of the block
  //   blockManager.add('my-first-block', {
  //    label: 'Button',
  //    content: {
  //      type: "button",
  //      tagName: 'button',
  //      draggable: false,
  //      attributes: { class: 'container'},
  //      style: { 'background-color': '#ffffff' },
  //      content: "Change Title",
  //    }
  //   });
  //  }
  React.useEffect(() => {
    const editor = grapesjs.init({
      container: '#editor',
      plugins: [plugin2, plugin1],
      // panels: { defaults: [] },
    });
    const panelManager = editor.Panels;
    var newPanel = panelManager.addPanel({
      id: 'panelOne',
      className: 'btn-toggles-borders-panelOne',
      style: { color: 'red' },
      visible: true,
      buttons: [
        {
          id: 'visibility',
          active: true, // active by default
          className: 'btn-toggle-borders-panelOne panel-btn',
          label: `<div class="preview"> <div><svg class= "preview-icon"  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VisibilityIcon"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>  </div> <div class = "preview-text">Preview</div>`,
          command: 'preview', // Built-in command,
        },
        {
          id: 'visibility2',
          active: true, // active by default
          className: 'pg-builder-save-btn save-panel-btn',
          label: 'save',
          // command: 'preview', // Built-in command,
        },
        {
          id: 'visibility3',
          active: true, // active by default
          className: 'pg-builder-save-btn',
          label: `<div>  <div>Publish</div> </div>`,
          // command: 'preview', // Built-in command,
          content: 'image',
        },
      ],
    });
    var newPanel2 = panelManager.addPanel({
      id: 'panelTwo',
      className: 'btn-toggles-borders-panelTwo',
      style: { color: 'red' },
      visible: true,
      buttons: [
        {
          id: 'history',
          active: true, // active by default
          className: 'btn-toggle-borders-panelTwo',
          label: `<div class="history"> <div><svg fill="#3a4152" class= "history-icon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TimerIcon"><path d="M9 1h6v2H9zm10.03 6.39 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM13 14h-2V8h2v6z"></path></svg></div>`,
          command: 'ammar', // Built-in command,
        },
        {
          id: 'setting',
          active: true, // active by default
          className: 'pg-setting-navbar',
          label:
            ' <div class ="setting"><svg class ="setting-icon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SettingsIcon"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path></svg></div>',
          // command: 'preview', // Built-in command,
          content: 'image',
        },
      ],
    });
    setEditor(editor);
  }, []);
  return (
    <div className="main">
      <div id="editor"></div>
    </div>
  );
}
export default PageBuilder;





