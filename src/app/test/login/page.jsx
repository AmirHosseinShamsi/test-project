import React from "react";
import Input from "components/login-page/Input";
import {UserIcon} from "@heroicons/react/20/solid";

const Page = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="w-[40rem] border border-gray-500 px-5 py-3">
          <Input label="Username" placeholder="username" type="text">
              <UserIcon className="h-6 w-6 text-gray-500"/>
          </Input>
          <Input label="Password" placeholder="password" type="password"/>
      </div>
    </section>
  );
};

export default Page;
