import React from "react";
import axios from "axios";
import { CAREER_PORTAL_API_URL, AUTHORIZATION } from "../../globalConstants";

export const getToolTipApi = async (setToolTip, setLoading) => {
  setLoading(true);
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
  } catch (error) { }
};

export const showBrandsAPI = async (setBrandList, adminPortal) => {
  try {
    let id = adminPortal.id;
    let response = await axios.get(
      CAREER_PORTAL_API_URL + `/api/v1/admin/portals/${id}/brands`,
      {
        headers: {
          Authorization: AUTHORIZATION,
        },
      }
    );
    if (response.status == 200) {
      setBrandList(response.data);
    }
  } catch (err) {
    console.log("brand show error");
  }
};

export const basicInformationAPI = async (
  data,
  adminPortal,
  setAdminPortal,
  setLoading,
  setSuccessMessage,
  setSuccess,
  setErrorMessage,
  setError
) => {

  try {
    let id = adminPortal.id;
    let response = await axios.put(
      CAREER_PORTAL_API_URL + `api/v1/admin/portals/${id}`,
      {
        ...data,
      },
      {
        headers: {
          Authorization: AUTHORIZATION,
        },
      }
    );
    if (response.status == 200) {
      setAdminPortal({
        ...adminPortal,
        ...response.data,
      });
      setSuccessMessage("Successfully updated");
      setSuccess(true);
    }
  } catch (err) {
    setErrorMessage([
      "Company Name ",
      "Portal Name ",
      " Portal URL",
      "Portal ID",
    ]);
    setError(true);
  }
};

export const seoSettingApi = async (
  data,
  adminPortal,
  setSeo_Setting,
  setSuccessMessage,
  setSuccess,
  setErrorMessage,
  setError
) => {
  try {
    let id = adminPortal.id;
    let response = await axios.post(
      CAREER_PORTAL_API_URL + `api/v1/admin/portals/${id}/seo_settings`,
      {
        ...data,
      },
      {
        headers: {
          Authorization: AUTHORIZATION,
        },
      }
    );
    if (response.status == 201) {
      setSeo_Setting({
        ...response.data,
      });
      setSuccessMessage("Successfully created");
      setSuccess(true);
    }
  } catch (error) {
    setErrorMessage(error.response.data);
    setError(true);
  }
};

export const addBrandApi = async (
  data,
  adminPortal,
  setBrandDeleted,
  setBrands,
  setSuccessMessage,
  setSuccess,
  setErrorMessage,
  setError,
  handleClose,
  handleReset,
  // setFormReset
) => {

  const { name, identifier, microsite_identifier } = data;
  console.log("brandsportal", adminPortal)
  try {
    let id = adminPortal.id;

    let response = await axios.post(
      CAREER_PORTAL_API_URL + `api/v1/admin/portals/${id}/brands`,
      {
        name,
        identifier,
        microsite_identifier,
      },
      {
        headers: {
          Authorization: AUTHORIZATION,
        },
      }
    );

    if (response.status == 201) {
      setBrandDeleted((prev) => !prev);
      handleReset();
      handleClose();
    }
    // setFormReset(false);
  } catch (error) {
    setErrorMessage(error.response.data);
    setError(true);
  }
};

export const editBrandApi = async (
  data,
  adminPortal,
  setBrandDeleted,
  saveEditRecord,
  setSaveEditRecord,
  setSuccessMessage,
  setSuccess,
  setErrorMessage,
  setError,
  handleReset,
  handleEditClose,
  setFormReset
) => {


  const { name, identifier, microsite_identifier } = data;

  try {
    let id = saveEditRecord.id;
    let portalId = adminPortal.id;
    let response = await axios.put(
      CAREER_PORTAL_API_URL + `api/v1/admin/portals/${portalId}/brands/${id}`,
      {
        name,
        identifier,
        microsite_identifier,
      },
      {
        headers: {
          Authorization: AUTHORIZATION,
        },
      }
    );

    if (response.status == 200) {
      setBrandDeleted((prev) => !prev);
      handleReset();
      handleEditClose();
    }

  } catch (error) {
    setErrorMessage(error.response.data);
    setError(true);
  }
};

export const updateBrandApi = async (data, adminPortal, setBrands, brands) => {
  const { default_brand, radioButtons } = data;
  try {
    let id = adminPortal.id;
    let response = await axios.put(
      CAREER_PORTAL_API_URL + `api/v1/admin/portals/${id}/brands`,
      {
        default_brand,
        radioButtons,
      },
      {
        headers: {
          Authorization: AUTHORIZATION,
        },
      }
    );
  } catch (err) { }
};

export const deleteBrandApi = async (data, adminPortal, setBrandDeleted) => {
  try {
    let id = data.id;
    let portal_id = adminPortal.portal_id;
    let response = await axios.delete(
      CAREER_PORTAL_API_URL + `/api/v1/admin/portals/${portal_id}/brands/${id}`,
      {
        headers: {
          Authorization: AUTHORIZATION,
        },
      }
    );
    if (response.status == 204) {
      setBrandDeleted((prev) => !prev);
    }
  } catch (err) { }
};
