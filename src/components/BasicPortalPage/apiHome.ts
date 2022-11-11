import React from "react";
import axios from "axios";
import { CAREER_PORTAL_API_URL, AUTHORIZATION } from "../../globalConstants";
// import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

// console.log("Auth", AUTHORIZATION);
export const getTenantApi = async (setTenantID, setLoading) => {
  // setLoading(true);
  try {
    let response = await axios.get(
      CAREER_PORTAL_API_URL + `api/v1/admin/portals/get_tenant_info`,
      {
        params: { id: "ccf48582-7f02-4681-bc41-22a810488ab5" },
        headers: {
          Authorization: AUTHORIZATION,
        },
      }
    );

    if (response.status == 200) {
      setTenantID(response.data.body);
    }
    // setLoading(false);
  } catch (error) {
    // console.log("errrrrr>>>>>", error.response.data[0]);
    // setMessage(error.response.data);
    // setError(true);
    // setLoading(false);
    // setVisible(false);
  }
};
export const getToolTipApi = async (setToolTip, setLoading) => {
  // setLoading(true);
  try {
    let response = await axios.get(
      CAREER_PORTAL_API_URL + `api/v1/admin/tooltips`,
      {
        params: { title: "portal_identity" },
        headers: {
          Authorization: AUTHORIZATION,
        },
      }
    );

    if (response.status == 200) {
      setToolTip(response.data.info);
    }
    // setLoading(false);
  } catch (error) {
    // console.log("errrrrr>>>>>", error.response.data[0]);
    // setMessage(error.response.data);
    // setError(true);
    // setLoading(false);
    // setVisible(false);
  }
};
export const portalIdentityScreenOne = async (
  data,
  // adminPortal,
  // setAdminPortal,
  setVisible,
  setErrorMessage,
  setError,
  brandSwitch,
  navigate,
  setLoading,
  // updateApi,
  // setUpdateApi
) => {
  setLoading(true);
  try {
    if (data) {
      let response = await axios.post(
        CAREER_PORTAL_API_URL + `api/v1/admin/portals`,
        {
          ...data,
        },
        {
          headers: {
            Authorization: AUTHORIZATION,
          },
        }
      );

      if (response.status == 201 && brandSwitch == true) {
        // setAdminPortal(response.data);
        localStorage.setItem("id", response.data.id);
        setVisible(true);
      } else if (brandSwitch == false) {
        // setAdminPortal(response.data);
        localStorage.setItem("id", response.data.id);
        navigate("/portal-identity", { state: "sd" });
      }
      setLoading(false);
    } else {
      const deleteProps = [
        "portal_name",
        "portal_id",
        "portal_url",
        "company_name",
        "default_language",
        "default_locale",
        "google_analytics_id",
        "google_tag_manager_id",
        "bing_webmaster_id",
        "tracking_pixel",
      ].forEach((element) => {
        if (data[element] == "") {
          delete data[element];
        }
      });
      // let id = adminPortal.id;
      let responseUpdate = await axios.put(
        CAREER_PORTAL_API_URL + `api/v1/admin/portals/${12}`,
        {
          ...data,
        },
        {
          headers: {
            Authorization: AUTHORIZATION,
          },
        }
      );

      if (responseUpdate.status == 200 && brandSwitch == true) {
        // setAdminPortal(responseUpdate.data);
        // localStorage.setItem("id", responseUpdate.data.id);
        setVisible(true);
      } else if (brandSwitch == false) {
        navigate("/portal-identity", { state: "sd" });
        // setAdminPortal(responseUpdate.data);
        // localStorage.setItem("id", response.data.id);
      }
      setLoading(false);
    }
  } catch (error) {
    setErrorMessage(error.response.data);
    setError(true);
    setLoading(false);
    setVisible(false);
  }
};

export const portalIdentityScreenTwo = async (
  data,
  adminPortal,
  setAdminPortal,
  setBrands,
  navigate,
  setErrorMessage,
  setError,
  setLoading,
  getCompanyPortalData
) => {
  const dataBrandsFiltered = data.brands.filter((i) => i.name != undefined);
  delete data.brands;
  data.draftbrands = dataBrandsFiltered;
  const { default_brand, microsite_setting, draftbrands } = data;
  let brands = draftbrands.map((i) =>
    i.name == default_brand
      ? { ...i, default_brand: true }
      : { ...i, default_brand: false }
  );
  setLoading(true);
  try {
    const id = adminPortal.id;
    let response = await axios.post(
      CAREER_PORTAL_API_URL + `api/v1/admin/portals/${id}/brands`,
      {
        default_brand,
        microsite_setting,
        brands,
      },
      {
        headers: {
          Authorization: AUTHORIZATION,
        },
      }
    );
    if (response.status == 201) {
      setBrands(response.data);
      getCompanyPortalData(setAdminPortal)
      navigate("/portal-identity");
    }
    setLoading(false);
  } catch (error) {
    alert(`Taken values${error.response.data.value}`);
    // setErrorMessage(error.response.data);
    // setError(true);
    setLoading(false);
  }
};
