import GrapesJS from 'grapesjs';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import Header from '../NewSectionTemplate/Header/vendor/plugins/grapesjs-tailwind/src/index';
import Footer from '../NewSectionTemplate/Footer/vendor/plugins/grapesjs-tailwind/src/index';
import PracticeArea from '../NewSectionTemplate/PracticeArea/vendor/plugins/grapesjs-tailwind/src/index';
import Testimonial from '../NewSectionTemplate/Testimonial/vendor/plugins/grapesjs-tailwind/src/index';
import Benefit from '../NewSectionTemplate/Benefit/vendor/plugins/grapesjs-tailwind/src/index';
import Guideline from '../NewSectionTemplate/Guideline/vendor/plugins/grapesjs-tailwind/src/index';
import ImageAndText from '../NewSectionTemplate/ImageAndText/vendor/plugins/grapesjs-tailwind/src/index';
import ImageBanner from '../NewSectionTemplate/Department/vendor/plugins/grapesjs-tailwind/src/index';
import Location from '../NewSectionTemplate/Location/vendor/plugins/grapesjs-tailwind/src/index';
import Number from '../NewSectionTemplate/Number/vendor/plugins/grapesjs-tailwind/src/index';
import Paragraph from '../NewSectionTemplate/Paragraph/vendor/plugins/grapesjs-tailwind/src/index';
import TalentCloud from '../NewSectionTemplate/TalentCloud/vendor/plugins/grapesjs-tailwind/src/index';

import indexedDB from 'grapesjs-indexeddb';
import grapesjsProjectManager from 'grapesjs-project-manager';
import grapesjsForms from 'grapesjs-plugin-forms';
// import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import SectionTemplate from '../../SectionTemplate';
import '../index.scss';

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
    'testimonial',
    'video',
  ];
  const section = ''; //queryString.parse(window.location.search).section.toString();
  const showSections = false; //sections.includes(section) ? true : false;
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
      fromElement: true,
      storageManager: true,
      showOffsets: true,
      showOffsetsSelected: true,
      plugins: [
        Header,
        Footer,
        PracticeArea,
        Testimonial,
        Benefit,
        Guideline,
        ImageAndText,
        ImageBanner,
        Location,
        Number,
        Paragraph,
        TalentCloud,
        indexedDB,
      ],
      blockManager: {
        appendTo: '.blocks',
        blocks: [],
      },

      commands: {
        defaults: [
          {
            id: 'open-layers',
            run: (editor, sender) => {
              sender.set('active', 0);
            },
          },
          {
            id: 'open-sm',
            run: (editor, sender) => {
              editor.StyleManager.open();
            },
          },
          {
            id: 'open-tm',
            run: (editor, sender) => {
              editor.TraitManager.open();
            },
          },
          {
            id: 'open-blocks',
            run: (editor, sender) => {
              editor.BlockManager.open();
            },
          },
        ],
      },
      // blockManager: {
      //   appendTo: '.blocks',
      //   blocks: [],
      // },

      // traitManager: {
      //   appendTo: '.styles-container',
      // },
      styleManager: {
        appendTo: '.styles-container',
        sectors: [
          {
            name: 'General',
            open: false,
            buildProps: [
              'float',
              'display',
              'position',
              'top',
              'right',
              'left',
              'bottom',
            ],
          },
          {
            name: 'Flex',
            open: false,
            buildProps: [
              'flex-direction',
              'flex-wrap',
              'justify-content',
              'align-items',
              'align-content',
              'order',
              'flex-basis',
              'flex-grow',
              'flex-shrink',
              'align-self',
            ],
          },
          {
            name: 'Dimension',
            open: false,
            buildProps: [
              'width',
              'height',
              'max-width',
              'min-height',
              'margin',
              'padding',
            ],
          },
          {
            name: 'Typography',
            open: false,
            buildProps: [
              'font-family',
              'font-size',
              'font-weight',
              'letter-spacing',
              'color',
              'line-height',
              'text-align',
              'text-decoration',
              'text-shadow',
            ],
            properties: [
              {
                property: 'text-align',
                list: [
                  { value: 'left', className: 'fa fa-align-left' },
                  { value: 'center', className: 'fa fa-align-center' },
                  { value: 'right', className: 'fa fa-align-right' },
                  { value: 'justify', className: 'fa fa-align-justify' },
                ],
              },
              {
                property: 'text-decoration',
                list: [
                  { value: 'none', className: 'fa fa-times' },
                  { value: 'underline', className: 'fa fa-underline' },
                  { value: 'line-through', className: 'fa fa-strikethrough' },
                ],
              },
              {
                name: 'Decorations',
                open: false,

                buildProps: [
                  'border-radius-c',
                  'background-color',
                  'border-radius',
                  'border',
                  'box-shadow',
                  'background',
                ],
              },

              {
                name: 'Extra',
                open: false,
                buildProps: ['transition', 'perspective', 'transform'],
              },
            ],
          },
        ],
      },

      panels: {
        defaults: [
          {
            id: 'layers',
            el: '.panel__top',
            buttons: [
              {
                id: 'back',
                active: false,
                visible: true,
                className: 'fa fa-arrow-left',
                command: 'back',
                attributes: { label: 'Sections' },
              },
            ],
          },
        ],
      },
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
    editor.onReady((clb) => {
      console.log('editor ready');
    });
  }, [setEditor]);

  return (
    <div className="main__content">
      <Eyebrow />
      <div className="editor-row">
        <div className="panel__left">
          <div className="panel__top"></div>
          <div className="blocks"></div>
        </div>
        {showSections && <div id="sections"></div>}
        <div className="main__builder">
          <SectionTemplate />
        </div>
      </div>
    </div>
  );
};
export default SectionPageBuilder;
