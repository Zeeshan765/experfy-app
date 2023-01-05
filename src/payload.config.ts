import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';
import BasicPortalIdentityCollection from './collections/BasicPortalIdentity';
import BenefitCollection from './collections/Benefit';
import DepartmentCollection from './collections/Department';
import DesignSystemCollection from './collections/DesignSystemCollection';
import FooterCollection from './collections/Footer';
import FormCollection from './collections/Form';
import GuidelineCollection from './collections/Guideline';
import HeaderCollection from './collections/Header';
import ImgTextCollection from './collections/ImageAndText';
import LocationCollection from './collections/Location';
import Media from './collections/Media';
import MenusCollection from './collections/MenusCollection';
import NewPageBuilderCollection from './collections/NewPageBuilder';
import NumberCollection from './collections/Number';
import PagesCollection from './collections/Page';
import PageBuilderCollection from './collections/PageBuilder';
import ParagraphCollection from './collections/Paragraph';
import PracticeAreaCollection from './collections/PracticeArea';
import SectionTemplateCollection from './collections/SectionTemplatesCollection';
import TalentCloudCollection from './collections/TalentCloud';
import TemplatesCollection from './collections/TemplatesCollection';
import TestimonialCollection from './collections/Testimonial';
import ThemeCollection from './collections/ThemeCollection';
import Users from './collections/UsersCollection';
import BasicPortalIdentityPage from './components/BasicPortalPage';
import AfterNav from './components/Nav/AfterNav';
import ExperfyLogo from './components/Nav/AppLogo';
import BeforeNav from './components/Nav/BeforeNav';
import NewPageBuilder from './components/NewPageBuilder';
import PageBuilder from './components/PageBuilder';
import DesignSystem from './components/PageBuilder/DesignSystem';
import Benefit from './components/PageBuilder/NewSectionTemplate/Benefit';
import Footer from './components/PageBuilder/NewSectionTemplate/Footer';
import Form from './components/PageBuilder/NewSectionTemplate/Form';
import Guideline from './components/PageBuilder/NewSectionTemplate/Guideline';
import Header from './components/PageBuilder/NewSectionTemplate/Header';
import ImgText from './components/PageBuilder/NewSectionTemplate/ImageAndText';
import Location from './components/PageBuilder/NewSectionTemplate/Location';
import MetricNumbers from './components/PageBuilder/NewSectionTemplate/Number';
import Paragraph from './components/PageBuilder/NewSectionTemplate/Paragraph';
import PracticeArea from './components/PageBuilder/NewSectionTemplate/PracticeArea';
import Testimonial from './components/PageBuilder/NewSectionTemplate/Testimonial';
import SectionPageBuilder from './components/PageBuilder/SectionTemplates/sections';
import PortalIdentity from './components/PortalIdentity';
import TemplatesLibrary from './components/TemplateLibrary';
import Templates from './components/Templates';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,

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
          path: '/collections/page-builder',
          Component: PageBuilder,
          exact: true,
        },
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
          Component: Templates,
        },
        {
          path: '/collections/themes-style',
          Component: DesignSystem,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/new-page-builder',
          Component: NewPageBuilder,
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
          path: '/collections/footer',
          Component: Footer,
        },
        {
          path: '/collections/header',
          Component: Header,
        },
        {
          path: '/collections/paragraph',
          Component: Paragraph,
        },
        {
          path: '/collections/metrics_number',
          Component: MetricNumbers,
        },
        {
          path: '/collections/testimonial',
          Component: Testimonial,
        },
        {
          path: '/collections/benefit',
          Component: Benefit,
        },
        {
          path: '/collections/guideline',
          Component: Guideline,
        },
        {
          path: '/collections/form',
          Component: Form,
        },
        {
          path: '/collections/location',
          Component: Location,
        },
        {
          path: '/collections/image_and_text',
          Component: ImgText,
        },
        {
          path: '/collections/practice_area',
          Component: PracticeArea,
        },
        {
          path: '/collections/footer',
          Component: Footer,
        },
        {
          path: '/collections/header',
          Component: Header,
        },
        {
          path: '/collections/paragraph',
          Component: Paragraph,
        },
      ],
    },
  },
  collections: [
    BasicPortalIdentityCollection,
    PageBuilderCollection,
    TemplatesCollection,
    DesignSystemCollection,
    ThemeCollection,
    MenusCollection,
    PagesCollection,
    Media,
    NewPageBuilderCollection,
    FooterCollection,
    HeaderCollection,
    ParagraphCollection,
    NumberCollection,
    TestimonialCollection,
    BenefitCollection,
    GuidelineCollection,
    FormCollection,
    LocationCollection,
    ImgTextCollection,
    PracticeAreaCollection,
    Users,
    DepartmentCollection,
    TalentCloudCollection,
    // ImageBannerCollection,
    SectionTemplateCollection,
  ],
  i18n: {
    supportedLngs: ['en', 'es'],
    saveMissing: true,
    fallbackLng: 'en',
  },

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
