import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstanceWithToken from '../API/axiosInstance';


export default function useRemovefromCart() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (cartItemId) => {
            await axiosInstanceWithToken.delete(`/Carts/${cartItemId}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
        }
    })
}