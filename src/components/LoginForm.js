import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
    const handleSubmit = (values) => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:8080/api/login', {
                auth: {
                    username: values.username,
                    password: values.password
                }
            })
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data);
                });
        });
    };

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={Yup.object({
                username: Yup.string().required('Required'),
                password: Yup.string().required('Required')
            })}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    const data = await handleSubmit(values);
                    console.log(data);
                } catch (error) {
                    console.log(error);
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <label>
                        Username:
                        <Field type="text" name="username" />
                        <ErrorMessage name="username" />
                    </label>
                    <label>
                        Password:
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" />
                    </label>
                    <button type="submit" disabled={isSubmitting}>
                        Login
                    </button>
                </Form>
            )}
        </Formik>
    );
};
export default LoginForm;
