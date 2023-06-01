import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';
import BasicPortalIdentityCollection from './collections/BasicPortalIdentity';
import Brand from './collections/Brand';
import DesignSystemCollection from './collections/DesignSystemCollection';
import Media from './collections/Media';
import MenusCollection from './collections/MenusCollection';
import PagesCollection from './collections/Page';
import PageBuilderCollection from './collections/PageBuilder';
import PageHistory from './collections/pageHistory';
import PageTemplateCollection from './collections/PageTemplate';
import SectionTemplateCollection from './collections/SectionTemplatesCollection';
import TemplatesCollection from './collections/TemplatesCollection';
import ThemeCollection from './collections/ThemeCollection';
import Users from './collections/UsersCollection';
import BasicPortalIdentityPage from './components/BasicPortalPage';
import AfterNav from './components/Nav/AfterNav';
import ExperfyLogo from './components/Nav/AppLogo';
import BeforeNav from './components/Nav/BeforeNav';
import PageBuilder from './components/PageBuilder';
import DesignSystem from './components/PageBuilder/DesignSystem';
import SectionPageBuilder from './components/PageBuilder/SectionTemplates';
import ThemeStyle from './components/PageBuilder/ThemeStyle';
import PortalIdentity from './components/PortalIdentity';
import TemplatesLibrary from './components/TemplateLibrary';
import AssetsProvider from './Providers/AssetsProvider';
import DataProvider from './Providers/DataProvider';
import MyProvider from './Providers/MyProvider';
import UserProvider from './Providers/UserProvider';
import SectionBuilder from './collections/SectionBuilder';
import SectionSaveCollection from './collections/SectionSave';
import { DataContext } from './Providers/DataProvider';
import Publish from './components/PageBuilder/Publish';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: 'users',
    dateFormat: 'dd/MM/yyyy',
    css: path.resolve(__dirname, './styles/scss/index.scss'),
    components: {
      graphics: {
        Logo: ExperfyLogo,
        Icon: ExperfyLogo,
      },

      beforeNavLinks: [BeforeNav],
      afterNavLinks: [AfterNav],
      routes: [
        {
          path: '/collections/basic-portal-identity',
          Component: BasicPortalIdentityPage,
          exact: true,
        },
        {
          path: '/collections/portal-identity',
          Component: PortalIdentity,
          exact: true,
        },
        {
          path: '/collections/portal-identity/:id',
          Component: PortalIdentity,
          exact: true,
        },
        {
          path: '/collections/design-system',
          Component: ThemeStyle,
          exact: true,
        },
        {
          path: '/collections/templates',
          Component: TemplatesLibrary,
          exact: true,
        },
        {
          path: '/collections/themes-style',
          Component: ThemeStyle,
          exact: true,
        },
        
        {
          path: '/collections/templates-library',
          Component: TemplatesLibrary,
        },

        {
          path: '/collections/page-builder/:id',
          Component: PageBuilder,
          exact: true,
        },
        {
          path: "/collections/themes-style",
          Component: DesignSystem,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/page-builder',
          Component: PageBuilder,
          exact: true,
          strict: true,
        },
       
        // {
        //   path: "/collections/templates-library",
        //   Component: SectionPageBuilder,
        //   exact: true,
        //   strict: true,
        // },
        {
          path: '/collections/section-templates',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/section-templates/header',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/section-templates/footer',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/section-templates/benefits',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/section-templates/practice-areas',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/section-templates/video',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/section-templates/guidelines',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/section-templates/location',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },

        {
          path: '/collections/section-templates/paragraph',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/section-templates/department',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },

        {
          path: '/collections/section-templates/metrics-numbers',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },

        {
          path: '/collections/section-templates/image-banner',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/section-templates/photo-gallery',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/section-templates/photo-gallery',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },

        {
          path: '/collections/section-templates/image-and-text',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
       
        {
          path: '/collections/section-templates/testimonial',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },

        {
          path: '/publish/:id',
          Component: Publish,
          exact: true,
          strict: true,
        },
        // {
        //   path: '/collections/section-templates/swiper',
        //   Component: SectionPageBuilder,
        //   exact: true,
        //   strict: true,
        // },
      ],
      providers: [UserProvider, AssetsProvider, MyProvider, DataProvider],
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(scss)$/,
        use: [
          {
            loader: 'resolve-url-loader', // <-- receives CSS and source-map from SASS compile
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true, // <-- IMPORTANT!
            },
          },
        ],
      });

      return config;
    },
  },
  collections: [
    BasicPortalIdentityCollection,
    TemplatesCollection,
    DesignSystemCollection,
    ThemeCollection,
    MenusCollection,
    PagesCollection,
    PageTemplateCollection,
    Media,
    PageBuilderCollection,
    Users,
    SectionTemplateCollection,
    Brand,
    PageHistory,
    SectionBuilder,
    SectionSaveCollection,
  ],
  i18n: {
    supportedLngs: ['en', 'es'],
    saveMissing: true,
    fallbackLng: 'en',
  },
  debug: true,
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  cors: ['*'],
  csrf: [
    'https://landing-ui-service.develop.experfy.com',
    'http://localhost:3000',
  ],
});
