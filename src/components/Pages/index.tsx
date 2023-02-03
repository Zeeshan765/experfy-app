import React, { useContext, useState } from "react";
import { Eyebrow } from "payload/components/elements";
import FormSelect from "../../blocks/FormSelect";
import TextInput from "../../blocks/TextInput";
import PageTheme from "../PageBuilderTemplate";
import { Context } from "../../MyProvider";
import { useConfig } from "payload/components/utilities";
import { Form } from "payload/components/forms";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Pages = () => {
  const { selectedPageCode,setIdCreateFromScratch } = useContext(Context);
  const [touched, setTouched] = useState("");
  const [pageType, SetPageType] = useState("Template");
  const [id, setId] = useState("");
  const history = useHistory();
  const {
    admin: { user: userSlug },
    collections,
    serverURL,
    routes: { admin, api },
  } = useConfig();
  const onSuccess = (data) => {
    setId(data.doc.id);
    setIdCreateFromScratch(data.doc.id);
    if (pageType === "from_scratch") {
      toast.success("please create a new page");
      history.push("/admin/collections/page-builder");
    }
    // else{
    //   toast.success(data.message);
    // }
    // if (brandSwitch) {
    //   setVisible(true);
    // } else {
    //   setVisible(false);
    //   history.push({
    //     pathname: `/admin/collections/portal-identity/${data.doc.id}`,
    //     //@ts-ignore
    //     param: data.doc.id,
    //   });
  };

  return (
    <div style={{ padding: "20px" }}>
      <Eyebrow />
      {/* http://localhost:3001/api/pages?locale=en&depth=0&fallback-locale=null */}
      <Form
        onSuccess={onSuccess}
        method={id ? "patch" : "post"}
        action={`${serverURL}${api}/pages?locale=en&depth=0&fallback-locale=null`}
      >
        <TextInput path="title" label={"Page title"} name="title" />
        {/* <select
          id="template_type"
          // path="pageType"
          name="pageType"
          onChange={(e) => {
            SetPageType(e.target.value);
          }}
        >
          <option value="" disabled selected hidden>
            Select page type
          </option>
          <option value="template">Template</option>
          <option value="from_scratch">From_scratch</option>
        </select> */}
        <FormSelect
          type={"select"}
          path="pageType"
          label={"Page type"}
          name="pageType"
          options={["Template", "From_scratch"]}
          // onChange={()=>setTouched(setTouched)}
          // setTouched={(teste)=>{console.log("test",teste);
          // }}
        />
        {pageType === "Template" && (
          <>
            <PageTheme />
            {/* page Id whe theme select */}
            {/* <TextInput
              path={"page_Id"}
              name="page_Id"
              required={true}
              defaultValue={selectedPageCode ?? null}
              hidden={true}
            /> */}
            <TextInput
              path={"page_Id"}
              required={true}
              defaultValue={selectedPageCode ?? null}
              hidden={true}
            />
          </>
        )}
        <button
          type="submit"
          style={{
            width: "100px",
            height: "40px",
            backgroundColor: "lightblue",
            color: "#fff",
            border: "none",
          }}
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Pages;
