import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography
} from '@mui/material';
import LinkTag from '@mui/material/Link';
import { useStyles } from '../styles';
// import SidebarLink from './settings-items/SettingsLink';
// import TopLink from './settings-items/TopLink';
import BannersIcon from '../../assets/images/global-theme-settings/sidebar/banners.svg';
import BenefitsIcon from '../../assets/images/global-theme-settings/sidebar/benefits.svg';
import ContentIcon from '../../assets/images/global-theme-settings/sidebar/content.svg'
import DepratmentsIcon from '../../assets/images/global-theme-settings/sidebar/departments.svg';
import FootersIcon from '../../assets/images/global-theme-settings/sidebar/footers.svg';
import GuidelinesIcon from '../../assets/images/global-theme-settings/sidebar/guidelines.svg';
import HeadersIcon from '../../assets/images/global-theme-settings/sidebar/headers.svg';
import JobsIcon from '../../assets/images/global-theme-settings/sidebar/jobs.svg';
import LocationIcon from '../../assets/images/global-theme-settings/sidebar/location.svg';
import MetricsIcon from '../../assets/images/global-theme-settings/sidebar/metrics.svg';
import NewsletterIcon from '../../assets/images/global-theme-settings/sidebar/newsletter.svg';
import ParagraphIcon from '../../assets/images/global-theme-settings/sidebar/paragraph.svg';
import PracticeAreaIcon from '../../assets/images/global-theme-settings/sidebar/practice-area.svg';
import TalentcloudIcon from '../../assets/images/global-theme-settings/sidebar/talentcloud.svg';
import TestimonialsIcon from '../../assets/images/global-theme-settings/sidebar/testimonials.svg';
import VideoIcon from '../../assets/images/global-theme-settings/sidebar/video.svg'; 

const sectionLinks = [
  { title: "Headers", icon: HeadersIcon, alt: "Headers", link: '/' },
  { title: "Footers", icon: FootersIcon, alt: "Footers", link: '/' },
  { title: "Practice Area Module", icon: PracticeAreaIcon, alt: "Practice Area Module", link: '/' },
  { title: "Job Listing Module", icon: JobsIcon, alt: "Job Listing Module", link: '/' },
  { title: "TalentCloud Module", icon: TalentcloudIcon, alt: "TalentCloud Module", link: '/' },
  { title: "Departments", icon: DepratmentsIcon, alt: "Departments", link: '/' },
  { title: "Testimonials", icon: TestimonialsIcon, alt: "Testimonials", link: '/' },
  { title: "Benefits or Perks", icon: BenefitsIcon, alt: "Benefits or Perks", link: '/' },
  { title: "Guidelines/Lists/Steps", icon: GuidelinesIcon, alt: "Guidelines/Lists/Perks", link: '/' },
  { title: "Location", icon: LocationIcon, alt: "Location", link: '/' },
  { title: "Metrics/Numbers", icon: MetricsIcon, alt: "Metrics/Numbers", link: '/' },
  { title: "Newsletter Subscription", icon: NewsletterIcon, alt: "Newsletter Subscription", link: '/' },
  { title: "Image Banners", icon: BannersIcon, alt: "Image Banners", link: '/' },
  { title: "Video", icon: VideoIcon, alt: "Video", link: '/' },
  { title: "Image and Text", icon: ContentIcon, alt: "Image and Text", link: '/' },
  { title: "Paragraph", icon: ParagraphIcon, alt: "Paragraph", link: '/' },
]

const pageLinks = [
  { title: "Signup to Talent Community", link: '/' },
  { title: "Browse Job Opportunities", link: '/' },
  { title: "Jobs Detail Page", link: '/' },
  { title: "Practice Area Page", link: '/' },
  { title: "Department Page", link: '/' },
  { title: "Home Page", link: '/' },
  { title: "Landing Page", link: '/' },
  { title: "404 Error", link: '/' },
]

function ThemeBuilderSidebar(props) {
  const classes = useStyles();

  return (
    <Box className={classes.settingsSidebar}>
    {/* //   <Box className={classes.settingsSidebarWrapper}>
    //     <nav>
    //       <TopLink  */}
    {/* //         link={"/portal-settings"} */}
    {/* //         title={"Theme Builder"} /> */}
    {/* //       <Box */}
    {/* //         className={classes.settingsSidebarGroup}>
    //         <Typography 
    //           className={classes.settingsSidebarGroupTitle}
    //           variant="span">
    //           Section Templates
    //         </Typography>
    //         {sectionLinks.map((link, index) => (
    //           <SidebarLink 
    //             key={index}
    //             title={link.title}
    //             icon={link.icon}
    //             alt={link.alt}
    //             link={link.link} />
    //         ))}  
    //       </Box>  
    //       <Box
    //         className={classes.settingsSidebarGroup}>
    //         <Typography  */}
    {/* //           className={classes.settingsSidebarGroupTitle}
    //           variant="span">
    //           Page Templates
    //         </Typography>
    //         {pageLinks.map((link, index) => (
    //           <SidebarLink 
    //             key={index}
    //             title={link.title}
    //             link={link.link} />
    //         ))}  
    //       </Box>  
    //     </nav>
    //   </Box>   */}

    </Box>
  );
}

export default ThemeBuilderSidebar;
