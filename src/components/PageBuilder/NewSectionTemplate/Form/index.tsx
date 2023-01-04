import GrapesJS from 'grapesjs';
import { Eyebrow } from 'payload/components/elements';
import React from 'react';
import '../../index.scss';
import plugin1 from './vendor/plugins/grapesjs-tailwind/src/index';

const Form = () => {
  const [editorState, setEditorState] = React.useState<GrapesJS.Editor>();

  React.useEffect(() => {
    const editor = GrapesJS.init({
      container: '#editor',
      plugins: [plugin1],
    });

    setEditorState(editor);

    editor.DomComponents.addType('text', {
      model: {
        defaults: {
          traits: [
            {
              type: 'text',
              name: 'text-title',
              label: 'Title',
              placeholder: 'Enter your title ',
              className: 'custom-text',
            },
            {
              type: 'text',
              name: 'text-link',
              label: 'Link',
              placeholder: 'Paste URL or Type ',
              class: 'custom-link',
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
            {
              type: 'select',
              name: 'text-alignment',
              label: 'Alignment',
              default: 'left',
              options: [
                { id: 'left', name: 'Left' },
                { id: 'center', name: 'Center' },
                { id: 'right', name: 'Right' },
                { id: 'justified', name: 'Justified' },
              ],
            },
          ],
        },
      },
    });
  }, []);

  return (
    <div className="main__content">
      <Eyebrow />
      <div className="editor-row">
        <div className="panel__left">
          <div className="panel__top"></div>
          <div className="styles-container"></div>
        </div>
        <div id="editor"></div>
      </div>
    </div>
  );
};
export default Form;
