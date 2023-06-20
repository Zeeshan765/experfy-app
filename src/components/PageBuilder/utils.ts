export const sections = [
  'header',
  'footer',
  'image-banner',
  'image-gallery',
  'image-and-text',
  'paragraph',
  'practice-areas',
  'benefits',
  // 'departments',
  'guidelines',
  'location',
  'metrics-numbers',
  'talent-cloud-candidates',
  'testimonial',
  'video',
  'search',
  'divider',
  'spacer',
  'icon',
  'page-title',
  'nav-menu',
  'icon-list',
  'logo',
  'department',
  'image',
  'button',
  'a',
  'form',
  'text',
  'paragraph-1',
  'photo-gallery',
  'column1',
   'column2', 
   'column3', 
   'column3-7',
  // 'swiper',
];
export const canvasStyle = `
#sidebar-bottom-buttons {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 500px;
  width: 300px;
  margin: 0;
  padding: 0;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  background: #fff;
  border-top: 1px solid #dbdbdb;
  border-right: 2px solid #dfe0e1;
}
#sidebar-bottom-buttons button, #sidebar-bottom-buttons a {
  float: right;
  height: 100%;
  width: 33.33%;
  border-left: 1px solid #dfe0e1;
  border-radius: 0;
  color: #888;
  font-size: 15px;
  padding: 8px 0;
}
#sidebar-bottom-buttons button:hover, #sidebar-bottom-buttons a:hover {
  background: #16b8ec;
  color: #fff;
}
#sidebar-bottom-buttons button:last-child, #sidebar-bottom-buttons a:last-child {
  border-left: none;
}
#sidebar-bottom-buttons button.waiting {
  background: #16b8ec;
  color: #fff !important;
}
#sidebar-bottom-buttons button.waiting i.fa {
  display: none;
}
#sidebar-bottom-buttons a#go-back:hover {
  background: #dc3545;
}
#sidebar-bottom-device {
display: flex;
justify-content: center;
gap: 20px;
gridRow: 2,
backgroundColor: '#3a4152',
display: 'flex',
justifyContent: 'center',
gap: '5px',
alignItems: 'center',
height: '100px',
}
.blocks {
  display: grid !important;
}
`;

export const devices = [
  {
    name: 'Desktop',
    width: '',
    height: '',
    widthMedia: '',
    priority: 0,
    id: 'desktop',
  },
  {
    name: 'Tablet',
    width: '768px',
    height: '',
    widthMedia: '992px',
    priority: 992,
    id: 'tablet',
  },
  // {
  //   name: 'Mobile landscape',
  //   width: '568px',
  //   height: '',
  //   widthMedia: '768px',
  //   priority: 768,
  //   id: 'mobileLandscape',
  // },
  {
    name: 'Mobile portrait',
    width: '360px',
    height: '',
    widthMedia: '768px',
    priority: 768,
    id: 'mobile', // mobilePortrait
  },
];

export const navStep = [
  {
    label: 'Page Builder',
    url: '/collections/page-builder',
  },
];

export const clearLocalStorage = () => {
  localStorage.removeItem('page_code');
};


export const mediaSvg = {
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
