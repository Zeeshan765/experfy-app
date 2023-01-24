import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';
import BasicPortalIdentityCollection from './collections/BasicPortalIdentity';
import DesignSystemCollection from './collections/DesignSystemCollection';
import Media from './collections/Media';
import MenusCollection from './collections/MenusCollection';
import PageBuilderCollection from './collections/PageBuilder';
import PagesCollection from './collections/Page';
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
// import Form from './components/PageBuilder/NewSectionTemplate/Form';
// import ImgText from './components/PageBuilder/NewSectionTemplate/ImageAndText';
import SectionPageBuilder from './components/PageBuilder/SectionTemplates';
import PortalIdentity from './components/PortalIdentity';
import TemplatesLibrary from './components/TemplateLibrary';
import MyProvider from './MyProvider';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
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
          strict: true,
        },
        {
          path: '/collections/design-system',
          Component: DesignSystem,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/templates',
          Component: TemplatesLibrary,
        },
        {
          path: '/collections/themes-style',
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
        {
          path: '/collections/templates-library',
          Component: TemplatesLibrary,
        },
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
          path: '/collections/section-templates/image-and-text',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },

        {
          path: '/collections/section-templates/talent-cloud-candidates',
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

        // {
        //   path: '/collections/form',
        //   Component: Form,
        // },
        // {
        //   path: '/collections/image_and_text',
        //   Component: ImgText,
        // },
      ],
      // providers: [MyProvider],
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
});
