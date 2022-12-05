// import { useConfig } from 'payload/components/utilities';
import React, { useEffect } from "react";
// import { useState } from 'react';
// import { Redirect, useHistory } from 'react-router-dom';
const HookTest = ({
  doc, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  operation, // name of the operation ie. 'create', 'update'
}) => {
  // const [redirectState, SetRedirectState] =useState(false);
  // const { routes: { admin: adminRoute } } = useConfig();
  // const history= useHistory();
  // console.log("req==== fff",operation);
  // console.log("adminRoute=====",doc);   //res.redirect('/admin');
  // console.log("previousDoc====",previousDoc);
  // console.log("operation====",operation);
  if (operation === "create") {
    // location.replace(`/admin/collections/icon-collection`);
    // SetRedirectState(true);
    setTimeout(() => {
      // console.log("test off this", window.location);
      // document.location.replace('/admin');
    }, 1000);
    // return doc;
  }
};
export default HookTest;