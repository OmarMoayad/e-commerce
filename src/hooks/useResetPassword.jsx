import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../API/axiosInstance";

export default function useResetPassword() {
    return useMutation({
        mutationFn: (data) => axiosInstance.patch(`/auth/Account/ResetPassword`, {
            code: data.code,
            newPassword: data.newPassword,
            email: data.email
        }),
    });
}