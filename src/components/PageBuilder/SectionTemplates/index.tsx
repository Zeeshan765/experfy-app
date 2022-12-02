import GrapesJS from 'grapesjs';
import React, { useEffect, useState } from 'react';
// import PageManagerPlugin from 'grapesjs-project-manager'
import { Eyebrow } from 'payload/components/elements';
import plugin from '../ExperfyPlugin';
import Blocks from 'grapesjs-blocks-basic';
import { useStepNav } from 'payload/components/hooks';
// import '../';

const PageBuilder: React.FC = () => {
  // const [ editor, setEditor ] = useState<GrapesJS.Editor | null>( null );
  const { setStepNav } = useStepNav();
  useEffect(() => {
    setStepNav([
      {
        label: 'Page Builder',
        url: '/page-builder',
      },
    ]);
  }, [setStepNav]);

  const editor = GrapesJS.init({
    container: '#gjs',
    pageManager: {
      pages: [],
    },
    plugins: [Blocks],
    pluginsOpts: {
      plugin: {
        showStylesOnChange: false,
      },
    },
    height: '100%',
    fromElement: true,
    storageManager: {
      type: 'indexddb',
    },

   
  });

  editor.DomComponents.addType('text', {
    model: {
      defaults: {
        traits: [
          {
            type: 'text',
            name: 'my-text',
            label: 'Text',
            placeholder: ' Insert your text here',
          },
        ],
      },
    },
  });

  return (
    <div className="main__content">
      <Eyebrow />
      <div id="gjs" />
      
    </div>
  );
};

export default PageBuilder;
