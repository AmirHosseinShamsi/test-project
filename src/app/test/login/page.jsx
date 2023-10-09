"use client";
import React from "react";
import Input from "components/login-page/Input";
import { UserIcon } from "@heroicons/react/20/solid";
import SubmitButton from "components/login-page/SubmitButton";
import {Form, Formik} from "formik";
import {LoginSchema} from "public/js files/validation";

const Page = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="w-[40rem] border border-gray-500 px-5 py-6 space-y-6  rounded-lg shadow-xl">
        <div className="text-center">
          <h1 className="font-['Roboto'] font-semibold text-lg">Welcome to sign in page</h1>
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
