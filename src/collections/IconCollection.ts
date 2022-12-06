import { create } from "domain";
import { getSiblingData } from "payload/components/forms";
import { CollectionConfig } from "payload/types";
import UplodField from "../components/UploadField";
import {
  CollectionBeforeOperationHook,
  CollectionAfterLoginHook,
  CollectionAfterChangeHook,
  CollectionAfterReadHook,
} from "payload/types";
import HookTestComponent from "../components/HookTest";
// import HookTestComponent from "../components/hookTest";
// import { Redirect, useHistory } from "react-router-dom";
// import { useHistory } from "react-router-dom";
const afterChangeHook: CollectionAfterChangeHook = async ({
  doc, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  operation, // name of the operation ie. 'create', 'update'
}) => {
  // const {replace} = useHistory();
  // console.log("Change Called=========", window.location);
  if (operation === "create") {
    // history.push("/admin")
  }
};
export type SizeDetails = {
  filename: string;
  width: number;
  height: number;
};
export type Size = "card" | "square" | "portrait" | "feature";
export type Type = {
  filename: string;
  alt: string;
  mimeType: string;
  sizes: {
    card?: SizeDetails;
    square?: SizeDetails;
    portrait?: SizeDetails;
    feature?: SizeDetails;
  };
};
interface propsdata {
  name?: string;
}
const beforeOperationHook: CollectionBeforeOperationHook = async ({
  args, // Original arguments passed into the operation
  operation, // name of the operation
}) => {
  // console.log("test of hook=======req====res:==", args.req.res);
  // const history= useHistory();
  console.log("test of hook=======req====res:==", operation);
  if (operation === "create") {
    // history.push("collections/icon-collection");
  }
  return args; // Return operation arguments as necessary
};
const afterReadHook: CollectionAfterReadHook = async ({
  doc, // full document data
  req, // full express request
  query, // JSON formatted query
  findMany, // boolean to denote if this hook is running against finding one, or finding many
}) => {
  
  // console.log("afterReadHook=====");
  // console.log("findMany=====",findMany);
  // console.log("query=====",query);
  // if(query?.$and[0]){
  //   console.log("window ====",window );
  // }
  // return doc;
}
// const afterLoginHook: CollectionAfterLoginHook = async ({
//   req, // full express request
//   user, // user that was logged in
//   token, // user token
// }) => {
//   console.log("test of token========",token);
//   }
const IconCollection: CollectionConfig = {
  slug: "icon-collection",
  access: {
    read: (): boolean => true,
  },
  admin: {
    group: "Media Library",
    useAsTitle: "filename",
  },
  upload: {
    adminThumbnail: "card",
    imageSizes: [
      {
        name: "card",
        width: 640,
        height: 480,
      },
      {
        name: "portrait",
        width: 768,
        height: 1024,
      },
      {
        name: "square",
        width: 1200,
        height: 1200,
      },
      {
        name: "feature",
        width: 1024,
        height: 576,
      },
    ],
    // adminThumbnail: '',
    mimeTypes: ["image/*", "image/svg", "image/jpeg"],
  },
  fields: [
    // {
    //   name: "Media Type",
    //   type: "text",
    //   defaultValue: "Icons",
    //   access: {
    //     read: () => true,
    //     // create: () => false,
    //   },
    // },
    {
      name: "title",
      label: "Icon Title",
      type: "text",
      required: true,
    },
    {
      name: "keywords",
      label: "Icon Keywords",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Icon Description",
      type: "textarea",
      required: true,
    },
  ],
  hooks: {
    afterChange: [HookTestComponent],
    // afterChange: [afterChangeHook],
    afterRead:[afterReadHook]
    

  },
};
export default IconCollection;