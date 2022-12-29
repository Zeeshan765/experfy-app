import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';
import BasicPortalIdentityCollection from './collections/BasicPortalIdentity';
import BenefitCollection from './collections/Benefit';
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
import SectionTemplateCollection from './collections/SectionTemplatesCollection';
import TemplatesCollection from './collections/TemplatesCollection';
import TestimonialCollection from './collections/Testimonial';
import ThemeCollection from './collections/ThemeCollection';
import Users from './collections/UsersCollection';
import BasicPortalIdentityPage from './components/BasicPortalPage';
import AfterNav from './components/Nav/AfterNav';
import ExperfyLogo from './components/Nav/AppLogo';
import BeforeNav from './components/Nav/BeforeNav';
import NewPageBuilder from './components/NewPageBuilder';
import DesignSystem from './components/PageBuilder/DesignSystem';
import Benefit from './components/PageBuilder/NewSectionTemplate/Benefit';
import Footer from './components/PageBuilder/NewSectionTemplate/Footer';
import Form from './components/PageBuilder/NewSectionTemplate/Form';
import Guideline from './components/PageBuilder/NewSectionTemplate/Guideline';
import Header from './components/PageBuilder/NewSectionTemplate/Header';
import Location from './components/PageBuilder/NewSectionTemplate/Location';
import MetricNumbers from './components/PageBuilder/NewSectionTemplate/Number';
import Paragraph from './components/PageBuilder/NewSectionTemplate/Paragraph';
import Testimonial from './components/PageBuilder/NewSectionTemplate/Testimonial';
import PageBuilder from './components/PageBuilder/SectionTemplates';
import SectionPageBuilder from './components/PageBuilder/SectionTemplates/sections';
import PortalIdentity from './components/PortalIdentity';
import TemplatesLibrary from './components/TemplateLibrary';
import Templates from './components/Templates';
import MyProvider from './MyProvider';
import ImgText from './components/PageBuilder/NewSectionTemplate/ImageAndText';
import PracticeArea from './components/PageBuilder/NewSectionTemplate/PracticeArea';
import PracticeAreaCollection from './collections/PracticeArea';
import Department from './components/PageBuilder/NewSectionTemplate/Department';
import DepartmentCollection from './collections/Department';
import TalentCloud from './components/PageBuilder/NewSectionTemplate/TalentCloud';
import TalentCloudCollection from './collections/TalentCloud';
import ImageBanner from './components/PageBuilder/NewSectionTemplate/ImageBanner';
import ImageBannerCollection from './collections/ImageBanner';

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
          path: '/collections/department',
          Component: Department,
        },
        {
          path: '/collections/talent_cloud',
          Component: TalentCloud,
        },
        {
          path: '/collections/image_banner',
          Component: ImageBanner,
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
    SectionTemplateCollection,
    PracticeAreaCollection,
    Users,
    DepartmentCollection,
    TalentCloudCollection,
    ImageBannerCollection,
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
