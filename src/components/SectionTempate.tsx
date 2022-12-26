import React from 'react';
import {
  default as card1,
  default as card10,
  default as card11,
  default as card12,
  default as card13,
  default as card14,
  default as card15,
  default as card16,
  default as card17,
  default as card2,
  default as card3,
  default as card4,
  default as card5,
  default as card6,
  default as card7,
  default as card8,
  default as card9,
} from '../assets/images/sections/images.png';
import { Modal } from '@faceless-ui/modal';
const SectionTemplate = () => {
  const templateList = [
    {
      id: 1,
      image: card2,
      link: '/admin/collections/page-builder',
      name: 'Header',
    },
    {
      id: 2,
      image: card1,
      link: '/admin',
      name: 'Footer',
    },
    {
      id: 3,
      image: card3,
      link: '/admin',
      name: 'Image Banner',
    },
    {
      id: 4,
      image: card4,
      link: '/admin',
      name: 'Benefits',
    },
    {
      id: 5,
      image: card5,
      link: '/admin',
      name: 'content',
    },
    {
      id: 6,
      image: card6,
      link: '/admin',
      name: 'Department',
    },
    {
      id: 7,
      image: card7,
      link: '/admin',
      name: 'Guidelines',
    },
    {
      id: 8,
      image: card8,
      link: '/admin',
      name: 'Images',
    },
    {
      id: 9,
      image: card9,
      link: '/admin',
      name: 'Jobs',
    },
    {
      id: 10,
      image: card10,
      link: '/admin',
      name: 'Location',
    },
    {
      id: 11,
      image: card11,
      link: '/admin',
      name: 'Metrics',
    },
    {
      id: 12,
      image: card12,
      link: '/admin',
      name: 'Paragraph',
    },
    {
      id: 13,
      image: card13,
      link: '/admin',
      name: 'Practice_areas',
    },
    {
      id: 14,
      image: card14,
      link: '/admin',
      name: 'Talent Clouds',
    },
    {
      id: 15,
      image: card15,
      link: '/admin',
      name: 'Testimonial',
    },
    {
      id: 16,
      image: card16,
      link: '/admin',
      name: 'Video',
    },
    {
      id: 17,
      image: card17,
      link: '/admin',
      name: 'Talent Clouds',
    },
  ];
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        {templateList.map(({ id, image, name, link }) => {
          return (
            <div>
              {/* <Link to={link} > */}
              <div
                key={id}
                style={{
                  width: '200px',
                  boxShadow: '1px 1px 3px 0px #000000',
                  margin: '16px 8px ',
                  borderRadius: '6px',
                  objectFit: 'contain',
                  padding: '2px',
                }}
              >
                <img src={image} alt={name} style={{ width: '100%' }} />
              </div>

              <Modal title={name} slug={'show-sections'}></Modal>
              {/* </Link>  */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionTemplate;
