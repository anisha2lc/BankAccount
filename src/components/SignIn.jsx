import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Link, useNavigate } from 'react-router-dom';
import { CREATE_NEW_ACCOUNT, DEPOSIT_AMOUNT } from '../constants/routes';
import { useSelector } from 'react-redux';

const SignIn = () => {

    const data1 = useSelector(state => state.user)
    console.log(data1)
const navigate = useNavigate()

  const onSubmit = (values) => {
      console.log(values.email, values.password);
      // if (values.email && values.password) {
      //     console.log("11")
      //     if (!localStorage.getItem('user')) {
      //         console.log("22")
      //         localStorage.setItem('user', JSON.stringify([{ email: values.email, password: values.password }]))
      //         navigate(DEPOSIT_AMOUNT.INDEX, {state: values.email})
      //     }
    // }
     navigate(DEPOSIT_AMOUNT.INDEX, {state: values.email})
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

    return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, pristine, invalid }) => (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <Field name="email">
              {({ input, meta }) => (
                <div>
                  <input
                    {...input}
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                  {meta.error && meta.touched && <span className="text-red-500 text-sm">{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <Field name="password">
              {({ input, meta }) => (
                <div>
                  <input
                    {...input}
                    type="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                  {meta.error && meta.touched && <span className="text-red-500 text-sm">{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 bg-blue-500 text-black rounded-md focus:outline-none hover:bg-blue-600 ${pristine || invalid ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={pristine || invalid}
          >
            Sign In
              </button>
               <div className="mt-4">
            <p className="text-gray-700">New User?</p>
            <Link to={CREATE_NEW_ACCOUNT.INDEX} className="text-blue-500 hover:underline">
              Create an account
            </Link>
          </div>
        </form>
      )}
      />
  );
};

export default SignIn;
