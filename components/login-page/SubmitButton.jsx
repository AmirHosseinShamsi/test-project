import React from 'react';

const SubmitButton = ({text , type}) => {
    return (
        <>
            <button className="w-full py-3 bg-indigo-500 rounded-lg text-white" type={type}>{text}</button>
        </>
    );
};

export default SubmitButton;