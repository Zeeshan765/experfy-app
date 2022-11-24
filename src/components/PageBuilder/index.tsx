import GrapesJS from 'grapesjs';
import React, { useEffect } from 'react';
import './index.scss';
// import './CustomGrapes.css';
import { Eyebrow } from 'payload/components/elements';
import plugin from './ExperfyPlugin';

export interface GrapesjsReactProps {
  id: HTMLElement['id'];

  onInit?(editor?: GrapesJS.Editor): void;

  onDestroy?(): void;
}

const PageBuilder:React.FC  = (props: GrapesjsReactProps) => {

  const [editor, setEditor] = React.useState<GrapesJS.Editor | null>(null);

  useEffect(() => {
    const editor = GrapesJS.init({
      container: '#editor',
      plugins: [plugin],
      height: '100%',
      showOffsets: true,
      noticeOnUnload: 0,
      storageManager: false,
      fromElement: true,
      pluginsOpts: {
        plugin: {
          useCustomTheme: true,

        }
      }
    });
    setEditor(editor);
  }, []);
  

  return (
    <div className="main__content">
      <Eyebrow />
      <div id="editor"></div>
    </div>
  );
}

export default PageBuilder;
