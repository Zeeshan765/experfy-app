import React from 'react';
import FormSelect from '../../blocks/FormSelect';
import PageTemplate from '../PageBuilder/NewSectionTemplate/PageTemplate';
import SectionTemplate from '../PageBuilder/NewSectionTemplate/SectionTemplate';

const TemplatesLibrary = () => {
  const [template, setTemplate] = React.useState('Pages');

  return (
    <div style={{ background: '#fff' }}>
      <div
        style={{
          padding: '8px 3rem',
          // borderBottom:'1px solid gray',
          boxShadow: '1px 1px 3px 0px #000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div>
          <label htmlFor="type" style={{ display: 'block', margin: '0px' }}>
            Templete Library
          </label>
          <FormSelect
            name="page_type"
            label="Template Type"
            defaultValue={'Templates'}
            options={['Templates', 'Sections']}
            type={'select'}
            path={'page_type'}
          />
        </div>

        <div>
          <label htmlFor="search" style={{ display: 'block', margin: '0px' }}>
            Search Page
          </label>
          <input
            type="text"
            name="search"
            placeholder="Search Page"
            style={{
              width: '300px',
              border: '1px solid gray',
              boxShadow: '0px 0.25px 1px 0px #000',
              background: '#fff',
              borderRadius: '8px',
            }}
          />
        </div>
      </div>
      {template === 'Pages' && <PageTemplate />}
      {/* {template==="Pages"&& <PageTheme />} */}
      {template === 'Section' && <SectionTemplate />}
    </div>
  );
};

export default TemplatesLibrary;
