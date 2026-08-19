import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import  axiosInstanceWithToken  from '../API/axiosInstance';


export default function useCheckout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: async ({ PaymentMethod }) => {
            const response = await axiosInstanceWithToken.post(
                "/Checkouts",
                { PaymentMethod: PaymentMethod }
            );

            return response.data;
        },

        onSuccess: (data, variables) => {
            if (variables.PaymentMethod === "Visa") {
                window.location.href = data.url;
            } else {
                navigate("/");
                alert("Order placed successfully");
                
            }
        }
    });
}