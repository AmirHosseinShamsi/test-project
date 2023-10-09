"use client";
import React from 'react';
import {useDogStore} from "../../../../zustand/store";
const Page = () => {
    const paw = useDogStore((state) => state.paw);
    console.log(paw)
    return (
        <div>
            this is dashboard page
        </div>
    );
};

export default Page;