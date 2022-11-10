import React from "react";
import axios from "axios";
import { CAREER_PORTAL_API_URL, AUTHORIZATION } from "./globalConstants";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

// console.log("Auth", AUTHORIZATION);
export const getCompanyPortalData = async (setAdminPortal, setLoading) => {
  // setLoading(true);
  try {
    let response = await axios.get(
      CAREER_PORTAL_API_URL +
        `api/v1/admin/portals/${localStorage.getItem("id")}`,
      {
        headers: {
          Authorization: AUTHORIZATION,
        },
      }
    );

    if (response.status == 200) {
      setAdminPortal(response.data);
    }
    setLoading(false);
  } catch (error) {
    setLoading(false);
  }
};
