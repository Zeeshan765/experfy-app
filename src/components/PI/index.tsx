
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useConfig, useAuth } from 'payload/components/utilities';
import { MinimalTemplate } from 'payload/components/templates';
import { Form, TextInput as Password, Submit as FormSubmit } from 'payload/components/forms';
import { Button } from 'payload/components/elements';
import Minimal from 'payload/dist/admin/components/templates/Minimal';

const baseClass = 'reset-password';

const PI: React.FC = () => {
    const { admin: { user: userSlug }, serverURL, routes: { admin, api } } = useConfig(); 
    const { token } = useParams<{ token?: string }>();
    const { user, setToken } = useAuth();

    const onSuccess = (data) => {
        if (data.token) {
            setToken(data.token);
        }
    };

    if (user) {
        return (
            <MinimalTemplate className={baseClass}>


                <div className={`${baseClass}__wrap`}>
                    <h1>Already logged in</h1>
                    <p>
                        To log in with another user, you should
                        {' '}
                        <Link to={`${admin}/logout`}>log out</Link>
                        {' '}
                        first.
                    </p>
                    <br />
                    <Button
                        el="link"
                        buttonStyle="secondary"
                        to={admin}
                    >
                        Back to Dashboard
                    </Button>
                </div>
            </MinimalTemplate>
        );
    }

    return (
        <Minimal className={baseClass}>
            <div className={`${baseClass}__wrap`}>
                <h1>Reset Password</h1>
                <Form
                    onSuccess={onSuccess}
                    method="post"
                    action={`${serverURL}${api}/${userSlug}/reset-password`}
                    redirect={admin}
                >
                    <Password
                        label="New Password"
                        name="password"
                        path={'password'}
                        required
                    />

                    <FormSubmit>Reset Password</FormSubmit>
                </Form>
            </div>
        </Minimal>
    );
};

export default PI;
