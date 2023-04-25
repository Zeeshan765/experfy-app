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
type Props = {
  search?: String;
};
const SectionTemplate: React.FC<Props> = ({ search }) => {
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
      link: '/admin/collections/section-templates/header',
      name: 'Header',
      text: '',
    },
    {
      id: 3,
      image: footer,
      link: '/admin/collections/section-templates/footer',
      name: 'Footer',
      text: '',
    },
    {
      id: 4,
      image: image_and_text,
      link: '/admin/collections/section-templates/image-and-text',
      name: 'Image and Text',
      text: 'Add an image and text to highlight and customize any section',
    },
    {
      id: 5,
      image: video,
      link: '/admin/collections/section-templates/video',
      name: 'Video',
      text: 'Add a video highlight and showcase anything particular about your company',
    },
    {
      id: 6,
      image: benefits,
      link: '/admin/collections/section-templates/benefits',
      name: 'Benefits',
      text: 'Add a banner image with text and a button. This is a section usually on top portion of the site and is used to emphasize highlight certain messaging.',
    },
    {
      id: 7,
      image: image_banner,
      link: '/admin/collections/section-templates/image-banner',
      name: 'Image Banner',
      text: 'Add a banner image with text and a button. This is a section usually on top portion of the site and is used to emphasize highlight certain messaging.',
    },
    {
      id: 8,
      image: image_gallery,
      link: '/admin/collections/section-templates/photo-gallery',
      name: 'Photo Gallery',
      text: 'Add a banner image with text and a button. This is a section usually on top portion of the site and is used to emphasize highlight certain messaging.',
    },
    {
      id: 9,
      image: departments,
      link: '/admin/collections/department',
      name: 'Departments',
      text: 'Add a banner image with text and a button. This is a section usually on top portion of the site and is used to emphasize highlight certain messaging.',
    },
    {
      id: 10,
      image: guidelines,
      link: '/admin/collections/section-templates/guidelines',
      name: 'Guidelines',
      text: 'Add a banner image with text and a button. This is a section usually on top portion of the site and is used to emphasize highlight certain messaging.',
    },
    {
      id: 11,
      image: location,
      link: '/admin/collections/section-templates/location',
      name: 'Location',
      text: 'Add a banner image with text and a button. This is a section usually on top portion of the site and is used to emphasize highlight certain messaging.',
    },
    {
      id: 12,
      image: metrics_numbers,
      link: '/admin/collections/section-templates/metrics-numbers',
      name: 'Metrics/Numbers',
      text: 'To attract talent, add testimonials of employees ot talentCloud members who have worked for your company and have rave reviews of their experience.',
    },
    {
      id: 13,
      image: paragraph,
      link: '/admin/collections/section-templates/paragraph',
      name: 'Paragraph',
      text: 'Add a banner image with text and a button. This is a section usually on top portion of the site and is used to emphasize highlight certain messaging.',
    },
    {
      id: 14,
      image: practice_areas,
      link: '/admin/collections/section-templates/practice-areas',
      name: 'Practice Areas/Focus Areas',
      text: 'If departments have their own practice areas and TalentClouds, you can add a section containing department links.',
    },
    {
      id: 15,
      image: talent_cloud_candidates,
      link: '/admin/collections/section-templates/talent-cloud-candidates',
      name: 'Talent Clouds',
      text: 'If departments have their own practice areas and TalentClouds, you can add a section containing department links.',
    },
    {
      id: 16,
      image: testimonial,
      link: '/admin/collections/section-templates/testimonial',
      name: 'Testimonial',
      text: 'To attract talent, add testimonials of employees ot talentCloud members who have worked for your company and have rave reviews of their experience.',
    },
  ];
  return (
    <>
      <Grid container mt={3} spacing={3} className={classes.sectionCardGrid}>
        {templateList.map(({ id, image, name, link, text }) => (
          <>
            {!search ? (
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
            ) : (
              <>
                {name.toLowerCase().includes(search.toLowerCase()) && (
                  <>
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
                  </>
                )}
              </>
            )}
          </>
        ))}
      </Grid>
    </>
  );
};

export default SectionTemplate;
