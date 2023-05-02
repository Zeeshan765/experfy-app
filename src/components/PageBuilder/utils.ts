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
