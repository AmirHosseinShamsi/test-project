"use client";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { useField } from "formik";

const Input = ({ label, placeholder, children, type, ...props }) => {
  //getting validation error
  const [filed, meta] = useField(props);

  //show password
  const [isShowPassword, setShowPassword] = useState(false);
  const changeShowPassword = () => {
    setShowPassword(!isShowPassword);
  };
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          {type !== "password" ? (
            children
          ) : (
            <span onClick={changeShowPassword} className="hover:cursor-pointer">
              {type === "password" && isShowPassword ? (
                <EyeIcon className="h-6 w-6 text-gray-500" />
              ) : (
                <EyeSlashIcon className="h-6 w-6 text-gray-500" />
              )}
            </span>
          )}
        </div>
        <input
          type={type === "password" && isShowPassword ? "text" : type}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-0"
          placeholder={placeholder}
          {...props}
          {...filed}
        />
        {meta.touched && meta.error ? (
          <span className="font-['Roboto'] text-red-600 font-medium text-sm">{meta.error}</span>
        ) : null}
      </div>
    </>
  );
};

export default Input;
