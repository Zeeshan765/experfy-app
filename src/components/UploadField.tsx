import React from "react";
const UplodField = (props) => {
  console.log("test of props===============>>>>",props);
  return (
    <>
      {/* <h2>hello test</h2> */}
      <input type="file" name="custom image"  style={{border:'1px solid red', padding:'5px 20px'}} />
    </>
  );
};
export default UplodField;