// @ts-ignore
import React, { useState, useContext } from "react";
import { useField } from "payload/components/forms";
import TextInput from "../blocks/TextInput";
import { useSelectPageId } from "../hooks";
import { Context } from "../Providers/MyProvider";
type Props = { path: string };

const SelectPage = ({ path }) => {
  const { selectedPageCode } = useContext(Context);

  return (
    <div>
      <TextInput
        path={"pageId"}
        required={true}
        defaultValue={selectedPageCode??null}
        hidden={true}
      />
    </div>
  );
};

export default SelectPage;
