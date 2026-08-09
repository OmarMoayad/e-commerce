import * as yup from "yup"

export const registerSchema = yup.object({
    userName: yup.string().required("User name is required").min(3, "User name must be at least 3 characters long").max(30, "User name must be at most 30 characters long"),
    fullName: yup.string().required("Full name is required").min(3, "Full name must be at least 3 characters long").max(30, "Full name must be at most 30 characters long"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    phoneNumber: yup.string().required("Phone number is required").min(9, "Phone number must be at least 9 characters long").max(15, "Phone number must be at most 15 characters long"),
    password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters long").max(32, "Password must be at most 32 characters long")})
    