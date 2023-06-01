import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useConfig } from 'payload/components/utilities';
import GrapesJS from 'grapesjs';
import 'grapick/dist/grapick.min.css';
interface parems {
  id?: string;
}

const Publish = () => {
  const { id }: parems = useParams();
  const {serverURL } = useConfig();
  const apiEndpoint = `${serverURL}/api`;
  let [editor, setEditorState] = useState<GrapesJS.Editor>();

  
  const fetchData = () => {
    if (id) {
      axios({
        method: 'get',
        url: `${apiEndpoint}/pages/${id}`,
      })
        .then((res) => {
          
          const { pageCode } = res.data;
         
          if (pageCode) {
            editor.loadProjectData(JSON.parse(pageCode));
          }
        })
        .catch((err) => {
          console.log('err', err);
        });
    }
  };

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

    setEditorState(editor);
    if (id) {
      fetchData();
    }
  };

 

  useEffect(() => {
    initializeEditor();
  }, []);

  return (
    <div className="editor-canvas">
      <div className="editor"></div>
    </div>
  );
};

export default Publish;
