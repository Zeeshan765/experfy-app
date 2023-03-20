export const getStyles = (parentClass: any) => {
  return `<style>
  ${parentClass.map(
    (el) => `${el} .left {
    text-align: left;
  }
  ${el} .center {
   text-align: center;
  }
  ${el} .right {
 text-align: right;
  }`
  )}
  </style>`;
};

export const getButtonALignment = (parentClass: any) => {
  return `<style>
  
  ${parentClass} .btn-start {
    text-align: left;
  }
  ${parentClass} .btn-center {
   text-align: center;
  }
  ${parentClass} .btn-right{
 text-align: right;
  }

  </style>`;
};

export const getbuttonStyles = (parentClass: any) => {
  return parentClass.map((classname) => {
    console.log('classname', classname);
    return `<style>
  

    ${classname}:focus{
      border:none;
      outline:none ;
    }


    ${classname} .btn-extrasmall {
      padding: 10px 20px;
   }
    ${classname} .btn-small {
       padding: 12px 24px;
    }
    ${classname} .btn-medium {
      padding: 15px 30px;
   }
   ${classname} .btn-large {
    padding: 20px 40px;
 }
 ${classname} .btn-extralarge {
  padding: 25px 50px;
}
     </style>`;
  });
};

export const benefitsStyle = `<style>

.benefits-main-wrapper{

}
.benefits-container{
width: 70%;
margin: auto;
text-align: center; 
}

.benefits-title-div{
  text-align: center;
}
.benefits-title-div h1{
 
  margin-bottom: 0.5rem; 

}

.benefits-title-div h2{

}

.benefits-title-div h6 {
  text-align: center;
}

.benefits-option-section{
display: flex; 
margin-left: auto;
margin-right: auto; 
align-items: center; 
}

.benefits-option-section .benefit-holder{
  padding: 0.75rem; 
  margin: 0.75rem; 
}

  .benefits-option-section .benefit-holder h1{
 
    text-align:center;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem; 
    }

    .benefits-option-section .benefit-holder h6{
      text-align:left;
     
    }





</style>`;

export const paragraphStyle = `
<style> 
.main-paragraph-wrapper .paragraph-container{
  width: 90%;
  padding: 6rem 3.25rem;
  margin-left: auto;
  margin-right: auto; 
  }

  .paragraph-container h1{
  
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .paragraph-container h6{
    margin-left: auto;
    margin-right: auto; 
 
  }


</style>`;

export const ImageText = `
<style>
.main_container {
  display: flex;
  margin: 0 auto;
  padding: 4rem 4rem;
  align-items: center;
}

.main_container .content-section{
  width: 50%;
  margin:20px 20px;
}



.main_container .content-section .sub_heading {
  font-size: 22px;
  font-weight: 400;
  line-height: 1.3;
  margin-bottom: 5px;
}

.main_container .image-text-image-section{
  width: 50%;
  margin:20px 20px;
}

.main_container .image-text-image-section .img_container {
  width: 100%;
  height: 100%;
  padding: 30px 30px;
}

.main_container .image-text-image-section .img_container img {
  width: 100%;
  height: 100%;
  object-fit: center;
}

.main_container .image-text-image-section .img_container .figure_caption {
  padding: 20px 30px;
  background-color: #f8f8fa;
  border-radius: 0px 0px 5px 5px;
}


</style>


`;

export const talentCloud = `
<style>
.talent-cloud-main-wrapper{
  padding:50px; 
  background-color:#399918;
  padding-left: 1rem;
  padding-right: 1rem; 
  margin-left: auto;
  margin-right: auto; 
}

.talent-cloud-main-wrapper .talent-cloud-container{
  display: flex;
  align-items:center; 
  margin:50px 150px;
  
}

.talent-cloud-main-wrapper .talent-cloud-container .img-holder{
padding-left: 1rem;
padding-right: 1rem; 
margin-right: auto; 
margin-left: auto; 
width: 65%; 
}
.talent-cloud-main-wrapper .talent-cloud-container .img-holder img{
width : 100%;
height: 100%;
object-fit: cover;
}


.talent-cloud-main-wrapper .talent-cloud-container .content-div h1{

text-align:left;

margin-bottom:10px;
}

.talent-cloud-main-wrapper .talent-cloud-container .content-div h6{

text-align:left;

margin-top:10px;

}




</style>

`;
export const video = `
<style>
.video-main-wrapper .video-container-main-div{
  padding: 6rem;
  margin-left: auto;
  margin-right: auto; 
  text-align: center; 
  width: 80%;
  margin: auto;
}


.video-main-wrapper .video-container-main-div .video-header{
  text-align: center;
}

.video-main-wrapper .video-container-main-div .video-header h1{

  margin-bottom: 0.5rem; 
      
}

.video-main-wrapper .video-container-main-div .video-header h6{

  padding: 0px 30px;
}

.video-main-wrapper .video-container-main-div .video-div{
  position: relative;
  width:100%;
  padding-top: 56.25%;  

}
.video-main-wrapper .video-container-main-div .video-div video{
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
 bottom: 0;
}



</style>


`;

export const ImageBanner = `
<style>
.main-banner-container{
  background-image: url(https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/44/5056179b42b174f.jpg);
  padding:40px 40px;
}

.bannar-content h1 {
  text-align: center;
  
}
 .bannar-content h6 {
  text-align: left;
 
}


.bannar-content  .h6{
 
  text-align:left;

  margin: 0px auto 20px;
}


</style>

`;
export const guidelines = `
<style>
.guideline-main-wrapper .guideline-container{
  width: 70%;
  margin: auto;
  padding: 6rem 
margin-left: auto;
margin-right: auto; 
text-align: center; 
}

.guideline-main-wrapper .guideline-container .guideline-header-section{
  text-align: center; 
}

.guideline-main-wrapper .guideline-container .guideline-header-section h1{

  margin-bottom: 0.5rem; 

}

.guideline-main-wrapper .guideline-container .guideline-header-section h2{
 
}

.guideline-main-wrapper .guideline-container .guidline-option{
  display: flex; 
  padding: 3rem 1.25rem;
  margin-left: auto;
  margin-right: auto; 
  align-items: center; 
}
.guideline-main-wrapper .guideline-container .guidline-option .guideline{
  padding: 0.75rem; 
  margin: 0.75rem; 
}
.guideline-main-wrapper .guideline-container .guidline-option .guideline .heading{
display: flex;
}

.guideline-main-wrapper .guideline-container .guidline-option .guideline .heading h3{
  height: 35px;
  display: flex;
  width: 40px;
  justify-content: center;
  align-items: center;
  background-color: #399918;
  margin-right: 10px;
  border-radius: 80%;
  }

  .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading h1{
   
    text-align:left;
   
  }

  .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading h6{
    text-align:left; 
    padding: 10px;
    margin-top: 5px;
  }


</style>
`;
export const numbermetric = `
<style>

.number-container-div {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.number-container-div .title-div {
  text-align: center;
  color: #4b5563;
}

.number-container-div h1 {
  margin-bottom: 0.5rem;
}
.number-container-div h2 {
}

.number-percentagges-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 1.25rem;
  margin-left: auto;
  margin-right: auto;
}

.number-percentagges-section .percentage-info {
  border: 3px solid #196932;
  border-radius: 100%;
  width: 200px;
  height: 200px;
  padding: 0.75rem; 
  margin: 0.75rem; 
}

.number-percentagges-section .percentage-info  h1{
  text-align:center;
  margin-top: 1.25rem;
}

.number-percentagges-section .percentage-info  h1 span{
}

.number-percentagges-section .percentage-info h6{
  text-align: center;
}




</style>
`;
export const headerstyle = `
<style>

.header-container {
  margin-left: auto;
  margin-right: auto;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2f3d55;
}

@media (min-width: 768px) {
  .logo-link {
    margin-bottom: 0rem;
  }
}

.logo-link {
  display: flex;
  align-items: center;
}

.header-logo-text {
  color: #ffffff;
  font-weight: 700;
  font-size: 28px;
  margin-left: 0.75rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
}

@media (min-width: 768px) {
  .header-navabr {
    margin-left: 0rem;
  }
}
.header-navabr a {

  margin: 0px 20px;

}

.header-navabr a:hover {

}

</style>

`;
export const locationStyle = `
<style>

.location-container{
  display: flex; 
  padding: 3rem 3rem; 
}

.address-content-main-holder{
  width:50%;
  padding: 40px 30px;
}
.address-content-main-holder h1{

  margin:0px;
}

.address-content-main-holder h2{
 
  line-height: 1.3;
}

.address-content-div{
  display: flex; 
  align-items: center;
}

.address-content-div .address-text-div h6{

  padding-left: 20px;
  margin:10px 0px
}
.address-map-div{
  width:50%;
  padding: 0px 20px;
}

</style>


`;
export const testimonialStyle = `
<style>
testimonial-container{
  padding-left: 1.25rem;
  padding-right: 1.25rem; 
  padding-top: 6rem;
  padding-bottom: 6rem; 
  margin-left: auto;
  margin-right: auto; 
}
.testimonial-container .section-title{
  font-size:32px;
  text-align:center;
  margin-bottom: 3rem;  
  font-weight: 500; 
}

.testimonial-container .slider-content-main-div{
  width:85%; 
  margin: auto;
  display: flex;
  padding: 30px 30px;
  justify-content: center;
  background-color: #fff;
}

.img-container{
  height: 170px;
  width: 170px;
}
.img-container img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.slider-content-main-div .left-container{
  text-align: center;
  margin: 0px 20px;
}

.slider-content-main-div .left-container h2{
  font-size:18px;
  color:#1c628c;
  font-weight: 500; 
}

.slider-content-main-div .left-container .user-details{
  font-size: 14px;
  margin: 10px;
  line-height: 1.25rem; 
}

.slider-content-main-div .divider{
  border-right: 1px solid #ccc;
}
.slider-content-main-div .left-container .user-details .user-detail-label{
  font-weight: 600;
}


.slider-content-main-div .slider-text-div{
  align-self: center;
  align-content: center; 
  text-align: center;
  margin: 0px 20px;
}

.slider-text-div h6{
  text-align:center;
  font-size: 16px;
  
}


</style>

`;
export const practiceStyle = `
<style>


 .section-title{

 font-family: ProximaNova,sans-serif;
 line-height: 1.2;
 
 text-align: center;
}
 .practice-area-container{
 display: flex;
 flex-wrap: wrap;
 row-gap: 20px;
 padding: 0px 50px;
 text-align: center;
}
 .practice-area-container .box-icon-text-holder{
  height:130px;
  width:130px;
  margin: 12px 6px;
  padding: 15px;
  text-align: center;
  border-radius: 0.25rem;
  border: 1px solid #D1DBE3;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.box-icon-text-holder .box-icon-div{
  justify-content: center;
  display:flex;
  align-items:center;
  width:45px;
  height:45px;
  margin:auto
}

.practice-area-container .gjs-selected{
  background-color: #82B891 !important;
}

</style>

`;
export const footerStyle = `
<style>

.main-footer-wrapper {
  background-color:#40526e;
  color:#ffffff;
 }

 .footer-container{
  padding: 4.5rem 1.25rem; 
}

.footer-grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 20px;
}

.footer-titles{
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  padding: 10px 10px;
  border-width: 2px;
  margin: 0px;
 }

.address-list{
  list-style: none;
  padding: 0px 10px;
}

.address-list .title{
 font-size: 22px;
 color: #ffffff;
 font-weight: 400;
 line-height: 1.5;
 margin-bottom: 30px;
}

.address-list .address{
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 0px;
}

 .address-list .address .bold{
 font-weight: 600;
 }

.footer-images-section .images-holder{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
 }

 .footer-images-section .images-holder img{
  outline: 2px solid #3b97e3 !important;
  outline-offset: -2px;
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin: 10px;
 }

 .btn-footer{
  background-color:#4db081;
  color:#ffffff;
  padding:12px 20px;
  border-radius:3px;
  font-size:16px;
  font-weight:500;
  margin:20px auto;
  display:flex;
 }

 .margin-class{
  margin: 0px 10px;
 }

 .site-credit-footer{
  background-color:#000000;
  padding:20px 40px;
 }

 .site-credit-footer-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
 
 }

 .site-credit-footer-container .credit-text{
  font-size: 16px;
  color: #ffffff;
  padding: 10px 10px;
  border-width: 2px;
  font-weight: 400;
  line-height: 1.5;
  margin: 10px 0px;
 }
 .site-credit-footer-container ul{
  display: flex;
 }

 .site-credit-footer-container ul li{
  margin: 0px 15px;
 }
 .site-credit-footer-container ul li:first-child{
 list-style: none;
}
  
}
 .site-credit-footer-container ul a{
   padding: 10px 0px;
  border-width: 2px;
  font-weight: 400;
  line-height: 1.5;
  text-transform: uppercase;
 }

</style>

`;

export const SearchStyle = `
<style>
.search-section-main-holder{
  width: 80%;
  margin:20px auto;
 }
 .search-bar-div{
   padding: 30px 50px;
   border-radius: 5px;
   background-color: #78C493;
 }
 .search-box{
   width: 70%;
   margin: auto;
   display: flex;
   position: relative;
 }
 .search-input{
   width: 100%;
   border: none;
   outline: none;
   font-size: 16px;
   padding: 15px 10px;
   border-radius: 5px 0px 0px 5px;
   background-color: #FFFFFF;
 }
 .search-button{
  outline: none;
  color :#ffffff;
  cursor: pointer;
  font-size: 16px;
  padding: 15px 20px;
  text-align: center;
  border-radius:0px 5px 5px 0px;
  border:1px solid #48A3D7;
  background-color: #48A3D7;
 }
</style>


`;

export const LogoStyle = `

<style>
.page-builder-logo {
  text-align: center;
}
.page-builder-logo img{
 height: auto;
 max-width: 100%;
 border: none;
 border-radius: 0;
 box-shadow: none;
}
.page-builder-site-title{
  font-size: 25px;
  color: #48A3D7;
  font-weight: 500;
  text-transform: capitalize;
}

</style>

`;

export const IconListStyle = `

<style>

.page-builder-listing-section .page-builder-list-items{
  padding: 0;
}
.page-builder-listing-section .page-builder-list-items .page-builder-list-text {
  font-family: var(--e-global-typography-text-font-family ), Sans-serif;
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: underline;
  line-height: 3.8em;
  word-spacing: 2.4em;
  padding-left: 5px;
  color: #3B97E3;
}

</style>


`;

export const IconStyle = `
<style>
.icon-wrapper{
  text-align: center;
}

</style>


`;
export const pageTitle = `
<style>
.page-title-wrapper .page-builder-heading-title{
  font-size: 25px;
  color: #48A3D7;
}

</style>
`;
export const Navmenu = `
<style>
.page-builder-menu--layout-horizontal .page-builder-menu {
  display: flex;
  flex-wrap: wrap;
}
.page-builder-menu, .page-builder-menu li page-builder-menu ul {
  // display: block;
  list-style: none;
  margin: 0;
  padding: 0;
  line-height: normal;
}
.page-builder-item{
  color: #222;
  font-size: 29px;
  font-weight: 700;
  padding: 13px 20px;
  line-height: normal;
}



</style>
`;

export const SectionStyle = `<style>

   .page-builder-divider{
    padding: 15px 0px;
  }
  .page-builder-divider .page-builder-divider-seprator{
    width: 100%;
    border-bottom: 1px solid #000 !important;
  }
  .page-builder-spacer .page-builder-spacer-inner {
    height: 50px;
  }


  /* /////////////////////////////////////////////
  ///////////  Theme Style //////////
  /////////////////////////////////////////// */


  .header-block{
    background-color: #40526E;
    color: #FFFFFF;
    padding: 20px 20px;
    margin: 0px;
  }
  .headding-holder-block{
    width: 80%;
    display: flex;
    padding: 20px 0px;
    margin: auto;
    justify-content: space-between;
  }
  .heading-div{
    margin:0px 20px;
  }
  .button-section {
   
    background-color:#3aa17d;
      color:#fff;
      padding:13px 60px;
      border-radius:3px;
      font-weight:400;
      font-size:16px;"
      border:none;
      outline:none;


  }
  .images-sections{
    width: 80%;
    display: flex;
    padding: 20px 0px;
    margin: 10px auto;
    justify-content: space-between;
  }
  .link-holder{
    width: 80%;
    display: flex;
    padding: 20px 0px;
    margin: 10px auto;
    justify-content: space-between;
  }
  .headding-div{
    width: 80%;
    padding: 20px 0px;
    margin: 10px auto;
  }
  .section-headding{
    padding: 20px 0px;
    font-size: 30px;
    font-weight: 600;
    color: #000;
  }











</style>`;

export const themestyle = `
    <style>
      .header-block {
        background-color: #40526E;
        color: #FFFFFF;
        padding: 20px 20px;
        margin: 0px;
      }
      .heading-holder-block {
        padding: 20px;
        margin: auto;
        text-align: center;
      }
      .heading-div {
        margin:0px 20px;
      }
      .button-section {
        display: flex;
        padding: 20px 0px;
        margin: 10px auto;
        justify-content: center;
      }
      .body-text{
        padding: 20px 0px;
        margin: 10px auto;
        justify-content: center;
      }
      .images-sections {
        padding: 20px;
        text-align: center;
        height: 240px;
      }
      .link-holder {
        display: flex;
        padding: 20px 0px;
        margin: 10px auto;
        justify-content: center;
      }
      .heading-div {
        padding: 20px 0px;
        margin: 10px auto;
      }
      .section-heading {
        padding: 20px 0px;
        font-size: 30px;
        font-weight: 600;
        color: #000;
      }
      .page-builder-form-div{
        padding:10px;
        margin
      }
      .page-builder-field-group{
        margin-bottom: 1rem;
      }
      .page-builder-field-group label{
        margin-bottom: 0.5rem;
        display: inline-block;
        font-size: 16px;
      }
      .page-builder-field-group {
        display: grid;
        margin-bottom: 1rem;
      }    
    </style>`;

export const departmentstyle = `
<style>
.dept-header-section{
  padding: 20px 0px;
  margin-bottom: 20px;
  border-bottom: 1px solid #D7D7D7;
}
.dept-header-section h1{
  margin: 0px;
}
.searchbar-main-section {
display: flex;
padding: 10px 10px;
}
.searchbar-main-section .locationSearch{
  display: block;
  width: 35%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #CED4DA;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.searchbar-main-section .searchButton{
  color: #fff;
  text-align: center;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0px 10px;
  padding: 0.775rem 1rem;
  border-radius: 0px 5px 5px 0px;
  background-color: #5AA772;
  border: 1px solid transparent;
}
.switch {
 position: relative;
    display: inline-block;
    width: 51px;
    height: 25px;
    margin: 9px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #5AA772;
  transition: .4s cubic-bezier(0,1,0.5,1);
  border-radius: 4px;
}
.slider:before {
      position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s cubic-bezier(0,1,0.5,1);
    border-radius: 3px;
}
.switch  input:checked + .slider {
  background-color: #5AA772;
}
.switch  input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
.switch  input:checked + .slider.red {
  background-color: crimson;
}
.switch  input:focus + .slider.red {
  box-shadow: 0 0 4px crimson;
}
.switch  input:checked + .slider.red {
  background-color: crimson;
}
#round {
  border-radius: 34px;
}
#round:before {
  border-radius: 50%;
}
.switch  input:checked + .slider.red {
  background-color: crimson;
}
.switch  input:focus + .slider.blue {
  box-shadow: 0 0 4px #424BF5;
}
.switch input:checked + .slider.blue {
  background-color: #424BF5;
}
.searchbar-dropdown{
  display: flex;
  padding: 10px 10px;
}
.searchbar-dropdown .select-option{
  display: block;
  width: 10%;
  padding: 12px 15px;
  margin-right: 20px;
  font-size: 14px;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #A9A9A9;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.department-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 20px;
  border: 1px solid #b5b2b1;
  margin: 3.5rem;
}

.department-left{
  width: 80%;
 

  
}
.department-right{
  width: 20%;
 border-left: 1px solid #b5b2b1;
}

.department-right ul{
  padding-left:0px;
  list-style:none;
}
.department-right ul li{
  display:flex;
  align-items:center;
  padding: 5px 5px;
}
.department-right ul li svg{
  height: 20px;
  width: 20px;
 }

.department-right ul li span{
 margin-left:10px;
}

</style>
`;
