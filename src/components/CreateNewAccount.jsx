import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { Navigate, useNavigate } from "react-router-dom";
import { SIGN_IN, USER_DASHBOARD } from "../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { storeUsers } from "../redux/userSlice";
import { Alert } from "flowbite-react";
import bcrypt from "bcryptjs";

const AccountCreation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);
  const { users, currentUser } = useSelector((state) => state.user);

  console.log(users);

  const onSubmit = async (values) => {
    if (users.length === 0) {
      const hashedPassword = await bcrypt.hash(values.password, 10);
      values.password = hashedPassword;
      dispatch(storeUsers(values));
      navigate(SIGN_IN.INDEX);
    } else {
      const userExist = users.find((user) => values.email === user.email);

      if (userExist) {
        setMessage("User's e-mail already exists");
        return;
      } else {
        const hashedPassword = await bcrypt.hash(values.password, 10);
        values.password = hashedPassword;
        dispatch(storeUsers(values));
        navigate(SIGN_IN.INDEX);
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords must match";
    }
    if (!values.deposit) {
      errors.deposit = "Required";
    } else if (isNaN(values.deposit) || Number(values.deposit) <= 0) {
      errors.deposit = "Must be a positive number";
    }
    return errors;
  };

  setTimeout(() => {
    if (message) {
      setMessage(null);
    }
  }, 3000);

  if (currentUser) {
    return <Navigate to={USER_DASHBOARD.INDEX} />;
  } else {
    return (
      <div className="flex p-3 items-center justify-center min-h-screen w-full text-gray-700 dark:text-gray-200">
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, pristine, invalid }) => (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md p-8 rounded-lg shadow-xl border-2 border-blue-500 dark:border-white dark:text-gray-300"
            >
              <h2 className="text-2xl font-bold mb-6 dark:text-gray-300">
                Create Account
              </h2>
              {message && <Alert color={"failure"}>{message}</Alert>}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Name</label>
                <Field name="name">
                  {({ input, meta }) => (
                    <div>
                      <input
                        {...input}
                        type="text"
                        placeholder="Name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
                      />
                      {meta.error && meta.touched && (
                        <span className="text-red-500 text-xs">
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Email</label>
                <Field name="email">
                  {({ input, meta }) => (
                    <div>
                      <input
                        {...input}
                        type="email"
                        placeholder="Email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
                      />
                      {meta.error && meta.touched && (
                        <span className="text-red-500 text-xs">
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Password</label>
                <Field name="password">
                  {({ input, meta }) => (
                    <div>
                      <input
                        {...input}
                        type="password"
                        placeholder="Password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
                      />
                      {meta.error && meta.touched && (
                        <span className="text-red-500 text-xs">
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  Confirm Password
                </label>
                <Field name="confirmPassword">
                  {({ input, meta }) => (
                    <div>
                      <input
                        {...input}
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
                      />
                      {meta.error && meta.touched && (
                        <span className="text-red-500 text-xs">
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold mb-2">
                  Initial Deposit
                </label>
                <Field name="deposit">
                  {({ input, meta }) => (
                    <div>
                      <input
                        {...input}
                        type="number"
                        placeholder="Initial Deposit"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
                      />
                      {meta.error && meta.touched && (
                        <span className="text-red-500 text-xs">
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={pristine || invalid}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
                >
                  Create Account
                </button>
              </div>
            </form>
          )}
        />
      </div>
    );
  }
};

export default AccountCreation;
