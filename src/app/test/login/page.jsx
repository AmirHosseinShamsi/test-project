"use client";
import React, {useState} from "react";
import Input from "components/login-page/Input";
import { UserIcon } from "@heroicons/react/20/solid";
import SubmitButton from "components/login-page/SubmitButton";
import {Form, Formik} from "formik";
import {LoginSchema} from "public/js files/validation";
import Image from "next/image";
import ReactLogo from 'public/images/React.svg';
const Page = () => {
    const [isLoading, setIsLoading] = useState(false)
    async function onSubmit(values) {
        setIsLoading(true)
        try {
            const response = await fetch('http://shserver.top:8080/test/users/login', {
                method: 'POST',
                headers : {'Content-Type': 'application/json', 'charset': 'utf-8'},
                body: JSON.stringify(values),
            })
            const data = await response.json();
            console.log(data);
        }
        finally {
            setIsLoading(false)
        }
    }
  return (
    <section className="h-screen flex justify-center items-center px-5">
      <div className="w-[40rem] border border-gray-300 px-5 py-6 space-y-6  rounded-lg shadow-xl">
          <div className="flex flex-col justify-center w-full">
                  <Image src={ReactLogo} alt="react-logo" className="mx-auto" width={125} height={125}/>
              <h1 className="text-center mt-5 text-3xl font-semibold font-['Roboto']">Sign In</h1>
          </div>
          <Formik
              initialValues={{ uname: "", pass: "" }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                  return onSubmit(values);
              }}
          >
              {(props) => (
                  <Form className="w-full mt-9" method="POST" action="http://shserver.top:8080/test/users/login" autoComplete="off">
                      <Input label="Username" name="uname" placeholder="username" type="text">
                          <UserIcon className="h-6 w-6 text-gray-500" />
                      </Input>
                      <Input label="Password" name="pass" placeholder="password" type="password" />
                      <SubmitButton text="Sign in" type="submit" isLoading={isLoading}/>
                  </Form>
              )}
          </Formik>
      </div>
    </section>
  );
};

export default Page;
