import { IconButton } from "@mui/material";
import dotenv from "dotenv";
import path from "path";
import { buildConfig } from "payload/config";
import BasicPortalIdentityCollection from "./collections/BasicPortalIdentity";
import Media from "./collections/Media";
import PageBuilderCollection from "./collections/PageBuilder";
import PICollection from "./collections/PICollection";
import PortalIdentityCollection from "./collections/PortalIdentity";
import PortalIdentityDetail from "./collections/PortalIdentityDetail";
import Users from "./collections/Users";
import BasicPortalIdentityPage from "./components/BasicPortalPage";
import ExperfyLogo from "./components/AppLogo";
import AfterNav from "./components/AfterNav";
import BeforeNav from "./components/BeforeNav";
import PageBuilder from "./components/PageBuilder";
import PortalIdentity from "./components/PortalIdentity";
import MyProvider from "./MyProvider";

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    // user: Users.slug,
    css: path.resolve(__dirname, './styles/customAdmin.scss'),
    
    components: {
      
      graphics: {
        Logo: ExperfyLogo,
        Icon: ExperfyLogo,
      },
      afterNavLinks: [AfterNav],
      beforeNavLinks: [BeforeNav],
      routes: [
        {
          path: '/collections/page-builder',
          Component: PageBuilder,
        },
        {
          path: '/collections/basic-portal-identity',
          Component: BasicPortalIdentityPage,

        },
        {
          path: '/collections/portal-identity',
          Component: PortalIdentity,
        },
      ],
      providers: [MyProvider],
    },
  },
  collections: [
    
    
    PortalIdentityDetail,
    PageBuilderCollection,
    Media,
    

  ],
  
  localization: {
    locales: [
      'en',
      'es',
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  cors: ('*'),
  
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
