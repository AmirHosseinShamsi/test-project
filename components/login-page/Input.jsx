"use client";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useField } from "formik";

const Input = ({
  label,
  align,
  type,
  icon,
  labelStyle,
  inputStyle,
  errorStyle,
  ...props
}) => {
  const [filed, meta] = useField(props);
  const [isShowPassword, setShowPassword] = useState(false);
  const changeShowPassword = () => {
    setShowPassword(!isShowPassword);
  };
  return (
    <>
      <div className={`${align} relative`}>
        {label ? <label className={labelStyle}>{label}</label> : null}

        <input
          className={inputStyle}
          type={type === "password" && isShowPassword ? "text" : type}
          dir="rtl"
          {...props}
          {...filed}
        />
        {type !== "password" ? (
          icon
        ) : (
          <span onClick={changeShowPassword}>
            {type === "password" && isShowPassword ? (
              <EyeIcon className="h-6 w-6 absolute left-3.5 top-4 text-amber-400" />
            ) : (
              <EyeSlashIcon className="h-6 w-6 absolute left-3.5 top-4 text-amber-400" />
            )}
          </span>
        )}
        {meta.touched && meta.error ? (
          <span className={errorStyle}>{meta.error}</span>
        ) : null}
      </div>
    </>
  );
};

export default Input;
