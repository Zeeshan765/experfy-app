import { TextInput } from 'payload/components/forms';
import React from 'react';
const UploadField = (props) => {
  console.log('test of props===============>>>>', props);
  return (
    <>
      {/* <h2>hello test</h2> */}
      <TextInput name="upload" path={'upload'} label={'Upload'} />
    </>
  );
};
export default UploadField;
