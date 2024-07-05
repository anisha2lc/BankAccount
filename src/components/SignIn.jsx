import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  CREATE_NEW_ACCOUNT,
  DEPOSIT_FORM,
  USER_DASHBOARD,
} from "../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "flowbite-react";
import { signInUser } from "../redux/userSlice";
import bcrypt from "bcryptjs";

const SignIn = () => {
  const { users, currentUser } = useSelector((state) => state.user);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    const email = values.email;
    const password = values.password;

    const userData = users.find((user) => {
      return user.email === email;
    });

    const validPassword = await bcrypt.compare(password, userData.password);
    if (validPassword) {
      dispatch(signInUser(userData));
      navigate(USER_DASHBOARD.INDEX, { state: values.email });
    } else {
      setMessage("Invalid Credentials");
      return;
    }
  };

  setTimeout(() => {
    if (message) {
      setMessage(null);
    }
  }, 3000);
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };
  if (currentUser) {
    return <Navigate to={USER_DASHBOARD.INDEX} />;
  } else {
    return (
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, pristine, invalid }) => (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-10 p-6 border dark:text-gray-700 border-gray-300 rounded-lg shadow-md"
          >
            <h2 className=" text-2xl font-bold">Log In</h2>
            {message && <Alert color={"failure"}>{message}</Alert>}
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
                    {meta.error && meta.touched && (
                      <span className="text-red-500 text-sm">{meta.error}</span>
                    )}
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
                    {meta.error && meta.touched && (
                      <span className="text-red-500 text-sm">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <button
              type="submit"
              className={`w-full py-2 px-4 bg-blue-500 text-black rounded-md focus:outline-none hover:bg-blue-600 ${
                pristine || invalid ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={pristine || invalid}
            >
              Sign In
            </button>
            <div className="mt-4">
              <p className="text-gray-700">New User?</p>
              <Link
                to={CREATE_NEW_ACCOUNT.INDEX}
                className="text-blue-500 hover:underline"
              >
                Create an account
              </Link>
            </div>
          </form>
        )}
      />
    );
  }
};
export default SignIn;
