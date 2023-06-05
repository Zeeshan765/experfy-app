import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import axios from 'axios';
import GrapesJS from 'grapesjs';
import Basics from 'grapesjs-blocks-basic';
import NavBar from 'grapesjs-navbar';
import Forms from 'grapesjs-plugin-forms';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import { useConfig } from 'payload/components/utilities';
import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Experfy from './ExperfyPlugin';
import gjsScroll from './ScrollPlugin';
import { getSectors } from './ExperfyPlugin/blocks/getSectors';
import { UserContext } from '../../Providers/UserProvider';
import { DataContext } from '../../Providers/DataProvider';
import { canvasStyle, navStep, sections, devices } from './utils';
import SidebarBottom from './SidebarBottom';
import { getCurrentDateAndTime } from '../../utilities/dateAndTime';
import StyleFilter from 'grapesjs-style-filter';
import 'grapick/dist/grapick.min.css';
import BackgroundPlugin from './BackgroundPlugin';
interface parems {
  id?: string;
}
let ln = 0;

const PageBuilder: React.FC = () => {
  // ======States start=======
  let [editor, setEditorState] = React.useState<GrapesJS.Editor>();
  const [currentPageData, setCurrentPageData] = useState<any>(null);
  // const [pageTitle,setPageTitle] = useState<string>('');
  const [pageHistoryArray, setPageHistoryArray] = useState<any[]>([]);
  const [changeHistory, setChangeHistory] = useState(false);
  const [addHistory, setAddHistory] = useState(true);
  const [newstateDirty, setnewstateDirty] = useState(null);
  var isUpdating = false;
  let isChanged = false;
  let isSave = false;



  let mediaSvg = {
    location: `<svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24"><path id="noun-location-4491946" d="M168.4,30.763a8.653,8.653,0,0,0-6.33-2.469,8.807,8.807,0,0,0-8.484,8.613,8.6,8.6,0,0,0,1.731,5.313c.16.239,4.292,5.985,5.668,7.892a1.577,1.577,0,0,0,1.268.652h.007a1.576,1.576,0,0,0,1.265-.64c.64-.869,5.624-7.683,5.755-7.848l.021-.028h0a8.835,8.835,0,0,0,1.741-5.23,8.658,8.658,0,0,0-2.642-6.256ZM162.317,41.03a3.893,3.893,0,1,1,2.748-1.14A3.888,3.888,0,0,1,162.317,41.03Z" transform="translate(-153.589 -28.289)" /></svg>`,

    paragraph: `<svg xmlns="http://www.w3.org/2000/svg" width="31.825" height="31.825" viewBox="0 0 31.825 31.825">
   <g id="Group_54077" data-name="Group 54077" transform="translate(-278 -1096.573)">
     <path id="Path_167728" data-name="Path 167728" d="M30.382,9.5H18.258a.85.85,0,0,0,0,1.69H30.382a.85.85,0,0,0,0-1.69Z" transform="translate(278.686 1093.135)" fill="#4ba4da"/>
     <path id="Path_167729" data-name="Path 167729" d="M30.382,13.5H18.258a.874.874,0,0,0,0,1.732H30.382a.874.874,0,0,0,0-1.732Z" transform="translate(278.686 1094.98)" fill="#4ba4da"/>
     <path id="Path_167730" data-name="Path 167730" d="M36.567,17.5H6.258a.947.947,0,0,0,0,1.856h30.31a.947.947,0,0,0,0-1.856Z" transform="translate(272.5 1096.918)" fill="#4ba4da"/>
     <path id="Path_167731" data-name="Path 167731" d="M36.567,21.5H6.258a.887.887,0,0,0,0,1.755h30.31a.887.887,0,0,0,0-1.755Z" transform="translate(272.5 1099.082)" fill="#4ba4da"/>
     <path id="Path_167732" data-name="Path 167732" d="M21.413,25.5H6.258c-.418,0-.758.453-.758,1.012s.339,1.012.758,1.012H21.413c.418,0,.758-.453.758-1.012S21.831,25.5,21.413,25.5Z" transform="translate(272.5 1100.874)" fill="#4ba4da"/>
     <path id="Path_167733" data-name="Path 167733" d="M6.258,19.139H18.382a.758.758,0,0,0,.758-.758V6.258a.758.758,0,0,0-.758-.758H6.258a.758.758,0,0,0-.758.758V18.382A.758.758,0,0,0,6.258,19.139ZM7.015,7.015H17.624V17.624H7.015Z" transform="translate(272.5 1091.073)" fill="#4ba4da"/>
     <path id="Path_167734" data-name="Path 167734" d="M.207,9.275a.35.35,0,0,0,.462-.182L1.8,6.5H3.791l1.134,2.59a.35.35,0,1,0,.641-.28l-2.45-5.6a.35.35,0,0,0-.641,0l-2.45,5.6a.35.35,0,0,0,.182.462ZM2.8,4.227,3.5,5.8H2.1Z" transform="translate(282.027 1096.796)" fill="#4ba4da"/>
   </g>
 </svg>`,
    metrics_numbers: `<svg xmlns="http://www.w3.org/2000/svg" width="20.07" height="14.238" viewBox="0 0 20.07 14.238">
 <g id="noun-metrics-4041242" transform="translate(-70 -81.367)">
   <path id="Path_169485" data-name="Path 169485" d="M80.035,81.367a10.055,10.055,0,0,0-9.124,14.238H89.159a10.055,10.055,0,0,0-9.124-14.238Zm-.6,1.837h1.191v1.745H79.439Zm-5.865,8.818H71.833V90.828h1.741Zm1.486-4.741-1.238-1.24.842-.845,1.238,1.24Zm4.975,6.376A1.757,1.757,0,0,1,78.282,91.9a45.3,45.3,0,0,1,1.179-4.989.6.6,0,0,1,1.148,0A45.324,45.324,0,0,1,81.788,91.9,1.756,1.756,0,0,1,80.035,93.658Zm4.975-6.376-.842-.845,1.238-1.24.842.845Zm3.228,4.741H86.5V90.828h1.741Z" />
   <path id="Path_169486" data-name="Path 169486" d="M334.32,307.642a.562.562,0,0,0,1.124,0,22.67,22.67,0,0,0-.562-2.516A22.657,22.657,0,0,0,334.32,307.642Z" transform="translate(-254.847 -215.739)" fill="#7c8189"/>
 </g>
</svg>`,

    talent_cloud_candidates: `<svg width="26.9" height="25.5" xmlns="http://www.w3.org/2000/svg">
<g>
 <title>Layer 1</title>
 <path  d="m24.96,47.04l0,0zm-22.08,-26.88a2.875,2.875 0 0 0 2.7,-1.92l4.02,0a0.96,0.96 0 0 0 0.96,-0.96l0,-2.88l1.92,0l0,4.977a2.88,2.88 0 1 0 1.92,0l0,-4.977l1.92,0l0,2.88a0.96,0.96 0 0 0 0.96,0.96l4.02,0a2.88,2.88 0 1 0 0,-1.92l-3.06,0l0,-1.92a5.76,5.76 0 0 0 0.19,-11.517a5.76,5.76 0 0 0 -9.98,0a5.76,5.76 0 0 0 0.19,11.517l0,1.92l-3.057,0a2.875,2.875 0 1 0 -2.7,3.84l-0.003,0z" data-name="Path 169437" id="Path_169437"/>
</g>

</svg>`,
    image_banner: `<svg xmlns="http://www.w3.org/2000/svg" fill="#159576" width="24" height="24" viewBox="0 0 24 24">
<path id="Path_170799" data-name="Path 170799" d="M90.466,39.2H70.632a.633.633,0,0,0-.633.633V56.5a.633.633,0,0,0,.633.633H90.466A.633.633,0,0,0,91.1,56.5V39.832A.633.633,0,0,0,90.466,39.2ZM83.292,54.417a.442.442,0,0,1-.434.4H72.264a.382.382,0,0,1-.366-.4v-.053a.382.382,0,0,1,.366-.4H82.857a.442.442,0,0,1,.434.4Zm-11.04-2.98H82.479a.414.414,0,0,1,.405.382V51.9a.414.414,0,0,1-.405.382H72.252A.369.369,0,0,1,71.9,51.9v-.079a.369.369,0,0,1,.354-.383ZM71.9,49.353V49.3a.382.382,0,0,1,.366-.4h9.617a.4.4,0,0,1,.393.4v.053a.4.4,0,0,1-.393.4H72.264A.382.382,0,0,1,71.9,49.353Zm17.251,4.822-.672.5a.283.283,0,0,1-.168.056.272.272,0,0,1-.043,0,.284.284,0,0,1-.185-.113l-1.355-1.869-.778.573a.282.282,0,0,1-.442-.163l-.958-4.085a.282.282,0,0,1,.414-.31l3.645,2.078a.282.282,0,0,1,.031.469l-.788.6,1.359,1.876a.281.281,0,0,1-.06.392Zm.472-8.225a.633.633,0,0,1-.633.633H72.109a.633.633,0,0,1-.633-.633V41.941a.633.633,0,0,1,.633-.633h16.88a.633.633,0,0,1,.633.633Z" transform="translate(-69.999 -39.199)"/>
</svg>`,
    photo_gallery: `<svg width="21" height="22.477" xmlns="http://www.w3.org/2000/svg">
<g>
 <g id="noun-health-insurance-1893284">
  <path id="Path_169632" data-name="Path 169632" d="m8.286,22.33901l0.209,0.14l0.035,-0.035l0.035,0.035l0.209,-0.14a18.286,18.286 0 0 0 5.41,-5.445a18.771,18.771 0 0 0 2.967,-10.75l0,-0.314l-0.279,-0.035a11.443,11.443 0 0 1 -4.258,-1.326a11.685,11.685 0 0 1 -3.8,-3.351l-0.279,-0.314l-0.279,0.349a12.267,12.267 0 0 1 -7.923,4.642l-0.314,0.035l0,0.314a18.6,18.6 0 0 0 3,10.925a18.058,18.058 0 0 0 5.27,5.27l-0.003,0zm-4.363,-11.483a0.35,0.35 0 0 1 0.349,-0.349l3.141,0l0,-3.141a0.35,0.35 0 0 1 0.349,-0.349l1.745,0a0.35,0.35 0 0 1 0.349,0.349l0,3.141l3.142,0a0.35,0.35 0 0 1 0.349,0.349l0,1.745a0.35,0.35 0 0 1 -0.349,0.349l-3.141,0l0,3.141a0.35,0.35 0 0 1 -0.349,0.349l-1.745,0a0.35,0.35 0 0 1 -0.349,-0.349l0,-3.141l-3.141,0a0.35,0.35 0 0 1 -0.349,-0.349l-0.001,-1.745z" />
  <path id="Path_169633" data-name="Path 169633" d="m20.536,5.026l-0.279,-0.035a12.53,12.53 0 0 1 -4.293,-1.326a11.933,11.933 0 0 1 -3.281,-2.618l-0.768,-1.047l-1.815,1.815l0,0.384a11.757,11.757 0 0 0 2.653,2.059a10.888,10.888 0 0 0 4.153,1.291l0.593,0.07l0,0.593a19.216,19.216 0 0 1 -3.037,10.925a18.581,18.581 0 0 1 -3.455,3.944l0.838,0.558l0.035,-0.035l0.035,0.035l0.209,-0.14a18.286,18.286 0 0 0 5.41,-5.445a18.772,18.772 0 0 0 2.967,-10.75l0.035,-0.278z" />
  <path id="Path_169634" data-name="Path 169634" d="m29.82099,11.23901z"/>
 </g>
</g>

</svg>`,

    image_and_text: `<svg xmlns="http://www.w3.org/2000/svg" width="23.304" height="17.768" viewBox="0 0 23.304 17.768">
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

    guidelines: `<svg xmlns="http://www.w3.org/2000/svg" width="30.204" height="26.291" viewBox="0 0 30.204 26.291">
<g id="noun-guide-4435112" transform="translate(-159.45 -28.378)">
  <path id="Path_169439" data-name="Path 169439" d="M336.444,48.669h-1.516c-.18,0-.325-.1-.325-.214v-24.9L335.4,22.5a.412.412,0,0,1,.581,0l.793,1.056v24.9c0,.118-.146.214-.325.214Z" transform="translate(-161.139 6)" />
  <path id="Path_169440" data-name="Path 169440" d="M387.083,112.9h-9.832a.649.649,0,0,1-.65-.65v-5.2a.65.65,0,0,1,.65-.65h9.832a.651.651,0,0,1,.542.29l1.865,2.779a.329.329,0,0,1,0,.36l-1.854,2.779a.649.649,0,0,1-.542.29Z" transform="translate(-199.889 -72.818)" />
  <path id="Path_169441" data-name="Path 169441" d="M155.9,210.9h9.834a.65.65,0,0,0,.65-.65v-5.2a.65.65,0,0,0-.65-.65H155.9a.65.65,0,0,0-.542.29L153.5,207.47a.329.329,0,0,0,0,.36l1.854,2.779a.649.649,0,0,0,.539.29Z" transform="translate(6 -165.826)" />
</g>
</svg>  
`,

    video: `<svg xmlns="http://www.w3.org/2000/svg" width="36.253" height="35.9" viewBox="0 0 36.253 35.9">
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

    practice_areas: `<svg xmlns="http://www.w3.org/2000/svg" width="23.049" height="22.102" viewBox="0 0 23.049 22.102">
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

    benefits: `<svg width="21" height="22.477" xmlns="http://www.w3.org/2000/svg">
<g>
 <title>Layer 1</title>
 <g id="noun-health-insurance-1893284">
  <path id="Path_169632" data-name="Path 169632" d="m8.286,22.33901l0.209,0.14l0.035,-0.035l0.035,0.035l0.209,-0.14a18.286,18.286 0 0 0 5.41,-5.445a18.771,18.771 0 0 0 2.967,-10.75l0,-0.314l-0.279,-0.035a11.443,11.443 0 0 1 -4.258,-1.326a11.685,11.685 0 0 1 -3.8,-3.351l-0.279,-0.314l-0.279,0.349a12.267,12.267 0 0 1 -7.923,4.642l-0.314,0.035l0,0.314a18.6,18.6 0 0 0 3,10.925a18.058,18.058 0 0 0 5.27,5.27l-0.003,0zm-4.363,-11.483a0.35,0.35 0 0 1 0.349,-0.349l3.141,0l0,-3.141a0.35,0.35 0 0 1 0.349,-0.349l1.745,0a0.35,0.35 0 0 1 0.349,0.349l0,3.141l3.142,0a0.35,0.35 0 0 1 0.349,0.349l0,1.745a0.35,0.35 0 0 1 -0.349,0.349l-3.141,0l0,3.141a0.35,0.35 0 0 1 -0.349,0.349l-1.745,0a0.35,0.35 0 0 1 -0.349,-0.349l0,-3.141l-3.141,0a0.35,0.35 0 0 1 -0.349,-0.349l-0.001,-1.745z" />
  <path id="Path_169633" data-name="Path 169633" d="m20.536,5.026l-0.279,-0.035a12.53,12.53 0 0 1 -4.293,-1.326a11.933,11.933 0 0 1 -3.281,-2.618l-0.768,-1.047l-1.815,1.815l0,0.384a11.757,11.757 0 0 0 2.653,2.059a10.888,10.888 0 0 0 4.153,1.291l0.593,0.07l0,0.593a19.216,19.216 0 0 1 -3.037,10.925a18.581,18.581 0 0 1 -3.455,3.944l0.838,0.558l0.035,-0.035l0.035,0.035l0.209,-0.14a18.286,18.286 0 0 0 5.41,-5.445a18.772,18.772 0 0 0 2.967,-10.75l0.035,-0.278z" />
  <path id="Path_169634" data-name="Path 169634" d="m29.82099,11.23901z"/>
 </g>
</g>

</svg>`,
    testimonial: `<svg xmlns="http://www.w3.org/2000/svg" width="26.698" height="22.67" viewBox="0 0 26.698 22.67">
<g id="noun-testimonial-1065389" transform="translate(-73.647 -37.379)">
  <path id="Path_169430" data-name="Path 169430" d="M184.376,89.6a12.294,12.294,0,0,0-2.19.2.633.633,0,0,0,.227,1.245,11.026,11.026,0,0,1,1.964-.175c5.332,0,9.671,3.812,9.671,8.5a7.778,7.778,0,0,1-1.967,5.136.631.631,0,0,0-.143.531l.59,3.135-3.165-1.073a.63.63,0,0,0-.412,0,17.849,17.849,0,0,1-4.573.768c-5.332,0-9.67-3.812-9.67-8.5a.633.633,0,1,0-1.265,0c0,5.383,4.905,9.763,10.936,9.763a19.124,19.124,0,0,0,4.78-.768l3.99,1.354a.64.64,0,0,0,.2.033.632.632,0,0,0,.622-.75l-.735-3.9a8.987,8.987,0,0,0,2.077-5.727c0-5.383-4.907-9.762-10.937-9.762Z" transform="translate(-94.969 -49.7)" />
  <path id="Path_169431" data-name="Path 169431" d="M82.455,48.369a.506.506,0,0,0,.734-.533l-.578-3.368,2.448-2.386a.506.506,0,0,0-.281-.863L81.4,40.727l-1.514-3.066a.506.506,0,0,0-.908,0l-1.513,3.066-3.382.492a.506.506,0,0,0-.281.863l2.447,2.386-.577,3.368a.506.506,0,0,0,.734.533l3.024-1.589Z" />
  <path id="Path_169432" data-name="Path 169432" d="M299.29,209.74h-9.42a.633.633,0,0,0,0,1.265h9.42a.633.633,0,1,0,0-1.265Z" transform="translate(-205.165 -164.026)" />
  <path id="Path_169433" data-name="Path 169433" d="M299.931,278.257a.633.633,0,0,0-.633-.633h-9.42a.633.633,0,0,0,0,1.266h9.42a.632.632,0,0,0,.633-.633Z" transform="translate(-205.173 -228.627)" />
  <path id="Path_169434" data-name="Path 169434" d="M289.871,345.51a.633.633,0,0,0,0,1.266h3.812a.633.633,0,0,0,0-1.266Z" transform="translate(-205.165 -293.23)" fill="#7c8189"/>
</g>
</svg>
`,
  };

  let pageTitle = ""

  // ======States end=======
  // ======Hooks start=======
  const { routes, serverURL } = useConfig();
  const { id }: parems = useParams();
  const { userData } = useContext(UserContext);
  const { sectionData, fetchSectionDetail } = useContext(DataContext);
  const { setStepNav } = useStepNav();
  const history = useHistory();
  const SectorsArray = ['benefitSector', 'paragraphSector'];
  console.log('sectionData', sectionData);
  console.log('userData', userData);
  let custom = 'Custom Modules';

  //Filter Custom Modules
  let Filtered = sectionData
    .filter((el) => el.category === custom)
    .map((section) => section); // sectionTitle.replace(' ', '-')
  console.log('Custom Modules', Filtered);

  //Filter Section Modules
  let sectionModule = 'Section Modules';
  let SectionFiltered = sectionData
    .filter((el) => el.category === sectionModule)
    .map((section) => section); // sectionTitle.replace(' ', '-')
  console.log('Section Module', SectionFiltered);

  // ======Hooks end=======
  const { admin } = routes;
  const apiEndpoint = `${serverURL}/api`;
  console.log('admin', admin, apiEndpoint);

  //======= Methods start=======
  const addAssets = async () => {
    const assetManager = editor?.AssetManager;
    axios
      .get(`${apiEndpoint}/media`)
      .then((response) => {
        const { docs } = response.data;
        docs.forEach(({ url }) => {
          assetManager?.add([
            {
              src: url,
            },
          ]);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const fetchData = () => {
    if (id) {
      // debugger;
      if (userData.role === 'admin' || userData.role === 'superAdmin') {
        axios({
          method: 'get',
          url: `${apiEndpoint}/page-Template/${id}`,
        })
          .then((res) => {
            console.log("admin",res.data)
            const { pageCode,title } = res.data;
            setCurrentPageData(res.data);
            pageTitle = title;
            if (pageCode) {
              editor.loadProjectData(JSON.parse(pageCode));
            }
          })
          .catch((err) => {
            console.log('err', err);
          });
      } else {
        axios({
          method: 'get',
          url: `${apiEndpoint}/pages/${id}`,
        })
          .then((res) => {
            // debugger;
            console.log("response data",res.data)
            const { pageCode ,title } = res.data;
            setCurrentPageData(res.data);
            // setPageTitle(title
            pageTitle = title
            if (pageCode) {
              editor.loadProjectData(JSON.parse(pageCode));
            }
          })
          .catch((err) => {
            console.log('err', err);
          });
      }
    } else {
      editor.loadProjectData({ assets: [], pages: [], styles: [] });
    }
  };
  const loadHistory = (e, pageCurrentCode) => {
    e.stopPropagation();
    setChangeHistory(false); // to stop the history update on load because this action is previous history button
    editor.loadProjectData(JSON.parse(pageCurrentCode));
    goToTop();
  };
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const fetchHistory = () => {
    axios({
      method: 'get',
      url: `${apiEndpoint}/pagehistory?PageId=${id}`,
    })
      .then((res) => {
        console.log('fetching data', res.data.docs);
        const historyfiltered = res.data.docs.filter((el) => el.PageId === id);
        console.log('historyfiltered', historyfiltered);
        setPageHistoryArray(historyfiltered);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
  const dataHandler = () => {
    // debugger;
    if (userData.role === 'admin' || userData.role === 'superAdmin') {
      const updation = {
        currentPageData,
        pageCode: JSON.stringify(editor.getProjectData()),
      };
      axios
        .patch(`${apiEndpoint}/page-Template/${id}`, {
          ...updation,
        })
        .then((res) => {
          console.log('response', res);
          toast.success(res.data.message);
          isSave = true;
          console.log('isSave', isSave);
        })
        .catch((err) => {
          console.log('err', err);
        });
    } else {
      // if (id) {
      axios
        .patch(`${apiEndpoint}/pages/${id}`, {
          pageCode: JSON.stringify(editor.getProjectData()),
        })
        .then((res) => {
          toast.success(res.data.message);
          isSave = true;
          console.log('isSave', isSave);
        })
        .catch((err) => {
          console.log('err', err);
        });
      // }
    }
  };
  const uploadMedia = async (fileItem: String) => {
    const { name, src } = fileItem;
    var file = new File([src], name);
    try {
      // Create the form data for the request
      const formData = new FormData();
      formData.append('file', file);
      let item = {
        keywords: 'Media',
        mediaType: 'Photo',
        description: '',
      };
      formData.append('_payload', JSON.stringify(item));
      // Make the POST request
      await axios.post(apiEndpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // Authorization: `Bearer ${apiKey}`,
        },
      });
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  const pageHistoryHandler = () => {
    setChangeHistory(true);
  };
  const deleteHistory = (e, deleteId) => {
    e.stopPropagation();
    setChangeHistory(false);
    axios
      .delete(`${apiEndpoint}/pagehistory/${deleteId}`)
      .then((res) => {
        // console.log('delete history res ==========', res);
        fetchHistory();
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  const saveHistoy = () => {
    axios
      .post(`${apiEndpoint}/pagehistory`, {
        PageId: id, //page id get from url
        pageHistory: JSON.stringify(editor?.getProjectData()),
      })
      .then((res) => {
        fetchHistory(); // call to get history
        console.log('res', res);
        isChanged = false;
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  };

  //For Publish the page
  const handlePublish = () => {
    const newEndPoint = `${serverURL}`;
    const url = `${newEndPoint}${admin}/publish/${pageTitle}`;
    console.log("publish url",url)
    window.open(url, '_blank');
  };

  // ======= Methods end =======

  const updateHeaderBlock = async () => {
    axios
      .get(`${serverURL}/api/mega-menu`)
      .then((response) => {
        const { docs } = response.data;
        const blockId = 'header';
        const block = editor?.Blocks.get(blockId);
        const headerLinksItem = docs.filter(
          (el: { menu_section: string }) => el.menu_section === blockId
        );
        if (headerLinksItem.length > 0) {
          let headerLinks = headerLinksItem[0];
          const { nav } = headerLinks;
          console.log("nav",nav)
          let linksDiv = '';

        nav.map(el=>{
          console.log("el",el)

        })



          nav.map((navItem: { link: { label: any; url: any; type:any; } }) => {
            const { label, url , type} = navItem.link;

            console.log('navItem', navItem);
            let href='';
            if(type =="custom"){
              href = `https://${url}`;
              console.log('custom href', href);
              return (linksDiv += `<a href="${href}" class="mr-5 hover:text-gray-900" style="font-size: 22px; margin: 0px 20px; color:#ffffff;">${label}</a>`);
            }
            if (type == "page"){
              href =`${serverURL}${admin}/publish/${label}`;
              console.log('Page href', href);
              return (linksDiv += `<a href="${href}" class="mr-5 hover:text-gray-900" style="font-size: 22px; margin: 0px 20px; color:#ffffff;">${label}</a>`);
            }
            
          
            
          });

          let content = `
                    <header id=header_1 class="text-gray-600 body-font flex" style="background-color:#2f3d55; color:#ffffff; height:100px;">
                      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                          <svg id="noun-logo-2121439" xmlns="http://www.w3.org/2000/svg" width="33.021" height="38.052" viewBox="0 0 33.021 38.052">
                            <path id="Path_169897" data-name="Path 169897" d="M152.09,31.953,168.6,41.5V60.459L152.09,70l-16.51-9.545V41.5Zm0,5.417,5.933,3.354,5.933,3.483V57.879l-5.933,3.354-5.933,3.483-5.933-3.483-5.933-3.354V44.206l5.933-3.483Z" transform="translate(-135.58 -31.953)" fill="#50ae81" fill-rule="evenodd"/>
                            <path id="Path_169898" data-name="Path 169898" d="M222.093,119.526l5.159,2.967,5.03,2.967.258.129v12.254l-.258.129-5.03,2.967-5.159,2.967-.129.129-.258-.129-5.159-2.967-5.03-2.967-.258-.129V125.588l.258-.129,5.03-2.967,5.159-2.967.258-.129Zm4.643,3.741-4.772-2.838-9.8,5.675v11.221l9.8,5.675,4.772-2.838,4.9-2.838V126.1Z" transform="translate(-205.453 -112.689)" fill="#50ae81"/>
                          </svg>
                          <span class="ml-3 text-xl" style="color:#ffffff; font-weight:700; font-size:28px;">Logo</span>
                        </a>
                        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        ${linksDiv}
                      </div>
                    </header>`;

          block.set('content', content);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //======== GrapesJs Canvas initialization start here========
  const initializeInstance = () => {
    let blocks = [...sections];
    console.log('blocks', blocks);
    const ExperfyBlocks = (
      editor: GrapesJS.Editor,
      options: GrapesJS.EditorConfig
    ) =>
      Experfy(editor, {
        ...options,
        blocks,
        showPanelsOnLoad: true,
        showGlobalStyles: false,
      });

    const ScrollPlugin = (
      editor: GrapesJS.Editor,
      options: GrapesJS.EditorConfig
    ) =>
      gjsScroll(editor, {
        ...options,
        blocks,
        showPanelsOnLoad: true,
        showGlobalStyles: false,
      });

    editor = GrapesJS.init({
      container: '.editor',
      fromElement: true,
      showDevices: false,
      height: '100%',
      style: `${canvasStyle}`,
      // canvasCss: localStorage.getItem('theme_style_css') || '',
      canvasCss: '.blocks: {display: grid;}',
      plugins: [
        ExperfyBlocks,
        BackgroundPlugin,
        Basics,
        ScrollPlugin,
        StyleFilter,
      ],
      pluginsOpts: {
        ExperfyBlocks: {},
        Basics: {},
        BackgroundPlugin: {},
        ScrollPlugin: {},
        Filtered: {},
        StyleFilter: {},
      },
      layerManager: {
        appendTo: '.layers-container',
        scrollCanvas: true,
      },
      selectorManager: {
        appendTo: '.styles-container',
      },
      styleManager: {
        appendTo: '.styles-container',
        highlightChanged: true,
      },
      deviceManager: {
        devices,
      },
      traitManager: {
        appendTo: '.traits-container',
      },
      blockManager: {
        appendTo: '.blocks',
        blocks: [],
      },
      canvas: {
        styles: ['https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css'],
        scripts: ['https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js'],
      },
      commands: {
        defaults: [
          {
            id: 'preview',
            hidden: false,

            run(editor: { store: () => GrapesJS.Editor }) {
              console.log('clicked');
              // showanimation();
              // editor.runCommand('preview');
              // editor.runCommand('fullscreen');
            },
            // stop() {
            //   editor.stopCommand('fullscreen');
            //   editor.stopCommand('preview');
            // },
          },
          {
            id: 'save-editor',
            hidden: false,
            run(editor: { store: () => GrapesJS.Editor }) {
              console.log('before changed', isChanged);
              console.log('isChanged', isChanged);
              saveHistoy();
              const store = editor.store();
              dataHandler();
            },
          },
          {
            id: 'publish-editor',
            hidden: false,
            run(editor: { store: () => GrapesJS.Editor }) {
              console.log('published called');
              handlePublish();
            },
          },
        ],
      },
    });

    function isObjEmpty(obj) {
      if (obj === undefined) {
        return true;
      }
      let len = Object.keys(obj).length;
      let isEmpty = len === 0;
      if (len === 1) {
        let objValue = Object.values(obj)[0];
        let valueType = typeof objValue;
        let isChanged =
          valueType === 'boolean' ||
          (valueType === 'string' && objValue.length > 0);
        return isEmpty && !isChanged;
      }
      return isEmpty;
    }
    editor.on('component:update', (component) => {
      const { changed } = component;
      const { attributes } = changed;
      if (!isObjEmpty(attributes)) {
        isChanged = true;
      }
    });
    let TextTrait = [
      {
        name: 'text',

        label: 'Title',

        changeProp: 1,
      },

      {
        type: 'select',
        name: 'tagName',
        label: 'HTML Tag',
        ChangeProp: 1,

        options: [
          { id: 'h1', name: 'H1' },
          { id: 'h2', name: 'H2' },
          { id: 'h3', name: 'H3' },
          { id: 'h4', name: 'H4' },
          { id: 'h5', name: 'H5' },
          { id: 'h6', name: 'H6' },
          { id: 'div', name: 'div' },
          { id: 'span', name: 'span' },
          { id: 'p', name: 'p' },
        ],
        changeProp: 1,
      },
    ];
    let ButtonTrait = [
      {
        name: 'text',
        label: 'Button Text',
        changeProp: 1,
      },
      // {
      //   type: 'select',
      //   name: 'class',
      //   label: 'Button Size',
      //   // default: 'small',
      //   options: [
      //     { value: 'btn-extrasmall', name: 'Extra Small' },

      //     { value: 'btn-small', name: 'small' },
      //     { value: 'btn-medium', name: 'Medium' },
      //     { value: 'btn-large', name: 'Large' },
      //     { value: 'btn-extralarge', name: 'Extra Large' },
      //   ],
      // },
      // {
      //   type: 'select',
      //   name: 'class',
      //   label: 'Button Alignment',
      //   // default: 'btn-start',
      //   options: [
      //     { value: 'btn-start', name: 'Left' },
      //     { value: 'btn-center', name: 'Center' },
      //     { value: 'btn-right', name: 'Right' },
      //   ],
      // },
    ];
    editor.DomComponents.addType('text', {
      model: {
        defaults: {
          traits: TextTrait,
        },
        init() {
          const comps = this.components();
          // console.log('Text comps', comps);
          const tChild = comps.length === 1 && comps.models[0];
          const chCnt =
            (tChild && tChild.is('textnode') && tChild.get('content')) || '';
          const text = chCnt || this.get('text');
          this.set('text', text);
          //@ts-ignore
          this.on('change:text', this.__onTextChange);
          //@ts-ignore
          text !== chCnt && this.__onTextChange();
          //@ts-ignore
          this.on('change:attributes:htmltag', this.handleHtmltagChange);
        },
        __onTextChange() {
          this.components(this.get('text'));
        },
        handleHtmltagChange() {
          this.set('tagName', this.getAttributes().htmltag);
        },
      },
    });

    editor.DomComponents.addType('button', {
      isComponent: (el) => el.tagName == 'BUTTON',
      model: {
        defaults: {
          traits: ButtonTrait,
        },
        init() {
          const comps = this.components();

          const tChild = comps.length === 1 && comps.models[0];
          // console.log('Old tChild', tChild);
          const chCnt =
            (tChild && tChild.is('textnode') && tChild.get('content')) || '';
          const text = chCnt || this.get('text');
          this.set('text', text);
          this.on('change:text', this.__onTextChange);
          text !== chCnt && this.__onTextChange();
        },

        __onTextChange() {
          this.components(this.get('text'));
        },
      },
    });

    // // Image  Trait
    editor.DomComponents.addType('image', {
      model: {
        defaults: {
          traits: [
            {
              type: 'myimg',
              label: ' ',
              name: 'myimg',
            },
          ],
        },
      },
    });

    editor.TraitManager.addType('myimg', {
      noLabel: true,
      createInput({}) {
        const toggleModal = () => {
          editor.runCommand('open-assets', {
            target: editor.getSelected(),
          });
        };
        const el = document.createElement('div');
        el.setAttribute('class', 'image-trait-preview');
        el.innerHTML = `

<div style="border:1px dashed #48a3d7; padding:15px 10px; border-radius:5px;text-align:center;" id="chg-img-trait-btn">
<p style="margin-bottom:5px"> <i class="fa fa-upload " style="color:#48a3d7;font-size:30px;"></i></p>
<span style="font-size:13px;">Drop ﬁle here or <span style="color:#48a3d7; font-size:13px;">Browse</span> to <br>
add your attachment</span>
</div> `;
        const inputType = el.querySelector('#chg-img-trait-btn');
        inputType!.addEventListener('click', toggleModal);
        return el;
      },
    });

    editor.DomComponents.addType('btn', {
      model: {
        defaults: {
          traits: [
            {
              type: 'mybtn',
              label: ' ',
              name: 'mybtn',
            },
          ],
        },
      },
    });

    //Add Trait on click
    const toggleBtn = () => {
      const component = editor.getSelected();
      console.log('component Selection Toggle', component);
      //@ts-ignore
      if (component.ccid == 'GuidelineDiv') {
        component.append(`<div sect= "guidelineSector" style=" padding: 0.75rem; margin: 0.75rem;">
   
        <h3 sect= "guidelineSector"  sectid="guideline-bullet" style="height: 35px;border: 2px solid black; display: flex; width: 40px; justify-content: center;align-items: center;margin-right: 10px;border-radius: 80%;">1</h3>
        <h1 sect= "guidelineSector" sectid="bullet-heading" style="text-align:left;">Add Step Title</h1>
      
      <h6 sect= "guidelineSector" sectid="bullet-sub-heading" style="text-align:left;padding: 10px; margin-top: 5px;">Add information in steps in
       order to explain what the user
       should do next
      </h6>
      </div>`);
      }
      //@ts-ignore
      if (component.ccid == 'Departmentdiv') {
        component.append(`
        <div  sect= "departmentSector" style=" padding: 0.75rem; margin: 0.75rem;">
        <img sect= "departmentSector" sectid="image-department" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OC41NzYiIGhlaWdodD0iNzQuODg1IiB2aWV3Qm94PSIwIDAgNzguNTc2IDc0Ljg4NSI+DQogIDxnIGlkPSJaSkUyN0IudGlmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzUuMjExIC0xMzQ2LjU2NikiPg0KICAgIDxnIGlkPSJHcm91cF81NDg1OCIgZGF0YS1uYW1lPSJHcm91cCA1NDg1OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUzNS4yMTEgMTM0Ni41NjYpIj4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzE3MDE4MyIgZGF0YS1uYW1lPSJQYXRoIDE3MDE4MyIgZD0iTS00OTYuMDI4LDEzNDYuNTY2YTIuODQsMi44NCwwLDAsMSwyLjc5NCwxLjc3NWMzLjM0Miw2LjgxNyw2LjcyMSwxMy42MTYsMTAuMDYzLDIwLjQzM2ExLjM4MywxLjM4MywwLDAsMCwxLjIuODg0YzcuNDM1LDEuMDU0LDE0Ljg2NSwyLjE1MSwyMi4zLDMuMjI0LDIuMTQ4LjMxLDMuMywxLjQ0MiwyLjk4NywzLjJhMy44LDMuOCwwLDAsMS0xLjA2MiwxLjg5MnEtOC4xNTEsOC4wMzgtMTYuMzgsMTZhMS4yNDIsMS4yNDIsMCwwLDAtLjQxOSwxLjI3MmMxLjMyNCw3LjU5NSwyLjYwOCwxNS4yLDMuOTEzLDIyLjhhMi43MTEsMi43MTEsMCwwLDEtMS4xLDIuODg2LDIuNzUzLDIuNzUzLDAsMCwxLTMuMDkyLjA5NXEtMTAuMTUzLTUuMzQ5LTIwLjMxMS0xMC42OTFhMS40LDEuNCwwLDAsMC0xLjUtLjAyMXEtMTAuMDY3LDUuMzI5LTIwLjE1OCwxMC42MTJhMy4wODQsMy4wODQsMCwwLDEtMi42NDIuMzUyLDIuNzE3LDIuNzE3LDAsMCwxLTEuNzU5LTMuMXExLjctMTAuMDQxLDMuNDI4LTIwLjA3NmMuMTYtLjkzNi4yNjMtMS44ODUuNDg4LTIuOGExLjI0NCwxLjI0NCwwLDAsMC0uNDI4LTEuMzVjLTUuMzU1LTUuMTkzLTEwLjY4My0xMC40MTQtMTYuMDQ0LTE1LjYtMS4wMTMtLjk4LTEuOC0yLTEuMzExLTMuNDc4LjUtMS41MywxLjgtMS44MiwzLjIwOS0yLjAyLDcuMzUtMS4wNCwxNC42OTMtMi4xMzYsMjIuMDQyLTMuMTgzYTEuMzIzLDEuMzIzLDAsMCwwLDEuMTQxLS44NDRjMy4zNTgtNi44NDEsNi43NDYtMTMuNjY4LDEwLjEtMjAuNTFBMi43NDcsMi43NDcsMCwwLDEtNDk2LjAyOCwxMzQ2LjU2NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzNS4yMTEgLTEzNDYuNTY2KSIgZmlsbD0iIzE1OTU3NiIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo='/>
      
           <h1 sect= "departmentSector" sectid="icon-department-heading" style="text-align:center;margin-top: 1.25rem;margin-bottom: 1.25rem;">Department 1</h1>
           <h6 sect= "departmentSector" sectid="icon-department-sub-heading" style="  text-align:left;">Lorem ipsum dolor sit amet. Est
              porro distinctio eum eius odit ea
              facere consequuntur.
           </h6>
        </div>
`);
      }
      //@ts-ignore
      if (component.attributes?.type == 'testimonial') {
        component.append(`
        <div class="swiper-slide swiper-slide-next" role="group"   style="margin: 1.5rem">
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
`);
      }

      // component.addTrait(
      //   {
      //     name: 'mysection',
      //     label: ' ',
      //     type: 'mysection',
      //     changeProp: 1,
      //   },
      //   { at: 0 }
      // );
    };
    //Close Trait on click
    const CloseTrait = () => {
      const component = editor.getSelected();
      component.removeTrait('mysection') && component.getChildAt(0).remove();
    };
    editor.TraitManager.addType('mysection', {
      noLabel: true,
      createInput({}) {
        const el = document.createElement('div');
        el.setAttribute('class', 'section-trait-preview');
        el.innerHTML = `

    <label style="color:#222;font-weight:400;margin-bottom:5px">Item</label>
    <div style=" border: 1px solid #CED4DA; borderRadius: 0.25rem;"}}>
      <div style="display:flex">
        <input id="first-id" type="text" placeholder="Guideline Text" style=" display:block;  padding:0.375rem 0.75rem;fontSize:1rem; lineHeight:1.5; border:1px solid #CED4DA; borderRadius:0.25rem 0px 0px 0px; "/>
      <button type="button" style="backgroundColor:#fff;borderRadius:0px 0.25rem 0px 0px; border:1px solid #CED4DA;" id="close-btn-trait-btn">X</button>
      </div>
      <div style="padding:15px 10px;">
      <label style="color:#222;font-weight:400;margin-bottom:5px">Number</label>
      <input type="text" placeholder="Guidline Step" style=" display:block; padding:0.375rem 0.75rem;fontSize:1rem;lineHeight:1.5;border:1px solid #CED4DA;borderRadius:0.25rem; "/>
      <br />
      <label style="color:#222;font-weight:400;margin-bottom:5px">Description Text</label>
      <textarea  rows="4" placeholder="Text" style="display:block;padding:0.375rem 0.75rem;fontSize:1rem;lineHeight:1.5;border:1px solid #CED4DA;borderRadius:0.25rem;"></textarea>
      </div>
    </div>
 
 
 `;
        const inputType = el.querySelector('#close-btn-trait-btn');
        inputType!.addEventListener('click', CloseTrait);
        return el;
      },

      onUpdate({ elInput, component }) {
        const wrapperCmp = editor.DomComponents.getWrapper();
        let target = `.guidline-option`;

        editor.select(wrapperCmp.find(target)[0]);
      },
    });

    editor.TraitManager.addType('mybtn', {
      noLabel: true,
      createInput({}) {
        const el = document.createElement('div');
        el.innerHTML = `<button type="submit"  class="btn btn-primary btn-md"  id="chg-btn-trait-btn">Add Step</button>`;
        const inputType = el.querySelector('#chg-btn-trait-btn');
        inputType!.addEventListener('click', toggleBtn);
        return el;
      },
    });

    // let opts="Swiper"
    /* eslint-disable no-undef */
    const defaultType = editor.DomComponents.getType('default');
    const defaultView = defaultType.view;
    editor.DomComponents.addType('testimonial', {
      model: {
        defaults: {
          script: function () {
            // const dynamicProgress = "{[ dynamicProgress ]}";
            // const progressType = "{[ progressType ]}";

            const initLib = function () {
              //@ts-ignore
              var swiper = new Swiper('.mySwiper', {
                spaceBetween: 30,
                centeredSlides: true,

                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              });

              // const swiper = new Swiper(".mySwiper"
              // , {
              //   // spaceBetween: 30,
              //   // centeredSlides: true,
              //   // autoplay: {
              //   //   delay: 2500,
              //   //   disableOnInteraction: false,
              //   // },
              //   // // pagination: {
              //   // //   el: ".swiper-pagination",
              //   // //   clickable: true,
              //   // //   // dynamicBullets: !!dynamicProgress,
              //   // //   // type: progr essType,
              //   // // },
              //   // navigation: {
              //   //   nextEl: ".swiper-button-next",
              //   //   prevEl: ".swiper-button-prev",
              //   // },
              // });
              // console.log('swiper :>> ', swiper);
            };
            initLib();

            //  if (typeof Swiper == "undefined") {
            //           const script = document.createElement("script");
            //           script.onload = initLib;
            //           script.src = "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js";
            //           document.body.appendChild(script);
            //         } else {
            //           initLib();
            //         }

            // const initLib = function () {
            //   const swiper = new Swiper(".mySwiper", {
            //     spaceBetween: 30,
            //     centeredSlides: true,
            //     autoplay: {
            //       delay: 2500,
            //       disableOnInteraction: false,
            //     },
            //     // pagination: {
            //     //   el: ".swiper-pagination",
            //     //   clickable: true,
            //     //   // dynamicBullets: !!dynamicProgress,
            //     //   // type: progressType,
            //     // },
            //     navigation: {
            //       nextEl: ".swiper-button-next",
            //       prevEl: ".swiper-button-prev",
            //     },
            //   });
            //   console.log("swiper :>> ", swiper);
            // };
            // initLib();

            // if (typeof Swiper == "undefined") {
            //   const script = document.createElement("script");
            //   script.onload = initLib;
            //   script.src = "https://unpkg.com/swiper@7/swiper-bundle.min.js";
            //   document.body.appendChild(script);
            // } else {
            //   initLib();
            // }
          },

          traits: [
            {
              type: 'mybtn',
              label: ' ',
              name: 'mybtn',
            },
          ],
        },
      },
      isComponent: (el) => {
        let cond1 = el?.className !== undefined;
        let cond2 = typeof el?.className?.baseVal !== 'string';

        if (cond1 && cond2) {
          if (el?.className?.includes('swiper-container')) {
            return {
              type: 'testimonial',
            };
          }
        }
      },
      // view: defaultView.extend({
      //   init({ model }) {
      //     this.listenTo(model, "change:dynamicProgress", this.updateScript);
      //     this.listenTo(model, "change:progressType", this.updateScript);
      //   },
      // }),
    });

    //Guideline Div Trait
    editor.DomComponents.addType('testimonialadd', {
      model: {
        defaults: {
          traits: [
            // {
            //   name: 'mysection',
            //   label: ' ',
            //   type: 'mysection',
            //   changeProp: 1,
            // },
            {
              type: 'mybtn',
              label: ' ',
              name: 'mybtn',
            },
          ],
        },
      },
    });

    editor.DomComponents.addType('GuidelineDiv', {
      model: {
        defaults: {
          traits: [
            // {
            //   name: 'mysection',
            //   label: ' ',
            //   type: 'mysection',
            //   changeProp: 1,
            // },
            {
              type: 'mybtn',
              label: ' ',
              name: 'mybtn',
            },
          ],
        },
      },
    });

    // Department Div Trait
    editor.DomComponents.addType('Departmentdiv', {
      model: {
        defaults: {
          traits: [
            // {
            //   name: 'mysection',
            //   label: ' ',
            //   type: 'mysection',
            //   changeProp: 1,
            // },
            {
              type: 'mybtn',
              label: ' ',
              name: 'mybtn',
            },
          ],
        },
      },
    });

    //  Div Trait
    editor.DomComponents.addType('Departmentdiv', {
      model: {
        defaults: {
          traits: [
            // {
            //   name: 'mysection',
            //   label: ' ',
            //   type: 'mysection',
            //   changeProp: 1,
            // },
            {
              type: 'mybtn',
              label: ' ',
              name: 'mybtn',
            },
          ],
        },
      },
    });

    //@ts-ignore
    editor.on('style:property:update', (component) => {
      isChanged = true;
    });

    editor.on('load', () => {
      let styleFound = [];
      Filtered.forEach((element) => {
        console.log('Filtered element', element);
        const {
          category,
          id,
          sectionCode,
          sectionTitle,
          media,
          sectionHtml,
          sectionCss,
        } = element;
        console.log('element', element);

        editor.BlockManager.add(sectionTitle.replace(' ', '-'), {
          label: sectionTitle,
          category,
          media,
          content: sectionHtml,
        });
        const { styles } = JSON.parse(sectionCode);
        styleFound = [...styleFound, ...styles];
      });

      if (SectionFiltered.length > 0) {
        let sectionId = '';

        SectionFiltered.forEach((element) => {
          const {
            category,
            id,
            sectionCode,
            sectionTitle,
            media,
            sectionHtml,
            sectionCss,
          } = element;
          //Remove Block that is not updated
          //@ts-ignore
          editor.BlockManager.remove(sectionTitle);

          //Then Add Block that is updated
          editor.BlockManager.add(sectionTitle.replace(' ', '-'), {
            label: sectionTitle,
            category,
            media: mediaSvg[sectionTitle.replace('-', '_')],
            content: sectionHtml,
          });
          const { styles } = JSON.parse(sectionCode);
          console.log('section styles', styles);

          styleFound = [...styleFound, ...styles];

          sectionId = sectionTitle;
        });
      }

      editor.loadProjectData({
        ...Object.assign(
          {},
          { ...editor.getProjectData() },
          {
            styles:
              [...userData.defaultStyle.filteredStyles, ...styleFound] ?? null,
          }
        ),
      });
    });
    editor.on('asset:add', (component) => {
      if (component.attributes.src.includes(serverURL)) {
        return;
      }
      const { src, width } = component.attributes;
      if (width > 0) {
        // binary file handling
        fetch(src).then((response) => {
          response.blob().then((fileBlob) => {
            let file = new File([fileBlob], component.attributes.name);
            //@ts-ignore
            uploadMedia({ src: file, name: component.attributes.name });
          });
        });
      } else {
        // url file handling
        let arr = src.split('/');
        let filename = arr[arr.length - 1];
        fetch(src).then((response) => {
          response.blob().then((fileBlob) => {
            let file = new File([fileBlob], filename);
            //@ts-ignore
            uploadMedia({ src: file, name: filename });
          });
        });
      }
    });

    editor.on('component:selected', (component) => {
      //Styles from theme style
      userData?.defaultStyle?.filteredStyles?.forEach((el) => {
        const { selectors, style } = el;

        let element = el?.state ? `${selectors}:${el.state}` : `${selectors}`;

        editor.CssComposer.setRule(element, { ...style });
      });

      //For Section Sector and Style
      if (component) {
        //single sector
        let sectid = component.attributes?.attributes?.sectid;
        let sectId = component.attributes.attributes.sect;
        let sectors = editor.StyleManager.getSectors();
        sectors.reset();
        sectors.add(getSectors(sectId));
        for (let i = 0; i < sectors.length; i++) {
          if (sectid.includes(sectors.models[i].get('id'))) {
            sectors.models[i].setOpen(true);
          } else {
            sectors.models[i].setOpen(false);
          }
        }
      }

      if (component.get('type') == 'text') {
        editor?.runCommand('core:open-traits');
      }
      if (component.get('type') == 'button') {
        editor?.runCommand('core:open-traits');
      }
      if (component.get('type') == 'image') {
        editor?.runCommand('core:open-traits');
      }
      if (component.get('type') == 'GuidelineDiv') {
        editor?.runCommand('core:open-traits');
      }
      if (component.get('type') == 'Departmentdiv') {
        editor?.runCommand('core:open-traits');
      }
    });

    //This is for all section templates Style Manager

    editor.on(`block:drag:stop`, (component, block) => {
      console.log('drag stop', component);
      // console.log("onload drop",editor.StyleManager.getBuiltInAll())

      let { data, found, filtering } = fetchSectionDetail(block.id);
      // console.log('found', found, filtering);
      // let ccid = component.ccid.split('-')[0];
      // console.log(' ccid', ccid);
      if (component && found) {
        const { sectionCode, category, sectionHtml } = filtering;
        let content = JSON.parse(sectionCode);

        const sectorId =
          content.pages[0].frames[0].component.components[0].attributes.id;
        console.log('sectorIsd', sectorId);
        const blocksector = editor.StyleManager.getSectors();
        // blocksector.reset();
        blocksector.add(getSectors(sectorId));
      }
      if (!found) {
        let sectId = component.attributes.attributes.sect;
        const sectors = editor.StyleManager.getSectors();
        sectors.reset();
        sectors.add(getSectors(sectId));

        const wrapperCmp = editor.DomComponents.getWrapper();

        editor.select(wrapperCmp.find(`#${component.ccid}`)[0]);
      }
    });

    //@ts-ignore

    // @ts-ignore
    // editor.on('style:sector:update', (props) => {

    //   !isUpdating &&
    //     setTimeout(() => {
    //       const sectors = editor.StyleManager.getSectors();
    //       var selectedBlock = editor.getSelected();
    //       isUpdating = true;
    //       for (let i = 0; i < sectors.length; i++) {
    //         const modelId = sectors.models[i].get('id');

    //         if (modelId == props.id) {
    //           let isOpen = sectors.models[i].isOpen();

    //           if (isOpen) {
    //             // const wrapperCmp = editor.DomComponents.getWrapper();

    //             // editor.select(wrapperCmp.find(`.${props.id}`)[0]);
    //           }
    //         } else {
    //           sectors.models[i].setOpen(false);
    //         }
    //       }

    //       setTimeout(() => {
    //         isUpdating = false;
    //       }, 300);
    //     }, 100);
    // });
    // @ts-ignore
    // editor.on('style:target', (component) => {
    //   console.log('style sector called', component);
    //   const sectors = editor.StyleManager.getSectors();

    //   if (!component) return;

    //   !isUpdating &&
    //     setTimeout(() => {
    //       isUpdating = true;

    //       const selectedSector = component
    //         .getSelectorsString()
    //         .replace('.', '');

    //       for (let i = 0; i < sectors.length; i++) {
    //        ;
    //         if (selectedSector.includes(sectors.models[i].get('id'))) {
    //           console.log('mateched successfully');
    //           sectors.models[i].setOpen(true);
    //         } else {
    //           sectors.models[i].setOpen(false);
    //         }
    //       }

    //       setTimeout(() => {
    //         isUpdating = false;
    //       }, 300);
    //     }, 500);
    // });
    localStorage.removeItem('gjsProject');
    updateHeaderBlock();
    setEditorState(editor);
    addAssets();
  };
  // ========GrapesJS editor end here=======

  // =========Lifecycle methods start here=========
  useEffect(() => {
    setStepNav([
      {
        label: 'Page Builder',
        url: '/collections/page-builder',
      },
    ]);
  }, [setStepNav]);

  useEffect(() => {
    if (userData !== null) {
      initializeInstance();
      fetchData();
      fetchHistory();
    }
  }, []);

  // =======Lifecycle methods end here=========
  return (
    <div className="main__content">
      <Eyebrow />
      <div className="panel__top"></div>
      <div className="editor-row">
        <div className="panel__basic-actions"></div>
        <div className="panel__left">
          <div className="back__panel panel-header">
            <Link className="panel-header__link" to={`${admin}/`}>
              <ArrowBackIosNewRoundedIcon />
            </Link>
            <span>Page Builder</span>
            <span className="panel-header__menu">
              <AppsRoundedIcon />
            </span>
          </div>
          <div className="panel-body has-bottom-controls">
            <div className="panel-body__inner">
              <div className="panel-body__content">
                <div className="panel__switcher"></div>
                <SidebarBottom
                  editor={editor}
                  consumer="pageBuilder"
                  pageHistoryArray={pageHistoryArray}
                  deleteHistory={deleteHistory}
                  loadHistory={loadHistory}
                  hasBottomToolbar={true}
                />
                <div className="styles-container"></div>
                <div className="traits-container"></div>
                <div className="layers-container"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="editor-canvas">
          <div className="editor"></div>
        </div>
      </div>
    </div>
  );
};
export default PageBuilder;
