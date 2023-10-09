import React from "react";

const SubmitButton = ({ text, type, isLoading }) => {
  return (
    <>
      <button
        className="w-full py-3 bg-indigo-500 rounded-lg text-white"
        type={type}
      >
        {isLoading ? "isLoading..." : text}
      </button>
    </>
  );
};

export default SubmitButton;
