import { Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import * as images from '../../../assets/images';
const SectionTemplate: React.FC = () => {
  const templateList = [
    {
      id: 1,
      image: images.custom_build,
      link: '/admin/collections/page-builder',
      name: 'custom build',
    },
    {
      id: 2,
      image: images.header,
      link: '/admin/collections/header',
      name: 'Header',
    },
    {
      id: 3,
      image: images.footer,
      link: '/admin/collections/footer',
      name: 'Footer',
    },
    {
      id: 4,
      image: images.image_and_text,
      link: '/admin/collections/image_and_text',
      name: 'image and text',
    },
    {
      id: 5,
      image: images.video,
      link: '/admin/collections/video',
      name: 'video',
    },
    {
      id: 6,
      image: images.benefits,
      link: '/admin/collections/benefits',
      name: 'benefits',
    },
    {
      id: 7,
      image: images.image_banner,
      link: '/admin/collections/image_banner',
      name: 'image banner',
    },
    {
      id: 8,
      image: images.image_gallery,
      link: '/admin/collections/image_gallery',
      name: 'image gallery',
    },
    {
      id: 9,
      image: images.departments,
      link: '/admin/collections/departments',
      name: 'departments',
    },
    {
      id: 10,
      image: images.guidelines,
      link: '/admin/collections/guidelines',
      name: 'guidelines',
    },
    {
      id: 11,
      image: images.location,
      link: '/admin/collections/location',
      name: 'location',
    },
    {
      id: 12,
      image: images.metrics_numbers,
      link: '/admin/collections/metrics_numbers',
      name: 'metrics numbers',
    },
    {
      id: 13,
      image: images.paragraph,
      link: '/admin/collections/paragraph',
      name: 'paragraph',
    },
    {
      id: 14,
      image: images.practice_areas,
      link: '/admin/collections/practice_areas',
      name: 'practice areas',
    },
    {
      id: 15,
      image: images.talent_cloud_candidates,
      link: '/admin/collections/talent_cloud_candidates',
      name: 'talent cloud candidates',
    },
    {
      id: 16,
      image: images.testimonial,
      link: '/admin/collections/testimonial',
      name: 'testimonial',
    },
  ];
  return (
    <>
      <div style={{ width: '100%', margin: 'auto', padding: '0 3rem' }}>
        <p
          style={{
            margin: 0,
            fontSize: '16px',
            fontWeight: '600',
            marginTop: '8px',
          }}
        >
          Start customizing your portal
        </p>
      </div>
      <Grid container spacing={2} style={{ margin: 'auto', width: '95%' }}>
        {templateList.map(({ id, image, name, link }) => (
          <Grid item sm={3} alignItems="center">
            <Link to={link}>
              <div
                key={id}
                style={{
                  width: '100%',
                  boxShadow: '0px 0.5px 2px -1px #000000',
                  // margin: "16px 8px ",
                  borderRadius: '6px',
                  objectFit: 'contain',
                  padding: '2px',
                }}
              >
                <img src={image.default} alt={name} style={{ width: '100%' }} />
              </div>
              {/* <FaceLessModel data={{ id, image, name }} /> */}
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SectionTemplate;
