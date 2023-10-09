"use client";
import React, {useState} from "react";
import Input from "components/login-page/Input";
import {UserIcon} from "@heroicons/react/20/solid";
import SubmitButton from "components/login-page/SubmitButton";
import {Form, Formik} from "formik";
import {LoginSchema} from "public/js files/validation";
import Image from "next/image";
import ReactLogo from "public/images/React.svg";
import {postData} from "redux/post-feature/postApi";
import {useDogStore} from "../../../../zustand/store";

const Page = () => {
    /*const [errorMessage, setErrorMessage] = useState("");
    
    async function onSubmit(values) {
        const response = await postData(
            values,
            "http://shserver.top:8080/test/users/login",
        );
        typeof (response) === "string" ? setErrorMessage(response) : null;
    }*/
    return (
      <section className="h-screen flex flex-col justify-center items-center px-5">
        <div className="w-[40rem] border border-gray-300 px-5 py-6 space-y-6  rounded-lg shadow-xl">
          <div className="flex flex-col justify-center w-full">
            <Image
              src={ReactLogo}
              alt="react-logo"
              className="mx-auto"
              width={125}
              height={125}
            />
            <h1 className="text-center mt-5 text-3xl font-semibold font-['Roboto']">
              Sign In
            </h1>
          </div>
          <Formik
            initialValues={{ uname: "", pass: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              return onSubmit(values);
            }}
          >
            {(props) => (
              <Form className="w-full mt-9" method="POST" autoComplete="off">
                <Input
                  label="Username"
                  name="uname"
                  placeholder="username"
                  type="text"
                >
                  <UserIcon className="h-6 w-6 text-gray-500" />
                </Input>
                <Input
                  label="Password"
                  name="pass"
                  placeholder="password"
                  type="password"
                />
                <SubmitButton text="Sign in" type="submit" />
              </Form>
            )}
          </Formik>
        </div>
        <div>
          {/*{errorMessage !== ""? (
            <h5 className="font-bold text-center text-red-600">{errorMessage}</h5>
          ) : null}*/}
        </div>
      </section>
    );
};

export default Page;
