import dotenv from "dotenv";
import path from "path";
import { buildConfig } from "payload/config";
import Media from "./collections/Media";
import PageBuilderCollection from "./collections/PageBuilder";
import PortalIdentityDetail from "./collections/PortalIdentityDetail";
import Users from "./collections/Users";
import BasicPortalIdentityPage from "./components/BasicPortalPage";
import AfterNav from "./components/Nav/AfterNav";
import ExperfyLogo from "./components/Nav/AppLogo";
import BeforeNav from "./components/Nav/BeforeNav";
import PageBuilder from "./components/PageBuilder";
import PortalIdentity from "./components/PortalIdentity";
import MyProvider from "./MyProvider";

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    // user: Users.slug,
    css: path.resolve(__dirname, './styles/scss/index.scss'),
    components: {  
      graphics: {
        Logo: ExperfyLogo,
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
