import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useConfig } from 'payload/components/utilities';
import GrapesJS from 'grapesjs';
import 'grapick/dist/grapick.min.css';
import { HeaderContext } from '../../../Providers/HeaderProvider';
interface parems {
  name?: string;
}

const Publish = () => {
  const { name }: parems = useParams();
  const { serverURL } = useConfig();
  const apiEndpoint = `${serverURL}/api`;
  let [editor, setEditorState] = useState<GrapesJS.Editor>();
  const { fetchHeaderId } = useContext(HeaderContext);

  //Fetch Page Data
  const fetchData = async () => {
    console.log('--------------', name);

    let response = await fetchHeaderId(name);
    if (response) {
      editor.loadProjectData(JSON.parse(response));
                setTimeout(() => {
            editor.Commands.run('core:preview');
          }, 1000);
    }
    console.log('response', response);
    // console.log("Publish Param",parem)
    // axios({
    //   method: 'get',
    //   url: `${apiEndpoint}/pages/${id}`,
    // })
    //   .then((res) => {
    //     const { pageCode } = res.data;

    //     if (pageCode) {
    //       editor.loadProjectData(JSON.parse(pageCode));
    //       setTimeout(() => {
    //         editor.Commands.run('core:preview');
    //       }, 1000);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log('err', err);
    //   });
  };

  //Initialize Editor
  const initializeEditor = () => {
    editor = GrapesJS.init({
      container: '.editor',
      fromElement: true,
      height: '100vh',
      storageManager: false,
      panels: { defaults: [] },
      canvas: {
        styles: ['https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css'],
        scripts: ['https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js'],
      },
    });
    //Delete Functionality
    editor.on('run:tlb-delete:before', (options) => {
      options.abort = true;
    });
    setEditorState(editor);
    // if (pageTitle) {
    //   fetchData();
    // }
  };

  useEffect(() => {
    initializeEditor();
    fetchData();
  }, []);

  return (
    <div className="editor-canvas">
      <div className="editor preview-editor-canvas"></div>
    </div>
  );
};

export default Publish;
