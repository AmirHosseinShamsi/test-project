"use client";
import React, { useState } from 'react'
import {Test} from "public/js files/validation";
import {Form, Formik} from "formik";
import Input from "components/login-page/Input";
import {UserIcon} from "@heroicons/react/20/solid";
import SubmitButton from "components/login-page/SubmitButton";

export default function Page() {
    const [isLoading, setIsLoading] = useState(false)

    async function onSubmit(values) {
        setIsLoading(true)
        console.log(values);
        try {
            const response = await fetch('http://shserver.top:8080/test/users/login', {
                method: 'POST',
                headers : {'Content-Type': 'application/json', 'charset': 'utf-8'},
                body: JSON.stringify(values),
            })
            const data = await response.json();
            console.log(data);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Formik
            initialValues={{ uname: "", pass: "" }}
            validationSchema={Test}
            onSubmit={(values) => {
                return onSubmit(values);
            }}
        >
            {(props) => (
                <Form className="w-full mt-9" action="http://shserver.top:8080/test/users/login" autoComplete="off">
                    <Input label="Username" name="uname" placeholder="username" type="text">
                        <UserIcon className="h-6 w-6 text-gray-500" />
                    </Input>
                    <Input label="Password" name="pass" placeholder="password" type="password" />
                    <SubmitButton text="Sign in" type="submit" isLoading={isLoading}/>
                </Form>
            )}
        </Formik>
    )
}