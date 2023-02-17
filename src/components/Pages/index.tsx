import React, { useContext, useEffect, useState } from "react";
import { Eyebrow } from "payload/components/elements";
import FormSelect from "../../blocks/FormSelect";
import TextInput from "../../blocks/TextInput";
import PageTheme from "../PageBuilderTemplate";
import { Context } from "../../Providers/MyProvider";
import { useConfig } from "payload/components/utilities";
import { Form } from "payload/components/forms";
import { toast } from "react-toastify";
import { Route, useHistory } from "react-router-dom";
import { Box, Button } from "@material-ui/core";
import axios from "axios";
import { Dialog, DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Pages = () => {
  const { selectedPageCode, setPageCreateFromScratch } = useContext(Context);
  const [touched, setTouched] = useState("");
  const [pageData, setPageData] = useState({ pageType: "" });
  const [open, setOpen] = React.useState(false);
  const [id, setScratchId] = useState("");
  const history = useHistory();
  const From_scratch = "From_scratch";
  const Template = "Template";
  const {
    admin: { user: userSlug },
    collections,
    serverURL,
    routes: { admin, api },
  } = useConfig();
  const config= useConfig();

  // const onSuccess = (data) => {
  //   setScratchId(data.doc.id);
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

  // useEffect(() => {

  // }, []);
  useEffect(() => {
    handleOpen();
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
        if (pageData.pageType === From_scratch) {
          setScratchId(data.doc.id);
          setPageCreateFromScratch({ pageType: From_scratch, id: data.doc.id });
          // toast.success("please create a new page");
          history.push("/admin/collections/page-builder");
        } else {
          setPageCreateFromScratch("");
          toast.success(data.message);
          handleClose();
          history.push("/admin/collections/templates-library");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
    // }
  };
  // ==============Methods================
  const handleClose = () => {
    setOpen(false);
    history.goBack();
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handelChange = (e) => {
    const { name, value } = e.target;
    setPageData((pre) => ({ ...pre, [name]: value }));
  };

  console.log("===================",config);
  
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      maxWidth="md"
      fullWidth={true}
      sx={{ boxShadow: 1 }}
    >
      {" "}
      <DialogTitle
        className="model-title"
        // style={{
        //   borderBottom: "1px solid #000",
        //   boxShadow: "0px 1px 4px 1px #000",
        //   padding: ".75rem 1.5rem",
        // }}
      >
        <div
          style={{
            // padding: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span className="page-title"> Create New Page</span>
          <a onClick={handleClose} style={{ color: "#000", padding: "8px" }}>
            <CloseIcon />
          </a>
        </div>
      </DialogTitle>
      <div className="model-body">
        <Form
          onSubmit={() => handleSubmit("", "")}
          // onSuccess={onSuccess}
          // method={id ? "patch" : "post"}
          // method={"post"}
          // action={`${serverURL}${api}/pages?locale=en&depth=0&fallback-locale=null`}
        >
          <div style={{marginBottom:'1rem'}}>
            <TextInput
              label={"*Page Name"}
              onChange={handelChange}
              value={pageData["title"]}
              name="title"
              className="page-name"
            />
          </div>
          <span className="select-radio-title">*Choose the page type</span>

          <span className="page-radio-selection">
            <input
              type="radio"
              name="pageType"
              value={Template}
              onChange={handelChange}
            />
            &nbsp;&nbsp; Create Page from Template
          </span>
          <span className="page-radio-selection">
            <input
              type="radio"
              name="pageType"
              value={From_scratch}
              onChange={handelChange}
            />
            &nbsp;&nbsp; Create Page from Scratch
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
              {/* PageTemplate pass as a flag for select button condation */}
              <PageTheme fromScratch="fromScratch" />
            </>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "1rem",
              marginTop: "2.5rem",
            }}
          >
            <button className="outlined-btn" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Create Page
            </button>
          </div>
        </Form>
      </div>
    </Dialog>
  );
};

export default Pages;
