import React, { Component } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

export class FormikForm extends Component {

    state = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        isValid: false
    }

    handleChange = (values) => {
        this.setState({
            username: values.userName,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword
        })
    }

    validationSchema = Yup.object().shape({
        userName: Yup.string()
            .min(6, "Username should be between 6 and 15 characters")
            .max(15, "Username should be between 6 and 15 characters")
            .required("Username is required"),
        
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        
        password: Yup.string()
            .min(8, "Should be at least 8 characters")
            .required("Password is required"),

        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Passwords don't match")
            .required("Password is required"),
    })

    render() {
        return (
            <div>
                <h5>Formik Form</h5>
                <Formik
                    initialValues={{ userName: '', email: '', password: '', confirmPassword: '', isSubmitting: true }}
                    validationSchema={this.validationSchema}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        setTimeout(() => {
                            console.log(values);
                            setSubmitting(true)
                            resetForm()
                            setSubmitting(false)
                        }, 400)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleReset,
                        handleSubmit
                    }) => (
                        <form onSubmit={handleSubmit} noValidate>
                            <div className='form-group'>
                                <label htmlFor='userName'>User Name</label>
                                <input
                                    className='form-control'
                                    type='text'
                                    name='userName'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.userName}
                                />
                                <span className='help-block text-danger'>{errors.userName && touched.userName && errors.userName}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    className='form-control'
                                    type='text'
                                    name='email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <span className='help-block text-danger'>{errors.email && touched.email && errors.email}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='password'>password</label>
                                <input
                                    className='form-control'
                                    type='text'
                                    name='password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <span className='help-block text-danger'>{errors.password && touched.password && errors.password}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='confirmPassword'>confirm Password</label>
                                <input
                                    className='form-control'
                                    type='text'
                                    name='confirmPassword'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                />
                                <span className='help-block text-danger'>{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</span>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default FormikForm
