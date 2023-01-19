export const SectionStyle = `<style>

.main_container {
  padding: 6rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
}
.heading_container {
  width: 50%;
  padding: 30px;
}

.main_heading {
  color: #171414;
  font-size: 38px;
  font-weight: 500;
  margin: 2px;
}
.sub_heading {
  color: #171414;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.3;
  margin: 2px;
  margin-bottom: 5px;
}
.figure_caption {
  padding: 30px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  background-color: #f8f8fa;
  border-radius: 0px 0px 5px 5px;
}
.img_container {
  width: 50%;
  padding: 30px;
}

.img_container img {
  width: 100%;
  height: 400px;
  object-position: center;
}

/* /////////////////////////////////////////////
///////////  header section style //////////
/////////////////////////////////////////// */

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
  font-size: 20px;
  margin: 0px 20px;
  color: #ffffff;
}

.header-navabr a:hover {
  color: #111827;
}

/* /////////////////////////////////////////////
/////////// Number Matrix style //////////
/////////////////////////////////////////// */

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
  font-weight: 500;
  font-size: 42px;
  margin-bottom: 0.5rem;
}
.number-container-div h2 {
  font-weight: 300;
  font-size: 20px;
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
  font-size: 34px;
  font-weight: 500;
  color: #444;
  text-align:center;
  margin-top: 1.25rem;
}

.number-percentagges-section .percentage-info  h1 span{
  font-weight:300; 
  color: #717171;
}

.number-percentagges-section .percentage-info p{
  text-align: center;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 500;
}



/* /////////////////////////////////////////////
/////////// Benefits style //////////
/////////////////////////////////////////// */


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
  font-size: 42px;
  margin-bottom: 0.5rem; 
color: #111827; 
line-height: 2.25rem; 
font-weight: 500; 
}

.benefits-title-div h2{
  font-size: 20px;
  font-weight: 300;
}

.benefits-title-div p {
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
    font-size: 20px;
    font-weight: 600;
    color: #444;
    text-align:center;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem; 
    }

    .benefits-option-section .benefit-holder p{
      text-align:left;
      line-height: 1.7;
    }







    /* /////////////////////////////////////////////
    /////////// talent cloud style //////////
    /////////////////////////////////////////// */
    

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

.talent-cloud-main-wrapper .talent-cloud-container .content-div{
padding-left: 1rem;
padding-right: 1rem; 
margin-right: auto; 
margin-left: auto; 
width: 100%; 
}

.talent-cloud-main-wrapper .talent-cloud-container .content-div h1{
  font-size: 34px;
  color:#fff;
  text-align:left;
  font-weight:500;
  letter-spacing:1px;
  margin-bottom:10px;
  }

  .talent-cloud-main-wrapper .talent-cloud-container .content-div p{
    font-size:16px;
    color: #fff;
    text-align:left;
    line-height:1.6;
    margin-top:10px;
    font-weight:200;
    }


 /* /////////////////////////////////////////////
/////////// guideline style //////////
/////////////////////////////////////////// */

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
  font-size: 42px;
  margin-bottom: 0.5rem; 
color: #111827; 
line-height: 2.25rem; 
font-weight: 500; 
}

.guideline-main-wrapper .guideline-container .guideline-header-section h2{
  font-size: 20px;
  font-weight: 300;
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
  width: 35px;
  justify-content: center;
  align-items: center;
  background-color: #5aa772;
  color: #fff;
  margin-right: 10px;
  border-radius: 100%;
  }

  .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading h1{
    font-size: 20px;
    font-weight: 600;
    color: #444;
    text-align:left;
    line-height: 1.8;
  }

  .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading p{
    text-align:left; 
    line-height: 1.7; 
    padding: 10px;
    margin-top: 5px;
  }



/* /////////////////////////////////////////////
/////////// video style //////////
/////////////////////////////////////////// */

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
    font-size: 42px;
    margin-bottom: 0.5rem; 
    color: #111827; 
    line-height: 2.25rem; 
    font-weight: 500;     
  }

  .video-main-wrapper .video-container-main-div .video-header p{
    font-size: 20px;
    padding: 0px 30px;
  }

  .video-main-wrapper .video-container-main-div .video-div{
    padding:50px 0px; 
    width:65%;
    margin: auto;
  }



  /* /////////////////////////////////////////////
 /////////// paragraph style //////////
/////////////////////////////////////////// */

  .main-paragraph-wrapper .paragraph-container{
  width: 90%;
  padding: 6rem 3.25rem;
  margin-left: auto;
  margin-right: auto; 
  }

  .paragraph-container h1{
    font-size: 42px;
    color: #111827; 
    font-weight: 500; 
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .paragraph-container p{
    margin-left: auto;
    margin-right: auto; 
    font-size: 1rem;
    line-height: 1.625; 
  }

</style>`;
