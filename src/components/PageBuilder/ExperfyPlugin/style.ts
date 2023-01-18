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
  background-color: #F8F8FA;
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
  background-color: #2F3D55;
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
  color: #FFFFFF;
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
  color: #FFFFFF;
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
  color: #4B5563;
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
</style>`;