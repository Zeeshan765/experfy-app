import React, { useEffect } from "react";
import { useHistory,useParams } from "react-router-dom";
const PageBuildFromScratch = () => {
  const history = useHistory();
  const {id}:{id:string|null} =useParams();
 
  // Redirect to new page builder when build from scratch button clicked
  useEffect(() => {
    if(!id){
    history.push(`/admin/collections/page-builder?pageCreate=scratch`);
    }
  }, []);

  return <></>;
};

export default PageBuildFromScratch;
