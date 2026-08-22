import { useMutation, useQueryClient } from "@tanstack/react-query";
import  axiosInstanceWithToken  from '../API/axiosInstance';


export default function useCheckout() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ PaymentMethod }) => {
            const response = await axiosInstanceWithToken.post(
                "/Checkouts",
                { PaymentMethod: PaymentMethod }
            );

            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
    });
}