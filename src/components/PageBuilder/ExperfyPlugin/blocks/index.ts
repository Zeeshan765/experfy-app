import type grapesjs from 'grapesjs';

import { ReactComponentElement as footer } from 'react';

import { RequiredPluginOptions } from '..';
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
  ImageText,
  SectionStyle as style,
  IconListStyle,
  IconStyle,
  pageTitle,
  Navmenu,
  themestyle,
} from './style';

export default (editor: grapesjs.Editor, opts: RequiredPluginOptions) => {
  const addBlock = (id: string, def: grapesjs.BlockOptions) => {
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

    <header id=header_1 class="header-div">
    
    <div class="header-container">
    <a  class="logo-link">
    <svg id="noun-logo-2121439" xmlns="http://www.w3.org/2000/svg" fill="#159576"  width="33.021" height="38.052" viewBox="0 0 33.021 38.052">
    <path id="Path_169897" data-name="Path 169897" d="M152.09,31.953,168.6,41.5V60.459L152.09,70l-16.51-9.545V41.5Zm0,5.417,5.933,3.354,5.933,3.483V57.879l-5.933,3.354-5.933,3.483-5.933-3.483-5.933-3.354V44.206l5.933-3.483Z" transform="translate(-135.58 -31.953)" fill="#50ae81" fill-rule="evenodd"/>
    <path id="Path_169898" data-name="Path 169898" d="M222.093,119.526l5.159,2.967,5.03,2.967.258.129v12.254l-.258.129-5.03,2.967-5.159,2.967-.129.129-.258-.129-5.159-2.967-5.03-2.967-.258-.129V125.588l.258-.129,5.03-2.967,5.159-2.967.258-.129Zm4.643,3.741-4.772-2.838-9.8,5.675v11.221l9.8,5.675,4.772-2.838,4.9-2.838V126.1Z" transform="translate(-205.453 -112.689)"/>
  </svg>
       <span class="header-logo-text">Logo</span>
    </a>
    <nav class="header-navabr">
    <a class="mr-5 hover:text-gray-900" >Home</a>
    <a class="mr-5 hover:text-gray-900" >About</a>
    <a class="mr-5 hover:text-gray-900">Services</a>
    <a class="mr-5 hover:text-gray-900">Contact</a></nav>
 
    </div>
 
   </header>
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
    content: `<footer id="footer_1" class="main-footer-wrapper">
    <div class="footer-container">
       <div class="footer-grid">

       <div class="footer-address-section margin-class">
       <h2 class="footer-titles">Add Your Title Here </h2>

             <ul class="address-list">
             <li class="title">Footer section allow you to add links and information for your users to easily locate.</li>

             <li class="address"><span class="bold">Address:</span> 0101 Address, OR, 77873</li>

             <li class="address"><span class="bold">Phone:</span> 010-000-1111</li>

             <li class="address"><span class="bold">Website:</span> wwww.company-website.com</li>
             </ul>
          </div>

          <div class="footer-images-section margin-class">
             <h2 class="footer-titles">Add Your Social Media Link</h2>
             <div class="images-holder">
             <img src={SettingsIcon} alt='Settings'/>
             <img src={SettingsIcon} alt='Settings'/>
             <img src={SettingsIcon} alt='Settings'/>
             <img src={SettingsIcon} alt='Settings'/>
             <img src={SettingsIcon} alt='Settings'/>
             <img src={SettingsIcon} alt='Settings'/>
             <img src={SettingsIcon} alt='Settings'/>
             <img src={SettingsIcon} alt='Settings'/>
             <img src={SettingsIcon} alt='Settings'/>
             <img src={SettingsIcon} alt='Settings'/>
             <img src={SettingsIcon} alt='Settings'/>
             <img src={SettingsIcon} alt='Settings'/>
             </div>
             <button class="btn-footer">Visit Instagram</button>
          </div>
          <div  class="margin-class">
             <h2 class="footer-titles">Add Your Social Media Link</h2>
          </div>
       </div>
    </div>

 
    <div class="site-credit-footer">
       <div class="site-credit-footer-container">
          <p class="credit-text">Copyright © Company 2022, All rights reserved.</p>
          <ul>
          <li><a>Privacy Policy</a></li>   
          <li> <a>Terms of service</a></li>
          <li><a>Disclaimer</a></li>
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
    content: `<section data-gjs-type= "testimonial" id= "testimonial_1" class="testimonial-main-wrapper">
    <div class="testimonial-container">
       <h1 class="section-title">You are in Good</h1>   
          <div class="slider-content-main-div">

          <div class="left-container">
          
          <div class="img-container">
          <img alt="testimonial" src="https://dummyimage.com/106x106" class="w-12 h-12 rounded-full flex-shrink-0 object-center" style="">
          </div>
      
          <h2>Daniel Samarov</h2>
          <span class="user-details">
          <span class="user-detail-label">Chief Data Scientist, DS Box</span>
          PhD, Statistics University of North</span>
          </div>
           
          <div class="divider"></div>
               
             <div class="slider-text-div">
                <svg fill="#4ba4da" width="20" height="20" viewBox="0 0 975.036 975.036">
                   <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
               
                <p>Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
               
                   <svg fill="#4ba4da" width="20" height="20"  viewBox="0 0 975.036 975.036">
                   <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
             </div>
          </div>
       </div>
   
 </section>
 ${testimonialStyle}
 ${getStyles(['.left-container', '.slider-text-div'])}
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
    content: `<section  id= "benefit_1" class="benefits-main-wrapper">
    <div class="benefits-container" >

       <div class="benefits-title-div">
          <h1>Add your heading title here</h1>
          <h2>The benefits module highlights the positive characteristics and values within your
             company or business. Add perks, benefits, or milestones.
          </h2>
       </div>
    
       <div class="benefits-option-section">

          <div class="benefit-holder">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#159576" width="60" height="60" viewBox="0 0 78.576 74.885">
          <g id="ZJE27B.tif" transform="translate(535.211 -1346.566)">
            <g id="Group_54858" data-name="Group 54858" transform="translate(-535.211 1346.566)">
              <path id="Path_170183" data-name="Path 170183" d="M-496.028,1346.566a2.84,2.84,0,0,1,2.794,1.775c3.342,6.817,6.721,13.616,10.063,20.433a1.383,1.383,0,0,0,1.2.884c7.435,1.054,14.865,2.151,22.3,3.224,2.148.31,3.3,1.442,2.987,3.2a3.8,3.8,0,0,1-1.062,1.892q-8.151,8.038-16.38,16a1.242,1.242,0,0,0-.419,1.272c1.324,7.595,2.608,15.2,3.913,22.8a2.711,2.711,0,0,1-1.1,2.886,2.753,2.753,0,0,1-3.092.095q-10.153-5.349-20.311-10.691a1.4,1.4,0,0,0-1.5-.021q-10.067,5.329-20.158,10.612a3.084,3.084,0,0,1-2.642.352,2.717,2.717,0,0,1-1.759-3.1q1.7-10.041,3.428-20.076c.16-.936.263-1.885.488-2.8a1.244,1.244,0,0,0-.428-1.35c-5.355-5.193-10.683-10.414-16.044-15.6-1.013-.98-1.8-2-1.311-3.478.5-1.53,1.8-1.82,3.209-2.02,7.35-1.04,14.693-2.136,22.042-3.183a1.323,1.323,0,0,0,1.141-.844c3.358-6.841,6.746-13.668,10.1-20.51A2.747,2.747,0,0,1-496.028,1346.566Z" transform="translate(535.211 -1346.566)"/>
            </g>
          </g>
        </svg>
        
             <h1>Benefit 01</h1>
             <p>Lorem ipsum dolor sit amet. Est
                porro distinctio eum eius odit ea
                facere consequuntur.
             </p>
          </div>


          <div class="benefits-option-section">

          <div class="benefit-holder">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#159576" width="60" height="60" viewBox="0 0 78.576 74.885">
          <g id="ZJE27B.tif" transform="translate(535.211 -1346.566)">
            <g id="Group_54858" data-name="Group 54858" transform="translate(-535.211 1346.566)">
              <path id="Path_170183" data-name="Path 170183" d="M-496.028,1346.566a2.84,2.84,0,0,1,2.794,1.775c3.342,6.817,6.721,13.616,10.063,20.433a1.383,1.383,0,0,0,1.2.884c7.435,1.054,14.865,2.151,22.3,3.224,2.148.31,3.3,1.442,2.987,3.2a3.8,3.8,0,0,1-1.062,1.892q-8.151,8.038-16.38,16a1.242,1.242,0,0,0-.419,1.272c1.324,7.595,2.608,15.2,3.913,22.8a2.711,2.711,0,0,1-1.1,2.886,2.753,2.753,0,0,1-3.092.095q-10.153-5.349-20.311-10.691a1.4,1.4,0,0,0-1.5-.021q-10.067,5.329-20.158,10.612a3.084,3.084,0,0,1-2.642.352,2.717,2.717,0,0,1-1.759-3.1q1.7-10.041,3.428-20.076c.16-.936.263-1.885.488-2.8a1.244,1.244,0,0,0-.428-1.35c-5.355-5.193-10.683-10.414-16.044-15.6-1.013-.98-1.8-2-1.311-3.478.5-1.53,1.8-1.82,3.209-2.02,7.35-1.04,14.693-2.136,22.042-3.183a1.323,1.323,0,0,0,1.141-.844c3.358-6.841,6.746-13.668,10.1-20.51A2.747,2.747,0,0,1-496.028,1346.566Z" transform="translate(535.211 -1346.566)"/>
            </g>
          </g>
        </svg>
        
             <h1>Benefit 01</h1>
             <p>Lorem ipsum dolor sit amet. Est
                porro distinctio eum eius odit ea
                facere consequuntur.
             </p>
          </div>

          <div class="benefits-option-section">

          <div class="benefit-holder">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#159576" width="60" height="60" viewBox="0 0 78.576 74.885">
          <g id="ZJE27B.tif" transform="translate(535.211 -1346.566)">
            <g id="Group_54858" data-name="Group 54858" transform="translate(-535.211 1346.566)">
              <path id="Path_170183" data-name="Path 170183" d="M-496.028,1346.566a2.84,2.84,0,0,1,2.794,1.775c3.342,6.817,6.721,13.616,10.063,20.433a1.383,1.383,0,0,0,1.2.884c7.435,1.054,14.865,2.151,22.3,3.224,2.148.31,3.3,1.442,2.987,3.2a3.8,3.8,0,0,1-1.062,1.892q-8.151,8.038-16.38,16a1.242,1.242,0,0,0-.419,1.272c1.324,7.595,2.608,15.2,3.913,22.8a2.711,2.711,0,0,1-1.1,2.886,2.753,2.753,0,0,1-3.092.095q-10.153-5.349-20.311-10.691a1.4,1.4,0,0,0-1.5-.021q-10.067,5.329-20.158,10.612a3.084,3.084,0,0,1-2.642.352,2.717,2.717,0,0,1-1.759-3.1q1.7-10.041,3.428-20.076c.16-.936.263-1.885.488-2.8a1.244,1.244,0,0,0-.428-1.35c-5.355-5.193-10.683-10.414-16.044-15.6-1.013-.98-1.8-2-1.311-3.478.5-1.53,1.8-1.82,3.209-2.02,7.35-1.04,14.693-2.136,22.042-3.183a1.323,1.323,0,0,0,1.141-.844c3.358-6.841,6.746-13.668,10.1-20.51A2.747,2.747,0,0,1-496.028,1346.566Z" transform="translate(535.211 -1346.566)"/>
            </g>
          </g>
        </svg>
        
             <h1>Benefit 01</h1>
             <p>Lorem ipsum dolor sit amet. Est
                porro distinctio eum eius odit ea
                facere consequuntur.
             </p>
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
    content: `<section id="practice_area_1" class="main-paractice-wrapper">
   

    <h1 class="section-title"> Practice Areas</h1>

    
 
    <div class="paractice-area-container">
    
      <div class="box-icon-text-holder box-active">


          <div class="box-icon-div ">
          
          <svg width="43" height="54.648" xmlns="http://www.w3.org/2000/svg" data-name="Group 26409">
          <defs>
           <clipPath id="clip-path">
            <rect id="Rectangle_12803" data-name="Rectangle 12803" width="43" height="54.648" fill="#3074a4"/>
           </clipPath>
          </defs>
          <g>
           <title>Layer 1</title>
           <g id="Group_21530" data-name="Group 21530">
            <g id="Group_21523" data-name="Group 21523">
             <g id="Group_21522" data-name="Group 21522" clip-path="url(#clip-path)">
              <path id="Path_17308" data-name="Path 17308" d="m38.53899,6.75799c-3.108,-3.468 -7.212,-6.68 -17.36,-6.758a19.7,19.7 0 0 0 -14.724,5.884a15.312,15.312 0 0 0 -4.351,13.023c0.132,1.344 2.052,2.9 0.7,5.511c0,0 -2.9,5.1 -2.8,5.956c0,0 -0.045,1.554 2.35,1.605c0,0 0.6,0.071 0.427,1.4l-0.027,1.932s0.081,0.574 1.136,0.926c0,0 0.192,0.2 -0.105,0.574c0,0 -0.559,0.622 0.4,1.956a2.364,2.364 0 0 1 0.568,2.359s-0.445,2.419 0.508,3c0,0 1.073,1.283 5.43,0.751c1.52,-0.192 4.333,-0.926 6.009,1.178c0,0 4.009,7.608 4.313,9.414c0,0 6.839,-12.173 15.18,-14.051c0,0 -2.037,-4.585 2.1,-10.514c0,0 5.178,-6.839 5.337,-10.6c0,0 1.37,-6.322 -5.093,-13.546l0.002,0zm0,0" fill="#3074a4"/>
             </g>
            </g>
           </g>
           <g id="Group_21531" data-name="Group 21531">
            <path id="Path_17135" data-name="Path 17135" d="m27.472,10.357a0.434,0.434 0 0 0 0.433,-0.432l0,-2.59a0.433,0.433 0 1 0 -0.865,0l0,2.59a0.434,0.434 0 0 0 0.432,0.432zm0,0" fill="#fff"/>
            <path id="Path_17136" data-name="Path 17136" d="m25.11499,10.357a0.434,0.434 0 0 0 0.433,-0.432l0,-2.59a0.433,0.433 0 1 0 -0.865,0l0,2.59a0.433,0.433 0 0 0 0.432,0.432zm0,0" fill="#fff"/>
            <path id="Path_17137" data-name="Path 17137" d="m22.71299,10.357a0.432,0.432 0 0 0 0.432,-0.432l0,-2.59a0.432,0.432 0 1 0 -0.865,0l0,2.59a0.433,0.433 0 0 0 0.432,0.432l0.001,0zm0,0" fill="#fff"/>
            <path id="Path_17138" data-name="Path 17138" d="m20.356,10.357a0.433,0.433 0 0 0 0.432,-0.432l0,-2.59a0.432,0.432 0 1 0 -0.865,0l0,2.59a0.433,0.433 0 0 0 0.432,0.432l0.001,0zm0,0" fill="#fff"/>
            <path id="Path_17139" data-name="Path 17139" d="m18.182,10.357a0.433,0.433 0 0 0 0.43,-0.432l0,-2.59a0.432,0.432 0 1 0 -0.865,0l0,2.59a0.434,0.434 0 0 0 0.435,0.432zm0,0" fill="#fff"/>
            <path id="Path_17140" data-name="Path 17140" d="m15.822,10.357a0.433,0.433 0 0 0 0.432,-0.432l0,-2.59a0.432,0.432 0 1 0 -0.865,0l0,2.59a0.433,0.433 0 0 0 0.432,0.432l0.001,0zm0,0" fill="#fff"/>
            <path id="Path_17141" data-name="Path 17141" d="m9.872,14.823l-2.587,0a0.432,0.432 0 1 0 0,0.865l2.587,0a0.432,0.432 0 1 0 0,-0.865zm0,0" fill="#fff"/>
            <path id="Path_17142" data-name="Path 17142" d="m9.872,17.18201l-2.587,0a0.431,0.431 0 1 0 0,0.862l2.587,0a0.431,0.431 0 1 0 0,-0.862zm0,0" fill="#fff"/>
            <path id="Path_17143" data-name="Path 17143" d="m9.872,19.58499l-2.587,0a0.432,0.432 0 1 0 0,0.865l2.587,0a0.432,0.432 0 1 0 0,-0.865zm0,0" fill="#fff"/>
            <path id="Path_17144" data-name="Path 17144" d="m9.872,21.93899l-2.587,0a0.433,0.433 0 0 0 0,0.865l2.587,0a0.433,0.433 0 1 0 0,-0.865zm0,0" fill="#fff"/>
            <path id="Path_17145" data-name="Path 17145" d="m9.872,24.11401l-2.587,0a0.434,0.434 0 0 0 0,0.867l2.587,0a0.434,0.434 0 1 0 0,-0.867zm0,0" fill="#fff"/>
            <path id="Path_17146" data-name="Path 17146" d="m9.872,26.47299l-2.587,0a0.433,0.433 0 0 0 0,0.865l2.587,0a0.433,0.433 0 1 0 0,-0.865zm0,0" fill="#fff"/>
            <path id="Path_17147" data-name="Path 17147" d="m27.472,32.46501a0.433,0.433 0 0 0 -0.432,0.432l0,2.587a0.433,0.433 0 1 0 0.865,0l0,-2.587a0.432,0.432 0 0 0 -0.433,-0.432zm0,0" fill="#fff"/>
            <path id="Path_17148" data-name="Path 17148" d="m25.11499,32.46501a0.433,0.433 0 0 0 -0.432,0.432l0,2.587a0.433,0.433 0 1 0 0.865,0l0,-2.587a0.432,0.432 0 0 0 -0.433,-0.432zm0,0" fill="#fff"/>
            <path id="Path_17149" data-name="Path 17149" d="m22.71299,32.46501a0.433,0.433 0 0 0 -0.432,0.432l0,2.587a0.432,0.432 0 1 0 0.865,0l0,-2.587a0.431,0.431 0 0 0 -0.432,-0.432l-0.001,0zm0,0" fill="#fff"/>
            <path id="Path_17150" data-name="Path 17150" d="m20.356,32.46501a0.433,0.433 0 0 0 -0.432,0.432l0,2.587a0.432,0.432 0 1 0 0.865,0l0,-2.587a0.431,0.431 0 0 0 -0.432,-0.432l-0.001,0zm0,0" fill="#fff"/>
            <path id="Path_17151" data-name="Path 17151" d="m18.182,32.46501a0.433,0.433 0 0 0 -0.435,0.432l0,2.587a0.432,0.432 0 1 0 0.865,0l0,-2.587a0.431,0.431 0 0 0 -0.43,-0.432zm0,0" fill="#fff"/>
            <path id="Path_17152" data-name="Path 17152" d="m15.822,32.46501a0.433,0.433 0 0 0 -0.432,0.432l0,2.587a0.432,0.432 0 1 0 0.865,0l0,-2.587a0.431,0.431 0 0 0 -0.432,-0.432l-0.001,0zm0,0" fill="#fff"/>
            <path id="Path_17153" data-name="Path 17153" d="m28.675,11.48901l-14.056,0a2.682,2.682 0 0 0 -2.677,2.678l0,14.056a2.682,2.682 0 0 0 2.677,2.679l14.056,0a2.683,2.683 0 0 0 2.678,-2.679l0,-14.056a2.683,2.683 0 0 0 -2.678,-2.678zm-12.7,4.271a0.853,0.853 0 1 1 0.853,-0.853a0.852,0.852 0 0 1 -0.853,0.853zm10.193,9.678l-8.949,0l0,-9.033l8.949,0l0,9.033zm0,0" fill="#fff"/>
            <path id="Path_17154" data-name="Path 17154" d="m32.847,15.688l2.59,0a0.432,0.432 0 1 0 0,-0.865l-2.59,0a0.432,0.432 0 0 0 0,0.865zm0,0" fill="#fff"/>
            <path id="Path_17155" data-name="Path 17155" d="m35.437,17.18201l-2.59,0a0.431,0.431 0 1 0 0,0.862l2.59,0a0.431,0.431 0 1 0 0,-0.862zm0,0" fill="#fff"/>
            <path id="Path_17156" data-name="Path 17156" d="m35.437,19.58499l-2.59,0a0.432,0.432 0 0 0 0,0.865l2.59,0a0.432,0.432 0 1 0 0,-0.865zm0,0" fill="#fff"/>
            <path id="Path_17157" data-name="Path 17157" d="m35.437,21.93899l-2.59,0a0.433,0.433 0 0 0 0,0.865l2.59,0a0.433,0.433 0 0 0 0,-0.865zm0,0" fill="#fff"/>
            <path id="Path_17158" data-name="Path 17158" d="m35.437,24.11401l-2.59,0a0.434,0.434 0 0 0 0,0.867l2.59,0a0.434,0.434 0 0 0 0,-0.867zm0,0" fill="#fff"/>
            <path id="Path_17159" data-name="Path 17159" d="m35.437,26.47299l-2.59,0a0.433,0.433 0 0 0 0,0.865l2.59,0a0.433,0.433 0 0 0 0,-0.865zm0,0" fill="#fff"/>
           </g>
          </g>
         </svg>

          </div>

          <div class="box-text-div">
             <p >AI & Machine Learning</p>
          </div>
      </div>


       <div class="box-icon-text-holder">
            
                         <div class="box-icon-div">
                         <svg id="Group_26397" data-name="Group 26397" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.33" height="54.648" viewBox="0 0 56.33 54.648">
                         <defs>
                           <clipPath id="clip-path">
                             <rect id="Rectangle_12756" data-name="Rectangle 12756" width="56.33" height="54.648" fill="#43964f"/>
                           </clipPath>
                           <clipPath id="clip-path-2">
                             <rect id="Rectangle_12756-2" data-name="Rectangle 12756" width="56.33" height="54.648" fill="#3074a4"/>
                           </clipPath>
                         </defs>
                         <g id="Group_21340" data-name="Group 21340" transform="translate(0 0)">
                           <g id="Group_21339" data-name="Group 21339" transform="translate(0 0)" clip-path="url(#clip-path)">
                             <path id="Path_16985" data-name="Path 16985" d="M156.472,261.26l-4.517-5.8-1.344-7.141a5.322,5.322,0,0,0-4.56-4.235l-7.445-1.02-6.181-4.13a5.542,5.542,0,0,0-5.246-.492,5.464,5.464,0,0,0-1.082.611l-6.011,4.36-7.4,1.3a5.489,5.489,0,0,0-1.2.354,5.28,5.28,0,0,0-3.189,4.048l-1.054,7.186-4.282,5.969a5.065,5.065,0,0,0,.122,6.105l4.519,5.8,1.344,7.141a5.319,5.319,0,0,0,4.561,4.235l7.445,1.02,6.181,4.13a5.611,5.611,0,0,0,5.246.492,5.45,5.45,0,0,0,1.082-.612l6.011-4.36,7.4-1.3a5.654,5.654,0,0,0,1.2-.352,5.292,5.292,0,0,0,3.189-4.05l1.054-7.185,4.281-5.966a5.066,5.066,0,0,0-.124-6.108Zm-26.693,22.631c-10.9,0-19.768-8.56-19.768-19.08s8.869-19.082,19.768-19.082,19.771,8.56,19.771,19.082-8.868,19.08-19.771,19.08Zm0,0" transform="translate(-102.344 -237.669)" fill="#43964f"/>
                           </g>
                         </g>
                         <path id="Path_16986" data-name="Path 16986" d="M132.076,252.926c-8.351,0-15.146,6.358-15.146,14.175s6.794,14.175,15.146,14.175,15.149-6.36,15.149-14.175-6.8-14.175-15.149-14.175Zm-4.027,4.281,0,3.376-.9.814-3.548,0Zm9.1,20.264h-2.377c-1.458,0-3.279-.641-3.279-3.134s3.481-2.473,3.481-2.473v1.606a6.718,6.718,0,0,0-.787-.047c-.433,0-.8.207-.8.97a1.89,1.89,0,0,0,.757,1.316h2.306c1.08,0,1.147-1.18,1.147-1.18v-1.882c0-1.017-1.069-2-2.905-2s-3.054-2.177-3.054-2.177-.024,1.387-.024,2.3c0,.217-.712,2.023-4.866,1.42-3.514-.508-4.036-6-4.036-7.58a2.788,2.788,0,0,1,1.178-2.307h4.185l.907-.9v-2.876c0-.714-.135-1.546,1.865-1.546a3.341,3.341,0,0,1,2.847,1.44h2.647c1.025,0,3.006.7,3.384,1.313s1.719,1.348,1.719,9.283-4.292,8.451-4.292,8.451Zm0,0" transform="translate(-104.694 -240.019)" fill="#3074a4"/>
                         <path id="Path_16987" data-name="Path 16987" d="M151.565,277.008c-1.222,0-1.534,2.107-1.534,2.107.609,0,4.434.707,4.434.707s-1.678-2.813-2.9-2.813Zm0,0" transform="translate(-119.178 -252.098)" fill="#43964f"/>
                         <g id="Group_26289" data-name="Group 26289" transform="translate(0 0)">
                           <g id="Group_21339-2" data-name="Group 21339" transform="translate(0 0)" clip-path="url(#clip-path-2)">
                             <path id="Path_16985-2" data-name="Path 16985" d="M156.472,261.26l-4.517-5.8-1.344-7.141a5.322,5.322,0,0,0-4.56-4.235l-7.445-1.02-6.181-4.13a5.542,5.542,0,0,0-5.246-.492,5.464,5.464,0,0,0-1.082.611l-6.011,4.36-7.4,1.3a5.489,5.489,0,0,0-1.2.354,5.28,5.28,0,0,0-3.189,4.048l-1.054,7.186-4.282,5.969a5.065,5.065,0,0,0,.122,6.105l4.519,5.8,1.344,7.141a5.319,5.319,0,0,0,4.561,4.235l7.445,1.02,6.181,4.13a5.611,5.611,0,0,0,5.246.492,5.45,5.45,0,0,0,1.082-.612l6.011-4.36,7.4-1.3a5.654,5.654,0,0,0,1.2-.352,5.292,5.292,0,0,0,3.189-4.05l1.054-7.185,4.281-5.966a5.066,5.066,0,0,0-.124-6.108Zm-26.693,22.631c-10.9,0-19.768-8.56-19.768-19.08s8.869-19.082,19.768-19.082,19.771,8.56,19.771,19.082-8.868,19.08-19.771,19.08Zm0,0" transform="translate(-102.344 -237.669)" fill="#3074a4"/>
                           </g>
                         </g>
                       </svg>
                       
 
             </div>

<div class="box-text-div">         
              <p>Big Data</p>
             </div>
 
       </div>





       <div class="box-icon-text-holder">
                                  <div class="box-icon-div">
                                  <svg id="Group_26399" data-name="Group 26399" xmlns="http://www.w3.org/2000/svg" width="58.908" height="37.533" viewBox="0 0 58.908 37.533">
                                  <path id="Path_17113" data-name="Path 17113" d="M135,301.813a10.827,10.827,0,0,0,9.2,10.575l1.844.144h36.813l1.844-.144a10.656,10.656,0,0,0,1.827-20.7A17.244,17.244,0,0,0,169.056,275a17.54,17.54,0,0,0-15.716,9.5,7.411,7.411,0,0,0-5.462-2.353,7.118,7.118,0,0,0-6.734,10.04A10.71,10.71,0,0,0,135,301.813Zm9.361-8.654-.89-2.316a3.338,3.338,0,0,1-.311-1.412,5.186,5.186,0,0,1,4.993-4.782,4.419,4.419,0,0,1,2.979,1.268l2.878,2,2.443-3.266a15.438,15.438,0,0,1,12.721-6.968c7.44,0,14.772,7.085,14.889,14.17v2.51l2.59.693a7.01,7.01,0,0,1,4.876,6.576c0,3.41-3.5,7.7-7.035,8.263H172.479v2.587h-2.7V300.438h5.385l-10.706-12.051-10.706,12.051h5.331v12.041h-2.667v-2.587H146.335l-1.228-.094c-3.531-.562-7.426-4.746-7.426-8.169,0-2.667,2.272-6.954,6.68-8.47Zm0,0" transform="translate(-135 -275)" fill="#3074a4" fill-rule="evenodd"/>
                                </svg>
                                
 
                         </div>
                         <div class="box-text-div">
          <p>Cloud Computing</p>
          </div>
       </div>

          <div class="box-icon-text-holder" >
                               <div class="box-icon-div">
                               <svg id="Group_26412" data-name="Group 26412" xmlns="http://www.w3.org/2000/svg" width="64.503" height="36.139" viewBox="0 0 64.503 36.139">
                               <g id="Group_21457" data-name="Group 21457" transform="translate(17.733 0.033)">
                                 <path id="Path_17184" data-name="Path 17184" d="M167.809,11.775a10.321,10.321,0,0,1,9.143,10.251,18,18,0,0,1,3.866-11.174A18.066,18.066,0,0,0,167.809,4L166.3,7.888Z" transform="translate(-166.3 -4)" fill="#000000"/>
                               </g>
                               <g id="Group_21458" data-name="Group 21458" transform="translate(0 17.852)">
                                 <path id="Path_17185" data-name="Path 17185" d="M19.973,178.568a10.316,10.316,0,0,1-9.23-10.262v-.174L6.92,169.62,3,168.1v.206a18.057,18.057,0,0,0,17.005,18.026l1.488-3.844Z" transform="translate(-3 -168.1)" fill="#000000"/>
                               </g>
                               <g id="Group_21459" data-name="Group 21459" transform="translate(36.161 18.819)">
                                 <path id="Path_17186" data-name="Path 17186" d="M336,177Z" transform="translate(-336 -177)" fill="#000000"/>
                               </g>
                               <g id="Group_21460" data-name="Group 21460" transform="translate(36.117 18.059)">
                                 <path id="Path_17187" data-name="Path 17187" d="M335.611,170.38c0-.13-.011-.25-.011-.38v.38h.011Z" transform="translate(-335.6 -170)" fill="#000000"/>
                               </g>
                               <g id="Group_21461" data-name="Group 21461" transform="translate(0.022 0)">
                                 <path id="Path_17188" data-name="Path 17188" d="M10.964,20.792a10.326,10.326,0,0,1,10.273-9.361c.13,0,.25,0,.38.011L20.129,7.62,21.65,3.7h-.413A18.064,18.064,0,0,0,3.2,20.781l3.9,1.509Z" transform="translate(-3.2 -3.7)" fill="#000000"/>
                               </g>
                               <g id="Group_21462" data-name="Group 21462" transform="translate(28.418 19.177)">
                                 <path id="Path_17189" data-name="Path 17189" d="M264.841,180.3l-.141.054h0Z" transform="translate(-264.7 -180.3)" fill="#000000"/>
                               </g>
                               <g id="Group_21466" data-name="Group 21466" transform="translate(17.765 17.733)">
                                 <g id="Group_21463" data-name="Group 21463" transform="translate(10.653 1.488)">
                                   <path id="Path_17190" data-name="Path 17190" d="M264.7,180.711h0v0Z" transform="translate(-264.7 -180.7)" fill="#000000"/>
                                 </g>
                                 <g id="Group_21464" data-name="Group 21464">
                                   <path id="Path_17191" data-name="Path 17191" d="M184.919,168.466,181.14,167l-3.692,1.433h0l-.054.022-.141.054v.011h0l-.109.043a10.325,10.325,0,0,1-10.251,9.1H166.6l1.5,3.877-1.5,3.866h.293a18.048,18.048,0,0,0,14.193-6.885v-.011A18.1,18.1,0,0,0,184.919,168.466Z" transform="translate(-166.6 -167)" fill="#000000"/>
                                 </g>
                                 <g id="Group_21465" data-name="Group 21465" transform="translate(10.653 1.488)">
                                   <path id="Path_17192" data-name="Path 17192" d="M264.7,180.7Z" transform="translate(-264.7 -180.7)" fill="#000000"/>
                                 </g>
                               </g>
                               <g id="Group_21470" data-name="Group 21470" transform="translate(28.386 0)">
                                 <g id="Group_21467" data-name="Group 21467" transform="translate(0 18.471)">
                                   <path id="Path_17193" data-name="Path 17193" d="M264.4,173.8Z" transform="translate(-264.4 -173.8)" fill="#000000"/>
                                 </g>
                                 <g id="Group_21468" data-name="Group 21468" transform="translate(0 18.477)">
                                   <path id="Path_17194" data-name="Path 17194" d="M264.4,173.86Z" transform="translate(-264.4 -173.856)" fill="#000000"/>
                                 </g>
                                 <g id="Group_21469" data-name="Group 21469" transform="translate(0 0)">
                                   <path id="Path_17195" data-name="Path 17195" d="M285.51,3.961a17.806,17.806,0,0,0-3.051-.261A18.046,18.046,0,0,0,264.4,21.759v.413l3.92-1.52,3.812,1.477v-.38a10.319,10.319,0,0,1,10.316-10.316,11.61,11.61,0,0,1,1.379.087l2.291-3.4Z" transform="translate(-264.4 -3.7)" fill="#000000"/>
                                 </g>
                               </g>
                               <g id="Group_21471" data-name="Group 21471" transform="translate(48.594 0.402)">
                                 <path id="Path_17196" data-name="Path 17196" d="M466.137,28.184a18.61,18.61,0,0,0,.271-3.127A18.063,18.063,0,0,0,452.151,7.4l.619,4.2-2.27,3.366a10.321,10.321,0,0,1,8.166,10.1,11.255,11.255,0,0,1-.087,1.357l3.5,2.367Z" transform="translate(-450.5 -7.4)" fill="#000000"/>
                               </g>
                               <g id="Group_21472" data-name="Group 21472" transform="translate(42.72 20.198)">
                                 <path id="Path_17197" data-name="Path 17197" d="M410.224,189.7a10.34,10.34,0,0,1-10.1,8.188,11.067,11.067,0,0,1-1.347-.087l-2.378,3.551.608,4.007a18.379,18.379,0,0,0,3.117.271,18.074,18.074,0,0,0,17.646-14.182l-4.083.6Z" transform="translate(-396.4 -189.7)" fill="#000000"/>
                               </g>
                               <g id="Group_21473" data-name="Group 21473" transform="translate(32.252 19.188)">
                                 <path id="Path_17198" data-name="Path 17198" d="M312.064,189.37a10.333,10.333,0,0,1-8.133-8.926l-.1-.043A17.977,17.977,0,0,1,300,190.434a18.1,18.1,0,0,0,10.316,6.472l-.608-4.029Z" transform="translate(-300 -180.4)" fill="#3074a4"/>
                               </g>
                             </svg>
                             
 
                      </div>
                      <div class="box-text-div">
          <p>DevOps</p>
          </div>
       </div>
 
       <div class="box-icon-text-holder">
         
                                           <div class="box-icon-div">
                                           <svg xmlns="http://www.w3.org/2000/svg" width="41.588" height="60.194" viewBox="0 0 41.588 60.194">
                                           <g id="Group_26300" data-name="Group 26300" transform="translate(0 0)">
                                             <g id="Group_21510" data-name="Group 21510" transform="translate(5.465 5.417)">
                                               <path id="Path_17093" data-name="Path 17093" d="M-46.478,91.783l7.653,13.257a15.252,15.252,0,0,1-6.823,1.615A15.353,15.353,0,0,1-61,91.3,15.34,15.34,0,0,1-46.608,76V91.3a.958.958,0,0,0,.129.48Zm16.133-1.439H-44.689V76A15.329,15.329,0,0,1-30.345,90.344ZM-42.77,88.425h10.225A13.436,13.436,0,0,0-42.77,78.2Zm5.611,15.665a15.324,15.324,0,0,0,6.814-11.827H-43.986Zm0,0" transform="translate(61 -76)" fill="#3074a4"/>
                                             </g>
                                             <g id="Group_21482" data-name="Group 21482" transform="translate(0 0)">
                                               <path id="Path_17246" data-name="Path 17246" d="M207.822,200.1a20.795,20.795,0,1,0-20.794-20.794A20.818,20.818,0,0,0,207.822,200.1Zm0-38.575a17.78,17.78,0,1,1-17.78,17.78A17.8,17.8,0,0,1,207.822,161.527Z" transform="translate(-187.028 -158.512)" fill="#3074a4"/>
                                               <path id="Path_17248" data-name="Path 17248" d="M319.846,603.572a23.956,23.956,0,0,1-15.008,0A1.507,1.507,0,0,0,302.857,605v5.754a9.485,9.485,0,1,0,18.97,0V605a1.507,1.507,0,0,0-1.981-1.431Zm-1.034,7.185a6.47,6.47,0,1,1-12.941,0v-3.75a26.95,26.95,0,0,0,12.94,0v3.75Z" transform="translate(-291.548 -560.048)" fill="#3074a4"/>
                                             </g>
                                           </g>
                                         </svg>
                                         
 
                                  </div>
 
 
                                  <div class="box-text-div">
          <p>Business Intelligence</p>
          </div>
       </div>
 
       <div class="box-icon-text-holder" >
         
                               <div class="box-icon-div">
                               <svg xmlns="http://www.w3.org/2000/svg" width="39.006" height="49.1" viewBox="0 0 39.006 49.1">
                               <g id="Group_26413" data-name="Group 26413" transform="translate(0 0)">
                                 <path id="Path_16977" data-name="Path 16977" d="M152.006,242.5a1.5,1.5,0,0,0-1.5-1.5H120.914a1.5,1.5,0,0,0-1.5,1.5v7.287H114.5a1.5,1.5,0,0,0-1.5,1.5V288.6a1.5,1.5,0,0,0,1.5,1.5h24.183a.36.36,0,0,1,0-.052h5.411a1.5,1.5,0,0,0,1.5-1.5v-7.287H150.5a1.505,1.505,0,0,0,1.5-1.5V252.545h0Zm-3.013.237a.979.979,0,1,1-.979.979.978.978,0,0,1,.979-.979Zm-4.313,0a.979.979,0,1,1-.978.979.979.979,0,0,1,.978-.979Zm-4.288,0a.979.979,0,1,1-.979.979.979.979,0,0,1,.979-.979Zm3.915,45.81a.215.215,0,0,1-.215.212h-24.1c0,.018,0,.035-.005.052H114.5a.215.215,0,0,1-.213-.215V255.363h29.8a.771.771,0,0,0,.215-.032v.025l0,.008V265.39h0ZM133,252.5a.979.979,0,1,1,.979.979A.978.978,0,0,1,133,252.5Zm4.289,0a.98.98,0,1,1,.981.979.978.978,0,0,1-.981-.979Zm4.315,0a.979.979,0,1,1,.979.979.978.978,0,0,1-.979-.979Zm9.115,27.257a.213.213,0,0,1-.213.213h-4.913V251.287a1.5,1.5,0,0,0-1.5-1.5H120.7v-3.213h29.8a.754.754,0,0,0,.215-.03v.025l0,.005V256.6h.005v23.157Zm0,0" transform="translate(-113 -241)" fill="#3074a4"/>
                                 <path id="Path_16978" data-name="Path 16978" d="M118.406,285.909l9.136,4.706v-2.264l-6.387-3.2,6.387-3.2v-2.262l-9.136,4.7Zm0,0" transform="translate(-114.985 -255.208)" fill="#3074a4"/>
                                 <path id="Path_16979" data-name="Path 16979" d="M138.161,275.875l-5.294,13.752h2.175l5.311-13.752Zm0,0" transform="translate(-120.296 -253.808)" fill="#3074a4"/>
                                 <path id="Path_16980" data-name="Path 16980" d="M144.668,281.949l6.436,3.2-6.436,3.2v2.264l9.135-4.686v-1.557l-9.135-4.684Zm0,0" transform="translate(-124.63 -255.208)" fill="#3074a4"/>
                               </g>
                             </svg>
                            
                   </div>
                   <div class="box-text-div">
          <p>Software/Web Development</p>
          </div>
       </div>
 
       <div class="box-icon-text-holder">
 
 
 
                                  <div class="box-icon-div">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45.203" height="45.203" viewBox="0 0 45.203 45.203">
                                  <defs>
                                    <clipPath id="clip-path">
                                      <rect id="Rectangle_12809" data-name="Rectangle 12809" width="24.403" height="25.192" fill="#3074a4"/>
                                    </clipPath>
                                    <clipPath id="clip-path-2">
                                      <rect id="Rectangle_12804" data-name="Rectangle 12804" width="12.012" height="8.794" fill="#3074a4"/>
                                    </clipPath>
                                  </defs>
                                  <g id="Group_26414" data-name="Group 26414" transform="translate(0 0)">
                                    <g id="Group_21999" data-name="Group 21999" transform="translate(0 0)">
                                      <g id="Group_21961" data-name="Group 21961" transform="translate(11.281 14.129)">
                                        <g id="Group_21956" data-name="Group 21956" transform="translate(0 0)">
                                          <g id="Group_21543" data-name="Group 21543" transform="translate(0 0)">
                                            <g id="Group_21542" data-name="Group 21542" clip-path="url(#clip-path)">
                                              <path id="Path_17333" data-name="Path 17333" d="M-27.046,103.423a9.767,9.767,0,0,0,2.612-6.64A9.8,9.8,0,0,0-34.217,87,9.8,9.8,0,0,0-44,96.783a9.8,9.8,0,0,0,9.783,9.783,9.735,9.735,0,0,0,5.858-1.948l7.274,7.274a.874.874,0,0,0,.62.265.85.85,0,0,0,.62-.265.9.9,0,0,0,0-1.254Zm-15.183-6.64a8.02,8.02,0,0,1,8.012-8.012,8.019,8.019,0,0,1,8.012,8.012,8.01,8.01,0,0,1-8.012,8.012,8.019,8.019,0,0,1-8.012-8.012Zm0,0" transform="translate(44 -87)" fill="#3074a4"/>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                      <g id="Group_21958" data-name="Group 21958">
                                        <path id="Path_16968" data-name="Path 16968" d="M162.772,258H124.431A3.434,3.434,0,0,0,121,261.431v38.338a3.437,3.437,0,0,0,3.431,3.435h38.342a3.437,3.437,0,0,0,3.431-3.435V261.431A3.434,3.434,0,0,0,162.772,258Zm-4.166,3.228h2.569V263.8h-2.569Zm-5.947,0h2.569V263.8h-2.569Zm11.378,38.544a1.268,1.268,0,0,1-1.264,1.268H124.431a1.269,1.269,0,0,1-1.268-1.268v-32.12h40.874Zm0,0" transform="translate(-121 -258)" fill="#3074a4"/>
                                      </g>
                                    </g>
                                    <g id="Group_22008" data-name="Group 22008" transform="translate(14.708 19.961)">
                                      <g id="Group_21535" data-name="Group 21535" transform="translate(0 0)">
                                        <g id="Group_21534" data-name="Group 21534" clip-path="url(#clip-path-2)">
                                          <path id="Path_17328" data-name="Path 17328" d="M142.836,272.778l-6.861,6.859a.473.473,0,0,1-.666,0l-4.171-4.2a.471.471,0,0,1,0-.665l1-1a.472.472,0,0,1,.665,0l2.845,2.866,5.527-5.527a.473.473,0,0,1,.666,0l1,1a.47.47,0,0,1,0,.666Zm0,0" transform="translate(-131 -270.988)" fill="#3074a4"/>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                         </div>

                         <div class="box-text-div">
          <p>QA</p>
          </div>
       </div>

             <div class="box-icon-text-holder">
 
 
                      <div class="box-icon-div">
                      <svg id="noun_UX_Wireframe_615287" data-name="noun_UX Wireframe_615287" xmlns="http://www.w3.org/2000/svg" width="45.877" height="45.877" viewBox="0 0 45.877 45.877">
                      <g id="Group_22021" data-name="Group 22021" transform="translate(0 0)">
                        <g id="Group_22020" data-name="Group 22020">
                          <g id="Group_22019" data-name="Group 22019">
                            <path id="Path_18398" data-name="Path 18398" d="M11.034,4.5A6.534,6.534,0,0,0,4.5,11.034V50.377H43.843a6.534,6.534,0,0,0,6.534-6.534V4.5Zm9.723,35.951H10.752V33.11H20.757Zm0-9.342H10.752v-7.34H20.757Zm11.779,9.342H22.331V33.11H32.536Zm0-9.342H22.331v-7.34H32.536Zm11.58,9.342H34.107V33.11H44.116Zm0-9.342H34.107v-7.34H44.116Zm0-9.342H10.752v-7.34H44.116Z" transform="translate(-4.5 -4.5)" fill="#3074a4"/>
                          </g>
                        </g>
                      </g>
                    </svg>
                    
 
          </div> 
          <div class="box-text-div">
                <p>UX/UI Design</p>
                </div>
                </div>
 
             <div class="box-icon-text-holder">
 
                                  <div class="box-icon-div">
                                  <svg id="Group_26415" data-name="Group 26415" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32.233" height="53.419" viewBox="0 0 32.233 53.419">
                                  <defs>
                                    <clipPath id="clip-path">
                                      <rect id="Rectangle_12779" data-name="Rectangle 12779" width="32.233" height="53.419" fill="#3074a4"/>
                                    </clipPath>
                                  </defs>
                                  <g id="Group_21410" data-name="Group 21410" transform="translate(0 0)">
                                    <g id="Group_21409" data-name="Group 21409" clip-path="url(#clip-path)">
                                      <path id="Path_17091" data-name="Path 17091" d="M162.58,265.842H138.628A3.635,3.635,0,0,0,135,269.468v46.468a3.646,3.646,0,0,0,3.628,3.628H162.58a3.647,3.647,0,0,0,3.628-3.628V269.468a3.635,3.635,0,0,0-3.628-3.626Zm-15.806,2.615h7.659a.438.438,0,1,1,0,.877h-7.659a.438.438,0,0,1-.443-.435.443.443,0,0,1,.443-.441Zm3.83,49.292a1.817,1.817,0,1,1,1.813-1.813,1.809,1.809,0,0,1-1.813,1.813Zm13.077-4.9H137.525V271.6h26.157Zm-5.936-27.266a10.127,10.127,0,0,1,0,14.292,1.218,1.218,0,0,1-.127.111l1.073,1.08h-3.837v-3.837l1,1a.941.941,0,0,0,.129-.119,7.614,7.614,0,0,0-8.649-12.262V283.6H146.3a10.117,10.117,0,0,1,11.443,1.986ZM154.021,301.9h.817a10.1,10.1,0,0,1-11.378-16.309c.038-.038.09-.075.129-.113l-1.08-1.08h3.845v3.837l-1-1a.911.911,0,0,0-.129.113,7.611,7.611,0,0,0,8.8,12.185Zm0,0" transform="translate(-135 -266.145)" fill="#3074a4"/>
                                    </g>
                                  </g>
                                </svg>
                                
 
                         </div>
 
                         <div class="box-text-div">
                            <p>Mobile</p>
                            </div>
                            </div>
 

                <div class="box-icon-text-holder">
 
 
                         <div class="box-icon-div">
                         <svg id="Group_26420" data-name="Group 26420" xmlns="http://www.w3.org/2000/svg" width="43.198" height="47.325" viewBox="0 0 43.198 47.325">
                         <path id="Path_17065" data-name="Path 17065" d="M146.274,275.3a6.053,6.053,0,0,0-12.107,0,5.955,5.955,0,0,0,3.988,5.64l-7.566,20.087h9.632V275.3l-.552,1.514a1.828,1.828,0,0,1-1.1-1.514,1.651,1.651,0,0,1,3.3,0,1.611,1.611,0,0,1-1.1,1.514l1.514,4.265a6.28,6.28,0,0,0,3.989-5.778Zm0,0" transform="translate(-118.622 -253.704)" fill="#3074a4"/>
                         <path id="Path_17066" data-name="Path 17066" d="M152.825,272.929a13.895,13.895,0,0,0-27.79,0,13.772,13.772,0,0,0,8.943,12.931l1.514-4.261a9.243,9.243,0,0,1-6.054-8.667,9.355,9.355,0,1,1,18.71,0A9.111,9.111,0,0,1,142.1,281.6l1.514,4.261a13.828,13.828,0,0,0,9.215-12.931Zm0,0" transform="translate(-117.331 -251.331)" fill="#3074a4"/>
                         <path id="Path_17067" data-name="Path 17067" d="M136.6,249a21.595,21.595,0,0,0-7.566,41.822l1.515-4.265A17.063,17.063,0,1,1,153.657,270.6a17.257,17.257,0,0,1-11,15.957l1.511,4.265A21.594,21.594,0,0,0,136.6,249Zm0,0" transform="translate(-115 -249)" fill="#3074a4"/>
                       </svg>
                       
 
                         </div>

                         <div class="box-text-div">
                      <p>Marketing</p>
                      </div>
                      </div>
 
 
 
 
 
 
 
           <div class="box-icon-text-holder">
 
                            <div class="box-icon-div">
                            <svg id="Group_26418" data-name="Group 26418" xmlns="http://www.w3.org/2000/svg" width="52.431" height="50.058" viewBox="0 0 52.431 50.058">
                            <g id="Group_22004" data-name="Group 22004" transform="translate(0 3.411)">
                              <path id="Path_18373" data-name="Path 18373" d="M323.431,404.67v13.169H271V404.67h3.57v-14.8l10.066-7.438v7.438l10.061-7.438v7.438l10.064-7.438v14.622h3.473l1.888-25.866h5.755l1.65,25.866H321.4v7.612Zm-35.995-5.687h-7.914v7.7h7.914Zm13.634,0h-7.915v7.7h7.915Zm13.806,0h-7.915v7.7h7.915Zm0,0" transform="translate(-271 -371.192)" fill="#3074a4"/>
                            </g>
                            <path id="ic_wifi_24px" d="M1,7.553,2.364,8.917a8.683,8.683,0,0,1,12.279,0l1.364-1.364A10.618,10.618,0,0,0,1,7.553ZM6.457,13.01,8.5,15.057,10.55,13.01A2.89,2.89,0,0,0,6.457,13.01ZM3.729,10.282l1.364,1.364a4.825,4.825,0,0,1,6.821,0l1.364-1.364A6.76,6.76,0,0,0,3.729,10.282Z" transform="translate(15.259 -4.448)" fill="#3074a4"/>
                          </svg>
                          
 
                   </div>
 <div class="box-text-div">
 <p>Internet of Things</p>
 </div>
 </div>

          <div class="box-icon-text-holder" >
 
                               <div class="box-icon-div">
                               <svg id="Group_26419" data-name="Group 26419" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="54.117" height="52.052" viewBox="0 0 54.117 52.052">
                               <defs>
                                 <clipPath id="clip-path">
                                   <rect id="Rectangle_12757" data-name="Rectangle 12757" width="54.117" height="52.052" fill="#3074a4"/>
                                 </clipPath>
                               </defs>
                               <g id="Group_21349" data-name="Group 21349" transform="translate(0 0)">
                                 <g id="Group_21348" data-name="Group 21348" clip-path="url(#clip-path)">
                                   <path id="Path_17003" data-name="Path 17003" d="M157.622,273.568a.585.585,0,0,0,.014-.118.573.573,0,0,0-.324-.493l-6.493-3.087V257.844a.568.568,0,0,0-.345-.522l-9.21-3.957v-6.216a.589.589,0,0,0-.013-.094.6.6,0,0,0,.013-.118.577.577,0,0,0-.324-.493L131.6,242a.553.553,0,0,0-.487,0l-9.346,4.441-.021.016-.024.008c-.016.011-.029.025-.046.038a.411.411,0,0,0-.053.043.557.557,0,0,0-.053.061.279.279,0,0,0-.04.054.475.475,0,0,0-.037.075c-.008.019-.016.038-.025.059a.562.562,0,0,0-.013.088.374.374,0,0,0-.011.053l0,.008,0,.01v6.286l-9.675,4.077a.567.567,0,0,0-.348.522v11.74l-7.092,3.373c-.008.005-.014.011-.022.016l-.024.008a.533.533,0,0,0-.045.038c-.019.013-.038.027-.053.04a.572.572,0,0,0-.053.062c-.014.019-.029.035-.04.054a.453.453,0,0,0-.038.078c-.008.018-.016.037-.024.059s-.01.058-.016.088a.37.37,0,0,0-.008.054v11.129a.57.57,0,0,0,.286.493l9.268,5.271a.585.585,0,0,0,.282.075.625.625,0,0,0,.075-.01c.027,0,.051.01.075.01a.593.593,0,0,0,.284-.075l4.252-2.42a.52.52,0,0,0,.169.121l12.677,5.863a.558.558,0,0,0,.238.053.551.551,0,0,0,.244-.056l11.793-5.678,3.724,2.118a.593.593,0,0,0,.282.075.766.766,0,0,0,.077-.01.624.624,0,0,0,.075.01.589.589,0,0,0,.281-.075l9.269-5.271a.57.57,0,0,0,.286-.493V273.658a.506.506,0,0,0-.014-.09Zm-17.493-20.029a.568.568,0,0,0,0,.372v3.829L132,262.366V252.75l8.133-4.626Zm-17.554-5.612,8.133,4.573v9.863l-8.133-4.626ZM114.1,278.05l-8.285-4.543,8.1-3.853,8.122,3.863Zm.455,1.212,8.137-4.629v9.616l-8.137,4.626Zm17.047,13.5-11.908-5.5,3.847-2.187a.57.57,0,0,0,.286-.493V273.658a.47.47,0,0,0-.014-.09.432.432,0,0,0,.011-.118.57.57,0,0,0-.321-.493l-9.346-4.444a.573.573,0,0,0-.487,0l-1.116.533V258.222l8.888-3.746v3.593a.569.569,0,0,0,.286.493l9.269,5.271a.583.583,0,0,0,.281.075.7.7,0,0,0,.075-.011.737.737,0,0,0,.078.011.556.556,0,0,0,.281-.075l9.268-5.271a.569.569,0,0,0,.286-.493V254.6l8.42,3.619v11.113l-1.719-.819a.571.571,0,0,0-.487,0l-9.344,4.444c-.008.005-.014.011-.022.016l-.024.008a.294.294,0,0,0-.045.038c-.019.013-.038.027-.053.04a.6.6,0,0,0-.056.062c-.014.019-.027.035-.038.054a.457.457,0,0,0-.038.078.419.419,0,0,0-.024.059c-.008.029-.01.058-.016.088a.371.371,0,0,0-.008.054v11.129a.57.57,0,0,0,.286.493l4.345,2.471Zm15.479-3.89-2.789-1.587,0,0a.561.561,0,0,0-.562-.316l-4.779-2.72V274.44l8.133,4.573Zm.83-10.826-8.285-4.543,8.1-3.853,8.12,3.863Zm0,0" transform="translate(-104 -241.983)" fill="#3074a4"/>
                                 </g>
                               </g>
                             </svg>
                             
 
                      </div>
 
 
 
                      <div class="box-text-div">
                            <p>BlockChain</p>
                            </div>
                            </div>
 
 <div class="box-icon-text-holder" >
 
 
                               <div class="box-icon-div">
                               <svg id="noun_Robot_1870012" xmlns="http://www.w3.org/2000/svg" width="56.542" height="56.988" viewBox="0 0 56.542 56.988">
                               <g id="Group_21985" data-name="Group 21985" transform="translate(0 0)">
                                 <g id="Group_21984" data-name="Group 21984">
                                   <g id="Group_21974" data-name="Group 21974" transform="translate(47.638 49.33)">
                                     <path id="Path_18341" data-name="Path 18341" d="M55.958,56.4a1.158,1.158,0,1,0,1.158,1.158A1.179,1.179,0,0,0,55.958,56.4Z" transform="translate(-54.8 -56.4)" fill="#3074a4"/>
                                   </g>
                                   <g id="Group_21975" data-name="Group 21975" transform="translate(27.069 49.33)">
                                     <path id="Path_18342" data-name="Path 18342" d="M32.858,56.4a1.158,1.158,0,1,0,1.158,1.158A1.179,1.179,0,0,0,32.858,56.4Z" transform="translate(-31.7 -56.4)" fill="#3074a4"/>
                                   </g>
                                   <g id="Group_21976" data-name="Group 21976" transform="translate(0 43.987)">
                                     <path id="Path_18343" data-name="Path 18343" d="M51.253,50.4H7.8a6.5,6.5,0,1,0,0,13H51.342a6.5,6.5,0,1,0-.089-13Zm-42.3,9.439A2.938,2.938,0,1,1,11.9,56.9,2.965,2.965,0,0,1,8.958,59.839Zm10.24,0A2.938,2.938,0,1,1,22.136,56.9,2.907,2.907,0,0,1,19.2,59.839Zm10.329,0A2.938,2.938,0,1,1,32.465,56.9,2.965,2.965,0,0,1,29.527,59.839Zm10.329,0A2.938,2.938,0,1,1,42.794,56.9,2.965,2.965,0,0,1,39.856,59.839Zm10.24,0A2.938,2.938,0,1,1,53.034,56.9,2.965,2.965,0,0,1,50.1,59.839Z" transform="translate(-1.3 -50.4)" fill="#3074a4"/>
                                   </g>
                                   <g id="Group_21977" data-name="Group 21977" transform="translate(37.398 49.33)">
                                     <path id="Path_18344" data-name="Path 18344" d="M44.458,56.4a1.158,1.158,0,1,0,1.158,1.158A1.179,1.179,0,0,0,44.458,56.4Z" transform="translate(-43.3 -56.4)" fill="#3074a4"/>
                                   </g>
                                   <g id="Group_21978" data-name="Group 21978" transform="translate(6.5 49.33)">
                                     <path id="Path_18345" data-name="Path 18345" d="M9.758,56.4a1.158,1.158,0,1,0,1.158,1.158A1.179,1.179,0,0,0,9.758,56.4Z" transform="translate(-8.6 -56.4)" fill="#3074a4"/>
                                   </g>
                                   <g id="Group_21979" data-name="Group 21979" transform="translate(16.74 49.33)">
                                     <path id="Path_18346" data-name="Path 18346" d="M21.258,56.4a1.158,1.158,0,1,0,1.158,1.158A1.122,1.122,0,0,0,21.258,56.4Z" transform="translate(-20.1 -56.4)" fill="#3074a4"/>
                                   </g>
                                   <g id="Group_21980" data-name="Group 21980" transform="translate(32.857 22.706)">
                                     <ellipse id="Ellipse_338" data-name="Ellipse 338" cx="1.692" cy="1.692" rx="1.692" ry="1.692" fill="#3074a4"/>
                                   </g>
                                   <g id="Group_21981" data-name="Group 21981" transform="translate(17.007 20.302)">
                                     <path id="Path_18347" data-name="Path 18347" d="M21.112,32.17H42.127a.7.7,0,0,0,.712-.712V24.512a.7.7,0,0,0-.712-.712H21.112a.7.7,0,0,0-.712.712v6.945A.7.7,0,0,0,21.112,32.17Zm16.829-7.747A3.477,3.477,0,0,1,41.414,27.9a3.536,3.536,0,0,1-3.473,3.473,3.473,3.473,0,0,1,0-6.945Zm-12.644,0A3.477,3.477,0,0,1,28.77,27.9,3.536,3.536,0,0,1,25.3,31.369,3.477,3.477,0,0,1,21.825,27.9,3.421,3.421,0,0,1,25.3,24.423Z" transform="translate(-20.4 -23.8)" fill="#3074a4"/>
                                   </g>
                                   <g id="Group_21982" data-name="Group 21982" transform="translate(20.213 22.706)">
                                     <ellipse id="Ellipse_339" data-name="Ellipse 339" cx="1.692" cy="1.692" rx="1.692" ry="1.692" fill="#3074a4"/>
                                   </g>
                                   <g id="Group_21983" data-name="Group 21983" transform="translate(1.514)">
                                     <path id="Path_18348" data-name="Path 18348" d="M5.849,21.836V33.857A2.489,2.489,0,0,0,8.343,36.35H12.35v6.856H47.076V36.35h4.007a2.489,2.489,0,0,0,2.493-2.493V21.836a3.741,3.741,0,0,0,2.849-3.651.89.89,0,0,0-1.781,0,1.959,1.959,0,0,1-3.918,0,.958.958,0,0,0-.89-.89.892.892,0,0,0-.89.89A3.721,3.721,0,0,0,51.8,21.836V33.857a.7.7,0,0,1-.712.712H47.076V15.514a3.8,3.8,0,0,0-3.829-3.829H30.6V8.3a3.741,3.741,0,0,0,2.849-3.651,3.74,3.74,0,0,0-7.48.089,3.819,3.819,0,0,0,2.849,3.651v3.295H16.178a3.8,3.8,0,0,0-3.829,3.829V34.569H8.343a.766.766,0,0,1-.712-.712V21.836a3.741,3.741,0,0,0,2.849-3.651.89.89,0,1,0-1.781,0,1.959,1.959,0,0,1-3.918,0,.892.892,0,0,0-.89-.89.958.958,0,0,0-.89.89A3.819,3.819,0,0,0,5.849,21.836Zm33.391,17.72H20.185a3.155,3.155,0,0,1-3.117-3.116.89.89,0,1,1,1.781,0,1.369,1.369,0,0,0,1.336,1.336H39.151a1.369,1.369,0,0,0,1.336-1.336.958.958,0,0,1,.89-.89.892.892,0,0,1,.89.89A3.022,3.022,0,0,1,39.241,39.556ZM16.713,21.925a2.489,2.489,0,0,1,2.493-2.493H40.22a2.548,2.548,0,0,1,2.493,2.493V28.87a2.548,2.548,0,0,1-2.493,2.493H19.206a2.489,2.489,0,0,1-2.493-2.493V21.925Z" transform="translate(-3 -1)" fill="#3074a4"/>
                                   </g>
                                 </g>
                               </g>
                             </svg>
                             
 
                               </div>
 
 
 
 
 
 
                               <div class="box-text-div">
                               <p>Robotics Process Automation</p>
                               </div>
                               </div>
 
 <div class="box-icon-text-holder">
                      <div class="box-icon-div">
                                  <svg id="Group_26421" data-name="Group 26421" xmlns="http://www.w3.org/2000/svg" width="40.835" height="49.653" viewBox="0 0 40.835 49.653">
             <g id="noun_security_protection_3347010" data-name="noun_security protection_3347010" transform="translate(0 0)">
                <g id="Group_26312" data-name="Group 26312" transform="translate(0 0)">
                   <path id="Path_26240" data-name="Path 26240" d="M54.4,32.671V12.494c0-.169,0-.225-.056-.282a.807.807,0,0,0-.564-.169h-.169a25.484,25.484,0,0,1-2.987.113A25.239,25.239,0,0,1,34.453,6.013a1.747,1.747,0,0,0-.395-.113c-.169,0-.282.056-.395.056a24.04,24.04,0,0,1-16.175,6.2,20.119,20.119,0,0,1-3.1-.169H14.22c-.225,0-.395,0-.451.056-.056.169-.169.225-.169.395V32.277c0,4.96,2.142,9.919,6.143,14.2L21.66,48.4a49.95,49.95,0,0,0,12.287,7.158H34.4a40.9,40.9,0,0,0,12.117-7.27l.056-.056a21.519,21.519,0,0,0,3.382-3.494l.056-.056C55.081,38.42,54.4,32.727,54.4,32.671Zm-3.269-.225v.789a14.9,14.9,0,0,1-3.551,9.243l-.113.113-.169.225a17.649,17.649,0,0,1-2.931,2.931l-.056.056-.056.113a35.769,35.769,0,0,1-10.032,6.143A46.7,46.7,0,0,1,23.97,45.916l-1.747-1.747c-3.382-3.607-5.242-7.778-5.242-11.892v-16.8h.507a28.077,28.077,0,0,0,16.57-5.467,28.512,28.512,0,0,0,16.57,5.523h.507Z" transform="translate(-13.6 -5.9)" fill="#3074a4"/>
                </g>
             </g>
             <g id="noun_End_to_End_encryption_1372107" data-name="noun_End to End encryption_1372107" transform="translate(11.641 14.048)">
                <g id="Group_1" data-name="Group 1" transform="translate(0 0)">
                   <path id="Path_1" data-name="Path 1" d="M252.8,249.264h-.483v-1.139a6.38,6.38,0,0,0-12.76,0v1.139h-.478a1.578,1.578,0,0,0-1.576,1.575v4.118a8.438,8.438,0,1,0,16.875,0V250.84a1.584,1.584,0,0,0-1.578-1.576Zm-8.2,9.369.555-2.21a.214.214,0,0,0,0-.029.2.2,0,0,0-.108-.2,1.8,1.8,0,0,1-.277-.18,1.871,1.871,0,0,1-.724-1.481c0-.053,0-.106.006-.158a1.885,1.885,0,1,1,2.768,1.818.205.205,0,0,0-.1.23l.443,1.786.106.425a1.513,1.513,0,0,1-.45.171l-.02,0-.027.006a4.51,4.51,0,0,1-1.681,0l-.024-.005-.023-.006A1.5,1.5,0,0,1,244.6,258.634Zm-2.23-10.508a3.568,3.568,0,1,1,7.135,0v1.138H242.37Z" transform="translate(-237.499 -241.745)" fill="#3074a4"/>
                </g>
             </g>
             </svg>
 
 
                      </div>
                      <div class="box-text-div">
                   <p>Cyber Security</p>
                   </div>
                   </div>
                   </div>
 
    </div>

 </section>
  ${practiceStyle}
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
    <section id=video_1 class="video-main-wrapper">
      <div class="video-container-main-div">
        <div class="video-header">
          <h1>Add your heading title here</h1>
          <p>The Video Module is a place where you can visually show your user or client aspects of your company or product.</p>
        </div>
        <div class="video-div">
          <video width="100%" height="auto" controls></video>
        </div>
      </div>
    </section>
 ${video}
 ${getStyles(['.video-header'])}
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
    content: ` <section  id= "guideline_1" class="guideline-main-wrapper">
    <div id=guideline_1 class="guideline-container">
      <div class="guideline-header-section">
        <h1>Add your heading title here</h1>
        <h2>The guideline module allows you to give directions or lead users to use a product,
            perform an action, or lead them to a Call-to-action.
        </h2>
      </div>
      <div class="guidline-option">
      
      <div class="guideline">
            <div class="heading">
              <h3>1</h3>
              <h1>Add Step Title</h1>
            </div>
            <p >Add information in steps in
              order to explain what the user
              should do next
            </p>
        </div>
      
        <div class="guideline">
        <div class="heading">
          <h3>1</h3>
          <h1>Add Step Title</h1>
        </div>
        <p >Add information in steps in
          order to explain what the user
          should do next
        </p>
    </div>

    <div class="guideline">
    <div class="heading">
      <h3>1</h3>
      <h1>Add Step Title</h1>
    </div>
    <p >Add information in steps in
      order to explain what the user
      should do next
    </p>
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
    content: `<section  id= "location_1" class="location-main-wrapper">
      <div class="location-container">
        <div class="address-content-main-holder">
            <h1 class="m-2">Add your heading title here</h1>
            <h2 class="m-2 mb-5">The Location module contains your building’s address
              and contact information. Please add as much or little
              information you need.
            </h2>

            <div class="address-content-div">
              <div class="address-icon">
              <svg xmlns="http://www.w3.org/2000/svg"  fill="#159576" width="30" height="30" viewBox="0 0 78.576 74.885" style="margin:auto">
              <g id="ZJE27B.tif" transform="translate(535.211 -1346.566)">
                <g id="Group_54858" data-name="Group 54858" transform="translate(-535.211 1346.566)">
                  <path id="Path_170183" data-name="Path 170183" d="M-496.028,1346.566a2.84,2.84,0,0,1,2.794,1.775c3.342,6.817,6.721,13.616,10.063,20.433a1.383,1.383,0,0,0,1.2.884c7.435,1.054,14.865,2.151,22.3,3.224,2.148.31,3.3,1.442,2.987,3.2a3.8,3.8,0,0,1-1.062,1.892q-8.151,8.038-16.38,16a1.242,1.242,0,0,0-.419,1.272c1.324,7.595,2.608,15.2,3.913,22.8a2.711,2.711,0,0,1-1.1,2.886,2.753,2.753,0,0,1-3.092.095q-10.153-5.349-20.311-10.691a1.4,1.4,0,0,0-1.5-.021q-10.067,5.329-20.158,10.612a3.084,3.084,0,0,1-2.642.352,2.717,2.717,0,0,1-1.759-3.1q1.7-10.041,3.428-20.076c.16-.936.263-1.885.488-2.8a1.244,1.244,0,0,0-.428-1.35c-5.355-5.193-10.683-10.414-16.044-15.6-1.013-.98-1.8-2-1.311-3.478.5-1.53,1.8-1.82,3.209-2.02,7.35-1.04,14.693-2.136,22.042-3.183a1.323,1.323,0,0,0,1.141-.844c3.358-6.841,6.746-13.668,10.1-20.51A2.747,2.747,0,0,1-496.028,1346.566Z" transform="translate(535.211 -1346.566)"/>
                </g>
              </g>
            </svg>
              </div>
              <div class="address-text-div">
                  <p>Add address, phone number, or social media</p>
              </div>
            </div>

            <div class="address-content-div">
            <div class="address-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#159576" width="30" height="30" viewBox="0 0 78.576 74.885" style="margin:auto">
            <g id="ZJE27B.tif" transform="translate(535.211 -1346.566)">
              <g id="Group_54858" data-name="Group 54858" transform="translate(-535.211 1346.566)">
                <path id="Path_170183" data-name="Path 170183" d="M-496.028,1346.566a2.84,2.84,0,0,1,2.794,1.775c3.342,6.817,6.721,13.616,10.063,20.433a1.383,1.383,0,0,0,1.2.884c7.435,1.054,14.865,2.151,22.3,3.224,2.148.31,3.3,1.442,2.987,3.2a3.8,3.8,0,0,1-1.062,1.892q-8.151,8.038-16.38,16a1.242,1.242,0,0,0-.419,1.272c1.324,7.595,2.608,15.2,3.913,22.8a2.711,2.711,0,0,1-1.1,2.886,2.753,2.753,0,0,1-3.092.095q-10.153-5.349-20.311-10.691a1.4,1.4,0,0,0-1.5-.021q-10.067,5.329-20.158,10.612a3.084,3.084,0,0,1-2.642.352,2.717,2.717,0,0,1-1.759-3.1q1.7-10.041,3.428-20.076c.16-.936.263-1.885.488-2.8a1.244,1.244,0,0,0-.428-1.35c-5.355-5.193-10.683-10.414-16.044-15.6-1.013-.98-1.8-2-1.311-3.478.5-1.53,1.8-1.82,3.209-2.02,7.35-1.04,14.693-2.136,22.042-3.183a1.323,1.323,0,0,0,1.141-.844c3.358-6.841,6.746-13.668,10.1-20.51A2.747,2.747,0,0,1-496.028,1346.566Z" transform="translate(535.211 -1346.566)"/>
              </g>
            </g>
          </svg>
            </div>
            <div class="address-text-div">
                <p>Add address, phone number, or social media</p>
            </div>
          </div>


          <div class="address-content-div">
          <div class="address-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#159576" width="30" height="30" viewBox="0 0 78.576 74.885" style="margin:auto">
          <g id="ZJE27B.tif" transform="translate(535.211 -1346.566)">
            <g id="Group_54858" data-name="Group 54858" transform="translate(-535.211 1346.566)">
              <path id="Path_170183" data-name="Path 170183" d="M-496.028,1346.566a2.84,2.84,0,0,1,2.794,1.775c3.342,6.817,6.721,13.616,10.063,20.433a1.383,1.383,0,0,0,1.2.884c7.435,1.054,14.865,2.151,22.3,3.224,2.148.31,3.3,1.442,2.987,3.2a3.8,3.8,0,0,1-1.062,1.892q-8.151,8.038-16.38,16a1.242,1.242,0,0,0-.419,1.272c1.324,7.595,2.608,15.2,3.913,22.8a2.711,2.711,0,0,1-1.1,2.886,2.753,2.753,0,0,1-3.092.095q-10.153-5.349-20.311-10.691a1.4,1.4,0,0,0-1.5-.021q-10.067,5.329-20.158,10.612a3.084,3.084,0,0,1-2.642.352,2.717,2.717,0,0,1-1.759-3.1q1.7-10.041,3.428-20.076c.16-.936.263-1.885.488-2.8a1.244,1.244,0,0,0-.428-1.35c-5.355-5.193-10.683-10.414-16.044-15.6-1.013-.98-1.8-2-1.311-3.478.5-1.53,1.8-1.82,3.209-2.02,7.35-1.04,14.693-2.136,22.042-3.183a1.323,1.323,0,0,0,1.141-.844c3.358-6.841,6.746-13.668,10.1-20.51A2.747,2.747,0,0,1-496.028,1346.566Z" transform="translate(535.211 -1346.566)"/>
            </g>
          </g>
        </svg>
          </div>
          <div class="address-text-div">
              <p>Add address, phone number, or social media</p>
          </div>
         
        </div>

        
        </div>
        <div class="address-map-div">
            <img class="object-cover object-center" src="https://dummyimage.com/1200x500" alt="step" style="width: 100%;
              height: 400px;">
        </div>
      </div>
  </section>
  ${locationStyle}
  ${getStyles([
    '.address-content-main-holder',
    'address-content-div',
    'address-text-div',
  ])}
 
  `,
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
    content: `<section  id= "paragraph_1" class="main-paragraph-wrapper">
       <div class="paragraph-container">
          <h1 class="font-medium title-font text-gray-900 mb-4">Master Cleanse Reliac Heirloom</h1>
          <p>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
       </div>
 </section>
 ${paragraphStyle}
 ${getStyles(['.paragraph-container'])}
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
    content: `<section class="main_wrapper" id= "number_1">
        <div class="number-container-div">
          
        <div class="title-div">
              <h1>Add your heading title here</h1>
              <h2>The numbers module allows you to showcase your company’s metrics and
                statistical accomplishments
              </h2>
          </div>

          <div class="number-percentagges-section">
         
              <div class="benefit percentage-info">
                <i class="fa fa-star"></i>
                <h1 class="" >10 <span> % </span></h1>
                <p >INSERT STATISTIC INFORMATION</p>
              </div>

              <div class="benefit percentage-info">
                <i class="fa fa-star"></i>
                <h1 class="" >10 <span> % </span></h1>
                <p >INSERT STATISTIC INFORMATION</p>
              </div>

              <div class="benefit percentage-info">
              <i class="fa fa-star"></i>
              <h1 class="" >10 <span> % </span></h1>
              <p >INSERT STATISTIC INFORMATION</p>
            </div>

              </div>
          </div>
    </section> 
    
    ${numbermetric}
    ${getStyles(['.title-div', '.benefit percentage-info'])}
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
    content: `<talent id= "talent_1">
    
<div class="talent-cloud-main-wrapper" >
    <div class="talent-cloud-container">
     <div class="img-holder">
       <img src="https://cdn.pixabay.com/photo/2013/07/12/18/35/world-153534_960_720.png" alt="...">
     </div>
   
    <div class="content-div">
          <h1>Join Talent Clouds</h1>
          <p >You can apply to be considered for the opportunities that match your skills, interests and availability. 
             </p>
             <p>Most opportunities are remote, but some travel may be required depending on the project need.
          </p>
       </div>
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
    content: `<section id="image_banner_1" class="image-banner-wrapper">
        <div class="main-banner-container">
      <div class="bannar-wrap">
      <div class="bannar-content">
         <h1 class="header">Add your heading title here</h1>
         <p>Use this area to write about anything you want. Keep it easy to read and percise. (Dummy Text) Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nunc nec posuere risus. Phasellus nunc nisl, vulputate nec magna vel, sodales sollicitudin velit. Fusce scelerisque odio risus, eu euismod felis
            pellentesque a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In pulvinar aliquam felis, eu sodales ligula
            mollis ut. Aliquam eu pellentesque turpis. Nullam lectus nulla, vehicula quis odio vitae, vestibulum sollicitudin massa. Aenean pretium mauris nec ex
            feugiat convallis. Nulla sit amet odio dui. Nulla vulputate dictum tellus vel iaculis.
         </p>
         <div class="button-container">
            <button class="button-section">Button Label</button>
         </div>

      </div>
   </div>
</div>
        </section>
        ${ImageBanner}
      
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
    content: `<section  id= "image_text_1">
        <div class="main_container">
        <div class="content-section">
           <h1 class="h1" >Add your heading title here</h1>
           <h2 class="h2">The Image and Text module is a place where you can
              visually show your user or client aspects of your
              company or product.
           </h2>
        </div>
        <div class="image-text-image-section">
        <div class="img_container">
           <img src="https://dummyimage.com/1200x500" alt="step">
              <figcaption class="figure_caption" >Caption Example</figcaption>
        </div>
        </div>
     
        </div>
        </section>
        `,
  });
  addBlock('search', {
    label: 'Search',
    category: 'Header & Footer',
    media: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
        <path d="M1458.948 1305.626c104.637-136.95 167.527-307.187 167.527-492.388C1626.475 364.764 1261.711 0 813.238 0 364.764 0 0 364.764 0 813.238c0 448.473 364.764 813.237 813.238 813.237 185.201 0 355.547-62.89 492.496-167.527L1766.678 1920 1920 1766.678l-461.052-461.052Zm-645.71 103.986c-328.874 0-596.375-267.61-596.375-596.374 0-328.765 267.501-596.375 596.375-596.375 328.873 0 596.374 267.61 596.374 596.375s-267.501 596.374-596.374 596.374Z" fill-rule="evenodd"/>
    </svg>`,
    content: `<section class="search-section-main-holder">
    <div class="search-bar-div">
    <div class="search-box">
    <input type="text" class="search-input" placeholder="Search Item...">
    <button class="button"> Search</button>
 </div>
    </div>
    </section>
        `,
  });
  addBlock('divider', {
    label: 'Divider',
    category: 'Basic Elements',
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
    content: `<div class="page-builder-divider">
    <span class="page-builder-divider-seprator"></span>
   </div>
        ${style}
        `,
  });
  addBlock('spacer', {
    label: 'Spacer',
    category: 'Basic Elements',
    media: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg"><path d="M3,1V17a2,2,0,0,0,2,2H47a2,2,0,0,0,2-2V1H45V15H7V1ZM49,51V35a2,2,0,0,0-2-2H5a2,2,0,0,0-2,2V51H7V37H45V51ZM12,28H4V24h8Zm4,0h8V24H16Zm20,0H28V24h8Zm4,0h8V24H40Z" fill-rule="evenodd"/></svg>`,
    content: `<div class="page-builder-spacer">
    <div class="page-builder-spacer-inner"></div>
  </div>
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
    <h1 class="page-builder-heading-title">page Builder Header #1234</h1>
</div>
        `,
  });
  addBlock('icon', {
    label: 'Icon',
    category: 'Basic Elements',
    media: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>ICON icon</title><path d="M21.605.021a2.397 2.397 0 00-.47 4.747 2.397 2.397 0 10.47-4.746zm-9.584 2.395C6.73 2.416 2.437 6.707 2.437 12c0 2.142.703 4.121 1.891 5.717l2.586-2.586a5.99 5.99 0 018.236-8.238l2.586-2.586a9.537 9.537 0 00-5.715-1.891zm7.692 3.867L17.127 8.87a5.989 5.989 0 01-8.236 8.238l-2.586 2.584a9.543 9.543 0 005.716 1.893c5.293 0 9.583-4.29 9.583-9.584 0-2.142-.704-4.12-1.891-5.717zM2.396 19.187a2.398 2.398 0 00-.47 4.749 2.402 2.402 0 002.822-2.823 2.399 2.399 0 00-2.352-1.925z"/></svg>`,
    content: `<div class="icon-wrapper">
    <div class="page-builder-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#159576" width="60" height="60" viewBox="0 0 78.576 74.885">
    <g id="ZJE27B.tif" transform="translate(535.211 -1346.566)">
      <g id="Group_54858" data-name="Group 54858" transform="translate(-535.211 1346.566)">
        <path id="Path_170183" data-name="Path 170183" d="M-496.028,1346.566a2.84,2.84,0,0,1,2.794,1.775c3.342,6.817,6.721,13.616,10.063,20.433a1.383,1.383,0,0,0,1.2.884c7.435,1.054,14.865,2.151,22.3,3.224,2.148.31,3.3,1.442,2.987,3.2a3.8,3.8,0,0,1-1.062,1.892q-8.151,8.038-16.38,16a1.242,1.242,0,0,0-.419,1.272c1.324,7.595,2.608,15.2,3.913,22.8a2.711,2.711,0,0,1-1.1,2.886,2.753,2.753,0,0,1-3.092.095q-10.153-5.349-20.311-10.691a1.4,1.4,0,0,0-1.5-.021q-10.067,5.329-20.158,10.612a3.084,3.084,0,0,1-2.642.352,2.717,2.717,0,0,1-1.759-3.1q1.7-10.041,3.428-20.076c.16-.936.263-1.885.488-2.8a1.244,1.244,0,0,0-.428-1.35c-5.355-5.193-10.683-10.414-16.044-15.6-1.013-.98-1.8-2-1.311-3.478.5-1.53,1.8-1.82,3.209-2.02,7.35-1.04,14.693-2.136,22.042-3.183a1.323,1.323,0,0,0,1.141-.844c3.358-6.841,6.746-13.668,10.1-20.51A2.747,2.747,0,0,1-496.028,1346.566Z" transform="translate(535.211 -1346.566)"/>
      </g>
    </g>
  </svg>
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
    category: 'Basic Elements',
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
    <h2 class="page-builder-site-title">Experfy Insights</h2>
        ${LogoStyle}
        `,
  });
  addBlock('theme-style', {
    label: 'Theme Style',
    category: 'Section Modules',
    activate: true,
    // media: ,
    content: [
      `<div id="theme_1" style="padding: 0px 20%;">
      <div class="global-theme-setting">

        <div class="button-section">
          <button id="button" type="button" >Submit</button>
        </div>

        <div class="images-sections">
        <img width="200px" src="https://cdn4.iconfinder.com/data/icons/documents-letters-and-stationery/400/doc-14-512.png" />
        </div>

        <div class="heading-holder-block">
          <h1 id="h1">Heading 1</h1>
        
          <h2 id="h2">Heading 2</h2>
        
          <h3 class="h3" >Heading 3</h3>
        
          <h4 class="h4">Heading 4</h4>
        
          <h5 class="h5">Heading 5</h5>
        
          <h6 class="h6">Heading 6</h6>
        </div>
          
        <div class="link-holder">
          <a href="#" class="a" >Link 1</a>
        </div>

        <div class="page-builder-form-div">
          <form>
            <div class="page-builder-field-group">
              <label class="label" for="text">Label:</label>
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
};



