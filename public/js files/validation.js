import * as yup from "yup";

const usernameCharacters = /^[a-zA-Z0-9_-]+$/;


export const LoginSchema = yup.object({
    uname: yup
        .string()
        .matches(usernameCharacters, {
            message: "don't use specific sign",
            excludeEmptyString: true,
        })
        .required("This field is required"),
    pass: yup.string().required("This field is required"),
});