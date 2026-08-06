import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstanceWithToken from '../API/axiosInstance';

export default function useUpdateCart() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ cartItemId, quantity }) => {
            if (quantity === 0) {
                await axiosInstanceWithToken.delete(`/Carts/${cartItemId}`);
            }
            else {
                await axiosInstanceWithToken.patch(`/Carts/${cartItemId}`, { count: quantity });
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart", 'en'] });
        }
    })
}