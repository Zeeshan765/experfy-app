import React from "react";
import PageTheme from "../pagebuilderTemplate";
import PageTemplate from "../PageTemplate";
import SectionTemplate from "../SectionTempate";

const TemplatesLibrary = () => {
  const [templateSelection, setTemplateSeclation] = React.useState("Pages");
  const [search, setSearch] = React.useState("");

  //====== Methodes====== //
  const handleSectionTemplate = (e) => {
    const { value } = e.target;
    setSearch("");
    setTemplateSeclation(value);
  };
  const handleSeach = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <div style={{ background: "#fff" }}>
      <div
        style={{
          padding: "8px 3rem",
          // borderBottom:'1px solid gray',
          boxShadow: "1px 1px 3px 0px #000",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <label htmlFor="type" style={{ display: "block", margin: "0px" }}>
            Templete Library
          </label>
          <select name="type" onChange={handleSectionTemplate}>
            <option value="Pages">Pages</option>
            <option value="Section">Section</option>
          </select>
        </div>

        <div>
          <label htmlFor="search" style={{ display: "block", margin: "0px" }}>
            Search Page
          </label>
          <input
            type="text"
            name="search"
            placeholder="Search Page"
            onChange={handleSeach}
            value={search}
            style={{
              width: "300px",
              border: "1px solid gray",
              boxShadow: "0px 0.25px 1px 0px #000",
              background: "#fff",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>
      {templateSelection === "Pages" && <PageTemplate search={search} />}
      {/* {template==="Pages"&& <PageTheme />} */}
      {templateSelection === "Section" && <SectionTemplate search={search} />}
    </div>
  );
};

export default TemplatesLibrary;
