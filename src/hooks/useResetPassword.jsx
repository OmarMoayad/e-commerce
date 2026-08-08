import { useMutation } from "@tanstack/react-query"
import axiosInstance from "../API/axiosInstance"
import { useNavigate } from "react-router"

export default function useResetPassword() {
    const navigate = useNavigate()
    return useMutation({

        mutationFn: (data) => axiosInstance.patch(`/auth/Account/ResetPassword`, {
            code: data.code,
            newPassword: data.newPassword,
            email: data.email
        }),
        onSuccess: () => {
            navigate("/login")
            alert("تم اعادة تعيين كلمة المرور بنجاح")
        },
        onError: (error) => {
            alert(error.response.data.message)
        }
    })
}