import React from 'react';
import {Formik, Field, ErrorMessage} from 'formik';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import * as yup from "yup";

const SignUpForm = () => {
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
                roleName: '',
            }}
            validationSchema={
                yup.object({
                    username: yup.string()
                        .max(20, "Must be 20 character or less")
                        .required("required"),
                    password: yup.string()
                        .max(20,"Must be 20 character or less")
                        .required("required"),
                })
            }
            onSubmit={(values) => {
                axios.post("http://localhost:8080/api/signup", values)
                    .then(() => {
                        alert("Sign up success ")
                        navigate("/login")
                    })
                    .catch(function (error) {
                        console.log(error)
                        alert("Registration failed ")
                    })
            }}>
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <Field name='username'></Field>
                    <ErrorMessage name={'username'}></ErrorMessage>

                    <Field name='password'></Field>
                    <ErrorMessage name={'password'}></ErrorMessage>

                    <Field as="select" name={'roleName'}>
                        <option value="ROLE_USER">User</option>
                        <option value="ROLE_ADMIN">Admin</option>
                    </Field>
                    <button>Signup Form</button>
                </form>
            )}
        </Formik>
    )
};

export default SignUpForm;
