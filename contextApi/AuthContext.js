"use client";
// AuthContext.js
import React, {createContext, useContext , useState} from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [data , setData] = useState(null);
  const [status , setStatus] = useState(0);
    async function onSubmit(data , url) {
      try {
        const response = await fetch(
            url,
            {
              method: "POST",
              headers: { "Content-Type": "application/json", charset: "utf-8"},
              body: JSON.stringify(data),
            },
        );
        if (!response.ok) {
          const errorObject = await response.json();
          setData(errorObject.message)
          setStatus(response.status)
        }
        const object = await response.json();
        setData(object)
        setStatus(response.status)
      }
      catch (err) {
        console.log('failed to fetch data')
      }
    }
  return (
    <AuthContext.Provider value={{ onSubmit , status ,  data}}>
      {children}
    </AuthContext.Provider>
  );
};
