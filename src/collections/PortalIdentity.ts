// import { CollectionConfig } from "payload/types";
// import { AddToBrand } from "../blocks/portaliden/index";
// import { NextButton } from "../blocks/MyCustomButton";
// import { CollectionBeforeOperationHook } from "payload/types";
// import { CollectionAfterReadHook } from "payload/types";
// import { CollectionBeforeChangeHook } from "payload/types";
// import { CollectionAfterChangeHook } from "payload/types";
// import { CollectionBeforeReadHook } from "payload/types";
// import { elementAcceptingRef } from "@mui/utils";

// // const beforeChangeField: FieldHook = async ({
// //   req: { user },
// //   value,
// //   operation,
// // }) => {
// //   console.log("-----------------------FieldHook Called", operation);

// // if(operation === "read")

// //   {
// //     console.log("---------------read--------------",value)
// //   }

// // };
// type Data = Record<string, unknown>;

// const beforeOperationHook: CollectionBeforeOperationHook = async ({
//   args,
//   operation,
// }) => {
//   console.log("operation", operation);

//   // if (operation === "read") {
//   //   console.log("---read---")

//   //   args.collection.config.fields.forEach((element) => {
//   //     if (element.name === "portail_id") {
//   //       element["defaultValue"] = "portail_id";
//   //     }

//   //     if (element.name === "company_name") {
//   //       element["defaultValue"] = "company_name";
//   //     }
//   //   });
//   // }
//   // console.log("args",args.collection.config.fields)
//   // return args;
// };

// const beforeChangeHook: CollectionBeforeChangeHook = async ({ operation }) => {
//   console.log("beforeChangeHook operation", operation);
// };

// const afterChangeHook: CollectionAfterChangeHook = async () => {
//   console.log("After Change Hook Called");
// };

// const beforeReadHook: CollectionBeforeReadHook = async () => {
//   console.log("Before Read Hook Called");
// };

// const afterReadHook: CollectionAfterReadHook = async () => {
//   console.log("After Read  Hook Called");
// };

// export type Type = {
//   branding_On: boolean;
// };

// const PortalIdentity: CollectionConfig = {
//   slug: "portal-identity",

//   fields: [
//     {
//       type: "text",
//       name: "career_name",
//       label: "Career Portal Name",
//       required: true,
//       admin: {
//         description: ({ value }) =>
//           `${
//             typeof value === "string" && value.length >= 0 && value.length <= 10
//               ? "The go-to-market name of the career portal "
//               : ""
//           }`,
//       },

//       // hooks: {
//       //   beforeChange: [beforeChangeField],
//       // },
//     },

//     {
//       type: "text",
//       name: "portail_id",
//       label: "Portal ID",
//       admin: {
//         description: ({ value }) =>
//           `${
//             typeof value === "string" && value.length >= 0 && value.length <= 8
//               ? "The Read only filed display the Portal ID "
//               : ""
//           }`,
//       },
//     },
//     {
//       type: "text",
//       name: "portal_url",
//       label: "Portal URL",

//       required: true,
//       admin: {
//         description: ({ value }) =>
//           `${
//             typeof value === "string" && value.length >= 0 && value.length <= 8
//               ? "Access Your Career Portal Using this domain. This is the single main domain upon which all applications of your career portal based. Dont Include http or https in front of the URL."
//               : ""
//           }`,
//       },
//     },
//     {
//       type: "text",
//       name: "company_name",
//       label: "Company Name",
//       admin: {
//         description: ({ value }) =>
//           `${
//             typeof value === "string" && value.length >= 0 && value.length <= 8
//               ? "The Company name of your career Portal . This can be a Shorthand version of portal Name "
//               : ""
//           }`,
//       },
//       // hooks: {
//       //   afterChange: [hello],
//       // },
//     },
//     {
//       name: "language",
//       label: "Default Language",
//       type: "select",
//       // admin: {
//       //   description: ({ value }) =>
//       //     `${
//       //       typeof value === "string" && value.length >= 0 && value.length <= 8
//       //         ? "Set the default language of your career Portal for your visitors"
//       //         : ""
//       //     }`,
//       // },
//       options: [
//         {
//           label: "English",
//           value: "English",
//         },
//       ],
//     },

//     {
//       name: "locale",
//       label: "Default Locale",
//       type: "select",
//       // admin: {
//       //   description: ({ value }) =>
//       //     `${
//       //       typeof value === "string" && value.length >= 0 && value.length <= 8
//       //         ? "Set the default locale of your career Portal for your visitors"
//       //         : ""
//       //     }`,
//       // },
//       options: [
//         {
//           label: "US",
//           value: "US",
//         },
//       ],
//     },

//     {
//       type: "checkbox",
//       name: "branding_On",
//       label: "Branding On",
//     },
//     {
//       name: "default_brand",
//       label: "Default Brand",
//       type: "select",

//       admin: {
//         condition: (_, { branding_On }) => Boolean(branding_On),
//       },
//       options: [
//         {
//           label: "Pepsi",
//           value: "Pepsi",
//         },
//       ],
//     },

//     {
//       type: "row",

//       fields: [
//         {
//           name: "dom",

//           type: "radio",

//           admin: {
//             condition: (_, { branding_On }) => Boolean(branding_On),

//             layout: "horizontal",
//           },

//           options: [
//             {
//               label: "Sub-domains",
//               value: "Sub-domains",
//             },
//             {
//               label: "Sub-directories",
//               value: "Sub-directories",
//             },
//           ],
//         },
//       ],
//     },

//     {
//       name: "Brands",
//       label: "Add Brand",
//       type: "blocks",
//       minRows: 1,
//       admin: {
//         condition: (_, { branding_On }) => Boolean(branding_On),
//       },
//       blocks: [AddToBrand],
//     },
//     {
//       name: "next_btn",
//       type: "ui",

//       admin: {
//         components: {
//           Field: NextButton,
//         },
//       },
//     },
//   ],

//   hooks: {
//     beforeOperation: [beforeOperationHook],

//     beforeChange: [beforeChangeHook],
//     afterChange: [afterChangeHook],

//     beforeRead: [beforeReadHook],
//     afterRead: [afterReadHook],
//   },
// };

// export default PortalIdentity;








import { CollectionConfig } from 'payload/types';


import PortalIdentity from "../components/PortalIdentity";
// import landing from "../components/LandingPage";

const PortalIdentityCollection: CollectionConfig = {
  slug: 'portal-identity',
  labels: {
    singular: 'Portal Identity',
    plural: 'Portal Identity',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'Portal Identity',
      type: 'ui',
      label: 'Portal Identity',
      admin: {
        components: {
          Field: PortalIdentity,
          Cell: PortalIdentity,
        }
      }
    },
  ],
};

export default PortalIdentityCollection;
