// import React from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

// const DepositAmount = () => {
// const navigate = useNavigate()
//     const data = useLocation()
//   return (
//       <div>Hi {data.state}DepositAmount
//       <button onClick={()=> navigate(-1)}>Logout</button>
//       </div>
//   )
// }

// export default DepositAmount


import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import 'tailwindcss/tailwind.css';

const DepositForm = () => {
  const [balance, setBalance] = useState(1000); // Example initial balance

  const onSubmit = (values) => {
    setBalance(balance + Number(values.deposit));
  };

  const validate = (values) => {
    const errors = {};
    if (!values.deposit) {
      errors.deposit = 'Required';
    } else if (isNaN(values.deposit) || Number(values.deposit) <= 0) {
      errors.deposit = 'Must be a positive number';
    }
    return errors;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Deposit Transaction</h2>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Current Balance</label>
          <div className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100">
            ${balance.toFixed(2)}
          </div>
        </div>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Deposit Amount</label>
                <Field name="deposit">
                  {({ input, meta }) => (
                    <div>
                      <input
                        {...input}
                        type="number"
                        placeholder="Deposit Amount"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                      {meta.error && meta.touched && <span className="text-red-500 text-xs">{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={pristine || invalid}
                  className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
                >
                  Deposit
                </button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default DepositForm;
