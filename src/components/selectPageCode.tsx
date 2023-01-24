// @ts-ignore
import React, { useContext } from 'react';
import TextInput from '../blocks/TextInput';
import { Context } from '../MyProvider';
type Props = { path: string };

const SelectPage = ({ path }) => {
  const { selectedPageCode } = useContext(Context);

  return (
    <div>
      <TextInput
        path={'page_Id'}
        required={true}
        placeHolder={selectedPageCode}
      />
    </div>
  );
};

export default SelectPage;
