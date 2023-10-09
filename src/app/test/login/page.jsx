"use client";
import React from "react";
import Input from "components/login-page/Input";
import { UserIcon } from "@heroicons/react/20/solid";
import SubmitButton from "components/login-page/SubmitButton";
import {Form, Formik} from "formik";
import {LoginSchema} from "public/js files/validation";
import Image from "next/image";
import ReactLogo from 'public/images/React.svg';
const Page = () => {
  return (
    <section className="h-screen flex justify-center items-center px-5">
      <div className="w-[40rem] border border-gray-300 px-5 py-6 space-y-6  rounded-lg shadow-xl">
          <div className="flex flex-col justify-center w-full">
                  <Image src={ReactLogo} alt="react-logo" className="mx-auto" width={125} height={125}/>
              <h1 className="text-center mt-5 text-3xl font-semibold font-['Roboto']">Sign In</h1>
          </div>
        <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
        >
          {(props) => (
              <Form className="w-full mt-9" action="#" autoComplete="off">
                  <Input label="Username" name="username" placeholder="username" type="text">
                      <UserIcon className="h-6 w-6 text-gray-500" />
                  </Input>
                  <Input label="Password" name="password" placeholder="password" type="password" />
                  <SubmitButton text="Sign in" type="submit"/>
              </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Page;
