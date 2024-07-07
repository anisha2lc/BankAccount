import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { amountWithDraw } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ToggleBalance from "./ToggleBalance";

const WithdrawAmount = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};

    if (!values.withdraw) {
      errors.withdraw = "Withdraw amount is required";
    } else if (values.withdraw >= currentUser.totalbalance) {
      errors.withdraw = "Insufficient Balance";
    } else if (values.withdraw <= 0) {
      errors.withdraw = "Invalid Amount";
    }
    return errors;
  };

  const onSubmit = (values) => {
    try {
      const { withdraw } = values;
      dispatch(amountWithDraw(withdraw));
      toast.success("Successfully Withdrawn", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme === "dark" ? "dark" : "colored",
      });
      navigate("/dashboard?tab=details");
    } catch (error) {
      console.error("Error processing deposit:", error);
      throw new Error("Error processing deposit: " + error.message);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex mt-20 items-center justify-center h-96">
        <div className="w-full max-w-md p-8 rounded-lg shadow-lg border-2 border-blue-500">
          <h2 className="text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300">
            Withdraw Transaction
          </h2>
          <div className="max-h-96 overflow-y-auto scrollbar-hide">
            <div className="mb-6">
              <label className="block text-sm dark:text-gray-300 font-bold mb-2">
                Current Balance
              </label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700">
                <p className=" flex gap-1 items-center cursor-pointer">
                  <ToggleBalance />
                </p>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Beneficiary Bank Name
              </label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700">
                OnePoint Banking and Financial Service
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Beneficiary Account Number
              </label>
              <div className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-lg bg-gray-100">
                {currentUser.id}
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Beneficiary Name
              </label>
              <div className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-lg bg-gray-100">
                {currentUser.name}
              </div>
            </div>
            <Form
              onSubmit={onSubmit}
              validate={validate}
              render={({ handleSubmit, pristine, invalid }) => (
                <form onSubmit={handleSubmit} className="text-gray-700">
                  <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                      Withdraw Amount
                    </label>
                    <Field name="withdraw">
                      {({ input, meta }) => (
                        <div>
                          <input
                            {...input}
                            type="number"
                            placeholder="withdraw Amount"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
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
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                      Remarks
                    </label>
                    <Field name="remarks">
                      {({ input, meta }) => (
                        <div>
                          <textarea
                            {...input}
                            placeholder="Remarks"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
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
                      Withdraw
                    </button>
                  </div>
                </form>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawAmount;
