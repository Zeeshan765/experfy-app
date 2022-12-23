import React from "react";
import card1 from '../assets/images/section_card/Asset 1.png';
import card2 from '../assets/images/section_card/Asset 2.png';
import card3 from '../assets/images/section_card/Asset 3.png';
import  card4 from '../assets/images/section_card/Asset 4.png';
import card5 from '../assets/images/section_card/Asset 5.png';
import card6 from '../assets/images/section_card/Asset 6.png';
import card7 from '../assets/images/section_card/Asset 7.png';
import card8 from '../assets/images/section_card/Asset 8.png';
import  card9 from '../assets/images/section_card/Asset 9.png';
import card10 from '../assets/images/section_card/Asset 10.png';
import card11 from '../assets/images/section_card/Asset 11.png';
import card12 from '../assets/images/section_card/Asset 12.png';
import card13 from '../assets/images/section_card/Asset 13.png';
import card14 from '../assets/images/section_card/Asset 14.png';
import card15 from '../assets/images/section_card/Asset 15.png';
import card16 from '../assets/images/section_card/Asset 16.png';
import card17 from '../assets/images/section_card/Asset 17.png';
import { Link } from "react-router-dom";
import { padding } from "@mui/system";
import FaceLessModel from "./Model";
const SectionTemplate = () => {
    const templateList = [
        {
          id: 1,
          image: card2,
          link: "/admin/collections/page-builder",
          name: "Header",
        },
        {
          id: 2,
          image: card1,
          link: "/admin",
          name: "Footer",
        },
        {
          id: 3,
          image: card3,
          link: "/admin",
          name: "Image Banner",
        },
        {
          id: 4,
          image: card4,
          link: "/admin",
          name: "Benefits",
        },
        {
          id: 5,
          image: card5,
          link: "/admin",
          name: "content",
        },
        {
          id: 6,
          image: card6,
          link: "/admin",
          name: "Department",
        },
        {
          id: 7,
          image: card7,
          link: "/admin",
          name: "Guidelines",
        },
        {
          id: 8,
          image: card8,
          link: "/admin",
          name: "Images",
        },
        {
          id: 9,
          image: card9,
          link: "/admin",
          name: "Jobs",
        },
        {
          id: 10,
          image: card10,
          link: "/admin",
          name: "Location",
        },
        {
          id: 11,
          image: card11,
          link: "/admin",
          name: "Metrics",
        },
        {
          id: 12,
          image: card12,
          link: "/admin",
          name: "Paragraph",
        },
        {
          id: 13,
          image: card13,
          link: "/admin",
          name: "Practice_areas",
        },
        {
          id: 14,
          image: card14,
          link: "/admin",
          name: "Talent Clouds",
        },
        {
          id: 15,
          image: card15,
          link: "/admin",
          name: "Testimonial",
        },
        {
          id: 16,
          image: card16,
          link: "/admin",
          name: "Video",
        },
        {
          id: 17,
          image: card17,
          link: "/admin",
          name: "Talent Clouds",
        },
      ];
  return (
    <div >
    <div style={{ display: "flex",flexWrap:'wrap',justifyContent:'space-evenly' }}>
      {templateList.map(({ id, image, name, link }) => {
        return (
        <div> 
         {/* <Link to={link} > */}
          <div
            key={id}
            style={{
              width: "200px",
              boxShadow:'1px 1px 3px 0px #000000',
              margin: "16px 8px ",
              borderRadius: "6px",
              objectFit:'contain',
              padding:'2px'
            }}
          > 
            <img
              src={image}
              alt={name}
              style={{ width: "100%" }}
            />
          </div>
        <FaceLessModel
          data={{ id, image, name }}
        />
         {/* </Link>  */}
         </div>
         );
      })}
    </div>
  </div>  );
};

export default SectionTemplate;
