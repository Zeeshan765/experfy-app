// @ts-ignore
import GrapesJS from 'grapesjs';
import React, { useEffect, useRef, useState } from 'react';
// import './grapes.min.css';
// import './CustomGrapes.css';
import '../PageBuilder/index.scss';
import plugin2 from 'grapesjs-project-manager';
import VisibilityIcon from '@mui/icons-material/Visibility';
import plugin1 from './vendor/plugins/grapesjs-tailwind/src/index';
import Basics from 'grapesjs-blocks-basic';

const NewPageBuilder = () => {
  const [editorState, setEditorState] = React.useState<GrapesJS.Editor>();
  const [elementCreate, setElementCreate] = useState(false);
  const [headingText, setHeadingText] = React.useState<string>('abc');
  // console.log('test of editor', editorState);
  const testRef= useRef();
  const myFunction=()=>{
console.log("*****************myFunction***************");

  }

  React.useEffect(() => {
    const myFirstBlock = (editor) => {
      var blockManager = editor.BlockManager;
      // 'my-first-block' is the ID of the block
      blockManager.add('my-first-block', {
        label: 'Heading',
        content: {
          type: 'text',
          tagName: 'text',
          draggable: true,
          attributes: { class: 'container' },
          style: { 'background-color': '#ffffff' },
          content: `<input type="text" placeholder="Add Your Text here New Input"
          
          
          id="self-test" onfocus="myFunction" />`,
          // content: '<div>Hello test</div>',
        },
      });
    };

    const editor = GrapesJS.init({
      container: '#editor',
      plugins: [plugin1, Basics, myFirstBlock],

      // blockManager: {
      //   appendTo: '.myblocks',
      //   blocks: [
      //     {
      //       id: 'button',
      //       label: 'Button',

      //       // Use `image` component
      //       content: {
      //              type: "button",
      //              tagName: 'button',
      //              draggable: false,
      //              attributes: { class: 'container'},
      //              style: { 'background-color': '#ffffff' },
      //              content: "Change Title",
      //            },
      //       // The component `image` is activatable (shows the Asset Manager).
      //       // We want to activate it once dropped in the canvas.
      //       activate: true,
      //       // select: true, // Default with `activate: true`
      //     }
      //   ],
      // }

      // styleManager: {
      //   appendTo: '.styles-container',

      //   sectors: [
      //     {
      //       // name: 'Global Colors Collection',
      //       highlightChanged: true,
      //       stylePrefix: 'ts-', // Prefix for all class names
      //       open: true,
      //       buildProps: ['background-color', 'color', 'color'],
      //       properties: [
      //         {
      //           type: 'color',
      //           name: 'Primary',
      //           property: 'background-color',
      //           default: '#e6e6e6',
      //           attributes: {
      //             'data-type': 'background-color',
      //           },
      //         },
      //       ],
      //     },
      //   ],
      // },
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
          active: true,
          className: 'btn-toggle-borders-panelOne panel-btn',
          label: `<div class="preview"> <div><svg class= "preview-icon"  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VisibilityIcon"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>  </div> <div class = "preview-text">Preview</div>`,
          command: 'preview',
        },
        {
          id: 'visibility2',
          active: true,
          className: 'pg-builder-save-btn save-panel-btn',
          label: 'save',
        },
        {
          id: 'visibility3',
          active: true,
          className: 'pg-builder-save-btn publish-btn',
          label: `<div>  <div>Publish</div> </div>`,
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
          active: true,
          className: 'btn-toggle-borders-panelTwo',
          label: `<div class="history"> <div><svg fill="#3a4152" class= "history-icon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TimerIcon"><path d="M9 1h6v2H9zm10.03 6.39 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM13 14h-2V8h2v6z"></path></svg></div>`,
          command: 'history',
        },
        {
          id: 'setting',
          active: true,
          className: 'pg-setting-navbar',
          label:
            ' <div class ="setting"><svg class ="setting-icon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SettingsIcon"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path></svg></div>',

          content: 'image',
        },
      ],
    });

    setEditorState(editor);
    //   editor.onReady((clb) => {
    //     console.log('Editor is ready');
    //   });

    // editor.DomComponents.addType('text', {
    //   model: {
    //     defaults: {
    //       traits: [
    //         {
    //           type: 'text',
    //           name: 'map-location',
    //           label: 'Location',
    //           placeholder: 'Enter your location ',
    //         },
    //         {
    //           type: 'text',
    //           name: 'map-title',
    //           label: 'Title',
    //           placeholder: 'Enter your title ',
    //         },
    //       ],
    //     },
    //   },
    // });

    editor.DomComponents.addType('text', {
      model: {
        defaults: {
          traits: [
            {
              type: 'input-next',
              name: 'input',
              label: 'New input',
            },
          ],
        },
      },
    });

    editor.TraitManager.addType('input-next', {
      noLabel: true,

      // Return a simple HTML string or an HTML element
      createInput({ trait }) {
        // Create a new element container add some content
        const el = document.createElement('div');
        el.innerHTML = ` <input class="href-next__url" placeholder="Insert Your Text Here" id="self-inner-test" ref=testRef  />`;

        // Let's make our content alive

        const inputsUrl = el.querySelector('.href-next__url');
        inputsUrl.addEventListener('change', (ev) => {
          //@ts-ignore
          console.log('ev.target.value==============', ev.target.value);
          // switch (ev.target.value) {
          //   case 'url':
          //     //@ts-ignore
          //     inputsUrl.style.display = '';
          //     //@ts-ignore
          //     inputsEmail.style.display = 'none';
          //     break;
          //   case 'email':
          //     //@ts-ignore
          //     inputsUrl.style.display = 'none';
          //     //@ts-ignore
          //     inputsEmail.style.display = '';
          //     break;
          // }
        });

        return el;
      },

      // Update the component based element changes
      onEvent({ elInput, component }) {
        // `elInput` is the result HTMLElement you get from `createInput`
        // const inputType = elInput.querySelector('.href-next__url');
        // let href = '';
        //@ts-ignore

        const value = elInput.querySelector('.href-next__url').value;
        console.log('newVal=============', value);

        // switch (inputType.value) {
        //   case 'url':
        //     //@ts-ignore
        //     const valUrl = elInput.querySelector('.href-next__url').value;
        //     href = valUrl;
        //     break;
        //   case 'email':
        //     //@ts-ignore
        //     const valEmail = elInput.querySelector('.href-next__email').value;
        //     //@ts-ignore
        //     const valSubj = elInput.querySelector(  '.href-next__email-subject').value;
        //     href = `mailto:${valEmail}${valSubj ? `?subject=${valSubj}` : ''}`;
        //     break;
        //     default:
        //       const value = elInput.querySelector('href-next__url-inputs').value;
        // }

        component.addAttributes({ value });
      },

      onUpdate({ elInput, component }) {
        console.log('component', component);
        const newVal = component.getAttributes().value || '';
        const inputType = elInput.querySelector('.href-next__url');

        //  let type = 'url';
        console.log('Show', newVal);

        //   if (href.indexOf('mailto:') === 0) {
        //     const inputEmail = elInput.querySelector('.href-next__email');
        //     const inputSubject = elInput.querySelector(
        //       '.href-next__email-subject'
        //     );
        //     const mailTo = href.replace('mailto:', '').split('?');
        //     const email = mailTo[0];
        //     const params = (mailTo[1] || '').split('&').reduce((acc, item) => {
        //       const items = item.split('=');
        //       acc[items[0]] = items[1];
        //       return acc;
        //     }, {});
        //     type = 'email';
        //     //@ts-ignore
        //     inputEmail.value = email || '';
        //     //@ts-ignore
        //     inputSubject.value = params.subject || '';
        //   } else {
        //     //@ts-ignore
        //     elInput.querySelector('.href-next__url').value = href;
        //   }
        //   //@ts-ignore
        //   inputType.value = type;
        //   inputType.dispatchEvent(new CustomEvent('change'));
        // },
      },
    });

    editor.DomComponents.addType('test', {
      model: {
        init() {
          this.listenTo(this, 'change:attributes:linkTitle', () =>
            console.log('linkTitle', this.getAttributes()['linkTitle'])
          );
        },
        defaults: {
          attributes: {
            linkTitle: '',
          },
          style: {
            padding: '25px',
            margin: '25px',
          },
          traits: [
            {
              type: 'text',
              name: 'linkTitle',
              changeProp: false,
              label: 'Link Title',
            },
          ],
        },
      },
      view: {
        init() {
          const oldValue = this.model.getAttributes()['linkTitle'];
          console.log('linkTitle2: ', oldValue);
          this.model.addAttributes({ linkTitle: oldValue + ' Changed!' });
        },
      },
    });

    // editor.DomComponents.addType('text', {
    //   model: {
    //     defaults: {
    //       traits: [
    //         {
    //           type: 'text',
    //           name: 'text-title',
    //           label: 'Title',
    //           placeholder: 'Enter your title ',
    //           className: 'custom-text',
    //         },
    //         {
    //           type: 'text',
    //           name: 'text-link',
    //           label: 'Link',
    //           placeholder: 'Paste URL or Type ',
    //           class: 'custom-link',
    //         },
    //         {
    //           type: 'select',
    //           name: 'text-size',
    //           label: 'Size',
    //           default: 'default',
    //           options: [
    //             { id: 'default', name: 'Default' },
    //             { id: 'small', name: 'Small' },
    //             { id: 'medium', name: 'Medium' },
    //             { id: 'large', name: 'Large' },
    //             { id: 'xl', name: 'XL' },
    //             { id: 'xxl', name: 'XXL' },
    //           ],
    //         },

    //         {
    //           type: 'select',
    //           name: 'text-html-tag',
    //           label: 'HTML Tag',
    //           default: 'h1',
    //           options: [
    //             { id: 'h1', name: 'H1' },
    //             { id: 'h2', name: 'H2' },
    //             { id: 'h3', name: 'H3' },
    //             { id: 'h4', name: 'H4' },
    //             { id: 'h5', name: 'H5' },
    //             { id: 'h6', name: 'H6' },
    //             { id: 'div', name: 'div' },
    //             { id: 'span', name: 'span' },
    //             { id: 'p', name: 'p' },
    //           ],
    //         },
    //         {
    //           type: 'select',
    //           name: 'text-alignment',
    //           label: 'Alignment',
    //           default: 'left',
    //           options: [
    //             { id: 'left', name: 'Left' },
    //             { id: 'center', name: 'Center' },
    //             { id: 'right', name: 'Right' },
    //             { id: 'justified', name: 'Justified' },
    //           ],
    //         },
    //       ],
    //     },
    //   },
    // });
    //Trait for Map
    editor.DomComponents.addType('map', {
      model: {
        defaults: {
          traits: [
            {
              type: 'text',
              name: 'map-location',
              label: 'Location',
              placeholder: 'Enter your location ',
            },
          ],
        },
      },
    });

    //Trait for Image
    editor.DomComponents.addType('image', {
      model: {
        defaults: {
          traits: [
            {
              type: 'select',
              name: 'image-size',
              label: 'Size',
              default: 'large',
              options: [
                { id: 'thumbnail', name: 'Thumbnail- 150 x 150' },
                { id: 'medium', name: 'Medium- 300 x 300' },
                { id: 'medium-large', name: 'Medium Large-  768 x 0' },
                { id: 'large', name: 'Large- 1024 x 1024 ' },
                { id: 'custom', name: 'Custom' },
                { id: 'full', name: 'Full' },
              ],
            },
            {
              type: 'select',
              name: 'image-alignment',
              label: 'Alignment',
              default: 'left',
              options: [
                { id: 'left', name: 'Left' },
                { id: 'center', name: 'Center' },
                { id: 'right', name: 'Right' },
              ],
            },
            {
              type: 'select',
              name: 'image-caption',
              label: 'Caption',
              default: 'none',
              options: [
                { id: 'none', name: 'None' },
                { id: 'attachment', name: 'Attachment Caption' },
                { id: 'custom', name: 'Custom Caption' },
              ],
            },
            {
              type: 'select',
              name: 'image-link',
              label: 'Link To',
              default: 'none',
              options: [
                { id: 'none', name: 'None' },
                { id: 'media ', name: 'Media File' },
                { id: 'curl', name: 'Custom URL' },
              ],
            },

            {
              type: 'select',
              name: 'image-order',
              label: 'Order',
              default: 'none',
              options: [{ id: 'none', name: 'None' }],
            },
          ],
        },
      },
    });

    //Trait for Button
    editor.DomComponents.addType('button', {
      model: {
        defaults: {
          traits: [
            {
              type: 'text',
              name: 'btn-text',
              label: 'Button Text',
              placeholder: 'Button Label',
            },
            {
              type: 'text',
              name: 'btn-link',
              label: 'Link',
              placeholder: 'Paste URL or Type ',
            },
            {
              type: 'select',
              name: 'btn-alignment',
              label: 'Alignment',
              default: 'left',
              options: [
                { id: 'left', name: 'Left' },
                { id: 'center', name: 'Center' },
                { id: 'right', name: 'Right' },
              ],
            },
            {
              type: 'select',
              name: 'btn-size',
              label: 'Button Size',
              default: 'default',
              options: [
                { id: 'default', name: 'Default' },
                { id: 'xs', name: 'Extra Small' },

                { id: 'small', name: 'Small' },
                { id: 'medium', name: 'Medium' },
                { id: 'large', name: 'Large' },
                { id: 'xl', name: 'Extra Large' },
              ],
            },
            {
              type: 'select',
              name: 'image-link',
              label: 'Link To',
              default: 'none',
              options: [
                { id: 'none', name: 'None' },
                { id: 'media ', name: 'Media File' },
                { id: 'curl', name: 'Custom URL' },
              ],
            },

            {
              type: 'select',
              name: 'image-order',
              label: 'Order',
              default: 'none',
              options: [{ id: 'none', name: 'None' }],
            },
          ],
        },
      },
    });

    //Trait for TextArea
    editor.DomComponents.addType('textarea', {
      model: {
        defaults: {
          traits: [
            {
              type: 'text',
              name: 'text-title',
              label: 'Text',
              placeholder: 'Insert Your Text Here',
            },

            {
              type: 'select',
              name: 'text-size',
              label: 'Size',
              default: 'default',
              options: [
                { id: 'default', name: 'Default' },
                { id: 'small', name: 'Small' },
                { id: 'medium', name: 'Medium' },
                { id: 'large', name: 'Large' },
                { id: 'xl', name: 'XL' },
                { id: 'xxl', name: 'XXL' },
              ],
            },

            {
              type: 'select',
              name: 'text-html-tag',
              label: 'HTML Tag',
              default: 'h1',
              options: [
                { id: 'h1', name: 'H1' },
                { id: 'h2', name: 'H2' },
                { id: 'h3', name: 'H3' },
                { id: 'h4', name: 'H4' },
                { id: 'h5', name: 'H5' },
                { id: 'h6', name: 'H6' },
                { id: 'div', name: 'div' },
                { id: 'span', name: 'span' },
                { id: 'p', name: 'p' },
              ],
            },
          ],
        },
      },
    });

    // editor.DomComponents.addType('button', {
    //   model: {
    //     defaults: {
    //       traits: [
    //         {
    //           type: 'select',
    //           name: 'btn-type',
    //           label: 'Type',
    //           default: 'default',
    //           options: [
    //             { id: 'default', name: 'Default' },
    //             { id: 'info', name: 'Info' },
    //             { id: 'success', name: 'Success' },
    //             { id: 'warning', name: 'Warning ' },
    //             { id: 'danger', name: 'Danger' },
    //           ],
    //         },
    //         {
    //           type: 'text',
    //           name: 'btn-text',
    //           label: 'Text',
    //           placeholder: 'Click Here',
    //         },
    //         {
    //           type: 'text',
    //           name: 'btn-link',
    //           label: 'Link',
    //           placeholder: '#',
    //         },
    //         {
    //           type: 'select',
    //           name: 'btn-alignment',
    //           label: 'Alignment',
    //           default: 'left',
    //           options: [
    //             { id: 'left', name: 'Left' },
    //             { id: 'center', name: 'Center' },
    //             { id: 'right', name: 'Right' },
    //             { id: 'justified', name: 'Justified' },
    //           ],
    //         },

    //         {
    //           type: 'select',
    //           name: 'btn-size',
    //           label: 'Size',
    //           default: 'medium',
    //           options: [
    //             { id: 'extrasmall', name: 'Extra Small' },
    //             { id: 'small', name: 'Small' },
    //             { id: 'medium', name: 'Medium' },
    //             { id: 'large', name: 'Large' },
    //             { id: 'extralarge', name: 'Extra Large' },
    //           ],
    //         },
    //       ],
    //     },
    //   },
    // });

    //Trait for Icon
    // editor.DomComponents.addType('icon', {
    //   model: {
    //     defaults: {
    //       traits: [
    //         {
    //           type: 'select',
    //           name: 'icon-view',
    //           label: 'View',
    //           default: 'default',
    //           options: [
    //             { id: 'default', name: 'Default' },
    //             { id: 'stacked', name: 'Stacked' },
    //             { id: 'framed', name: 'Framed' },
    //           ],
    //         },
    //         {
    //           type: 'text',
    //           name: 'icon-link',
    //           label: 'Link',
    //           placeholder: 'https://your-link.com',
    //         },
    //         {
    //           type: 'select',
    //           name: 'icon-alignment',
    //           label: 'Alignment',
    //           default: 'left',
    //           options: [
    //             { id: 'left', name: 'Left' },
    //             { id: 'center', name: 'Center' },
    //             { id: 'right', name: 'Right' },
    //           ],
    //         },
    //       ],
    //     },
    //   },
    // });

    //Trait for Testimonial
    editor.DomComponents.addType('testimonial', {
      model: {
        defaults: {
          traits: [
            {
              type: 'select',
              name: 'testimonial-size',
              label: 'Image Size',
              default: 'full',
              options: [
                { id: 'thumbnail', name: 'Thumbnail- 150 x 150' },
                { id: 'medium', name: 'Medium- 300 x 300' },
                { id: 'medium-large', name: 'Medium Large-  768 x 0' },
                { id: 'large', name: 'Large- 1024 x 1024 ' },
                { id: 'custom', name: 'Custom' },
                { id: 'full', name: 'Full' },
              ],
            },
            {
              type: 'text',
              name: 'testimonial-name',
              label: 'Name',
              placeholder: 'John Doe',
            },

            {
              type: 'text',
              name: 'testimonial-title',
              label: 'Title',
              placeholder: 'Designer',
            },
            {
              type: 'text',
              name: 'testimonial-link',
              label: 'Link',
              placeholder: 'hhttps://your-link.com',
            },
            {
              type: 'select',
              name: 'testimonial-position',
              label: 'Image Position',
              default: 'aside',
              options: [
                { id: 'aside', name: 'Aside' },
                { id: 'top', name: 'Top' },
              ],
            },
            {
              type: 'select',
              name: 'testimonial-alignment',
              label: 'Alignment',
              default: 'left',
              options: [
                { id: 'left', name: 'Left' },
                { id: 'center', name: 'Center' },
                { id: 'right', name: 'Right' },
              ],
            },
          ],
        },
      },
    });

    //Trait for Header
    editor.DomComponents.addType('header', {
      model: {
        defaults: {
          traits: [
            {
              type: 'select',
              name: 'header-border',
              label: 'Border Type',
              default: 'none',
              options: [
                { id: 'none', name: 'None' },
                { id: 'solid', name: 'Solid' },
                { id: 'dashed', name: 'Dashed' },
                { id: 'dotted', name: 'Dotted' },
                { id: 'double', name: 'Double' },
                { id: 'groove', name: 'Groove' },
                { id: 'ridge', name: 'Ridge' },
                { id: 'inset', name: 'Inset' },
                { id: 'outset', name: 'Outset' },
              ],
            },
          ],
        },
      },
    });

    //Trait for Footer
    editor.DomComponents.addType('footer', {
      model: {
        defaults: {
          traits: [
            {
              type: 'select',
              name: 'footer-border',
              label: 'Border Type',
              default: 'none',
              options: [
                { id: 'none', name: 'None' },
                { id: 'solid', name: 'Solid' },
                { id: 'dashed', name: 'Dashed' },
                { id: 'dotted', name: 'Dotted' },
                { id: 'double', name: 'Double' },
                { id: 'groove', name: 'Groove' },
                { id: 'ridge', name: 'Ridge' },
                { id: 'inset', name: 'Inset' },
                { id: 'outset', name: 'Outset' },
              ],
            },
          ],
        },
      },
    });

    // // Trait for Inner Section
    // editor.DomComponents.addType('inner-section', {
    //   model: {
    //     defaults: {
    //       traits: [
    //         {
    //           type: 'select',
    //           name: 'inner-section-content-width',
    //           label: 'Content Width',
    //           default: ' boxed',
    //           options: [
    //             { id: 'boxed', name: 'Boxed' },
    //             { id: 'full', name: 'Full Width' },
    //           ],
    //         },
    //         {
    //           type: 'select',
    //           name: 'inner-section-content-gap',
    //           label: 'Column Gap',
    //           default: 'default',
    //           options: [
    //             { id: 'default', name: 'Default' },
    //             { id: 'nogap', name: 'No Gap' },
    //             { id: 'extended', name: 'Extended' },

    //             { id: 'narrow', name: 'Narrow' },
    //             { id: 'wide', name: 'Wide' },
    //             { id: 'wider', name: 'Wider' },
    //             { id: 'custom', name: 'Custom' },
    //           ],
    //         },
    //         {
    //           type: 'select',
    //           name: 'inner-section-content-height',
    //           label: 'Height',
    //           default: 'default',
    //           options: [
    //             { id: 'default', name: 'Default' },
    //             { id: 'fit', name: 'Fit to Screen' },
    //             { id: 'min', name: 'Min Height' },
    //           ],
    //         },
    //         {
    //           type: 'select',
    //           name: 'inner-section-content-vertical-alignment',
    //           label: 'Vertical Align',
    //           default: 'default',
    //           options: [
    //             { id: 'default', name: 'Default' },
    //             { id: 'top', name: 'Top' },
    //             { id: 'middle', name: 'Middle' },
    //             { id: 'bottom', name: 'Bottom' },
    //             { id: 'between', name: 'Space Between' },
    //             { id: 'around', name: 'Space Around' },
    //             { id: 'evenly', name: 'Space Evenly' },

    //           ],
    //         },
    //         {
    //           type: 'select',
    //           name: 'inner-section-content-overflow',
    //           label: 'Overflow',
    //           default: 'default',
    //           options: [
    //             { id: 'default', name: 'Default' },
    //             { id: 'hidden', name: 'Hidden' },
    //           ],
    //         },
    //         {
    //           type: 'select',
    //           name: 'inner-section-content-html-tag',
    //           label: 'HTML Tag',
    //           default: 'div',
    //           options: [
    //             { id: 'div', name: 'div' },
    //             { id: 'section', name: 'section' },
    //             { id: 'header', name: 'header' },
    //             { id: 'footer', name: 'footer' },
    //             { id: 'main', name: 'main' },
    //             { id: 'article', name: 'article' },
    //             { id: 'aside', name: 'aside' },
    //             { id: 'nav', name: 'nav' },

    //           ],
    //         },
    //       ],
    //     },
    //   },
    // });

    editor.DomComponents.addType('div', {
      model: {
        defaults: {
          traits: [
            {
              type: 'text',
              name: 'map-location',
              label: 'Location',
              placeholder: 'Enter your location ',
            },
          ],
        },
      },
    });

    // editor.DomComponents.addType('text', {
    //   model: {
    //     defaults: {
    //       traits: [
    //         {
    //           type: 'text',
    //           name: 'text_id',
    //           label: 'Id',
    //           placeholder: 'Enter your Id ',
    //           className: 'custom-text',
    //         },
    //         {
    //           type: 'text',
    //           name: 'text_title',
    //           label: 'Title',
    //           placeholder: 'Enter your title ',
    //           className: 'custom-text',
    //         },
    //       ],
    //     },

    //     init() {
    //       this.on('change:attributes', this.updateAttributes);
    //     },
    //     updateAttributes() {
    //       console.log('input changed', this.getAttributes());
    //       //@ts-ignore
    //       const { id, text_id, text_title } = this.getAttributes();

    //       console.log('-----------------');

    //       console.log('id', id);
    //       console.log('text_id', text_id);
    //       console.log('text_title', text_title);
    //       console.log('------------------');

    //       const div = document.getElementById(id);
    //       console.log('div', div);
    //       // // ✅ Change (replace) the text of the element
    //       div.textContent = text_title;

    //       // // ✅ Change (replace) the content with HTML
    //       // div.innerHTML = `<span style="background-color: lime">Replacement HTML</span>`;
    //     },
    //   },
    // });

    const component = editor?.getSelected(); // Component selected in canvas
    const traits = component?.get('traits');
    // console.log('traits', traits);

    // traits?.forEach((trait) => console.log(trait.props()));

    // editor.TraitManager.addType('text', {
    //   // ...

    //   // Update the component based on element changes
    //   // `elInput` is the result HTMLElement you get from `createInput`
    //   onEvent({ elInput, component, event }) {
    //     // console.log('elInput, component, event', elInput, component, event);
    //     const inputType = elInput.querySelector('.footer_huk');
    //     console.log('inputType', inputType);

    //     let href = '';

    //     switch (inputType.value) {
    //       case 'url':
    //         const valUrl = elInput.querySelector('.href-next__url').value;
    //         href = valUrl;
    //         break;
    //       case 'email':
    //         const valEmail = elInput.querySelector('.href-next__email').value;
    //         const valSubj = elInput.querySelector(
    //           '.href-next__email-subject'
    //         ).value;
    //         href = `mailto:${valEmail}${valSubj ? `?subject=${valSubj}` : ''}`;
    //         break;
    //     }

    //     component.addAttributes({ href });
    //   },

    //   onUpdate({ elInput, component }) {
    //     console.log('   ', elInput, component);
    //   },
    // });
    setElementCreate(true);
  }, [setEditorState]);
  console.log("document.activeElement",document.activeElement.tagName);
  
  useEffect(() => {
    if (testRef) {
      // debugger;
      console.log(document.getElementById('self-test'),'testRef', testRef);
      let ftext = document.getElementById('self-test');
      if (ftext) {
        // @ts-ignore
        console.log('ftext', ftext);
        // ftext?.value= 'test111';
      }
      // ftext?.value ="test";
      let setext = document.getElementById('self-inner-test');
      //  setext.innerText="second test";
      if (setext) {
        // @ts-ignore
        console.log('setext', setext);

        // setext.innerText="second test";
      }
    }
  }, [testRef]);

  return (
    <div className="main">
      <div id="editor"></div>
      <div className="myblocks"></div>
      <div className="styles-container"></div>
    </div>
  );
};
export default NewPageBuilder;









