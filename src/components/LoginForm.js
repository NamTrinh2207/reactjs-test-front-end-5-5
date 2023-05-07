import React from 'react';
import axios from 'axios';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Header from "./Header";
import "../css/loginForm.css"
import Navbar from "./Navbar";

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
        <div>
            <Navbar/>
            <Formik
                initialValues={{username: '', password: ''}}
                validationSchema={Yup.object({
                    username: Yup.string().required('Required'),
                    password: Yup.string().required('Required')
                })}
                onSubmit={async (values, {setSubmitting}) => {
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
                {({isSubmitting}) => (
                    <div className={"app"}>
                        <div className={"form"}>
                            <Form>
                                <label>
                                    Username:
                                    <Field type="text" name="username"/>
                                    <ErrorMessage name="username"/>
                                </label>

                                <div className="input-container">
                                    <label>
                                        Password:
                                        <Field type="password" name="password"/>
                                        <ErrorMessage name="password"/>
                                    </label>
                                </div>

                                <div className="button-container">
                                    <button type="submit" disabled={isSubmitting}>
                                        Login
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    );
};
export default LoginForm;
