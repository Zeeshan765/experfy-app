import React, { useContext, useEffect } from "react";
import browse_jobs from "../assets/images/templates/browse_jobs.png";
// import browse_jobs from "../../assets/images/templates/browse_jobs.png";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import category from "../assets/images/templates/category.png";
import error_404 from "../assets/images/templates/error_404.png";
import home from "../assets/images/templates/home.png";
import job_overview from "../assets/images/templates/job_overview.png";
import join from "../assets/images/templates/join.png";
import tc_overview from "../assets/images/templates/tc_overview.png";
import FaceLessModel from "./Model";
import { Context } from "../Providers/MyProvider";
import { useConfig } from 'payload/components/utilities';
import axios from 'axios';

const useStyles = makeStyles({
  templateCardGrid: {
    width: 'calc(100% + 40px)',
    marginTop: '-32px !important',
  },
  templateCard: {
    backgroundColor: 'transparent!important',
    boxShadow: 'none!important',
    '& .MuiCardHeader-root': {
      padding: '0 0 .5rem',
      '& .MuiTypography-root': {
        fontFamily: 'proxima-nova',
        fontWeight: 500,
        color: '#4a5162 !important',
      },
      '& .MuiCardHeader-action': {
        display: 'inline-flex',
        alignItems: 'center',
        '& button': {
          marginTop: '8px',
        },
      },
    },
  },
});
type Props = {
  search?: string;
  templateModelClose?: () => void;
  fromScratch?: any;
};
const PageTemplate: React.FC<Props> = ({
  search,
  templateModelClose,
  fromScratch,
}) => {
  const classes = useStyles();
  const [templateList, setTemplateList] = React.useState<any>([]);
  const { setSelectedPageCode } = useContext(Context);

  const { routes, serverURL } = useConfig();
  const apiEndpoint = `${serverURL}/api`;
  // ========== Method to create page from template =================
  const fetchData = () => {
    axios({
      method: 'get',
      url: `${apiEndpoint}/page-Template`,
    })
      .then((res) => {
        const { docs } = res.data;
        console.log('docs=======', res.data.docs);
        setTemplateList(docs);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
  const createPageHandler = (template) => {
    setSelectedPageCode(template);
    templateModelClose();
  };
  // ================== End of Method to create page from template =================
  // ================== Life Cycle Method =================
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Grid container spacing={2} style={{ margin: 'auto', width: '100%' }}>
      {templateList.map((template) => {
        console.log('template', template)
        const { id, pageThumnail, title,pageCode } = template;
        console.log('templateList', template);
        
        return (
          <>
            {console.log('templateList', templateList)}
            {search === '' && (
              <Grid item sm={3} key={id}>
                <div className='card-page-template'>
                  <div className='card-page-template__header'>
                    {' '}
                    <h4 className='card-page-template__title'>{title}</h4>
                    <div className='card-page-template__actions'>
                      <FaceLessModel
                        data={{ id, pageThumnail, title,pageCode }}
                        templateModelClose={templateModelClose}
                      />
                    </div>
                  </div>
                  <div className='card-page-template__body image-card'>
                    {fromScratch && (
                      <button
                        className='template-select-button'
                        onClick={() => createPageHandler(pageCode)}
                      >
                        Select
                      </button>
                    )}
                    <img src={pageThumnail} alt={title} />
                  </div>
                </div>
              </Grid>
            )}
            {search && title?.toLowerCase().includes(search.toLowerCase()) ? (
              <Grid item sm={3} key={id}>
                <div className='card-page-template'>
                  <div className='card-page-template__header'>
                    {' '}
                    <h4 className='card-page-template__title'>{title}</h4>
                    <div className='card-page-template__actions'>
                      <button onClick={() => createPageHandler(pageCode)}>
                        Select
                      </button>
                      <FaceLessModel
                        data={{ id, pageThumnail, title }}
                        templateModelClose={templateModelClose}
                      />
                    </div>
                  </div>
                  {/* <div className="image-card"> */}
                  <div className='card-page-template__body image-card'>
                    {fromScratch && (
                      <button
                        className='template-select-button'
                        onClick={() => createPageHandler(pageCode)}
                      >
                        Select
                      </button>
                    )}
                    <img src={pageThumnail} alt={title} />
                  </div>
                </div>
              </Grid>
            ) : (
              ''
            )}
            {/* {
              (
                <p>oop!not found anything's</p>
              )
            } */}
          </>
        );
      })}
    </Grid>
  );
};
export default PageTemplate;