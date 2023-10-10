"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "contextApi/AuthContext";
import ShowData from "components/page 2/ShowData";

const Page = () => {
  const { data } = useAuth();
  const ticket = data.ticket;
  const [object, setObject] = useState([]);

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
      let resultData = [];
      lines.forEach((line) => {
        if (line.trim() !== "") {
          const data = JSON.parse(line.replace("data:", "").trim());
          resultData.push(data);
        }
      });
      setObject(resultData);
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
  return <div>{object.map((item , index) => {return <ShowData data={item.content}/> })}</div>;
};

export default Page;
