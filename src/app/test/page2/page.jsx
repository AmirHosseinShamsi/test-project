"use client";
import React, {useEffect, useState} from 'react';
import {useAuth} from "contextApi/AuthContext";

const Page = () => {
    const { data } = useAuth();
    const ticket = data.ticket;
    const [object, setObject] = useState({});

    async function postRequest(url) {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    charset: "utf-8",
                    Authorization: `Bearer ${ticket}`,
                },
            });
            if (!response.ok) {
                throw new Error(`failed to fetch data ${response.status}`);
            }
            const object = await response.json();
            setObject(object);
            console.log(object);
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
    return <div>{console.log(object)}</div>;
};

export default Page;