import React from "react";
import SpinnerLoading from "components/login-page/SpinnerLoading";

const SubmitButton = ({ text, type, isLoading }) => {
  return (
    <>
      {!isLoading ? (
        <button
          className="w-full py-3 bg-indigo-500 rounded-lg text-white"
          type={type}
        >
          {text}
        </button>
      ) : (
        <SpinnerLoading />
      )}
    </>
  );
};

export default SubmitButton;
