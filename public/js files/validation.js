import * as yup from "yup";

const usernameCharacters = /^[a-zA-Z0-9_-]+$/;

export const LoginSchema = yup.object({
    username: yup
        .string()
        .matches(usernameCharacters, {
            message: "don't use specific sing",
            excludeEmptyString: true,
        })
        .required("This field is required"),
    password: yup.string().required("This field is required"),
});