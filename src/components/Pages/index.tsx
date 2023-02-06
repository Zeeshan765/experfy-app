import React, { useContext, useEffect, useState } from "react";
import { Eyebrow } from "payload/components/elements";
import FormSelect from "../../blocks/FormSelect";
import TextInput from "../../blocks/TextInput";
import PageTheme from "../PageBuilderTemplate";
import { Context } from "../../MyProvider";
import { useConfig } from "payload/components/utilities";
import { Form } from "payload/components/forms";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Box, Button } from "@material-ui/core";
import axios from "axios";

const Pages = () => {
  const { selectedPageCode, setPageCreateFromScratch } = useContext(Context);
  const [touched, setTouched] = useState("");
  const [pageData, setPageData] = useState({ pageType: "" });
  const [id, setId] = useState("");
  const history = useHistory();
  const From_scratch = "From_scratch";
  const Template = "Template";
  const {
    admin: { user: userSlug },
    collections,
    serverURL,
    routes: { admin, api },
  } = useConfig();
  // const onSuccess = (data) => {
  //   setId(data.doc.id);
  //   setPageCreateFromScratch(data.doc.id);
  //   if (pageData?.pageType === From_scratch) {
  //     toast.success("please create a new page");
  //     history.push("/admin/collections/page-builder");
  //   }
  //   // else{
  //   //   toast.success(data.message);
  //   // }
  //   // if (brandSwitch) {
  //   //   setVisible(true);
  //   // } else {
  //   //   setVisible(false);
  //   //   history.push({
  //   //     pathname: `/admin/collections/portal-identity/${data.doc.id}`,
  //   //     //@ts-ignore
  //   //     param: data.doc.id,
  //   //   });
  // };

  useEffect(() => {
    if (id) {
      handleSubmit({}, id);
    }
    if (selectedPageCode && pageData?.pageType === Template)
      setPageData((pre) => ({ ...pre, pageId: selectedPageCode }));
  }, [selectedPageCode, id]);

  const handleSubmit = async (_: any, id: string) => {
    // const formData = new FormData();
    // formData.append("_payload", JSON.stringify({ pageData }));
    // if (id) {
    // } else {
    axios({
      method: `${id ? "patch" : "post"}`,
      url: `${serverURL}${api}/pages?locale=en&depth=0&fallback-locale=null`,
      // ${id ? `/${id}` : ""}
      data: id ? "" : pageData,
      // data:pageData,
    })
      .then((res) => {
        const { data } = res;
        console.log("data=====", data);

        if (pageData.pageType === From_scratch) {
          setId(data.doc.id);
          setPageCreateFromScratch({ pageType: From_scratch, id: data.doc.id });
          toast.success("please create a new page");
          history.push("/admin/collections/page-builder");
        } else {
          setPageCreateFromScratch("");
          toast.success(data.message);
          history.push("/admin/collections/templates-library");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
    // }
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setPageData((pre) => ({ ...pre, [name]: value }));
  };
console.log("pageData======",pageData);

  return (
    <Box padding={4}>
      <Eyebrow />
      {/* http://localhost:3001/api/pages?locale=en&depth=0&fallback-locale=null */}
      <Form
        onSubmit={() => handleSubmit("", "")}
        // onSuccess={onSuccess}
        // method={id ? "patch" : "post"}
        // method={"post"}
        // action={`${serverURL}${api}/pages?locale=en&depth=0&fallback-locale=null`}
      >
        <TextInput
          label={"*Page Name"}
          onChange={handelChange}
          value={pageData["title"]}
          name="title"
        />
        <label style={{ display: "block" }}>*Choose the page type</label>

        <span style={{ display: "block" }}>
          <input
            type="radio"
            name="pageType"
            value={Template}
            onChange={handelChange}
          />
          &nbsp; Create Page from Scratch
        </span>
        <span style={{ display: "block" }}>
          <input
            type="radio"
            name="pageType"
            value={From_scratch}
            onChange={handelChange}
          />{" "}
          Create &nbsp; Page from Template
        </span>

        {/* <FormSelect
          type={"select"}
          label={"Page type"}
          value={pageData?.pageType}
          name="pageType"
          options={[
            { value: Template, label: Template },
            { value: From_scratch, label: From_scratch },
          ]}
          onChange={handelChange}
        /> */}
        {pageData?.pageType === Template && (
          <>
            <PageTheme />
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
    </Box>
  );
};

export default Pages;
