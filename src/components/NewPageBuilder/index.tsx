// @ts-ignore
import GrapesJS from 'grapesjs';
import React, { useContext, useEffect, useRef, useState } from 'react';
// import './grapes.min.css';
// import './CustomGrapes.css';
// import '../PageBuilder/index.scss';
import Basics from 'grapesjs-blocks-basic';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import './index.scss';

import axios from 'axios';
import NavBar from 'grapesjs-navbar';
import Forms from 'grapesjs-plugin-forms';
import Experfy from '../PageBuilder/ExperfyPlugin';

import { useConfig } from 'payload/components/utilities';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../../MyProvider';
const NewPageBuilder = ({ status, handleClose }) => {
  let [editor, setEditorState] = React.useState<GrapesJS.Editor>();
  const [elementCreate, setElementCreate] = useState(false);
  // const [pagePayload, setPagePayload] = useState<any>({
  //   title: "sample",
  //   author:'',
  // });
  const { setStepNav } = useStepNav();
  const {
    admin: { user: userSlug },
    routes: { admin },
  } = useConfig();
  const { setSelectedPageCode } = useContext(Context);
  const [headingText, setHeadingText] = React.useState<string>('abc');
  console.log('test of editor');
  const testRef = useRef();

  const clearLocalStorage = () => {
    localStorage.removeItem('page_code');
  };

  const dataHandlear = () => {
    const data = localStorage.getItem('page_code');
    if (status === 'NewFromPage') {
      handleClose();
      setSelectedPageCode(data);
      clearLocalStorage();
    } else {
      axios
        .post('http://localhost:3001/api/page-Template', {
          title: 'title',
          pageCode: data,
        })
        .then((res) => {
          clearLocalStorage();
          toast.success('Changes saved successfully');
        })
        .catch((err) => {
          console.log('err', err);
        });

      handleClose();
      setSelectedPageCode('12');
    }
  };

  useEffect(() => {
    setStepNav([
      {
        label: 'Page Builder',
        url: '/collections/new-page-builder',
      },
    ]);
  }, [setStepNav]);
  React.useEffect(() => {
    const sections = [
      'header',
      'footer',
      'image-banner',
      'image-gallery',
      'image-and-text',
      'paragraph',
      'practice-areas',
      'benefits',
      'departments',
      'guidelines',
      'location',
      'metrics-numbers',
      'talent-cloud-candidates',
      'testimonial',
      'video',
    ];
    const ExperfyBlocks = (
      editor: GrapesJS.Editor,
      options: GrapesJS.EditorConfig
    ) =>
      Experfy(editor, {
        ...options,
        blocks: sections,
        showPanelsOnLoad: false,
      });

    editor = GrapesJS.init({
      container: '.editor',
      fromElement: true,
      //@ts-ignore
      plugins: [
        ExperfyBlocks,
        (editor) =>
          NavBar(editor, {
            label: 'Header',
            block: {
              category: 'Header & Footer Elements',
            },
          }),
        (editor) =>
          Basics(editor, {
            blocks: ['text', 'link', 'image', 'video', 'map'],
            category: 'Basic Elements',
            flexGrid: true,
            addBasicStyle: true,
            rowHeight: 75,
          }),
        (editor) =>
          Forms(editor, {
            blocks: ['input', 'textarea', 'select', 'button', 'checkbox'],
            category: 'Basic Elements',
          }),
        ,
      ],

      storageManager: {
        type: 'local',
        autoload: true,
        options: {
          storeComponents: true,
          storeStyles: true,
          storeHtml: true,
          storeCss: true,

          local: {
            key: 'page_code',
          },
        },
      },

      layerManager: {
        appendTo: '.layers-container',
      },
      styleManager: {
        appendTo: '.styles-container',
        showComputed: true,
        highlightComputed: true,
        highlightChanged: true,
      },
      blockManager: {
        appendTo: '.blocks',
        blocks: [],
      },

      selectorManager: {
        componentFirst: true,
        appendTo: '.styles-container',
      },
      traitManager: {
        appendTo: '.traits-container',
      },

      domComponents: {
        stylePrefix: 'gjs-',
        wrapper: {
          removable: false,
          traits: [
            {
              type: 'text',
              name: 'text_content',
              label: 'Content',
            },
          ],
        },
        components: [
          {
            type: 'text',
            content: 'Text',
            style: {
              padding: '10px',
            },
            removable: false,
          },
        ],
      },

      commands: {
        defaults: [
          {
            id: 'preview-fullscreen',
            run() {
              editor?.runCommand('preview');
              editor?.runCommand('fullscreen');
            },
            stop() {
              editor?.stopCommand('fullscreen');
              editor?.stopCommand('preview');
            },
          },
          {
            id: 'save-editor',
            run(editor: { store: () => GrapesJS.Editor }) {
              const store = editor.store();
              dataHandlear();
            },
          },
        ],
      },
      panels: {
        defaults: [
          {
            id: 'panel__switcher',
            el: '.panel__switcher',
            buttons: [
              {
                id: 'show-blocks',
                label: 'Elements',
                command: 'show-blocks',
                active: true,
                togglable: false,
                attributes: { title: 'Blocks' },
              },
              {
                id: 'show-layers',
                label: 'Sections',
                command: 'show-layers',
                active: false,
                togglable: false,
                attributes: { title: 'Layers' },
              },
              {
                id: 'show-style',
                label: 'Style',
                command: 'show-styles',
                active: false,
                togglable: false,
                attributes: { title: 'Styles' },
              },

              {
                id: 'show-traits',
                label: 'Content',
                command: 'show-traits',
                visible: false,
                active: false,
                togglable: false,
                attributes: { title: 'Traits' },
              },
            ],
          },
          // {
          //   id: 'panel-top',
          //   el: '.panel__top',
          //   buttons: [
          //     {
          //       id: 'settings',
          //       className: 'fa fa-cog btn--style-secondary',
          //       command: 'sw-visibility',
          //       active: true,
          //       tag: 'button',
          //       attributes: { title: 'Settings' },
          //     },
          //     {
          //       id: 'device-desktop',
          //       className: 'fa fa-desktop btn--style-secondary',
          //       command: 'toggle-devices',
          //       tagName: 'button',
          //       attributes: { title: 'Toggle Display' },
          //     },
          //     {
          //       id: 'history',
          //       tag: 'button',
          //       className: 'fa fa-history btn--style-secondary',
          //       command: 'undo',
          //       attributes: { title: 'Undo' },
          //     },

          //     {
          //       id: 'preview',
          //       tagName: 'button',
          //       label:
          //         '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/></svg> Preview',
          //       className: 'btn--style-secondary',
          //       command: 'preview-fullscreen',
          //       attributes: {
          //         title: 'Preview',
          //         id: 'preview',
          //       },
          //     },
          //     {
          //       id: 'save',
          //       className: 'btn--style-primary',
          //       command: 'save-editor',
          //       label: 'Save',
          //       tagName: 'button',
          //       attributes: { title: 'Save' },
          //     },
          //     {
          //       id: 'publish',
          //       tagName: 'button',
          //       className: 'btn--style-secondary',
          //       command: 'publish',
          //       label:
          //         '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zM384 352c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z" fill="#78c493"/></svg> Publish',
          //       attributes: { title: 'Publish' },
          //     },
          //   ],
          // },
        ],
      },
    });

    editor.onReady(() => {
      editor?.runCommand('show-blocks');
      editor?.runCommand('hide-styles');
      editor?.runCommand('hide-traits');
      editor?.runCommand('hide-layers');
    });

    editor.on('component:add', (component) => {
      editor?.StyleManager.select(component);
      editor?.runCommand('show-styles');
      editor?.runCommand('hide-blocks');
      editor?.runCommand('hide-layers');
      editor?.runCommand('hide-traits');
    });

    editor.on('component:selected', (component) => {
      if (component.get('type') == 'text') {
        editor?.runCommand('show-traits');
        if (component.get('traits').models[1].get('value'))
          component.components(component.get('traits').models[1].get('value'));
      } else {
        editor?.runCommand('show-styles');
        editor?.runCommand('hide-traits');
        editor?.runCommand('hide-blocks');
        editor?.runCommand('hide-layers');
      }
    });
    editor.on('component:update', (component) => {
      if (component.get('type') == 'text') {
        component.components(component.get('traits').models[1].get('value'));
      }
    });
  }, [setEditorState]);

  return (
    <div className="main__content">
      <Eyebrow />
      <div className="panel__top"></div>
      <div className="editor-row">
        <div className="panel__basic-actions"></div>
        <div className="panel__left">
          <div className="panel__switcher">
            <div className="back-blue-panel">
              <span>&#10094;</span>
              <Link to={`${admin}/`}>Page Builder</Link>
              <span>&#9783;</span>
            </div>
          </div>
          <div className="styles-container"></div>
          <div className="traits-container"></div>
          <div className="layers-container"></div>
          <div className="blocks"></div>
        </div>
        <div className="editor-canvas">
          <div className="editor"></div>
        </div>
      </div>
    </div>
  );
};
export default NewPageBuilder;
