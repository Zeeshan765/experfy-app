//@ts-ignore


import {
 
  DialogContent,

} from '@mui/material';
import axios from 'axios';
import { Button } from 'payload/components/elements';
import { Form } from 'payload/components/forms';
import { useStepNav } from 'payload/components/hooks';
import { DefaultTemplate } from 'payload/components/templates';
import { useConfig } from 'payload/components/utilities';
import React, { useEffect, useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import FormSelect from '../../blocks/FormSelect';
import FormSwitch from '../../blocks/FormSwitch';
import FormTip from '../../blocks/FormTip';
import TextInput from '../../blocks/TextInput';
import { useStyles } from './css';
import { toast } from 'react-toastify';
const baseClass = 'custom-route';

const portal_url_tip =
  'Access your career portal using this domain. This is thee single main domain upon which all applications in your external career portal are based. Don’t include “http” or “https” in easily identify the URL';
const portal_id_tip = 'The read only filed displays the Portal ID';
const portal_name_tip = 'The go-to-market name of the career portal';
const company_name_tip =
  'The company of your career Portal. This can be a shortened version of Portal.';

const PortalIdentityform: React.FC = (props: any) => {
  const { handleSwitchChange, setVisible, brandSwitch, setSubmittedData } = props;
  const history = useHistory();
  const classes = useStyles();

  const [defaultBrands, setDefaultBrands] = useState([]);
  const { setStepNav } = useStepNav();

  useEffect(() => {
    setStepNav([
      {
        label: 'Portal Identity',
        url: '/basic-portal-identity',
      },
    ]);
  }, [setStepNav]);

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm({});

  console.log('getValues', getValues());

  const {
    admin: { user: userSlug },
    collections,
    serverURL,
    routes: { admin, api },
  } = useConfig();

  const userConfig = collections.find(
    (collection) => collection.slug === userSlug
  );


  const onSubmit = async (data) => {
    let apiEndpoint = `${serverURL}${api}/brand`;
    try {
      const formData = new FormData();
      formData.append('_payload', JSON.stringify(data));
      const res = await axios.post(apiEndpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const { doc } = res.data;
      if (brandSwitch) {
        setVisible(true);
        setSubmittedData(doc)
      } else {
        setVisible(false)
        toast.success('Portal Identitty created successfully');
        history.push(`/admin/collections/portal-identity/${doc.id}`);
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const { fields, append, remove } = useFieldArray({
    name: 'brands',
    control,
  });

  const handleAddRow = (value: unknown) => {
    append({});
  };

  const onClickBrandName = () => {
    let finalDefaultBrandsArray = getValues()?.brands.map((i) => ({
      value: i.name,
      lable: i.name,
    }));
    setDefaultBrands(finalDefaultBrandsArray);
  };

  return (
    <DialogContent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="mb-4">
          Fill in the information below and you will be on your way to creating
          your Career portal
        </p>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Career Portal Name"
                  placeholder="Company Career Portal"
                  id={'career_portal_name'}
                />
              )}
              name="career_portal_name"
              control={control}
            />
          </div>

          {/* <div className="col-md-4">
                    <div className="tip-wrapper">
                      {touched === 'career_portal_name' && (
                        <FormTip text={portal_name_tip} />
                      )}
                    </div>
                  </div> */}
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  disabled={false}
                  label="Portal ID"
                  placeholder="CP-ID798998989"
                  {...field}
                  id={'portal_id'}
                />
              )}
              name="portal_id"
              control={control}
            />
          </div>

          {/* <div className="col-md-4">
                    <div className="tip-wrapper">
                      {touched === 'portal_id' && (
                        <FormTip
                          text={'The read only filed displays the Portal ID'}
                        />
                      )}
                    </div>
                  </div> */}
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Portal URL"
                  placeholder="www.experfydemo/career-portal-experfy.com"
                  id={'portal_url'}
                />
              )}
              name="portal_url"
              control={control}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  disabled={false}
                  {...field}
                  label="Company Name"
                  id={'company_name'}
                />
              )}
              name="company_name"
              control={control}
            />
          </div>

          {/* <div className="col-md-4">
                    <div className="tip-wrapper">
                      {touched === 'company_name' && (
                        <FormTip text={company_name_tip} />
                      )}
                    </div>
                  </div> */}
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => {
                return (
                  <FormSelect
                    {...field}
                    options={[{ value: 'English', label: 'English' }]}
                    label="Default Language"
                    id={'default_language'}
                  />
                );
              }}
              name="default_language"
              control={control}
            />
          </div>

          {/* <div className="col-md-4">
                    <div className="tip-wrapper">
                      {touched === 'default_language' && (
                        <FormTip text="Set the default language of your career portal for your visitors" />
                      )}
                    </div>
                  </div> */}
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <FormSelect
                  {...field}
                  options={[{ value: 'US', label: 'United States' }]}
                  label="Default Locale"
                  id={'default_locale'}
                />
              )}
              name="default_locale"
              control={control}
            />
          </div>

          {/* <div className="col-md-4">
                    <div className="tip-wrapper">
                      {touched === 'default_locale' && (
                        <FormTip text="Set the default locale of your career portal for your visitors" />
                      )}
                    </div>
                  </div> */}
        </div>

        <div className="row">
          <div className="col-md-12">
            <p>
              If you want to create microsite for your different brands within
              your career portal, enable branding below.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 d-flex align-items-center">
            <FormSwitch
              label="Branding On"
              handleSwitchChange={handleSwitchChange}
              checked={brandSwitch}
            />
          </div>
        </div>
        <button type="submit" className="btn-hover color-9">
          Save
        </button>
      </form>
    </DialogContent>
  );
};

export default PortalIdentityform;
