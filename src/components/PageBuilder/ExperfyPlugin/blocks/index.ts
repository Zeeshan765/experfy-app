import type grapesjs from 'grapesjs';

import { ReactComponentElement as footer } from 'react';

import { RequiredPluginOptions } from '..';
import NewLogo from '../../assets/images/experfy_logo.svg';
import { practiceAreaData } from '../utilities';
import {
  getbuttonStyles,
  getButtonALignment,
  getStyles,
  benefitsStyle,
  paragraphStyle,
  video,
  locationStyle,
  testimonialStyle,
  practiceStyle,
  footerStyle,
  SearchStyle,
  guidelines,
  LogoStyle,
  headerstyle,
  ImageBanner,
  numbermetric,
  talentCloud,
  imageStyle,
  ImageText,
  paraStyle,
  SectionStyle as style,
  IconListStyle,
  IconStyle,
  jobstyle,
  pageTitle,
  Navmenu,
  themestyle,
  buttonStyle,
  departmentstyle,
  photoGalleryStyle,
  swiperStyle,
  dividerStyle,
  HeadingStyle,
} from './style';

export default (editor: grapesjs.Editor, opts: RequiredPluginOptions) => {
  const addBlock = (id: string, def: grapesjs.BlockOptions) => {
    console.log('opts', opts);
    console.log('opts.blocks', opts.blocks);
    const prefixnew = opts?.gjsScrollPrefix ?? 'gjs-scroll';
    console.log('zeeshan prefix', prefixnew);
    const check = opts?.gjsScrollComponentType;
    console.log('zeeshan componentType', check);
    console.log('id', id);
    opts.blocks.indexOf(id)! >= 0 &&
      editor.Blocks.add(id, {
        select: true,
        activate: true,
        ...def,
        ...opts.block(id),
  
      });
  };

  addBlock('header', {
    label: 'Header',
    category: 'Header & Footer',
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="21.922" height="19.523" viewBox="0 0 21.922 19.523">
    <g id="Group_54893" data-name="Group 54893" transform="translate(-30.26 -323)">
      <g id="Group_53875" data-name="Group 53875" transform="translate(30.26 323.888)">
        <g id="Group_53874" data-name="Group 53874">
          <g id="noun-website-1440662">
            <path id="Path_169139" data-name="Path 169139" d="M111.524,50.744a3.069,3.069,0,0,0-.966-2.223,3.385,3.385,0,0,0-2.334-.921H92.9a3.386,3.386,0,0,0-2.334.921,3.069,3.069,0,0,0-.966,2.223V63.093a3.069,3.069,0,0,0,.966,2.223,3.385,3.385,0,0,0,2.334.921h15.322a3.386,3.386,0,0,0,2.334-.921,3.069,3.069,0,0,0,.966-2.223ZM110.11,63.093h0a1.755,1.755,0,0,1-.552,1.27,1.935,1.935,0,0,1-1.334.526H92.9a1.935,1.935,0,0,1-1.334-.526,1.755,1.755,0,0,1-.552-1.27V53.887H110.11Zm0-10.552H91.016v-1.8a1.755,1.755,0,0,1,.552-1.27,1.935,1.935,0,0,1,1.334-.526h15.322a1.935,1.935,0,0,1,1.333.526,1.755,1.755,0,0,1,.552,1.27Z" transform="translate(-89.602 -47.601)" />
          </g>
        </g>
      </g>
      <rect id="Rectangle_35089" data-name="Rectangle 35089" width="21.9" height="5.924" rx="2" transform="translate(30.26 323)" />
    </g>
  </svg>
  `,
    content: ` 

    <div data-gjs-type="headerSector" class="headerSector" id="headerSector" >
    <div class="header-container headerSector header-main">
    <div class="header-gym">
   
    <a  class="al">

    <img  class="image header-svg headerSector_image" style="width:30%" src="data:image/svg+xml;base64,PHN2ZyBpZD0ibm91bi1sb2dvLTIxMjE0MzkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMzLjAyMSIgaGVpZ2h0PSIzOC4wNTIiIHZpZXdCb3g9IjAgMCAzMy4wMjEgMzguMDUyIj4NCiAgPHBhdGggaWQ9IlBhdGhfMTY5ODk3IiBkYXRhLW5hbWU9IlBhdGggMTY5ODk3IiBkPSJNMTUyLjA5LDMxLjk1MywxNjguNiw0MS41VjYwLjQ1OUwxNTIuMDksNzBsLTE2LjUxLTkuNTQ1VjQxLjVabTAsNS40MTcsNS45MzMsMy4zNTQsNS45MzMsMy40ODNWNTcuODc5bC01LjkzMywzLjM1NC01LjkzMywzLjQ4My01LjkzMy0zLjQ4My01LjkzMy0zLjM1NFY0NC4yMDZsNS45MzMtMy40ODNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM1LjU4IC0zMS45NTMpIiBmaWxsPSIjNTBhZTgxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4NCiAgPHBhdGggaWQ9IlBhdGhfMTY5ODk4IiBkYXRhLW5hbWU9IlBhdGggMTY5ODk4IiBkPSJNMjIyLjA5MywxMTkuNTI2bDUuMTU5LDIuOTY3LDUuMDMsMi45NjcuMjU4LjEyOXYxMi4yNTRsLS4yNTguMTI5LTUuMDMsMi45NjctNS4xNTksMi45NjctLjEyOS4xMjktLjI1OC0uMTI5LTUuMTU5LTIuOTY3LTUuMDMtMi45NjctLjI1OC0uMTI5VjEyNS41ODhsLjI1OC0uMTI5LDUuMDMtMi45NjcsNS4xNTktMi45NjcuMjU4LS4xMjlabTQuNjQzLDMuNzQxLTQuNzcyLTIuODM4LTkuOCw1LjY3NXYxMS4yMjFsOS44LDUuNjc1LDQuNzcyLTIuODM4LDQuOS0yLjgzOFYxMjYuMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDUuNDUzIC0xMTIuNjg5KSIgZmlsbD0iIzUwYWU4MSIvPg0KPC9zdmc+DQo=" style="width: 100%; height:auto;" id="gjs_img_preview_logo_rtl"/>
    
       <span class="header-logo-text header-bg headerSector_text">Logo</span>
    </a>
    <nav class="header-navabr">
    <a class="a check-link headerSector_a" >Home</a>
    <a class="a check-link headerSector_a" >About</a>
    <a class="a check-link headerSector_a">Services</a>
    <a class="a check-link headerSector_a">Contact</a></nav>
    </div>
  
    </div>
   </div>
   ${headerstyle}

   `,
  });

  addBlock('footer', {
    label: 'Footer',
    category: 'Header & Footer',
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="20.16" height="18.714" viewBox="0 0 20.16 18.714">
    <g id="Group_55105" data-name="Group 55105" transform="translate(0 2.344)">
      <g id="Group_53875" data-name="Group 53875" transform="translate(0 -2.344)">
        <g id="Group_53874" data-name="Group 53874" transform="translate(0 0)">
          <g id="noun-website-1440662">
            <path id="Path_169139" data-name="Path 169139" d="M109.762,63.159a3.222,3.222,0,0,1-.889,2.232,2.977,2.977,0,0,1-2.146.924H92.637a2.977,2.977,0,0,1-2.146-.924,3.222,3.222,0,0,1-.889-2.232v-12.4a3.222,3.222,0,0,1,.889-2.232,2.977,2.977,0,0,1,2.146-.924h14.09a2.977,2.977,0,0,1,2.146.924,3.222,3.222,0,0,1,.889,2.232Zm-1.3-12.4h0a1.842,1.842,0,0,0-.508-1.276,1.7,1.7,0,0,0-1.226-.528H92.637a1.7,1.7,0,0,0-1.226.528,1.842,1.842,0,0,0-.508,1.276v8.1h17.559Zm0,9.454H90.9v2.947a1.842,1.842,0,0,0,.508,1.276,1.7,1.7,0,0,0,1.226.528h14.09a1.7,1.7,0,0,0,1.226-.528,1.842,1.842,0,0,0,.508-1.276Z" transform="translate(-89.602 -47.601)" />
          </g>
        </g>
      </g>
      <rect id="Rectangle_35089" data-name="Rectangle 35089" width="16.139" height="1.924" rx="0.962" transform="translate(2 12.334)" />
    </g>
  </svg>
  `,
    content: `<footer id="footerSector" class="main-footer-wrapper footerSector">
    <div class="footer-container">
       <div class="footer-grid">

       <div class="footer-address-section margin-class">
       <h1 class="h1 main-footer-heading">Add Your Title Here </h1>

             <ul class="address-list">
             <li class="h2 sub-footer-heading">Footer section allow you to add links and information for your users to easily locate.</li>

             <li class="address"><span class="h4">Address:</span> <h4 class="h4"> 0101 Address, OR, 77873</h4></li>

             <li class="address"><span class="h4">Phone:</span> <h4 class="h4">010-000-1111</h4></li>

             <li class="address"><span class="h4">Website:</span><h4 class="h4">wwww.company-website.com</h4></li>
             </ul>
          </div>

          <div class="footer-images-section margin-class">
             <h1 class="h1 img-caption">Add Your Social Media Link</h1>
             <div class="images-holder">
             <img class="footer-image" src={SettingsIcon} alt='Settings'/>
             <img class="footer-image" src={SettingsIcon} alt='Settings'/>
             <img class="footer-image" src={SettingsIcon} alt='Settings'/>
             <img class="footer-image" src={SettingsIcon} alt='Settings'/>
             <img class="footer-image" src={SettingsIcon} alt='Settings'/>
             <img class="footer-image" src={SettingsIcon} alt='Settings'/>
             <img class="footer-image" src={SettingsIcon} alt='Settings'/>
             <img class="footer-image" src={SettingsIcon} alt='Settings'/>
             <img class="footer-image" src={SettingsIcon} alt='Settings'/>
             <img class="footer-image" src={SettingsIcon} alt='Settings'/>
             <img class="footer-image" src={SettingsIcon} alt='Settings' />
             <img class="footer-image" src={SettingsIcon} alt='Settings'/>
             </div>
             <button class="button footer-btn">Visit Instagram</button>
          </div>
          <div  class="margin-class">
             <h1 class="h1 img-caption">Add Your Social Media Link</h1>
          </div>
       </div>
    </div>

 
    <div class="site-credit-footer">
       <div class="site-credit-footer-container">
          <h6 class="h6">Copyright © Company 2022, All rights reserved.</h6>
          <ul>
          <li><a class="a">Privacy Policy</a></li>   
          <li> <a class="a">Terms of service</a></li>
          <li><a class="a">Disclaimer</a></li>
          </ul>
       </div>
    </div>
 </footer>
 ${footerStyle}
 ${getStyles([
   '.footer-address-section margin-class',
   '.site-credit-footer-container',
   '.footer-images-section margin-class',
   'margin-class',
 ])}
 `,
  });

  addBlock('testimonial', {
    label: 'Testimonial',
    category: 'Section Modules',
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="26.698" height="22.67" viewBox="0 0 26.698 22.67">
    <g id="noun-testimonial-1065389" transform="translate(-73.647 -37.379)">
      <path id="Path_169430" data-name="Path 169430" d="M184.376,89.6a12.294,12.294,0,0,0-2.19.2.633.633,0,0,0,.227,1.245,11.026,11.026,0,0,1,1.964-.175c5.332,0,9.671,3.812,9.671,8.5a7.778,7.778,0,0,1-1.967,5.136.631.631,0,0,0-.143.531l.59,3.135-3.165-1.073a.63.63,0,0,0-.412,0,17.849,17.849,0,0,1-4.573.768c-5.332,0-9.67-3.812-9.67-8.5a.633.633,0,1,0-1.265,0c0,5.383,4.905,9.763,10.936,9.763a19.124,19.124,0,0,0,4.78-.768l3.99,1.354a.64.64,0,0,0,.2.033.632.632,0,0,0,.622-.75l-.735-3.9a8.987,8.987,0,0,0,2.077-5.727c0-5.383-4.907-9.762-10.937-9.762Z" transform="translate(-94.969 -49.7)" />
      <path id="Path_169431" data-name="Path 169431" d="M82.455,48.369a.506.506,0,0,0,.734-.533l-.578-3.368,2.448-2.386a.506.506,0,0,0-.281-.863L81.4,40.727l-1.514-3.066a.506.506,0,0,0-.908,0l-1.513,3.066-3.382.492a.506.506,0,0,0-.281.863l2.447,2.386-.577,3.368a.506.506,0,0,0,.734.533l3.024-1.589Z" />
      <path id="Path_169432" data-name="Path 169432" d="M299.29,209.74h-9.42a.633.633,0,0,0,0,1.265h9.42a.633.633,0,1,0,0-1.265Z" transform="translate(-205.165 -164.026)" />
      <path id="Path_169433" data-name="Path 169433" d="M299.931,278.257a.633.633,0,0,0-.633-.633h-9.42a.633.633,0,0,0,0,1.266h9.42a.632.632,0,0,0,.633-.633Z" transform="translate(-205.173 -228.627)" />
      <path id="Path_169434" data-name="Path 169434" d="M289.871,345.51a.633.633,0,0,0,0,1.266h3.812a.633.633,0,0,0,0-1.266Z" transform="translate(-205.165 -293.23)" fill="#7c8189"/>
    </g>
  </svg>
  
  `,
    content: `
    <section  id= "testimonialSector" class="testimonial-container testimonialSector">
    <div class="test-sector">
    <h1 class="h1 main-testimonial-title testimonialSector_h1">You are in Good</h1> 
    <div class="swiper-container  mySwiper">
    
    <div class="swiper-wrapper">
    <div class="swiper-slide">
    <div class="slider-content-main-div">
   
    <div class="left-container">
       <div class="img-container">
             <img class="image testimonial-image testimonialSector_image" alt="testimonial" src="https://dummyimage.com/106x106" class="w-12 h-12 rounded-full flex-shrink-0 object-center" style="">
         </div>
               <h2 class="h2 main-testimonial-name testimonialSector_h2">Daniel Samarov</h2>
              <span class="user-details">
               <h5 class="h5 main-testimonial-content testimonialSector_h5">Chief Data Scientist, DS Box</h5>
             <h5 class="h5 main-testimonial-content testimonialSector_h5">PhD, Statistics University of North</h5></span>
     </div>
         <div class="divider"></div>
         <div class="slider-text-div">
         <h6 class="h6 main-testimonial-content testimonialSector_h6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</h6>
            </div>
    </div>









    
     </div>


    <div class="swiper-slide">
    <div class="slider-content-main-div">
   
    <div class="left-container">
       <div class="img-container">
             <img class="testimonial-image" alt="testimonial" src="https://dummyimage.com/106x106" class="w-12 h-12 rounded-full flex-shrink-0 object-center" style="">
         </div>
               <h2 class="h2 main-testimonial-name">Daniel Samarov</h2>
              <span class="user-details">
               <h5 class="h5 main-testimonial-content">Chief Data Scientist, DS Box</h5>
             <h5 class="h5 main-testimonial-content">PhD, Statistics University of North</h5></span>
     </div>
         <div class="divider"></div>
         <div class="slider-text-div">
         <h6 class="h6 main-testimonial-content">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</h6>
            </div>
    </div>









    
     </div>
     </div>

     
     



   
     
    
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
   
    
  </div>
  </div>
  </section>
  ${swiperStyle}
 `,
  });

  addBlock('benefits', {
    label: 'Benefits',
    category: 'Section Modules',
    media: `<svg width="21" height="22.477" xmlns="http://www.w3.org/2000/svg">
    <g>
     <title>Layer 1</title>
     <g id="noun-health-insurance-1893284">
      <path id="Path_169632" data-name="Path 169632" d="m8.286,22.33901l0.209,0.14l0.035,-0.035l0.035,0.035l0.209,-0.14a18.286,18.286 0 0 0 5.41,-5.445a18.771,18.771 0 0 0 2.967,-10.75l0,-0.314l-0.279,-0.035a11.443,11.443 0 0 1 -4.258,-1.326a11.685,11.685 0 0 1 -3.8,-3.351l-0.279,-0.314l-0.279,0.349a12.267,12.267 0 0 1 -7.923,4.642l-0.314,0.035l0,0.314a18.6,18.6 0 0 0 3,10.925a18.058,18.058 0 0 0 5.27,5.27l-0.003,0zm-4.363,-11.483a0.35,0.35 0 0 1 0.349,-0.349l3.141,0l0,-3.141a0.35,0.35 0 0 1 0.349,-0.349l1.745,0a0.35,0.35 0 0 1 0.349,0.349l0,3.141l3.142,0a0.35,0.35 0 0 1 0.349,0.349l0,1.745a0.35,0.35 0 0 1 -0.349,0.349l-3.141,0l0,3.141a0.35,0.35 0 0 1 -0.349,0.349l-1.745,0a0.35,0.35 0 0 1 -0.349,-0.349l0,-3.141l-3.141,0a0.35,0.35 0 0 1 -0.349,-0.349l-0.001,-1.745z" />
      <path id="Path_169633" data-name="Path 169633" d="m20.536,5.026l-0.279,-0.035a12.53,12.53 0 0 1 -4.293,-1.326a11.933,11.933 0 0 1 -3.281,-2.618l-0.768,-1.047l-1.815,1.815l0,0.384a11.757,11.757 0 0 0 2.653,2.059a10.888,10.888 0 0 0 4.153,1.291l0.593,0.07l0,0.593a19.216,19.216 0 0 1 -3.037,10.925a18.581,18.581 0 0 1 -3.455,3.944l0.838,0.558l0.035,-0.035l0.035,0.035l0.209,-0.14a18.286,18.286 0 0 0 5.41,-5.445a18.772,18.772 0 0 0 2.967,-10.75l0.035,-0.278z" />
      <path id="Path_169634" data-name="Path 169634" d="m29.82099,11.23901z"/>
     </g>
    </g>
   
   </svg>`,
    content: `<section  id="benefitSector" class="benefits-main-wrapper benefitSector" data-gjs-type="benefitSector">
    <div class="benefits-container" >

       <div class="benefits-title-div">
          <h1 class="h1 main-benefit-heading benefitSector_h1">Add your heading title here</h1>
          <h2 class="h2 sub-benefit-heading benefitSector_h2">The benefits module highlights the positive characteristics and values within your
             company or business. Add perks, benefits, or milestones.
          </h2>
       </div>
    
       <div class="benefits-option-section">

          <div class="benefit-holder">
          <img class="image-benefit benefitSector_img" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OC41NzYiIGhlaWdodD0iNzQuODg1IiB2aWV3Qm94PSIwIDAgNzguNTc2IDc0Ljg4NSI+DQogIDxnIGlkPSJaSkUyN0IudGlmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzUuMjExIC0xMzQ2LjU2NikiPg0KICAgIDxnIGlkPSJHcm91cF81NDg1OCIgZGF0YS1uYW1lPSJHcm91cCA1NDg1OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUzNS4yMTEgMTM0Ni41NjYpIj4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzE3MDE4MyIgZGF0YS1uYW1lPSJQYXRoIDE3MDE4MyIgZD0iTS00OTYuMDI4LDEzNDYuNTY2YTIuODQsMi44NCwwLDAsMSwyLjc5NCwxLjc3NWMzLjM0Miw2LjgxNyw2LjcyMSwxMy42MTYsMTAuMDYzLDIwLjQzM2ExLjM4MywxLjM4MywwLDAsMCwxLjIuODg0YzcuNDM1LDEuMDU0LDE0Ljg2NSwyLjE1MSwyMi4zLDMuMjI0LDIuMTQ4LjMxLDMuMywxLjQ0MiwyLjk4NywzLjJhMy44LDMuOCwwLDAsMS0xLjA2MiwxLjg5MnEtOC4xNTEsOC4wMzgtMTYuMzgsMTZhMS4yNDIsMS4yNDIsMCwwLDAtLjQxOSwxLjI3MmMxLjMyNCw3LjU5NSwyLjYwOCwxNS4yLDMuOTEzLDIyLjhhMi43MTEsMi43MTEsMCwwLDEtMS4xLDIuODg2LDIuNzUzLDIuNzUzLDAsMCwxLTMuMDkyLjA5NXEtMTAuMTUzLTUuMzQ5LTIwLjMxMS0xMC42OTFhMS40LDEuNCwwLDAsMC0xLjUtLjAyMXEtMTAuMDY3LDUuMzI5LTIwLjE1OCwxMC42MTJhMy4wODQsMy4wODQsMCwwLDEtMi42NDIuMzUyLDIuNzE3LDIuNzE3LDAsMCwxLTEuNzU5LTMuMXExLjctMTAuMDQxLDMuNDI4LTIwLjA3NmMuMTYtLjkzNi4yNjMtMS44ODUuNDg4LTIuOGExLjI0NCwxLjI0NCwwLDAsMC0uNDI4LTEuMzVjLTUuMzU1LTUuMTkzLTEwLjY4My0xMC40MTQtMTYuMDQ0LTE1LjYtMS4wMTMtLjk4LTEuOC0yLTEuMzExLTMuNDc4LjUtMS41MywxLjgtMS44MiwzLjIwOS0yLjAyLDcuMzUtMS4wNCwxNC42OTMtMi4xMzYsMjIuMDQyLTMuMTgzYTEuMzIzLDEuMzIzLDAsMCwwLDEuMTQxLS44NDRjMy4zNTgtNi44NDEsNi43NDYtMTMuNjY4LDEwLjEtMjAuNTFBMi43NDcsMi43NDcsMCwwLDEtNDk2LjAyOCwxMzQ2LjU2NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzNS4yMTEgLTEzNDYuNTY2KSIgZmlsbD0iIzE1OTU3NiIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo='/>
        
             <h1 class="h1 icon-benefit-heading benefitSector_h1">Benefit 01</h1>
             <h6 class="h6 icon-benefit-sub-heading benefitSector_h6">Lorem ipsum dolor sit amet. Est
                porro distinctio eum eius odit ea
                facere consequuntur.
             </h6>
          </div>


          <div class="benefits-option-section">

          <div class="benefit-holder">
          <img class="image-benefit benefitSector_img" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OC41NzYiIGhlaWdodD0iNzQuODg1IiB2aWV3Qm94PSIwIDAgNzguNTc2IDc0Ljg4NSI+DQogIDxnIGlkPSJaSkUyN0IudGlmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzUuMjExIC0xMzQ2LjU2NikiPg0KICAgIDxnIGlkPSJHcm91cF81NDg1OCIgZGF0YS1uYW1lPSJHcm91cCA1NDg1OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUzNS4yMTEgMTM0Ni41NjYpIj4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzE3MDE4MyIgZGF0YS1uYW1lPSJQYXRoIDE3MDE4MyIgZD0iTS00OTYuMDI4LDEzNDYuNTY2YTIuODQsMi44NCwwLDAsMSwyLjc5NCwxLjc3NWMzLjM0Miw2LjgxNyw2LjcyMSwxMy42MTYsMTAuMDYzLDIwLjQzM2ExLjM4MywxLjM4MywwLDAsMCwxLjIuODg0YzcuNDM1LDEuMDU0LDE0Ljg2NSwyLjE1MSwyMi4zLDMuMjI0LDIuMTQ4LjMxLDMuMywxLjQ0MiwyLjk4NywzLjJhMy44LDMuOCwwLDAsMS0xLjA2MiwxLjg5MnEtOC4xNTEsOC4wMzgtMTYuMzgsMTZhMS4yNDIsMS4yNDIsMCwwLDAtLjQxOSwxLjI3MmMxLjMyNCw3LjU5NSwyLjYwOCwxNS4yLDMuOTEzLDIyLjhhMi43MTEsMi43MTEsMCwwLDEtMS4xLDIuODg2LDIuNzUzLDIuNzUzLDAsMCwxLTMuMDkyLjA5NXEtMTAuMTUzLTUuMzQ5LTIwLjMxMS0xMC42OTFhMS40LDEuNCwwLDAsMC0xLjUtLjAyMXEtMTAuMDY3LDUuMzI5LTIwLjE1OCwxMC42MTJhMy4wODQsMy4wODQsMCwwLDEtMi42NDIuMzUyLDIuNzE3LDIuNzE3LDAsMCwxLTEuNzU5LTMuMXExLjctMTAuMDQxLDMuNDI4LTIwLjA3NmMuMTYtLjkzNi4yNjMtMS44ODUuNDg4LTIuOGExLjI0NCwxLjI0NCwwLDAsMC0uNDI4LTEuMzVjLTUuMzU1LTUuMTkzLTEwLjY4My0xMC40MTQtMTYuMDQ0LTE1LjYtMS4wMTMtLjk4LTEuOC0yLTEuMzExLTMuNDc4LjUtMS41MywxLjgtMS44MiwzLjIwOS0yLjAyLDcuMzUtMS4wNCwxNC42OTMtMi4xMzYsMjIuMDQyLTMuMTgzYTEuMzIzLDEuMzIzLDAsMCwwLDEuMTQxLS44NDRjMy4zNTgtNi44NDEsNi43NDYtMTMuNjY4LDEwLjEtMjAuNTFBMi43NDcsMi43NDcsMCwwLDEtNDk2LjAyOCwxMzQ2LjU2NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzNS4yMTEgLTEzNDYuNTY2KSIgZmlsbD0iIzE1OTU3NiIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo='/>

        
             <h1 class="h1 icon-benefit-heading benefitSector_h1">Benefit 01</h1>
             <h6 class="h6 icon-benefit-sub-heading benefitSector_h6">Lorem ipsum dolor sit amet. Est
                porro distinctio eum eius odit ea
                facere consequuntur.
             </h6>
          </div>

          <div class="benefits-option-section">

          <div class="benefit-holder">
          <img class="image-benefit benefitSector_img" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OC41NzYiIGhlaWdodD0iNzQuODg1IiB2aWV3Qm94PSIwIDAgNzguNTc2IDc0Ljg4NSI+DQogIDxnIGlkPSJaSkUyN0IudGlmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzUuMjExIC0xMzQ2LjU2NikiPg0KICAgIDxnIGlkPSJHcm91cF81NDg1OCIgZGF0YS1uYW1lPSJHcm91cCA1NDg1OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUzNS4yMTEgMTM0Ni41NjYpIj4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzE3MDE4MyIgZGF0YS1uYW1lPSJQYXRoIDE3MDE4MyIgZD0iTS00OTYuMDI4LDEzNDYuNTY2YTIuODQsMi44NCwwLDAsMSwyLjc5NCwxLjc3NWMzLjM0Miw2LjgxNyw2LjcyMSwxMy42MTYsMTAuMDYzLDIwLjQzM2ExLjM4MywxLjM4MywwLDAsMCwxLjIuODg0YzcuNDM1LDEuMDU0LDE0Ljg2NSwyLjE1MSwyMi4zLDMuMjI0LDIuMTQ4LjMxLDMuMywxLjQ0MiwyLjk4NywzLjJhMy44LDMuOCwwLDAsMS0xLjA2MiwxLjg5MnEtOC4xNTEsOC4wMzgtMTYuMzgsMTZhMS4yNDIsMS4yNDIsMCwwLDAtLjQxOSwxLjI3MmMxLjMyNCw3LjU5NSwyLjYwOCwxNS4yLDMuOTEzLDIyLjhhMi43MTEsMi43MTEsMCwwLDEtMS4xLDIuODg2LDIuNzUzLDIuNzUzLDAsMCwxLTMuMDkyLjA5NXEtMTAuMTUzLTUuMzQ5LTIwLjMxMS0xMC42OTFhMS40LDEuNCwwLDAsMC0xLjUtLjAyMXEtMTAuMDY3LDUuMzI5LTIwLjE1OCwxMC42MTJhMy4wODQsMy4wODQsMCwwLDEtMi42NDIuMzUyLDIuNzE3LDIuNzE3LDAsMCwxLTEuNzU5LTMuMXExLjctMTAuMDQxLDMuNDI4LTIwLjA3NmMuMTYtLjkzNi4yNjMtMS44ODUuNDg4LTIuOGExLjI0NCwxLjI0NCwwLDAsMC0uNDI4LTEuMzVjLTUuMzU1LTUuMTkzLTEwLjY4My0xMC40MTQtMTYuMDQ0LTE1LjYtMS4wMTMtLjk4LTEuOC0yLTEuMzExLTMuNDc4LjUtMS41MywxLjgtMS44MiwzLjIwOS0yLjAyLDcuMzUtMS4wNCwxNC42OTMtMi4xMzYsMjIuMDQyLTMuMTgzYTEuMzIzLDEuMzIzLDAsMCwwLDEuMTQxLS44NDRjMy4zNTgtNi44NDEsNi43NDYtMTMuNjY4LDEwLjEtMjAuNTFBMi43NDcsMi43NDcsMCwwLDEtNDk2LjAyOCwxMzQ2LjU2NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzNS4yMTEgLTEzNDYuNTY2KSIgZmlsbD0iIzE1OTU3NiIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo='/>

        
             <h1 class="h1 icon-benefit-heading benefitSector_h1">Benefit 01</h1>
             <h6 class="h6 icon-benefit-sub-heading benefitSector_h6">Lorem ipsum dolor sit amet. Est
                porro distinctio eum eius odit ea
                facere consequuntur.
             </h6>
          </div>

       </div>
    </div>
 </section>
 ${benefitsStyle}
 ${getStyles(['.benefits-title-div', '.benefits-option-section'])}
 `,
  });
  addBlock('practice-areas', {
    label: 'Practice Area',
    category: 'Section Modules',
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="23.049" height="22.102" viewBox="0 0 23.049 22.102">
    <g id="Group_54808" data-name="Group 54808" transform="translate(-43 -598.05)">
      <g id="Group_53871" data-name="Group 53871" transform="translate(3 8)">
        <g id="Group_53870" data-name="Group 53870">
          <g id="Group_53869" data-name="Group 53869">
            <g id="Group_53868" data-name="Group 53868" transform="translate(-2.221 124)">
              <g id="Layer_2" data-name="Layer 2" transform="translate(42.221 466.05)">
                <g id="Layer_2-2" data-name="Layer 2" transform="translate(0 0)">
                  <g id="Group_53866" data-name="Group 53866">
                    <path id="Path_33104" data-name="Path 33104" d="M21.192,22.1H1.857A2.035,2.035,0,0,1,0,19.927V2.175A2.035,2.035,0,0,1,1.857,0H21.192a2.035,2.035,0,0,1,1.857,2.175V19.927A2.035,2.035,0,0,1,21.192,22.1ZM1.857,1.7a.448.448,0,0,0-.409.479V19.927a.448.448,0,0,0,.409.479H21.192a.449.449,0,0,0,.405-.479V2.175a.449.449,0,0,0-.405-.479Z" transform="translate(0 0)" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g id="Ellipse_8546" data-name="Ellipse 8546" transform="translate(48 603)"  stroke="#4a5162" stroke-width="1">
        <circle cx="2.5" cy="2.5" r="2.5" stroke="none"/>
        <circle cx="2.5" cy="2.5" r="2" fill="none"/>
      </g>
      <g id="Ellipse_8547" data-name="Ellipse 8547" transform="translate(56 603)"  stroke="#4a5162" stroke-width="1">
        <circle cx="2.5" cy="2.5" r="2.5" stroke="none"/>
        <circle cx="2.5" cy="2.5" r="2" fill="none"/>
      </g>
      <g id="Ellipse_8548" data-name="Ellipse 8548" transform="translate(56 611)"  stroke="#4a5162" stroke-width="1">
        <circle cx="2.5" cy="2.5" r="2.5" stroke="none"/>
        <circle cx="2.5" cy="2.5" r="2" fill="none"/>
      </g>
      <g id="Ellipse_8549" data-name="Ellipse 8549" transform="translate(48 611)"  stroke="#4a5162" stroke-width="1">
        <circle cx="2.5" cy="2.5" r="2.5" stroke="none"/>
        <circle cx="2.5" cy="2.5" r="2" fill="none"/>
      </g>
      <g id="Ellipse_8550" data-name="Ellipse 8550" transform="translate(52 607)"  stroke="#4a5162" stroke-width="1">
        <circle cx="2.5" cy="2.5" r="2.5" stroke="none"/>
        <circle cx="2.5" cy="2.5" r="2" fill="none"/>
      </g>
    </g>
  </svg>
  `,
    content: `<section id="practiceAreaSector" class=" para-div practiceAreaSector">
  

    <h1 class="h1 main-practice-heading"> Practice Areas</h1>

    
 
    <div class="practice-area-container">
    ${practiceAreaData()}
    
 
    </div>
    </div>
 </section>
  ${practiceStyle}
  ${getStyles(['.box-text-div'])}
 `,
  });
  addBlock('video', {
    label: 'Video',
    category: 'Section Modules',
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="36.253" height="35.9" viewBox="0 0 36.253 35.9">
    <g id="Group_54086" data-name="Group 54086" transform="translate(-7.372 -7.763)">
      <g id="Group_54520" data-name="Group 54520">
        <circle id="Ellipse_8499" data-name="Ellipse 8499" cx="2.78" cy="2.78" r="2.78" transform="translate(11.07 38.103)" fill="#4ba4da"/>
        <path id="Path_167833" data-name="Path 167833" d="M53.747,77.831H28.514a3.365,3.365,0,0,1,0,2.939H53.747a1.47,1.47,0,1,0,0-2.939Z" transform="translate(-11.592 -38.417)" fill="#4ba4da"/>
        <path id="Path_167834" data-name="Path 167834" d="M8.842,77.831a1.47,1.47,0,1,0,0,2.939h1.936a3.365,3.365,0,0,1,0-2.939Z" transform="translate(0 -38.417)" fill="#4ba4da"/>
        <path id="Path_167835" data-name="Path 167835" d="M39.426,7.763H11.571a4.2,4.2,0,0,0-4.2,4.2v21a4.2,4.2,0,0,0,4.2,4.2H39.426a4.2,4.2,0,0,0,4.2-4.2v-21A4.2,4.2,0,0,0,39.426,7.763ZM32.677,24.4,21.8,30.683a2.135,2.135,0,0,1-1.062.3,1.915,1.915,0,0,1-1.9-2.007V16.41a1.914,1.914,0,0,1,1.9-2.007A2.139,2.139,0,0,1,21.8,14.7l10.879,6.281a1.928,1.928,0,0,1,0,3.424Z" fill="#4ba4da"/>
      </g>
    </g>
  </svg>
  
  `,
    content: `
    <div id="videoSector"class="video-main-wrapper videoSector"> 
    <div class="video-container-main-div video-wrap" data-gjs-type="video-wrap">
      <div class="video-header" >
        <h1 class="h1 main-video-heading videoSector_h1">Add your heading title here</h1>
               <h6 class="h6 sub-video-heading videoSector_h6">The Video Module is a place where you can visually show your user or client aspects of your company or product.</h6>
             </div>
    <video class="video-ratio videoSector_video"  src="path/to/video.mp4"></video> </div>
    </div>
    ${video} ${getStyles(['.video-header'])}
 `,
  });
  addBlock('guidelines', {
    label: 'Guidelines',
    category: 'Section Modules',
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="30.204" height="26.291" viewBox="0 0 30.204 26.291">
    <g id="noun-guide-4435112" transform="translate(-159.45 -28.378)">
      <path id="Path_169439" data-name="Path 169439" d="M336.444,48.669h-1.516c-.18,0-.325-.1-.325-.214v-24.9L335.4,22.5a.412.412,0,0,1,.581,0l.793,1.056v24.9c0,.118-.146.214-.325.214Z" transform="translate(-161.139 6)" />
      <path id="Path_169440" data-name="Path 169440" d="M387.083,112.9h-9.832a.649.649,0,0,1-.65-.65v-5.2a.65.65,0,0,1,.65-.65h9.832a.651.651,0,0,1,.542.29l1.865,2.779a.329.329,0,0,1,0,.36l-1.854,2.779a.649.649,0,0,1-.542.29Z" transform="translate(-199.889 -72.818)" />
      <path id="Path_169441" data-name="Path 169441" d="M155.9,210.9h9.834a.65.65,0,0,0,.65-.65v-5.2a.65.65,0,0,0-.65-.65H155.9a.65.65,0,0,0-.542.29L153.5,207.47a.329.329,0,0,0,0,.36l1.854,2.779a.649.649,0,0,0,.539.29Z" transform="translate(6 -165.826)" />
    </g>
  </svg>  
  `,
    content: ` <section  id= "guidelineSector" class="guideline-main-wrapper guidelineSector">
    <div id=guideline_1 class="guideline-container">
      <div class="guideline-header-section">
        <h1 class="h1 main-guideline-heading guidelineSector_h1">Add your heading title here</h1>
        <h2 class="h2 sub-guideline-heading guidelineSector_h2">The guideline module allows you to give directions or lead users to use a product,
            perform an action, or lead them to a Call-to-action.
        </h2>
      </div>
      <div class="guidline-option" data-gjs-type="GuidelineDiv" id="GuidelineDiv">
      <div style=" padding: 0.75rem; margin: 0.75rem;">
       
       <h3 class="h3 guideline-bullet guidelineSector_h3" style="height: 35px; border: 2px solid black; display: flex; width: 40px; justify-content: center;align-items: center;margin-right: 10px;border-radius: 80%;">1</h3>
       <h1 class="h1 bullet-heading guidelineSector_h1" style="text-align:left;">Add Step Title</h1>
    
     <h6 class="h6 bullet-sub-heading guidelineSector_h6" style="text-align:left;padding: 10px; margin-top: 5px;">Add information in steps in
      order to explain what the user
      should do next
     </h6>
     </div>
    
      
      
      
    




      </div>
  </div>
  </section>
  ${guidelines}
  ${getStyles(['.guideline-header-section', '.heading'])}
  `,
  });
  addBlock('location', {
    label: 'Location',
    category: 'Section Modules',
    media: `<svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24">
    <path id="noun-location-4491946" d="M168.4,30.763a8.653,8.653,0,0,0-6.33-2.469,8.807,8.807,0,0,0-8.484,8.613,8.6,8.6,0,0,0,1.731,5.313c.16.239,4.292,5.985,5.668,7.892a1.577,1.577,0,0,0,1.268.652h.007a1.576,1.576,0,0,0,1.265-.64c.64-.869,5.624-7.683,5.755-7.848l.021-.028h0a8.835,8.835,0,0,0,1.741-5.23,8.658,8.658,0,0,0-2.642-6.256ZM162.317,41.03a3.893,3.893,0,1,1,2.748-1.14A3.888,3.888,0,0,1,162.317,41.03Z" transform="translate(-153.589 -28.289)" />
  </svg>
  `,
    content: `
    <section  id= "locationSector" class="location-container locationSector">
        <div class="location-content">
        <div class="address-content-main-holder">
            <h1 class="h1 main-location-heading locationSector_h1">Add your heading title here</h1>
            <h2 class="h2 sub-location-heading locationSector_h2">The Location module contains your building’s address
              and contact information. Please add as much or little
              information you need.
            </h2>

            <div class="address-content-div">
              <div class="address-icon">
              <img class="image image-location locationSector_image" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OC41NzYiIGhlaWdodD0iNzQuODg1IiB2aWV3Qm94PSIwIDAgNzguNTc2IDc0Ljg4NSI+DQogIDxnIGlkPSJaSkUyN0IudGlmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzUuMjExIC0xMzQ2LjU2NikiPg0KICAgIDxnIGlkPSJHcm91cF81NDg1OCIgZGF0YS1uYW1lPSJHcm91cCA1NDg1OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUzNS4yMTEgMTM0Ni41NjYpIj4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzE3MDE4MyIgZGF0YS1uYW1lPSJQYXRoIDE3MDE4MyIgZD0iTS00OTYuMDI4LDEzNDYuNTY2YTIuODQsMi44NCwwLDAsMSwyLjc5NCwxLjc3NWMzLjM0Miw2LjgxNyw2LjcyMSwxMy42MTYsMTAuMDYzLDIwLjQzM2ExLjM4MywxLjM4MywwLDAsMCwxLjIuODg0YzcuNDM1LDEuMDU0LDE0Ljg2NSwyLjE1MSwyMi4zLDMuMjI0LDIuMTQ4LjMxLDMuMywxLjQ0MiwyLjk4NywzLjJhMy44LDMuOCwwLDAsMS0xLjA2MiwxLjg5MnEtOC4xNTEsOC4wMzgtMTYuMzgsMTZhMS4yNDIsMS4yNDIsMCwwLDAtLjQxOSwxLjI3MmMxLjMyNCw3LjU5NSwyLjYwOCwxNS4yLDMuOTEzLDIyLjhhMi43MTEsMi43MTEsMCwwLDEtMS4xLDIuODg2LDIuNzUzLDIuNzUzLDAsMCwxLTMuMDkyLjA5NXEtMTAuMTUzLTUuMzQ5LTIwLjMxMS0xMC42OTFhMS40LDEuNCwwLDAsMC0xLjUtLjAyMXEtMTAuMDY3LDUuMzI5LTIwLjE1OCwxMC42MTJhMy4wODQsMy4wODQsMCwwLDEtMi42NDIuMzUyLDIuNzE3LDIuNzE3LDAsMCwxLTEuNzU5LTMuMXExLjctMTAuMDQxLDMuNDI4LTIwLjA3NmMuMTYtLjkzNi4yNjMtMS44ODUuNDg4LTIuOGExLjI0NCwxLjI0NCwwLDAsMC0uNDI4LTEuMzVjLTUuMzU1LTUuMTkzLTEwLjY4My0xMC40MTQtMTYuMDQ0LTE1LjYtMS4wMTMtLjk4LTEuOC0yLTEuMzExLTMuNDc4LjUtMS41MywxLjgtMS44MiwzLjIwOS0yLjAyLDcuMzUtMS4wNCwxNC42OTMtMi4xMzYsMjIuMDQyLTMuMTgzYTEuMzIzLDEuMzIzLDAsMCwwLDEuMTQxLS44NDRjMy4zNTgtNi44NDEsNi43NDYtMTMuNjY4LDEwLjEtMjAuNTFBMi43NDcsMi43NDcsMCwwLDEtNDk2LjAyOCwxMzQ2LjU2NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzNS4yMTEgLTEzNDYuNTY2KSIgZmlsbD0iIzE1OTU3NiIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo='/>
              <h6 class="h6 icon-text locationSector_h6">Add address, phone number, or social media</h6>
              </div>
             
            </div>

            <div class="address-content-div">
            <div class="address-icon">
            <img class="image image-location locationSector_image" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OC41NzYiIGhlaWdodD0iNzQuODg1IiB2aWV3Qm94PSIwIDAgNzguNTc2IDc0Ljg4NSI+DQogIDxnIGlkPSJaSkUyN0IudGlmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzUuMjExIC0xMzQ2LjU2NikiPg0KICAgIDxnIGlkPSJHcm91cF81NDg1OCIgZGF0YS1uYW1lPSJHcm91cCA1NDg1OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUzNS4yMTEgMTM0Ni41NjYpIj4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzE3MDE4MyIgZGF0YS1uYW1lPSJQYXRoIDE3MDE4MyIgZD0iTS00OTYuMDI4LDEzNDYuNTY2YTIuODQsMi44NCwwLDAsMSwyLjc5NCwxLjc3NWMzLjM0Miw2LjgxNyw2LjcyMSwxMy42MTYsMTAuMDYzLDIwLjQzM2ExLjM4MywxLjM4MywwLDAsMCwxLjIuODg0YzcuNDM1LDEuMDU0LDE0Ljg2NSwyLjE1MSwyMi4zLDMuMjI0LDIuMTQ4LjMxLDMuMywxLjQ0MiwyLjk4NywzLjJhMy44LDMuOCwwLDAsMS0xLjA2MiwxLjg5MnEtOC4xNTEsOC4wMzgtMTYuMzgsMTZhMS4yNDIsMS4yNDIsMCwwLDAtLjQxOSwxLjI3MmMxLjMyNCw3LjU5NSwyLjYwOCwxNS4yLDMuOTEzLDIyLjhhMi43MTEsMi43MTEsMCwwLDEtMS4xLDIuODg2LDIuNzUzLDIuNzUzLDAsMCwxLTMuMDkyLjA5NXEtMTAuMTUzLTUuMzQ5LTIwLjMxMS0xMC42OTFhMS40LDEuNCwwLDAsMC0xLjUtLjAyMXEtMTAuMDY3LDUuMzI5LTIwLjE1OCwxMC42MTJhMy4wODQsMy4wODQsMCwwLDEtMi42NDIuMzUyLDIuNzE3LDIuNzE3LDAsMCwxLTEuNzU5LTMuMXExLjctMTAuMDQxLDMuNDI4LTIwLjA3NmMuMTYtLjkzNi4yNjMtMS44ODUuNDg4LTIuOGExLjI0NCwxLjI0NCwwLDAsMC0uNDI4LTEuMzVjLTUuMzU1LTUuMTkzLTEwLjY4My0xMC40MTQtMTYuMDQ0LTE1LjYtMS4wMTMtLjk4LTEuOC0yLTEuMzExLTMuNDc4LjUtMS41MywxLjgtMS44MiwzLjIwOS0yLjAyLDcuMzUtMS4wNCwxNC42OTMtMi4xMzYsMjIuMDQyLTMuMTgzYTEuMzIzLDEuMzIzLDAsMCwwLDEuMTQxLS44NDRjMy4zNTgtNi44NDEsNi43NDYtMTMuNjY4LDEwLjEtMjAuNTFBMi43NDcsMi43NDcsMCwwLDEtNDk2LjAyOCwxMzQ2LjU2NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzNS4yMTEgLTEzNDYuNTY2KSIgZmlsbD0iIzE1OTU3NiIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo='/>
            <h6 class="h6 icon-text locationSector_h6">Add address, phone number, or social media</h6>
            </div>
          </div>


          <div class="address-content-div">
          <div class="address-icon">
          <img class="image image-location locationSector_image" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OC41NzYiIGhlaWdodD0iNzQuODg1IiB2aWV3Qm94PSIwIDAgNzguNTc2IDc0Ljg4NSI+DQogIDxnIGlkPSJaSkUyN0IudGlmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzUuMjExIC0xMzQ2LjU2NikiPg0KICAgIDxnIGlkPSJHcm91cF81NDg1OCIgZGF0YS1uYW1lPSJHcm91cCA1NDg1OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUzNS4yMTEgMTM0Ni41NjYpIj4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzE3MDE4MyIgZGF0YS1uYW1lPSJQYXRoIDE3MDE4MyIgZD0iTS00OTYuMDI4LDEzNDYuNTY2YTIuODQsMi44NCwwLDAsMSwyLjc5NCwxLjc3NWMzLjM0Miw2LjgxNyw2LjcyMSwxMy42MTYsMTAuMDYzLDIwLjQzM2ExLjM4MywxLjM4MywwLDAsMCwxLjIuODg0YzcuNDM1LDEuMDU0LDE0Ljg2NSwyLjE1MSwyMi4zLDMuMjI0LDIuMTQ4LjMxLDMuMywxLjQ0MiwyLjk4NywzLjJhMy44LDMuOCwwLDAsMS0xLjA2MiwxLjg5MnEtOC4xNTEsOC4wMzgtMTYuMzgsMTZhMS4yNDIsMS4yNDIsMCwwLDAtLjQxOSwxLjI3MmMxLjMyNCw3LjU5NSwyLjYwOCwxNS4yLDMuOTEzLDIyLjhhMi43MTEsMi43MTEsMCwwLDEtMS4xLDIuODg2LDIuNzUzLDIuNzUzLDAsMCwxLTMuMDkyLjA5NXEtMTAuMTUzLTUuMzQ5LTIwLjMxMS0xMC42OTFhMS40LDEuNCwwLDAsMC0xLjUtLjAyMXEtMTAuMDY3LDUuMzI5LTIwLjE1OCwxMC42MTJhMy4wODQsMy4wODQsMCwwLDEtMi42NDIuMzUyLDIuNzE3LDIuNzE3LDAsMCwxLTEuNzU5LTMuMXExLjctMTAuMDQxLDMuNDI4LTIwLjA3NmMuMTYtLjkzNi4yNjMtMS44ODUuNDg4LTIuOGExLjI0NCwxLjI0NCwwLDAsMC0uNDI4LTEuMzVjLTUuMzU1LTUuMTkzLTEwLjY4My0xMC40MTQtMTYuMDQ0LTE1LjYtMS4wMTMtLjk4LTEuOC0yLTEuMzExLTMuNDc4LjUtMS41MywxLjgtMS44MiwzLjIwOS0yLjAyLDcuMzUtMS4wNCwxNC42OTMtMi4xMzYsMjIuMDQyLTMuMTgzYTEuMzIzLDEuMzIzLDAsMCwwLDEuMTQxLS44NDRjMy4zNTgtNi44NDEsNi43NDYtMTMuNjY4LDEwLjEtMjAuNTFBMi43NDcsMi43NDcsMCwwLDEtNDk2LjAyOCwxMzQ2LjU2NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzNS4yMTEgLTEzNDYuNTY2KSIgZmlsbD0iIzE1OTU3NiIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo='/>
          <h6 class="h6 icon-text locationSector_h6">Add address, phone number, or social media</h6>
          </div>

        </div>

        
        </div>
        <div class="address-map-div" data-gjs-type="map">

        
        <iframe src="https://maps.google.com/maps?&z=14&t=q&output=embed" frameborder="0" class="gjs-no-pointer" style="height: 100%; width: 100%;"></iframe>
        <div id="map"></div>
        
        </div>
        </div>
        ${locationStyle}
        
        ${getStyles([
          '.address-content-main-holder',
          'address-content-div',
          'address-text-div',
        ])}
        
        `,
    //       <img class="location-image" data-gjs-type="mj-image" class="object-cover object-center" src="https://dummyimage.com/1200x500" alt="step" style="width: 100%;
    //         height: 400px;">
  });
  addBlock('paragraph', {
    label: 'Paragraph',
    category: 'Section Modules',
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="31.825" height="31.825" viewBox="0 0 31.825 31.825">
    <g id="Group_54077" data-name="Group 54077" transform="translate(-278 -1096.573)">
      <path id="Path_167728" data-name="Path 167728" d="M30.382,9.5H18.258a.85.85,0,0,0,0,1.69H30.382a.85.85,0,0,0,0-1.69Z" transform="translate(278.686 1093.135)" fill="#4ba4da"/>
      <path id="Path_167729" data-name="Path 167729" d="M30.382,13.5H18.258a.874.874,0,0,0,0,1.732H30.382a.874.874,0,0,0,0-1.732Z" transform="translate(278.686 1094.98)" fill="#4ba4da"/>
      <path id="Path_167730" data-name="Path 167730" d="M36.567,17.5H6.258a.947.947,0,0,0,0,1.856h30.31a.947.947,0,0,0,0-1.856Z" transform="translate(272.5 1096.918)" fill="#4ba4da"/>
      <path id="Path_167731" data-name="Path 167731" d="M36.567,21.5H6.258a.887.887,0,0,0,0,1.755h30.31a.887.887,0,0,0,0-1.755Z" transform="translate(272.5 1099.082)" fill="#4ba4da"/>
      <path id="Path_167732" data-name="Path 167732" d="M21.413,25.5H6.258c-.418,0-.758.453-.758,1.012s.339,1.012.758,1.012H21.413c.418,0,.758-.453.758-1.012S21.831,25.5,21.413,25.5Z" transform="translate(272.5 1100.874)" fill="#4ba4da"/>
      <path id="Path_167733" data-name="Path 167733" d="M6.258,19.139H18.382a.758.758,0,0,0,.758-.758V6.258a.758.758,0,0,0-.758-.758H6.258a.758.758,0,0,0-.758.758V18.382A.758.758,0,0,0,6.258,19.139ZM7.015,7.015H17.624V17.624H7.015Z" transform="translate(272.5 1091.073)" fill="#4ba4da"/>
      <path id="Path_167734" data-name="Path 167734" d="M.207,9.275a.35.35,0,0,0,.462-.182L1.8,6.5H3.791l1.134,2.59a.35.35,0,1,0,.641-.28l-2.45-5.6a.35.35,0,0,0-.641,0l-2.45,5.6a.35.35,0,0,0,.182.462ZM2.8,4.227,3.5,5.8H2.1Z" transform="translate(282.027 1096.796)" fill="#4ba4da"/>
    </g>
  </svg>
  
  `,
    content: `<section  id= "paragraphSector" class="paragraphSector" data-gjs-type="paragraphSector">
    <div class="main-paragraph-wrapper">
       
          <h1 class="h1 main-paragraph-heading paragraphSector_h1">Master Cleanse Reliac Heirloom</h1>
          <h6 class="h6 sub-paragraph-heading paragraphSector_h6">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</h6>
      
    </div>
 </section>
 ${paragraphStyle}
 ${getStyles(['.main-paragraph-wrapper'])}
 `,
  });

  addBlock('metrics-numbers', {
    label: 'Numbers',
    category: 'Section Modules',
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="20.07" height="14.238" viewBox="0 0 20.07 14.238">
    <g id="noun-metrics-4041242" transform="translate(-70 -81.367)">
      <path id="Path_169485" data-name="Path 169485" d="M80.035,81.367a10.055,10.055,0,0,0-9.124,14.238H89.159a10.055,10.055,0,0,0-9.124-14.238Zm-.6,1.837h1.191v1.745H79.439Zm-5.865,8.818H71.833V90.828h1.741Zm1.486-4.741-1.238-1.24.842-.845,1.238,1.24Zm4.975,6.376A1.757,1.757,0,0,1,78.282,91.9a45.3,45.3,0,0,1,1.179-4.989.6.6,0,0,1,1.148,0A45.324,45.324,0,0,1,81.788,91.9,1.756,1.756,0,0,1,80.035,93.658Zm4.975-6.376-.842-.845,1.238-1.24.842.845Zm3.228,4.741H86.5V90.828h1.741Z" />
      <path id="Path_169486" data-name="Path 169486" d="M334.32,307.642a.562.562,0,0,0,1.124,0,22.67,22.67,0,0,0-.562-2.516A22.657,22.657,0,0,0,334.32,307.642Z" transform="translate(-254.847 -215.739)" fill="#7c8189"/>
    </g>
  </svg>
  `,
    content: `<section data-gjs-type="numbersSection" class="numbersSection" id= "numbersSection">
        <div class="number-container-div">
          
        <div class="title-div">
              <h1 class="h1 main-number-heading numbersSection_h1">Add your heading title here</h1>
              <h2 class="h2 sub-number-heading numbersSection_h2">The numbers module allows you to showcase your company’s metrics and
                statistical accomplishments
              </h2>
          </div>

          <div class="number-percentagges-section">
         
              <div class="benefit percentage-info number-border">
                <i class="fa fa-star"></i>
                <h1 class="h1 number-val numbersSection_h1">10  % </h1>
                <h4 class="h4 number-description numbersSection_h4">INSERT STATISTIC INFORMATION</h4>
              </div>

              <div class="benefit percentage-info number-border">
                <i class="fa fa-star"></i>
                <h1 class="h1 number-val numbersSection_h1" >10  % </h1>
                <h4 class="h4 number-description" numbersSection_h4 >INSERT STATISTIC INFORMATION</h4>
              </div>

                <div class="benefit percentage-info number-border">
                <i class="fa fa-star"></i>
                <h1 class="h1 number-val numbersSection_h1" >10 % </h1>
                <h4 class="h4 number-description numbersSection_h4 " >INSERT STATISTIC INFORMATION</h4>
              </div>

              </div>
          </div>
    </section> 
    
    ${numbermetric}
    ${getStyles(['.title-div'])}
    `,
  });

  addBlock('talent-cloud-candidates', {
    label: 'Talent Cloud',
    category: 'Section Modules',
    media: `<svg width="26.9" height="25.5" xmlns="http://www.w3.org/2000/svg">
    <g>
     <title>Layer 1</title>
     <path  d="m24.96,47.04l0,0zm-22.08,-26.88a2.875,2.875 0 0 0 2.7,-1.92l4.02,0a0.96,0.96 0 0 0 0.96,-0.96l0,-2.88l1.92,0l0,4.977a2.88,2.88 0 1 0 1.92,0l0,-4.977l1.92,0l0,2.88a0.96,0.96 0 0 0 0.96,0.96l4.02,0a2.88,2.88 0 1 0 0,-1.92l-3.06,0l0,-1.92a5.76,5.76 0 0 0 0.19,-11.517a5.76,5.76 0 0 0 -9.98,0a5.76,5.76 0 0 0 0.19,11.517l0,1.92l-3.057,0a2.875,2.875 0 1 0 -2.7,3.84l-0.003,0z" data-name="Path 169437" id="Path_169437"/>
    </g>
   
   </svg>`,
    content: `<section id= "talentSector" class="talent-cloud-main-wrapper talentSector">
    

    <div class="talent-cloud-container">
     <div class="img-holder">
       <img data-gjs-type="mj-image" class="talent-image"src="https://cdn.pixabay.com/photo/2013/07/12/18/35/world-153534_960_720.png" alt="...">
     </div>
   
    <div class="content-div">
          <h1 class="h1 main-talent-heading">Join Talent Clouds</h1>
          <h6 class="h6 sub-talent-heading">You can apply to be considered for the opportunities that match your skills, interests and availability. 
             </h6>
             <h6 class="h6 sub-talent-heading">Most opportunities are remote, but some travel may be required depending on the project need.
          </h6>
       </div>
    </div>
 </section> 
    ${talentCloud}
    ${getStyles(['.content-div'])}
 `,
  });

  addBlock('image-banner', {
    label: 'Image Banner',
    category: 'Section Modules',
    media: `<svg xmlns="http://www.w3.org/2000/svg" fill="#159576" width="24" height="24" viewBox="0 0 24 24">
    <path id="Path_170799" data-name="Path 170799" d="M90.466,39.2H70.632a.633.633,0,0,0-.633.633V56.5a.633.633,0,0,0,.633.633H90.466A.633.633,0,0,0,91.1,56.5V39.832A.633.633,0,0,0,90.466,39.2ZM83.292,54.417a.442.442,0,0,1-.434.4H72.264a.382.382,0,0,1-.366-.4v-.053a.382.382,0,0,1,.366-.4H82.857a.442.442,0,0,1,.434.4Zm-11.04-2.98H82.479a.414.414,0,0,1,.405.382V51.9a.414.414,0,0,1-.405.382H72.252A.369.369,0,0,1,71.9,51.9v-.079a.369.369,0,0,1,.354-.383ZM71.9,49.353V49.3a.382.382,0,0,1,.366-.4h9.617a.4.4,0,0,1,.393.4v.053a.4.4,0,0,1-.393.4H72.264A.382.382,0,0,1,71.9,49.353Zm17.251,4.822-.672.5a.283.283,0,0,1-.168.056.272.272,0,0,1-.043,0,.284.284,0,0,1-.185-.113l-1.355-1.869-.778.573a.282.282,0,0,1-.442-.163l-.958-4.085a.282.282,0,0,1,.414-.31l3.645,2.078a.282.282,0,0,1,.031.469l-.788.6,1.359,1.876a.281.281,0,0,1-.06.392Zm.472-8.225a.633.633,0,0,1-.633.633H72.109a.633.633,0,0,1-.633-.633V41.941a.633.633,0,0,1,.633-.633h16.88a.633.633,0,0,1,.633.633Z" transform="translate(-69.999 -39.199)"/>
  </svg>
  `,
    content: `<section id="bannerSector" class="main-banner-container bannerSector" data-gjs-type="bannerSector">
        
      
      <div class="bannar-content">
         <h1 id ="main-banner-heading bannerSector_h1" class="h1 main-banner-heading">Add your heading title here</h1>
         <h6 class="h6 sub-banner-heading bannerSector_h6">Use this area to write about anything you want. Keep it easy to read and percise. (Dummy Text) Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nunc nec posuere risus. Phasellus nunc nisl, vulputate nec magna vel, sodales sollicitudin velit. Fusce scelerisque odio risus, eu euismod felis
            pellentesque a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In pulvinar aliquam felis, eu sodales ligula
            mollis ut. Aliquam eu pellentesque turpis. Nullam lectus nulla, vehicula quis odio vitae, vestibulum sollicitudin massa. Aenean pretium mauris nec ex
            feugiat convallis. Nulla sit amet odio dui. Nulla vulputate dictum tellus vel iaculis.
         </h6>
         <div class="button-container">
            <button class="button banner-button bannerSector_button" data-gjs-type="button">Button Label</button>
         </div>

      </div>
  

        </section>
        ${ImageBanner}
        ${getbuttonStyles(['.button-container'])}
        ${getButtonALignment(['.button-container'])}
      
        `,
  });

  addBlock('photo-gallery', {
    label: 'Photo Gallery',
    category: 'Section Modules',
    media: `<svg width="21" height="22.477" xmlns="http://www.w3.org/2000/svg">
    <g>
     <g id="noun-health-insurance-1893284">
      <path id="Path_169632" data-name="Path 169632" d="m8.286,22.33901l0.209,0.14l0.035,-0.035l0.035,0.035l0.209,-0.14a18.286,18.286 0 0 0 5.41,-5.445a18.771,18.771 0 0 0 2.967,-10.75l0,-0.314l-0.279,-0.035a11.443,11.443 0 0 1 -4.258,-1.326a11.685,11.685 0 0 1 -3.8,-3.351l-0.279,-0.314l-0.279,0.349a12.267,12.267 0 0 1 -7.923,4.642l-0.314,0.035l0,0.314a18.6,18.6 0 0 0 3,10.925a18.058,18.058 0 0 0 5.27,5.27l-0.003,0zm-4.363,-11.483a0.35,0.35 0 0 1 0.349,-0.349l3.141,0l0,-3.141a0.35,0.35 0 0 1 0.349,-0.349l1.745,0a0.35,0.35 0 0 1 0.349,0.349l0,3.141l3.142,0a0.35,0.35 0 0 1 0.349,0.349l0,1.745a0.35,0.35 0 0 1 -0.349,0.349l-3.141,0l0,3.141a0.35,0.35 0 0 1 -0.349,0.349l-1.745,0a0.35,0.35 0 0 1 -0.349,-0.349l0,-3.141l-3.141,0a0.35,0.35 0 0 1 -0.349,-0.349l-0.001,-1.745z" />
      <path id="Path_169633" data-name="Path 169633" d="m20.536,5.026l-0.279,-0.035a12.53,12.53 0 0 1 -4.293,-1.326a11.933,11.933 0 0 1 -3.281,-2.618l-0.768,-1.047l-1.815,1.815l0,0.384a11.757,11.757 0 0 0 2.653,2.059a10.888,10.888 0 0 0 4.153,1.291l0.593,0.07l0,0.593a19.216,19.216 0 0 1 -3.037,10.925a18.581,18.581 0 0 1 -3.455,3.944l0.838,0.558l0.035,-0.035l0.035,0.035l0.209,-0.14a18.286,18.286 0 0 0 5.41,-5.445a18.772,18.772 0 0 0 2.967,-10.75l0.035,-0.278z" />
      <path id="Path_169634" data-name="Path 169634" d="m29.82099,11.23901z"/>
     </g>
    </g>
   
   </svg>`,
    content: `<section  id= "photoSector" class="photo-main-wrapper photoSector" data-gjs-type="photoSector">
    <div class="photo-container" >

       <div class="photo-title-div">
          <h1 class="h1 main-photo-heading photoSector_h1">Add your heading title here</h1>
          <h2 class="h2 sub-photo-heading photoSector_h2">The  Photo Gallery module is a place where can visibily show your user or
           client aspects of your company or product.
          </h2>
       </div>
    
       <div class="photo-option-section">

       <div class="photo_img_container">
       <img class="image photo-image-gallery photoSector_image" src="https://dummyimage.com/1200x500" alt="step" >
          <figcaption class="photo_figure_caption photoSector_photo" >Caption Example</figcaption>
    </div>
    <div class="photo_img_container">
       <img class="image photo-image-gallery photoSector_image" src="https://dummyimage.com/1200x500" alt="step" >
          <figcaption class="photo_figure_caption photoSector_photo " >Caption Example</figcaption>
    </div>
    <div class="photo_img_container">
       <img class="image photo-image-gallery photoSector_image" src="https://dummyimage.com/1200x500" alt="step" >
          <figcaption class="photo_figure_caption photoSector_photo" >Caption Example</figcaption>
    </div>



       </div>
    </div>
 </section>
 ${photoGalleryStyle}
 ${getStyles(['.photo-title-div', '.photo-option-section'])}
 `,
  });

  addBlock('image-and-text', {
    label: 'Image & Text',
    category: 'Section Modules',
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="23.304" height="17.768" viewBox="0 0 23.304 17.768">
    <g id="Group_55521" data-name="Group 55521" transform="translate(-40.347 -1128.116)">
      <g id="noun-image-align-left-1661927" transform="translate(26.199 1082.089)">
        <path id="Path_169420" data-name="Path 169420" d="M243.041,383.56h7.137c.241,0,.437.483.437.874,0,.483-.2.874-.437.874h-7.137c-.241,0-.437-.483-.437-.874C242.6,383.951,242.8,383.56,243.041,383.56Z" transform="translate(-213.162 -324.717)" />
        <path id="Path_169422" data-name="Path 169422" d="M358.265,299.18h6.809c.332,0,.6.483.6.874,0,.483-.269.874-.6.874h-6.809c-.332,0-.6-.483-.6-.874C357.664,299.571,357.933,299.18,358.265,299.18Z" transform="translate(-328.222 -243.541)" />
        <path id="Path_169423" data-name="Path 169423" d="M51.694,383.56h4.078a.939.939,0,0,1,.874.874.874.874,0,0,1-.874.874H51.694a.939.939,0,0,1-.874-.874A.874.874,0,0,1,51.694,383.56Z" transform="translate(-36.67 -324.717)" />
        <path id="Path_169424" data-name="Path 169424" d="M358.265,214.79h6.809c.332,0,.6.483.6.874,0,.483-.269.874-.6.874h-6.809c-.332,0-.6-.483-.6-.874C357.664,215.181,357.933,214.79,358.265,214.79Z" transform="translate(-328.222 -162.356)" />
        <path id="Path_169425" data-name="Path 169425" d="M358.265,130.41h6.809c.332,0,.6.483.6.874,0,.483-.269.874-.6.874h-6.809c-.332,0-.6-.483-.6-.874C357.664,130.8,357.933,130.41,358.265,130.41Z" transform="translate(-328.222 -81.18)" />
        <path id="Path_169426" data-name="Path 169426" d="M51.694,46.027H73.248a.939.939,0,0,1,.874.874.874.874,0,0,1-.874.874H51.694a.939.939,0,0,1-.874-.874A.874.874,0,0,1,51.694,46.027Z" transform="translate(-36.67)" />
        <path id="Path_169427" data-name="Path 169427" d="M51.694,467.95H73.248a.939.939,0,0,1,.874.874.874.874,0,0,1-.874.874H51.694a.939.939,0,0,1-.874-.874A.874.874,0,0,1,51.694,467.95Z" transform="translate(-36.67 -405.903)" />
      </g>
      <path id="Path_169428" data-name="Path 169428" d="M52.385,130.41H62.918a1.749,1.749,0,0,1,1.56,1.683v8.417a1.625,1.625,0,0,1-1.56,1.683H52.385a1.749,1.749,0,0,1-1.561-1.683v-8.417A1.625,1.625,0,0,1,52.385,130.41Z" transform="translate(-10.477 1000.934)" />
      <g id="noun-layout-47703_1_" data-name="noun-layout-47703 (1)" transform="translate(-49.754 924.043)">
        <g id="Group_54215" data-name="Group 54215" transform="translate(92.941 210.188)">
          <path id="Path_169419" data-name="Path 169419" d="M160.787,214.606H163.4L161.319,211l-1.307,2.264-1.906-3.3-2.682,4.645h5.364Zm-.929-3.941a.8.8,0,1,0-.8-.8.8.8,0,0,0,.8.8" transform="translate(-155.423 -209.07)" fill="#ebebed"/>
        </g>
      </g>
    </g>
  </svg>
  
  `,
    content: (prefixnew,check) =>
      `<section class="ImageTextSector"  id= "ImageTextSector" data-gjs-type="ImageTextSector">
 <div data-gjs-type="${prefixnew}"   class="main_container ${check}">
       
        <div class="content-section">
        <h1 class="h1 main-image-heading ImageTextSector_h1" >Add your heading title here</h1>
        <h2 class="h2 sub-image-heading ImageTextSector_h2">The Image and Text module is a place where you can
           visually show your user or client aspects of your
           company or product.
        </h2>
     </div>
        
        
        <div class="image-text-image-section">
        <div class="img_container">
           <img class="image image-gallery ImageTextSector_image" src="https://dummyimage.com/1200x500" alt="step" >
              <figcaption class="figure_caption gallery-caption ImageTextSector_figure" >Caption Example</figcaption>
        </div>
        </div>
        </div>
        </section>
    ${ImageText}
    ${getStyles(['.content-section'])}
  
        `,
  });
  addBlock('search', {
    label: 'Search',
    category: 'Basic Elements',
    media: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
        <path d="M1458.948 1305.626c104.637-136.95 167.527-307.187 167.527-492.388C1626.475 364.764 1261.711 0 813.238 0 364.764 0 0 364.764 0 813.238c0 448.473 364.764 813.237 813.238 813.237 185.201 0 355.547-62.89 492.496-167.527L1766.678 1920 1920 1766.678l-461.052-461.052Zm-645.71 103.986c-328.874 0-596.375-267.61-596.375-596.374 0-328.765 267.501-596.375 596.375-596.375 328.873 0 596.374 267.61 596.374 596.375s-267.501 596.374-596.374 596.374Z" fill-rule="evenodd"/>
    </svg>`,
    content: `<section class="search-section-main-holder">
    <div class="search-bar-div">
    <div class="search-box">
    <input type="text" class="input" placeholder="Search Item...">
    <button class="button"> Search</button>
 </div>
    </div>
    </section>
    ${SearchStyle}
        `,
  });
  addBlock('divider', {
    label: 'Divider',
    category: 'Basic',
    media: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#089acf"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <polyline points="8 8 12 4 16 8" />
      <polyline points="16 16 12 20 8 16" />
    </svg>`,
    content: `
<section class="dividerSector" id ="dividerSector">
<hr class="divider-1">
</section>
        ${dividerStyle}
        `,
  });
  addBlock('spacer', {
    label: 'Spacer',
    category: 'Basic',
    media: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg"><path d="M3,1V17a2,2,0,0,0,2,2H47a2,2,0,0,0,2-2V1H45V15H7V1ZM49,51V35a2,2,0,0,0-2-2H5a2,2,0,0,0-2,2V51H7V37H45V51ZM12,28H4V24h8Zm4,0h8V24H16Zm20,0H28V24h8Zm4,0h8V24H40Z" fill-rule="evenodd"/></svg>`,
    content: `<section class="page-builder-spacer spaceSector"  id ="spaceSector">
    <div class="page-builder-spacer-inner spaceSector_spacer"></div>
  </section>
        ${style}
        `,
  });
  addBlock('page-title', {
    label: 'Page Title',
    category: 'Header & Footer',
    media: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
        <path d="M1751 0v1920H169V0h1582Zm-115 112H290v9h-1v1678h1v20h1346V112Zm-234 235v321H514V347h888Z" fill-rule="evenodd"/>
    </svg>`,
    content: `  <div class="page-title-wrapper">
    <h1 class="h1">page Builder Header #1234</h1>
</div>
        `,
  });
  addBlock('icon', {
    label: 'Icon',
    category: 'Basic',
    media: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>ICON icon</title><path d="M21.605.021a2.397 2.397 0 00-.47 4.747 2.397 2.397 0 10.47-4.746zm-9.584 2.395C6.73 2.416 2.437 6.707 2.437 12c0 2.142.703 4.121 1.891 5.717l2.586-2.586a5.99 5.99 0 018.236-8.238l2.586-2.586a9.537 9.537 0 00-5.715-1.891zm7.692 3.867L17.127 8.87a5.989 5.989 0 01-8.236 8.238l-2.586 2.584a9.543 9.543 0 005.716 1.893c5.293 0 9.583-4.29 9.583-9.584 0-2.142-.704-4.12-1.891-5.717zM2.396 19.187a2.398 2.398 0 00-.47 4.749 2.402 2.402 0 002.822-2.823 2.399 2.399 0 00-2.352-1.925z"/></svg>`,
    content: `<div class="icon-wrapper iconSector" id="iconSector">
    <div class="page-builder-icon">
    <img class="image-department icon-sec" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OC41NzYiIGhlaWdodD0iNzQuODg1IiB2aWV3Qm94PSIwIDAgNzguNTc2IDc0Ljg4NSI+DQogIDxnIGlkPSJaSkUyN0IudGlmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzUuMjExIC0xMzQ2LjU2NikiPg0KICAgIDxnIGlkPSJHcm91cF81NDg1OCIgZGF0YS1uYW1lPSJHcm91cCA1NDg1OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUzNS4yMTEgMTM0Ni41NjYpIj4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzE3MDE4MyIgZGF0YS1uYW1lPSJQYXRoIDE3MDE4MyIgZD0iTS00OTYuMDI4LDEzNDYuNTY2YTIuODQsMi44NCwwLDAsMSwyLjc5NCwxLjc3NWMzLjM0Miw2LjgxNyw2LjcyMSwxMy42MTYsMTAuMDYzLDIwLjQzM2ExLjM4MywxLjM4MywwLDAsMCwxLjIuODg0YzcuNDM1LDEuMDU0LDE0Ljg2NSwyLjE1MSwyMi4zLDMuMjI0LDIuMTQ4LjMxLDMuMywxLjQ0MiwyLjk4NywzLjJhMy44LDMuOCwwLDAsMS0xLjA2MiwxLjg5MnEtOC4xNTEsOC4wMzgtMTYuMzgsMTZhMS4yNDIsMS4yNDIsMCwwLDAtLjQxOSwxLjI3MmMxLjMyNCw3LjU5NSwyLjYwOCwxNS4yLDMuOTEzLDIyLjhhMi43MTEsMi43MTEsMCwwLDEtMS4xLDIuODg2LDIuNzUzLDIuNzUzLDAsMCwxLTMuMDkyLjA5NXEtMTAuMTUzLTUuMzQ5LTIwLjMxMS0xMC42OTFhMS40LDEuNCwwLDAsMC0xLjUtLjAyMXEtMTAuMDY3LDUuMzI5LTIwLjE1OCwxMC42MTJhMy4wODQsMy4wODQsMCwwLDEtMi42NDIuMzUyLDIuNzE3LDIuNzE3LDAsMCwxLTEuNzU5LTMuMXExLjctMTAuMDQxLDMuNDI4LTIwLjA3NmMuMTYtLjkzNi4yNjMtMS44ODUuNDg4LTIuOGExLjI0NCwxLjI0NCwwLDAsMC0uNDI4LTEuMzVjLTUuMzU1LTUuMTkzLTEwLjY4My0xMC40MTQtMTYuMDQ0LTE1LjYtMS4wMTMtLjk4LTEuOC0yLTEuMzExLTMuNDc4LjUtMS41MywxLjgtMS44MiwzLjIwOS0yLjAyLDcuMzUtMS4wNCwxNC42OTMtMi4xMzYsMjIuMDQyLTMuMTgzYTEuMzIzLDEuMzIzLDAsMCwwLDEuMTQxLS44NDRjMy4zNTgtNi44NDEsNi43NDYtMTMuNjY4LDEwLjEtMjAuNTFBMi43NDcsMi43NDcsMCwwLDEtNDk2LjAyOCwxMzQ2LjU2NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzNS4yMTEgLTEzNDYuNTY2KSIgZmlsbD0iIzE1OTU3NiIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo='/>
    </div>
    </div>
        ${IconStyle}
        `,
  });
  addBlock('nav-menu', {
    label: 'Nav Menu',
    category: 'Basic Elements',
    media: `<?xml version="1.0" encoding="utf-8"?>

    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg height="800px" width="800px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
       viewBox="0 0 512 512"  xml:space="preserve">
    <style type="text/css">
      .st0{fill:#000000;}
    </style>
    <g>
      <path class="st0" d="M256,0C114.617,0,0,114.61,0,256c0,141.375,114.617,256,256,256c141.382,0,256-114.625,256-256
        C512,114.61,397.382,0,256,0z M189.828,373.641h-51.477v-51.469h51.477V373.641z M189.828,281.734h-51.477v-51.468h51.477V281.734z
         M189.828,189.813h-51.477V138.36h51.477V189.813z M281.734,373.641h-51.461v-51.469h51.461V373.641z M281.734,281.734h-51.461
        v-51.468h51.461V281.734z M281.734,189.813h-51.461V138.36h51.461V189.813z M373.641,373.641H322.18v-51.469h51.461V373.641z
         M373.641,281.734H322.18v-51.468h51.461V281.734z M373.641,189.813H322.18V138.36h51.461V189.813z"/>
    </g>
    </svg>`,
    content: `<nav class="page-builder-nav-menu--main page-builder-menu--layout-horizontal">
    <ul class="page-builder-menu">
       <li class="menu-item"> <a href="#" class="page-builder-item">Blog Category</a></li>
       <li class="menu-item"> <a href="#" class="page-builder-item">Home</a></li>
       <li class="menu-item"> <a href="#" class="page-builder-item">AI &amp; Machine Learning</a></li>
       <li class="menu-item"> <a href="#" class="page-builder-item">Big Data, Cloud &amp; DevOps</a></li>
       <li class="menu-item"> <a href="#" class="page-builder-item">Blog series</a></li>
       <li class="menu-item"> <a href="#" class="page-builder-item">ConsumerTech</a></li>
       <li class="menu-item"> <a href="#" class="page-builder-item">FinTech</a></li>
       <li class="menu-item"> <a href="#" class="page-builder-item">Future of Work</a></li>
       <li class="menu-item"> <a href="#" class="page-builder-item">HealthTech</a></li>
       <li class="menu-item"> <a href="#" class="page-builder-item">IoT &amp; Automation</a></li>
    </ul>
 </nav>
        ${Navmenu}
        `,
  });
  addBlock('icon-list', {
    label: 'Icon List',
    category: 'Basic',
    media: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
        <path d="M169.412 1355.412c93.402 0 169.412 76.01 169.412 169.412s-76.01 169.411-169.412 169.411C76.009 1694.235 0 1618.225 0 1524.824c0-93.403 76.01-169.412 169.412-169.412ZM1920 1468.352v112.942H564.706v-112.941H1920ZM169.412 790.707c93.402 0 169.412 76.01 169.412 169.412s-76.01 169.411-169.412 169.411C76.009 1129.53 0 1053.52 0 960.118c0-93.403 76.01-169.412 169.412-169.412ZM1920 903.647v112.941H564.706v-112.94H1920ZM169.412 226c93.402 0 169.412 76.01 169.412 169.412s-76.01 169.412-169.412 169.412C76.009 564.824 0 488.814 0 395.412 0 302.009 76.01 226 169.412 226ZM1920 338.941v112.941H564.706v-112.94H1920Z" fill-rule="evenodd"/>
    </svg>`,
    content: `    <div class="page-builder-listing-section">
    <ul class="page-builder-list-items">
   <li class="page-builder-list-item">
      <span class="page-builder-list-icon">
      <i aria-hidden="true" class="fas fa-check"></i>
      </span>
      <span class="page-builder-list-text">List Item #1</span>
   </li>
   <li class="page-builder-list-item">
   <span class="page-builder-list-icon">
   <i aria-hidden="true" class="fas fa-check"></i>
   </span>
   <span class="page-builder-list-text">List Item #2</span>
</li>
<li class="page-builder-list-item">
      <span class="page-builder-list-icon">
      <i aria-hidden="true" class="fas fa-check"></i>
      </span>
      <span class="page-builder-list-text">List Item #3</span>
   </li>
</ul>
    </div>
        ${IconListStyle}
        `,
  });
  addBlock('logo', {
    label: 'Site Logo',
    category: 'Header & Footer',
    media: `<?xml version="1.0" encoding="utf-8"?>
    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>frost-emblem</title>
    <path d="M15.915 1.542c-7.891 0-14.287 6.397-14.287 14.287s6.397 14.287 14.287 14.287 14.287-6.396 14.287-14.287c0-7.89-6.396-14.287-14.287-14.287zM15.913 29.025c-7.291 0-13.201-5.91-13.201-13.201s5.91-13.201 13.201-13.201 13.201 5.91 13.201 13.201-5.91 13.201-13.201 13.201zM25.552 16.896l-3.911 1.048-1.542-1.346 0.766-0.766-0.715-0.715 1.512-1.32 3.846 1.010-2.645-2.059 3.016-2.632-3.764 1.288-0.451-3.405-1.050 3.919-1.954 0.669-0.288-1.075-1.051 0.281-0.388-1.977 2.877-2.877-3.183 1.316-0.768-3.913-0.772 3.93-3.094-1.256 2.788 2.816-0.383 1.95-1.009-0.27-0.284 1.061-1.895-0.649-1.049-3.915-0.45 3.402-3.76-1.287 3.015 2.631-2.648 2.062 3.851-1.012 1.47 1.283-0.743 0.743 0.794 0.794-1.499 1.308-3.916-1.049 2.722 2.091-3.008 2.625 3.801-1.3 0.461 3.317 1.047-3.833 1.828-0.625 0.264 0.986 1.010-0.271 0.382 1.946-2.788 2.815 3.094-1.256 0.772 3.932 0.769-3.916 3.183 1.316-2.876-2.876 0.387-1.972 1.051 0.282 0.268-1 1.887 0.646 1.048 3.837 0.461-3.32 3.804 1.302-3.009-2.625zM19.812 6.941l-0 0 0-0zM19.812 24.712l-0-0 0 0z"></path>
    </svg>`,
    content: `   <div class="page-builder-logo">
    <a class="#"><img src="https://resources.experfy.com/wp-content/uploads/2021/05/logo_navbar-87f75515ac3e48fdcc77b82a8794120a2c9d629770c27c0e76e966221ee0b7f4.png" class=""></a>
    </div>
    <h2 class="h2">Experfy Insights</h2>
        ${LogoStyle}
        `,
  });
  addBlock('theme-style', {
    label: 'Theme Style',
    category: 'Section Modules',
    activate: true,
    select: true,
    // media: ,
    content: [
      `<div selecteable="false" id="theme_1" style="padding: 0px 20%;">
        <div data-gjs-highlightable="false" selectable="false" class="global-theme-setting">

        <div data-gjs-highlightable="false" class="button-section" selectable="false">
          <button class="button" type="button" >Submit</button>
        </div>

        <div data-gjs-highlightablee="false"  class="images-sections">
          <img class="image"  width="200px" src="https://cdn4.iconfinder.com/data/icons/documents-letters-and-stationery/400/doc-14-512.png" />
        </div>
        <div class="body-text" >
            <p class="body-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sapien faucibus et molestie. Sed nisi lacus sed viverra. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Neque convallis a cras semper auctor neque vitae.</p>
        </div>

        <div data-gjs-highlightable="false" class="heading-holder-block">
          <h1 class="h1">Heading 1</h1>
          <h2 class="h2">Heading 2</h2>
          <h3 class="h3" >Heading 3</h3>
          <h4 class="h4">Heading 4</h4>
          <h5 class="h5">Heading 5</h5>
          <h6 class="h6">Heading 6</h6>
        </div>
          
        <div  data-gjs-highlightable="false" class="link-holder">
          <a href="#" class="a" >Link 1</a>
        </div>

        <div data-gjs-highlightable="false" class="page-builder-form-div">
          <form>
            <div data-gjs-highlightable="false" class="page-builder-field-group">
              <span class="label" for="text">Label:</span>
              <input type="text" class="input" value="This is the input" >
            </div>
          </form>
        </div>
      </div>
    </div>
    
    ${themestyle}
    `,
    ],
  });

  addBlock('department', {
    label: 'Department',
    category: 'Section Modules',
    media: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
        <path d="M1458.948 1305.626c104.637-136.95 167.527-307.187 167.527-492.388C1626.475 364.764 1261.711 0 813.238 0 364.764 0 0 364.764 0 813.238c0 448.473 364.764 813.237 813.238 813.237 185.201 0 355.547-62.89 492.496-167.527L1766.678 1920 1920 1766.678l-461.052-461.052Zm-645.71 103.986c-328.874 0-596.375-267.61-596.375-596.374 0-328.765 267.501-596.375 596.375-596.375 328.873 0 596.374 267.61 596.374 596.375s-267.501 596.374-596.374 596.374Z" fill-rule="evenodd"/>
    </svg>`,
    content: ` <section  id= "departmentSector" class="department-main-wrapper departmentSector">
    <div id=department_1 class="department-container">
      <div class="department-header-section">
        <h1 class="h1 main-department-heading">Departments</h1>
        <h2 class="h2 sub-department-heading">The department module lists the departments as well as the job listings associated ,
            with the department, if applicable.
        </h2>
      </div>
      <div class="department-option" data-gjs-type="Departmentdiv" id="Departmentdiv">
      <div class="department-holder">
      <img class="image-department" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OC41NzYiIGhlaWdodD0iNzQuODg1IiB2aWV3Qm94PSIwIDAgNzguNTc2IDc0Ljg4NSI+DQogIDxnIGlkPSJaSkUyN0IudGlmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzUuMjExIC0xMzQ2LjU2NikiPg0KICAgIDxnIGlkPSJHcm91cF81NDg1OCIgZGF0YS1uYW1lPSJHcm91cCA1NDg1OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUzNS4yMTEgMTM0Ni41NjYpIj4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzE3MDE4MyIgZGF0YS1uYW1lPSJQYXRoIDE3MDE4MyIgZD0iTS00OTYuMDI4LDEzNDYuNTY2YTIuODQsMi44NCwwLDAsMSwyLjc5NCwxLjc3NWMzLjM0Miw2LjgxNyw2LjcyMSwxMy42MTYsMTAuMDYzLDIwLjQzM2ExLjM4MywxLjM4MywwLDAsMCwxLjIuODg0YzcuNDM1LDEuMDU0LDE0Ljg2NSwyLjE1MSwyMi4zLDMuMjI0LDIuMTQ4LjMxLDMuMywxLjQ0MiwyLjk4NywzLjJhMy44LDMuOCwwLDAsMS0xLjA2MiwxLjg5MnEtOC4xNTEsOC4wMzgtMTYuMzgsMTZhMS4yNDIsMS4yNDIsMCwwLDAtLjQxOSwxLjI3MmMxLjMyNCw3LjU5NSwyLjYwOCwxNS4yLDMuOTEzLDIyLjhhMi43MTEsMi43MTEsMCwwLDEtMS4xLDIuODg2LDIuNzUzLDIuNzUzLDAsMCwxLTMuMDkyLjA5NXEtMTAuMTUzLTUuMzQ5LTIwLjMxMS0xMC42OTFhMS40LDEuNCwwLDAsMC0xLjUtLjAyMXEtMTAuMDY3LDUuMzI5LTIwLjE1OCwxMC42MTJhMy4wODQsMy4wODQsMCwwLDEtMi42NDIuMzUyLDIuNzE3LDIuNzE3LDAsMCwxLTEuNzU5LTMuMXExLjctMTAuMDQxLDMuNDI4LTIwLjA3NmMuMTYtLjkzNi4yNjMtMS44ODUuNDg4LTIuOGExLjI0NCwxLjI0NCwwLDAsMC0uNDI4LTEuMzVjLTUuMzU1LTUuMTkzLTEwLjY4My0xMC40MTQtMTYuMDQ0LTE1LjYtMS4wMTMtLjk4LTEuOC0yLTEuMzExLTMuNDc4LjUtMS41MywxLjgtMS44MiwzLjIwOS0yLjAyLDcuMzUtMS4wNCwxNC42OTMtMi4xMzYsMjIuMDQyLTMuMTgzYTEuMzIzLDEuMzIzLDAsMCwwLDEuMTQxLS44NDRjMy4zNTgtNi44NDEsNi43NDYtMTMuNjY4LDEwLjEtMjAuNTFBMi43NDcsMi43NDcsMCwwLDEtNDk2LjAyOCwxMzQ2LjU2NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzNS4yMTEgLTEzNDYuNTY2KSIgZmlsbD0iIzE1OTU3NiIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo='/>
    
         <h1 class="h1 icon-department-heading">Department 1</h1>
         <h6 class="h6 icon-department-sub-heading">Lorem ipsum dolor sit amet. Est
            porro distinctio eum eius odit ea
            facere consequuntur.
         </h6>
      </div>
    
      
      
      
    




      </div>
  </div>
  </section>
  ${departmentstyle}
  `,
  });

  addBlock('jobs', {
    label: 'Jobs',
    category: 'Section Modules',
    media: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
        <path d="M1458.948 1305.626c104.637-136.95 167.527-307.187 167.527-492.388C1626.475 364.764 1261.711 0 813.238 0 364.764 0 0 364.764 0 813.238c0 448.473 364.764 813.237 813.238 813.237 185.201 0 355.547-62.89 492.496-167.527L1766.678 1920 1920 1766.678l-461.052-461.052Zm-645.71 103.986c-328.874 0-596.375-267.61-596.375-596.374 0-328.765 267.501-596.375 596.375-596.375 328.873 0 596.374 267.61 596.374 596.375s-267.501 596.374-596.374 596.374Z" fill-rule="evenodd"/>
    </svg>`,
    content: `

<section id="JobsSector" class="JobsSector" >

<div class="dept-header-section">
    <h1 class="h1 dept_section">Browes Job Opportunities and Projects</h1>
  </div>
  <div class="searchbar-main-section">
    <input type="text" class="locationSearch">
    <button class="button">Jobs Search</button>
    <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
  </div>
  <div class="searchbar-dropdown">
  <select class="select-option">
      <option>Paractice Area</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <select class="select-option">
      <option>All Jobs Types</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <select class="select-option">
      <option>Posted Any Time</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <select class="select-option">
      <option>Compensatio</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <select class="select-option">
      <option>54k- $ 135k</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <select class="select-option">
      <option>More Filters</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
    
   
    
    
    
    
 
    
    
    
    <div class="department-container">
    <div class="department-left">
<h2 class="h2 job_title">Conversational AI Testers</h2>
<h4 class="h4 company_name">Delootte,</h4><span class="h4 posted">posted July 21</span>

<h4 class="h4 descriptive_text">6+ years of relevant work experience</h4>
<h4 class="h4 descriptive_text">2+ experiences testing virtual agents or virtual assistants involving assistants IPSoft Amelia , Kore.ai, Nuance Nina, Amazon Lex & Alexa, Dialgoflow, or IBM Watson</h4>

    </div>
    <div class="department-right">
    <ul>
    <li>
    <svg height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 293.334 293.334" xml:space="preserve">
<g>
	<g>
		<path style="fill:#010002;" d="M146.667,0C94.903,0,52.946,41.957,52.946,93.721c0,22.322,7.849,42.789,20.891,58.878
			c4.204,5.178,11.237,13.331,14.903,18.906c21.109,32.069,48.19,78.643,56.082,116.864c1.354,6.527,2.986,6.641,4.743,0.212
			c5.629-20.609,20.228-65.639,50.377-112.757c3.595-5.619,10.884-13.483,15.409-18.379c6.554-7.098,12.009-15.224,16.154-24.084
			c5.651-12.086,8.882-25.466,8.882-39.629C240.387,41.962,198.43,0,146.667,0z M146.667,144.358
			c-28.892,0-52.313-23.421-52.313-52.313c0-28.887,23.421-52.307,52.313-52.307s52.313,23.421,52.313,52.307
			C198.98,120.938,175.559,144.358,146.667,144.358z"/>
		<circle style="fill:#010002;" cx="146.667" cy="90.196" r="21.756"/>
	</g>
</g>
</svg>
  <span class="h5 feature_list">Boston, MA,</span>

    </li>
    <li>
    <svg fill="#000000" width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M760 380.4l-61.6-61.6-263.2 263.1-109.6-109.5L264 534l171.2 171.2L760 380.4z"/></svg>
  <span class="h5 feature_list">Open to Remote</span>

    </li>
    <li>
    <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="20px" height="25px" viewBox="0 0 512 512"  xml:space="preserve">
<style type="text/css">
<![CDATA[
	.st0{fill:#000000;}
]]>
</style>
<g>
	<path class="st0" d="M443.969,128.922H68.031C30.469,128.922,0,159.375,0,196.953v199.938c0,37.563,30.438,68.016,68,68.031v17.328
		c0,11.047,8.953,20,20,20s20-8.953,20-20v-17.328h296v17.328c0,11.047,8.953,20,20,20s20-8.953,20-20v-17.328
		c37.563-0.016,68-30.469,68-68.031V196.953C512,159.375,481.531,128.922,443.969,128.922z"/>
	<path class="st0" d="M181.891,72.906c0.016-8.656,3.453-16.344,9.125-22.031c5.688-5.672,13.375-9.125,22.031-9.125h90.391
		c4.344,0,7.906,0.844,11,2.25c4.594,2.125,8.313,5.578,11.125,10.469c2.813,4.875,4.531,11.219,4.531,18.438v24.828h32V72.906
		c0-16.391-5.219-31.984-15.469-43.828c-5.125-5.906-11.531-10.813-18.875-14.172c-7.359-3.375-15.641-5.172-24.313-5.156h-90.391
		c-34.891,0-63.141,28.281-63.156,63.156v24.828h32V72.906z"/>
</g>
</svg>
  <span class="h5 feature_list">Full-time</span>

    </li>
    <li>
    <svg width="30px" hight="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.5-8v2H11v2h2v-2h1a2.5 2.5 0 1 0 0-5h-4a.5.5 0 1 1 0-1h5.5V8H13V6h-2v2h-1a2.5 2.5 0 0 0 0 5h4a.5.5 0 1 1 0 1H8.5z"/> </g> </svg>
  <span class="h5 feature_list">$100/hr - $150hr</span>

    </li>
    <li>
    <svg height="25px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 60.671 60.671" xml:space="preserve">
 <g>
   <g>
     <ellipse style="fill:#010002;" cx="30.336" cy="12.097" rx="11.997" ry="12.097"/>
     <path style="fill:#010002;" d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9
       C48.354,35.818,42.661,30.079,35.64,30.079z"/>
   </g>
 </g>
 </svg>
  <span class="h5 feature_list">2</span>

    </li>
    </ul>
  
    </div>

   
    
    </div>

</section>



    
    ${jobstyle}
  
        `,
  });

  addBlock('image', {
    label: 'Image',
    category: 'Basic',
    media: `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z"></path>
  </svg>`,
    content: `<section id="imageSector" class="img-sector imageSector" data-gjs-type="imageSector">
    <div class="img-div">
    <img  class="image img-link"src="https://dummyimage.com/1200x500" alt="step"  >
    </div>
    </section>
    ${imageStyle}
        `,
  });
  addBlock('text', {
    label: 'Heading',
    category: 'Basic',
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"></path><path d="M4 11.5h16v1H4z"></path></svg>`,
    content: `
    <section id="headingSector" class="headingSector" data-gjs-type="headingSector">
    <div class="heading-div">
    <h1 class="h1 heading-1">Add Your Heading Title here</h1>
    </div>
    </section>
    ${HeadingStyle}
        `,
  });

  addBlock('paragraph-1', {
    label: 'Paragraph',
    category: 'Basic',
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"></path><path d="M4 11.5h16v1H4z"></path></svg>`,
    content: `
  <section class="paragraph-1 paraSect" id ="paraSect" data-gjs-type="paraSect">
  <div class="para-1">
  <h5 class="h5 para-11">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
  Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
  Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
  Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</h5>
  </div>
  
  
  
  </section>
  ${paraStyle}
        `,
  });

  addBlock('button', {
    label: 'Button',
    category: 'Basic',
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"></path><path d="M4 11.5h16v1H4z"></path></svg>`,
    content: `
   <div class="btn-sect buttonSector" id ="buttonSector">
   <button class="button btn-save">Hello World</button>
   </div>
 ${buttonStyle}
        `,
  });

  addBlock('link', {
    label: 'Link',
    category: 'Basic',
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"></path><path d="M4 11.5h16v1H4z"></path></svg>`,
    content: `
    <section class="linkSector" id="linkSector">
    <a  href="#" class="a link-sec">Link</a>
    </section>
 
        `,
  });

  addBlock('form', {
    label: 'Form',
    category: 'Basic Elements',
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"></path><path d="M4 11.5h16v1H4z"></path></svg>`,
    content: `
    <form>
    <div data-gjs-highlightable="false" class="form-builder">
      <span class="label" for="text">Name:</span>
      <input type="text" class="input" value="Enter your name" >
      </div>
      <div>
      <span class="label" for="text">Email</span>
      <input type="text" class="input" value="Enter your email" >
      </div>

      <div>
      <button class="button">Submit</button>
     </div>
  </form>
 
        `,
  });
};
