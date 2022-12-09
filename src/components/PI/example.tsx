import React from 'react';
import { FieldWithPath, RichTextField } from 'payload/types';
import { Group, withCondition } from 'payload/components/forms';
import fieldTypes from 'payload/dist/admin/components/forms/field-types';

type CustomField = RichTextField & {
    path: string;
    type?: string;
    helperText?: string;
    required?: boolean;
    label?: any;
    style?: any;
    width?: any;
    display?: unknown;
    maxLength?: number;
    minLength?: number;
    setTouched?: React.Dispatch<React.SetStateAction<string>>;
    admin?: {
        rows?: number;
    }
};

const FormDataField: React.FC<CustomField> = (props) => {
    const {
        path: pathFromProps,
        name,
        required,
        validate,
        maxLength,
        minLength,
        admin: {
            readOnly,
            style,
            className,
            width,
            placeholder,
            rows,
            description,
            condition,
        } = {},
        label,
    } = props;

    const path = pathFromProps || name;

    const fields: FieldWithPath[] = [
        {
            name: "name",
            label: "Name",
            type: "text",
            path: `name`,
            admin: {},
        },
        {
            name: "number",
            label: "Number",
            type: "number",
            path: `number`,
            admin: {},
        },
    ];

    const allAccess = {
        create: {
            permission: true,
        },
        read: {
            permission: true,
        },
        delete: {
            permission: true,
        },
        readVersions: {
            permission: true,
        },
        update: {
            permission: true,
        },
    };

    const groupPermission = {
        ...allAccess,
        fields: {
            name: allAccess,
            number: allAccess
        }
    };
    console.log(groupPermission)
    return (
        <>
            <Group
            {...props}
            indexPath={path} 
            permissions={groupPermission}
            fieldTypes={fieldTypes}
            fields={fields}            />
        </>
    );
};
export default withCondition(FormDataField);