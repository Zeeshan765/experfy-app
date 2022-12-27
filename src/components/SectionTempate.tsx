import React from "react";
import {
  header,
  footer,
  custom_build,
  video,
  image_and_text,
  image_banner,
  image_gallery,
  benefits,
  departments,
  guidelines,
  location,
  metrics_numbers,
  paragraph,
  practice_areas,
  talent_cloud_candidates,
  testimonial,
} from "../assets/images";
import { Link } from "react-router-dom";
import FaceLessModel from "./Model";
const SectionTemplate = () => {
  const templateList = [
    {
      id: 1,
      image: custom_build,
      link: "/admin/collections/page-builder",
      name: "Header",
    },
    {
      id: 2,
      image: header,
      link: "/admin",
      name: "Footer",
    },
    {
      id: 3,
      image: footer,
      link: "/admin",
      name: "Image Banner",
    },
    {
      id: 4,
      image: image_and_text,
      link: "/admin",
      name: "Benefits",
    },
    {
      id: 5,
      image: video,
      link: "/admin",
      name: "content",
    },
    {
      id: 6,
      image: benefits,
      link: "/admin",
      name: "Department",
    },
    {
      id: 7,
      image: image_banner,
      link: "/admin",
      name: "Guidelines",
    },
    {
      id: 8,
      image: image_gallery,
      link: "/admin",
      name: "Images",
    },
    {
      id: 9,
      image: departments,
      link: "/admin",
      name: "Jobs",
    },
    {
      id: 10,
      image: guidelines,
      link: "/admin",
      name: "Location",
    },
    {
      id: 11,
      image: location,
      link: "/admin",
      name: "Metrics",
    },
    {
      id: 12,
      image: metrics_numbers,
      link: "/admin",
      name: "Paragraph",
    },
    {
      id: 13,
      image: paragraph,
      link: "/admin",
      name: "Practice_areas",
    },
    {
      id: 14,
      image: practice_areas,
      link: "/admin",
      name: "Talent Clouds",
    },
    {
      id: 15,
      image: talent_cloud_candidates,
      link: "/admin",
      name: "Testimonial",
    },
    {
      id: 16,
      image: testimonial,
      link: "/admin",
      name: "Video",
    },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems:'center',
          justifyContent:'center',
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {templateList.map(({ id, image, name, link }) => (
          <div>
            {/* <Link to={link} > */}
            <div
              key={id}
              style={{
                width: "250px",
                boxShadow: "1px 1px 3px 0px #000000",
                margin: "16px 8px ",
                borderRadius: "6px",
                objectFit: "contain",
                padding: "2px",
              }}
            >
              <img src={image} alt={name} style={{ width: "100%" }} />
            </div>
            {/* <FaceLessModel data={{ id, image, name }} /> */}
            {/* </Link>  */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTemplate;
