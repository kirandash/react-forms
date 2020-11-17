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

    render() {
        return (
            <div>
                <h5>Formik Form</h5>
                <Formik
                    initialValues={{ userName: '', email: '', password: '', confirmPassword: '', isSubmitting: true }}
                >
                    {({values, handleChange}) => (
                        <form noValidate>
                            <div className='form-group'>
                                <label htmlFor='userName'>User Name</label>
                                <input
                                    className='form-control'
                                    type='text'
                                    name='userName'
                                    onChange={handleChange}
                                    value={values.userName}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    className='form-control'
                                    type='text'
                                    name='email'
                                    onChange={handleChange}
                                    value={values.email}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='password'>password</label>
                                <input
                                    className='form-control'
                                    type='text'
                                    name='password'
                                    onChange={handleChange}
                                    value={values.password}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='confirmPassword'>confirm Password</label>
                                <input
                                    className='form-control'
                                    type='text'
                                    name='confirmPassword'
                                    onChange={handleChange}
                                    value={values.confirmPassword}
                                />
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default FormikForm
