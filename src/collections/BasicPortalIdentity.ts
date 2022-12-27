import {
  CollectionBeforeChangeHook,
  CollectionBeforeReadHook,
  CollectionConfig,
} from "payload/types";
import BasicPortalPage from "../components/BasicPortalPage";

const BasicPortalIdentityCollection: CollectionConfig = {
  slug: "basic-portal-identity",
  labels: {
    singular: "Basic Portal Identity",
    plural: "Basic Portal Identity",
  },

  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  admin: {
    components: {
      views: {
        Edit: BasicPortalPage,
        List: BasicPortalPage,
      },
    },
  },
  fields: [
    {
      name: "user_portal",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
      // required: true,
      // required: true,
    
    },
    {
      label: "Portal Name",
      name: "career_portal_name",
      type: "text",
      defaultValue: "Career Portal",
      required: false,
    },
    {
      name: "portal_url",
      type: "text",
      required: false,
    },
    {
      name: "portal_id",
      unique: true,
      type: "text",
    },
    {
      name: "default_locale",
      type: "select",
      options: ["US", "ES"],
    },
    {
      name: "default_language",
      type: "select",
      options: ["English", "Spanish"],
    },

    {
      name: "company_name",
      type: "text",
    },

    {
      name: "page_title",
      type: "text",
    },
    {
      name: 'meta_keywords',
      type: 'text',
    },
    {
      name: "meta_description",
      type: "text",
    },
    {
      name: 'tracking_pixel',
      type: 'text',
    },
    {
      name: 'bing_webmaster',
      type: 'text',
    },
    {
      name: "google_webmaster",
      type: "text",
    },
    {
      name: 'google_analytics',
      type: 'text',
    },
    {
      name: 'google_id',
      type: 'text',
    },
    {
      name: 'micro_sites',
      label: 'Micro Sites',
      type: 'radio',
      required: true,
      defaultValue: "sub_directories",
      options: [
        {
          label: 'Sub-domains',
          value: 'sub_domain',
        },
        {
          label: 'Sub-directories',
          value: 'sub_directories',
        },
      ],
    },
    // {
    //   name : 'Sub-domains',
    //   type: 'radio',
    //   options: ['sub_domain'],

    //  },
    //  {
    //   name : 'Sub-directories',
    //   type: 'radio',
    //   options: ['sub_directories'],

    //  },
    {
      name: 'brands',
      type: 'array',
      fields: [
        {
          name: "brand_name",
          type: "text",
          //hidden: true,
        },
        {
          name: "brand_identifier",
          type: "text",
          //hidden: true,
        },
        {
          name: "microsoft_identifier",
          type: "text",
          //hidden: true,
        },
      ],
    },

    // {
    //   type: "row",
    //   // hidden: true,
    //   fields: [
    //     {
    //       name: "dom",
    //       type: "radio",
    //       admin: {
    //         layout: "horizontal",
    //       },
    //       options: [
    //         {
    //           label: "sub_domain",
    //           value: "sub_domain",
    //         },
    //         {
    //           label: "sub_directories",
    //           value: "sub_directories",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};
const beforeChangeHook: CollectionBeforeChangeHook = async ({ operation }) => {
  console.log("beforeChangeHook operation", operation);
};
const beforeReadHook: CollectionBeforeReadHook = async () => {
  console.log("Before Read Hook Called");
};

export default BasicPortalIdentityCollection;
