import { useMutation } from "@tanstack/react-query"
import axiosInstance from "../API/axiosInstance"
export default function useSendCode() {

    return useMutation({
        mutationFn: (email) => axiosInstance.post(`/auth/Account/SendCode`, {
            email: email
        }),
        onSuccess: () => {
            alert("تم ارسال الكود بنجاح")
        },
        onError: (error) => {
            alert(error.response.data.message)
        }
    })
}
