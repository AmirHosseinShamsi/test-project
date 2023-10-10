"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "contextApi/AuthContext";

const Page = () => {
  const { data } = useAuth();
  const ticket = data.ticket;
  const [object, setObject] = useState("");

  async function postRequest(url) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          charset: "utf-8",
          Authorization: `Bearer ${ticket}`,
        },
        body: JSON.stringify({ message: "Write me a chrome extension code" }),
      });
      if (!response.ok) {
        throw new Error("failed to fetch");
      }
      const responseText = await response.text();
      const lines = responseText.split("\n");
      let stringData = "";
      lines.forEach((line) => {
        if (line.trim() !== "") {
          const data = JSON.parse(line.replace("data:", "").trim());
          stringData += data.content;
        }
      });
      setObject(stringData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await postRequest("http://shserver.top:8080/test/users/getCode");
    };

    fetchData().then((r) => console.log(r));
  }, []);

  const CopyCodes = (element) => {
    navigator.clipboard
      .writeText(element.target.value.innerhtml)
      .then(() => {
        alert("copied");
      })
      .catch((err) => {
        alert("not copied");
      });
  };

  const Parts = object.split("```");
  let text = Parts[0];
  let code = Parts.slice(1).join("");
  return (
    <div className="w-full flex justify-center h-screen items-center">
          <div className="w-1/2 bg-gray-200 rounded-xl py-10">
            <div>
              <p className="text-sm"></p>
              <div dir="rtl">
                <button className="px-10 py-5 bg-indigo-500 text-white font-['Roboto']" onClick={CopyCodes}>
                  copy
                </button>
                <pre
                  className="w-full overflow-auto bg-gray-50 rounded-xl border border-gray-500 py-0 flex flex-col"
                  dir="ltr"
                >
                  <code className="whitespace-break-spaces">
                    &lt;input type="text" class="form-control"
                    placeholder="name@example.com"/&gt; &lt;input type="text"
                    class="form-control form-control-solid"
                    placeholder="name@example.com"/&gt;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Page;
