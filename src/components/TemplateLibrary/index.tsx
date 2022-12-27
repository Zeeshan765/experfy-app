import React from "react";
import PageTemplate from "../PageTemplate";
import SectionTemplate from "../SectionTempate";

const TemplatesLibrary = () => {
  const [template, setTemplate] = React.useState("Pages");
  
  return (
    <div style={{ background: "#fff" }}>
      <div
        style={{
          padding: "8px 2rem",
          borderBottom:'1px solid gray',
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <label htmlFor="type" style={{ display: "block" }}>
            Templete Library
          </label>
          <select name="type"  onChange={(e)=>setTemplate(e.target.value)} >
            <option value="Pages">Pages</option>
            <option value="Section">Section</option>
          </select>
        </div>

        <div>
          <label htmlFor="search" style={{ display: "block" }}>
            Search Page
          </label>
          <input
            type="text"
            name="search"
            placeholder="Search Page"
            style={{
              width: "300px",
              border: "1px solid gray",
              boxShadow: "1px 1px 3px 0px #000",
              background: "#fff",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>
     {template==="Pages"&& <PageTemplate />}
     {template==="Section"&& <SectionTemplate /> }
    </div>
  );
};

export default TemplatesLibrary;
