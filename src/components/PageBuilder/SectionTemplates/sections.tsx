import GrapesJS from 'grapesjs';
import indexedDB from 'grapesjs-indexeddb';
import { useStepNav } from 'payload/components/hooks';
import React, { useEffect, useState } from 'react';
import { Eyebrow } from 'payload/components/elements';
import SectionTemplate from '../../SectionTemplate';
import '../index.scss';
import Benefit from '../NewSectionTemplate/Benefit/vendor/plugins/grapesjs-tailwind/src';
import ImageBanner from '../NewSectionTemplate/Department/vendor/plugins/grapesjs-tailwind/src';
import Footer from '../NewSectionTemplate/Footer/vendor/plugins/grapesjs-tailwind/src';
import Guideline from '../NewSectionTemplate/Guideline/vendor/plugins/grapesjs-tailwind/src';
import Header from '../NewSectionTemplate/Header/vendor/plugins/grapesjs-tailwind/src';
import ImageAndText from '../NewSectionTemplate/ImageAndText/vendor/plugins/grapesjs-tailwind/src';
import Location from '../NewSectionTemplate/Location/vendor/plugins/grapesjs-tailwind/src';
import Number from '../NewSectionTemplate/Number/vendor/plugins/grapesjs-tailwind/src';
import Paragraph from '../NewSectionTemplate/Paragraph/vendor/plugins/grapesjs-tailwind/src';
import PracticeArea from '../NewSectionTemplate/PracticeArea/vendor/plugins/grapesjs-tailwind/src';
import TalentCloud from '../NewSectionTemplate/TalentCloud/vendor/plugins/grapesjs-tailwind/src';
// import Testimonial from '../NewSectionTemplate/Testimonial/vendor/plugins/grapesjs-tailwind/src';
import blocks from '../../../blocks';
import Categories from '../../../collections/Categories';

const SectionPageBuilder: React.FC = () => {
  let [editor, setEditor] = useState<GrapesJS.Editor>();
  const { setStepNav } = useStepNav();
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
    // 'testimonial',
    'video',
  ];
  let showSections = true;

  useEffect(() => {
    setStepNav([
      {
        label: 'Section Templates',
        url: '/collections/global-theme-settings/section-templates',
      },
    ]);
  }, [setStepNav]);

  useEffect(() => {
    editor = GrapesJS.init({
      container: '#sections',
      storageManager: false,
      showOffsets: true,
      showDevices: false,
      showOffsetsSelected: true,
      avoidDefaults: true,

      plugins: [
        Header,
        Footer,
        PracticeArea,
        // Testimonial,
        Benefit,
        Guideline,
        ImageAndText,
        ImageBanner,
        Location,
        Number,
        Paragraph,
        TalentCloud,
      ],

      commands: {
        defaults: [],
      },
      panels: {
        defaults: [
          // {
          //   id: 'commands',
          //   el: '.panel__top',
          //   buttons: [
          //     {
          //       id: 'undo',
          //       className: 'fa fa-undo',
          //       command: 'undo',
          //       attributes: { title: 'Undo' },
          //     },
          //     {
          //       id: 'redo',
          //       className: 'fa fa-repeat',
          //       command: 'redo',
          //       attributes: { title: 'Redo' },
          //     },
          //   ],
          // },
          // {
          //   id: 'options',
          //   el: '.panel__basic-actions',
          // buttons: [
          //   {
          //     id: 'visibility',
          //     className: 'fa fa-eye',
          //     command: 'sw-visibility',
          //     attributes: { title: 'View Components' },
          //   },
          //   {
          //     id: 'export',
          //     className: 'fa fa-code',
          //     command: 'gjs-get-inlined-html',
          //     attributes: { title: 'Export' },
          //   },
          // ],
          //  },
          {
            id: 'panel-switcher',
            el: '.panel__switcher',
            buttons: [
              // {
              //   id: 'show-layers',
              //   className: 'fa fa-bars',
              //   command: 'show-layers',
              //   active: false,
              //   attributes: { title: 'Layers' },
              // },
              {
                id: 'show-style',
                className: 'fa fa-paint-brush',
                command: 'show-styles',
                active: true,
                toggle: true,
                runDefaultCommand: true,
                stopDefaultCommand: true,
                attributes: { title: 'Styles' },
              },
              {
                id: 'show-traits',
                className: 'fa fa-cog',
                command: 'show-traits',
                active: true,
                toggle: true,
                attributes: { title: 'Traits' },
              },
              {
                id: 'show-blocks',
                className: 'fa fa-th-large',
                command: 'show-blocks',
                active: true,
                toggle: true,
                runDefaultCommand: true,
                stopDefaultCommand: true,
                attributes: { title: 'Blocks' },
              },
            ],
          },
        ],
      },

      blockManager: {
        appendTo: '.blocks',
        blocks: [],
      },
      layers: false,
      traitManager: {
        appendTo: '.traits-container',
      },
      selectorManager: {
        appendTo: '.styles-container',
      },
      styleManager: {
        appendTo: '.styles-container',
      },

      // sectors: [
      //  {
      //     name: 'General',
      //     open: false,
      //     buildProps: [
      //       'background-color',
      //       'background-image',
      //       'background-repeat',
      //       'background-position',
      //       'background-attachment',
      //       'background-size',
      //       'box-shadow',
      //       'border-radius',
      //       'border',
      //       'border-width',
      //       'border-style',
      //       'border-color',
      //       'float',
      //       'display',
      //       'position',
      //       'top',
      //       'right',
      //       'left',
      //       'bottom',
      //     ],
      //   },
      //   {
      //     name: 'Flex',
      //     open: false,
      //     buildProps: ['flex-direction', 'flex-wrap', 'justify-content'],
      //   },
      //   {
      //     name: 'Dimension',
      //     open: false,
      //     buildProps: [
      //       'width',
      //       'height',
      //       'max-width',
      //       'min-height',
      //       'margin',
      //       'padding',
      //     ],
      //   },
      //   {
      //     name: 'Typography',
      //     open: false,
      //     buildProps: [
      //       'font-family',
      //       'font-size',
      //       'font-weight',
      //       'letter-spacing',
      //       'color',
      //       'line-height',
      //       'text-align',
      //       'text-decoration',
      //       'text-shadow',
      //     ],
      //     properties: [
      //       {
      //         property: 'text-align',
      //         list: [
      //           { value: 'left', className: 'fa fa-align-left' },
      //           { value: 'center', className: 'fa fa-align-center' },
      //           { value: 'right', className: 'fa fa-align-right' },
      //           { value: 'justify', className: 'fa fa-align-justify' },
      //         ],
      //       },
      //       {
      //         property: 'text-decoration',
      //         list: [
      //           { value: 'none', className: 'fa fa-times' },
      //           { value: 'underline', className: 'fa fa-underline' },
      //           { value: 'line-through', className: 'fa fa-strikethrough' },
      //         ],
      //       },
      //       {
      //         name: 'Decorations',
      //         open: false,
      //         commands: [
      //           {
      //             name: 'Add text shadow',
      //             property: 'text-shadow',
      //             defaults: '0px 0px 1px #000',
      //           },
      //         ],
      //         buildProps: [
      //           'opacity',
      //           'border-radius',
      //           'border',
      //           'box-shadow',
      //         ],
      //       },
      //       {
      //         name: 'Extra',
      //         open: false,
      //         buildProps: ['transition', 'perspective', 'transform'],
      //       },
      //     ],
      //   },
      // ],
      // },
    });

    // editor.BlockManager.getConfig().appendTo = '.blocks';
    // editor.BlockManager.add('blog-block-1', {
    //   label: 'Blog Block 1',
    //   category: 'Blog',
    //   content: plugin.templates.blogBlock1,
    // });

    // editor.BlockManager.remove(editor.BlockManager.get('blog-block-1'));
    // editor.BlockManager.remove(editor.BlockManager.get('blog-block-2'));
    // editor.BlockManager.remove(editor.BlockManager.get('blog-block-3'));
    // editor.BlockManager.remove(editor.BlockManager.get('blog-block-4'));
    // editor.BlockManager.remove(editor.BlockManager.get('blog-block-5'));
    // // const blocks = editor.BlockManager.remove(
    // editor.BlockManager.remove(
    //   editor.BlockManager.getConfig().blocks.map((block) => block)
    // );
    // editor.BlockManager.getCategories().remove((model) => model.id == 'Blog');

    // editor.BlockManager.add(
    //   'blog-block-1',
    //   editor.BlockManager.get('blog-block-2')
    // );
    // editor.BlockManager.add('blog', editor.BlockManager.get('blog-block-3'));
    // editor.BlockManager.add('blog', editor.BlockManager.get('blog-block-4'));

    setEditor(editor);

    // editor.Panels.addPanel({
    //   id: 'actions',
    //   el: '.panel__top',
    //   buttons: [
    //     {
    //       id: 'show-styles',
    //       active: true,
    //       className: 'fa fa-paint-brush',
    //       toggle: false,
    //       command: 'show-styles',
    //       attributes: { title: 'Open Style Manager' },
    //     },
    //     {
    //       id: 'show-blocks',
    //       active: true,
    //       className: 'fa fa-th-large',
    //       toggle: false,
    //       command: 'show-blocks',
    //       attributes: { title: 'Open Blocks' },
    //     },
    //   ],
    // });
    editor.Commands.add('show-styles', {
      getRowEl(editor) {
        return editor.getContainer().closest('.editor-row');
      },
      getStyleEl(row) {
        return row.querySelector('.styles-container');
      },
      run(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = '';
      },

      stop(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = 'none';
      },
    });
    editor.Commands.add('show-blocks', {
      getRowEl(editor) {
        return editor.getContainer().closest('.editor-row');
      },
      getBlocksEl(row) {
        return row.querySelector('.blocks');
      },

      run(editor, sender) {
        const smEl = this.getBlocksEl(this.getRowEl(editor));
        smEl.style.display = '';
      },
      stop(editor, sender) {
        const smEl = this.getBlocksEl(this.getRowEl(editor));
        smEl.style.display = 'none';
      },
    });

    // const openBl = editor.Panels.getButton('views', '.blocks');
    // editor.on('load', () => openBl.set('active', true));
    editor.on('run:core:component-select', () => {
      editor.Components.getWrapper()
        .getTraits()
        .forEach((trait) => {
          trait.set('disabled', false);
        });
    });

    editor.on('component:drag:end', () => {
      editor.runCommand('show-styles');
      editor.runCommand('show-traits');
      editor.stopCommand('show-blocks');
    });

    // On component change show the Style Manager
    editor.on('component:selected', () => {
      editor.runCommand('show-styles');
      editor.runCommand('show-traits');
      editor.stopCommand('show-blocks');
    });
    editor.onReady(() => {
      editor.stopCommand('show-styles');
      editor.runCommand('show-blocks');
      editor.stopCommand('show-traits');
    });
    // Don't switch when the Layer Manager is on or
    // there is no selected component

    editor.Commands.add('show-traits', {
      getTraitsEl(editor) {
        const row = editor.getContainer().closest('.editor-row');
        return row.querySelector('.traits-container');
      },
      run(editor, sender) {
        this.getTraitsEl(editor).style.display = '';
      },
      stop(editor, sender) {
        this.getTraitsEl(editor).style.display = 'none';
      },
    });
  }, [setEditor]);

  return (
    <div className="main__content">
      <Eyebrow />
      <div className="editor-row">
        <div className="panel__left">
          <div className="panel__top"></div>
          <div className="panel__basic-actions"></div>
          <div className="panel__switcher"></div>
          <div className="styles-container"></div>
          <div className="traits-container"></div>
          <div className="blocks"></div>
        </div>

        <div className="editor-canvas">
          <div id="sections"></div>
          {/* <h3>Start customizing your portal </h3> */}
          {/* <SectionTemplate /> */}
        </div>
      </div>
    </div>
  );
};
export default SectionPageBuilder;
