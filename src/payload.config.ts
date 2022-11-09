import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';
import Categories from './collections/Categories';
import Home from './collections/Home';
import LandingCollection from './collections/LandingPage';
import PageBuilderCollection from './collections/PageBuilder';
import PortalIdentityCollection from './collections/PortalIdentity';
import Tags from './collections/Tags';
import Users from './collections/Users';
import PageBuilder from './components/PageBuilder';
import MyProvider from './MyProvider';
dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
    css: path.resolve(__dirname, './styles/customAdmin.scss'),
    components: {
      routes: [
        {
          path: '/collections/page_builder',
          Component: PageBuilder,
        },
      ],
      providers: [MyProvider],
    },
  },
  collections: [
    Users,
    Home,
    Categories,
    Tags,
    LandingCollection,
    PortalIdentityCollection,
    PageBuilderCollection,
  ],

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },

});
