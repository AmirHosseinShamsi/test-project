import React from "react";
import SubmitButton from "components/login-page/SubmitButton";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex justify-center mt-16 space-x-8">
      <Link href="/test/page1" className="w-1/4">
        <SubmitButton text="page1" type="button" />
      </Link>
      <Link href="/test/page2" className="w-1/4">
        <SubmitButton text="page2" type="button" />
      </Link>
    </div>
  );
};

export default Page;
