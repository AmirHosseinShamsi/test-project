"use client";
import React, {useState} from 'react';

const Page = () => {
    const object = {
        content:'test'
    }
    const [arrayState , setArray] = useState([]);
    const newData = [...arrayState , object];
    const changingArray = () => {
        setArray(newData);
    }
    console.log(arrayState)
    return (
        <button onClick={changingArray} className="bg-indigo-500">
            this is a text
        </button>
    );
};

export default Page;