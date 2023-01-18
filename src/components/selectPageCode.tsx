// @ts-ignore
import React, { useState, useContext } from "react";
import { useField } from "payload/components/forms";
import TextInput from "../blocks/TextInput";
import { useSelectPageId } from "../hooks";
import { Context } from "../MyProvider";
type Props = { path: string };

const SelectPage = ({ path }) => {
  const { selectedPageId } = useContext(Context);

  return (
    <div>
      <TextInput
        path={"page_Id"}
        required={true}
        defaultValue={selectedPageId}
        hidden={true}
      />
    </div>
  );
};

export default SelectPage;
