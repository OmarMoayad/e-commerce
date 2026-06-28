import * as yup from "yup"

export const registerSchema = yup.object({
    userName: yup.string().required().min(3).max(30),
    fullName: yup.string().required().min(3).max(30),
    email: yup.string().required().email(),
    phoneNumber: yup.string().required().min(9).max(15),
    password: yup.string().required().min(8).max(32),})
    