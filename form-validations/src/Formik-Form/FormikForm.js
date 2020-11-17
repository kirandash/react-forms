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

    render() {
        return (
            <div>
                <h5>Formik Form</h5>
                <Formik
                    initialValues={{ userName: '' , email: '', password: '', confirmPassword: '', isSubmitting: true }}
                >
                    {({}) => (
                        <form noValidate>
                            <div className='form-group'>
                                <label htmlFor='userName'>User Name</label>
                                <input 
                                    className='form-control'
                                    type='text'
                                    name='userName'
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input 
                                    className='form-control'
                                    type='text'
                                    name='email'
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='password'>password</label>
                                <input 
                                    className='form-control'
                                    type='text'
                                    name='password'
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='confirmPassword'>confirm Password</label>
                                <input 
                                    className='form-control'
                                    type='text'
                                    name='confirmPassword'
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
