import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import LinkTag from '@mui/material/Link';
import { makeStyles } from '@mui/styles';
import { title } from 'process';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  benefits,
  custom_build,
  departments,
  footer,
  guidelines,
  header,
  image_and_text,
  image_banner,
  image_gallery,
  location,
  metrics_numbers,
  paragraph,
  practice_areas,
  talent_cloud_candidates,
  testimonial,
  video,
} from '../assets/images';

const useStyles = makeStyles({
  sectionCardGrid: {
    width: 'calc(100% + 36px)',
  },
  sectionCardLink: {
    textDecoration: 'none !important',
  },
  sectionCard: {
    boxShadow: '0 3px 6px rgba(0 0 0 / 16%) !important',
    border: '1px solid #d1dbe3',
    padding: '0 12px',
    height: '100%',
    '& .MuiCardHeader-root': {
      textAlign: 'center',
      padding: '12px 0',
      '& .MuiTypography-root': {
        fontFamily: 'proxima-nova',
        fontWeight: 500,
        color: '#4a5162 !important',
      },
    },
    '& .MuiCardContent-root': {
      padding: '12px 0 16px !important',
      '& p': {
        fontFamily: 'proxima-nova',
        fontSize: '12px',
        color: '#4a5162 !important',
      },
    },
  },
});

const SectionTemplate: React.FC = () => {
  const classes = useStyles();
  const templateList = [
    {
      id: 1,
      image: custom_build,
      link: '/admin/collections/page-builder',
      name: 'Custom Build',
      text: '',
    },
    {
      id: 2,
      image: header,
      link: '/admin/collections/section-templates?header',
      name: 'Header',
      text: '',
    },
    {
      id: 3,
      image: footer,
      link: '/admin/collections/footer',
      name: 'Footer',
      text: '',
    },
    {
      id: 4,
      image: image_and_text,
      link: '/admin/collections/image_and_text',
      name: 'Image and Text',
      text: 'Add a banner image with text and a button. This is a section usually on top portion of the site and is used to emphasize highlight certain messaging.',
    },
    {
      id: 5,
      image: video,
      link: '/admin/collections/video',
      name: 'Video',
      text: 'Add a banner image with text and a button. This is a section usually on top portion of the site and is used to emphasize highlight certain messaging.',
    },
    {
      id: 6,
      image: benefits,
      link: '/admin/collections/benefits',
      name: 'Benefits',
      text: 'If departments have their own practice areas and TalentClouds, you can add a section containing department links.',
    },
    {
      id: 7,
      image: image_banner,
      link: '/admin/collections/image_banner',
      name: 'Image Banner',
      text: 'Add a banner image with text and a button. This is a section usually on top portion of the site and is used to emphasize highlight certain messaging.',
    },
    {
      id: 8,
      image: image_gallery,
      link: '/admin/collections/image_gallery',
      name: 'Image Gallery',
      text: 'Add a banner image with text and a button. This is a section usually on top portion of the site and is used to emphasize highlight certain messaging.',
    },
    {
      id: 9,
      image: departments,
      link: '/admin/collections/departments',
      name: 'Departments',
      text: 'Add a banner image with text and a button. This is a section usually on top portion of the site and is used to emphasize highlight certain messaging.',
    },
    {
      id: 10,
      image: guidelines,
      link: '/admin/collections/guidelines',
      name: 'Guidelines',
      text: 'Add a banner image with text and a button. This is a section usually on top portion of the site and is used to emphasize highlight certain messaging.',
    },
    {
      id: 11,
      image: location,
      link: '/admin/collections/location',
      name: 'Location',
      text: 'Add a banner image with text and a button. This is a section usually on top portion of the site and is used to emphasize highlight certain messaging.',
    },
    {
      id: 12,
      image: metrics_numbers,
      link: '/admin/collections/metrics_numbers',
      name: 'Metrics/Numbers',
      text: 'Add a banner image with text and a button. This is a section usually on top portion of the site and is used to emphasize highlight certain messaging.',
    },
    {
      id: 13,
      image: paragraph,
      link: '/admin/collections/paragraph',
      name: 'Paragraph',
      text: 'Add a banner image with text and a button. This is a section usually on top portion of the site and is used to emphasize highlight certain messaging.',
    },
    {
      id: 14,
      image: practice_areas,
      link: '/admin/collections/practice_areas',
      name: 'Practice Areas/Focus Areas',
      text: 'Add a banner image with text and a button. This is a section usually on top portion of the site and is used to emphasize highlight certain messaging.',
    },
    {
      id: 15,
      image: talent_cloud_candidates,
      link: '/admin/collections/talent_cloud_candidates',
      name: 'Talent Clouds',
      text: 'Add a banner image with text and a button. This is a section usually on top portion of the site and is used to emphasize highlight certain messaging.',
    },
    {
      id: 16,
      image: testimonial,
      link: '/admin/collections/testimonial',
      name: 'Testimonial',
      text: 'If departments have their own practice areas and TalentClouds, you can add a section containing department links.',
    },
  ];
  return (
    <>
      <Typography variant="h4">Section Templates</Typography>

      <Grid container mt={3} spacing={3} className={classes.sectionCardGrid}>
        {templateList.map(({ id, image, name, link, text }) => (
          <Grid item xs={6} sm={4} md={3} key={id}>
            <LinkTag
              component={Link}
              to={link}
              className={classes.sectionCardLink}
            >
              <Card className={classes.sectionCard}>
                <CardHeader title={name}></CardHeader>
                <CardMedia
                  component="img"
                  //@ts-ignore
                  image={image}
                  alt={title}
                ></CardMedia>
                <CardContent>
                  {text && <Typography>{text}</Typography>}
                </CardContent>
              </Card>

              {/* <img src={image} alt={name} style={{ width: "100%" }} /> */}
              {/* <FaceLessModel data={{ id, image, name }} /> */}
            </LinkTag>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SectionTemplate;
