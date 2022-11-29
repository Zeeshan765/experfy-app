import GrapesJS from 'grapesjs';
import React, { useEffect, useState } from 'react';
import { Eyebrow } from 'payload/components/elements';
import plugin from './ExperfyPlugin';
import blocks from 'grapesjs-blocks-basic';
import { DefaultTemplate, MinimalTemplate } from 'payload/components/templates';
import { useStepNav } from 'payload/components/hooks';
import './index.scss';
export interface GrapesjsReactProps {
  id: HTMLElement[ 'id' ];

  onInit?( editor?: GrapesJS.Editor ): void;

  onDestroy?(): void;
}

const PageBuilder: React.FC<GrapesjsReactProps> = () => {

  const [ editor, setEditor ] = useState<GrapesJS.Editor | null>( null );
  const { setStepNav } = useStepNav();


  useEffect( () => {
    setStepNav( [
      {
        label: 'Page Builder',
        url: '/page-builder',
      },
    ] );
  }, [ setStepNav ] );

  useEffect( () => {

    const editor = GrapesJS.init( {
      container: '#gjs',
      plugins: [ plugin, blocks ],
      height: '100%',
      storageManager: true,
      fromElement: true,
      pluginsOpts: {
        plugin: {
          useCustomTheme: true,
        },
        blocks: {
          blocks: [ 'column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video', 'map' ]
        },
      }
    } );
    setEditor( editor );
  }, [ setEditor ] );

  return (
    <div className="main__content">
      <Eyebrow />
      <div id="gjs" />
      <div className='left__panel'>
        <div className='left__panel__header'>
          <h3>Page Builder</h3>
        </div>
      </div>
    </div>
  );
}

export default PageBuilder;

