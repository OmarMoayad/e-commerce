import * as yup from "yup"

export const loginSchema = yup.object({
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters long").max(32, "Password must be at most 32 characters long"),
})
