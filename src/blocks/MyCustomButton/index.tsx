import React from "react";

import {useConfig } from 'payload/components/utilities';

import { Button } from "payload/components/elements";





export const SaveButton: React.FC = () => {
  return (
    <button
      style={{
        backgroundColor: "#2281d4",
        border: "none",
        color: "white",
        padding: "14px 28px",
        fontSize: "18px",
        fontWeight: "bold",
        width: "180px",
        borderRadius: "4px",
      }}
    >
      Save
    </button>
  );
};

export const NextButton: React.FC = () => {
  const { routes: { admin: adminRoute } } = useConfig();
  return (




    <Button el="link" to={`${adminRoute}/collections/portal-identity-detail/create`} buttonStyle="primary">
    Next
  </Button>




    // <button
    //   style={{
    //     backgroundColor: "#2281d4",
    //     border: "none",
    //     color: "white",
    //     padding: "14px 28px",
    //     fontSize: "18px",
    //     fontWeight: "bold",
    //     width: "180px",
    //     borderRadius: "4px",
    //   }}
    // >
    //   Next
    // </button>
  );
};
