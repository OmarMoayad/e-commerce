import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstanceWithToken from '../API/axiosInstance';

export default function useClearCart() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            await axiosInstanceWithToken.delete(`/Carts/clear`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart", 'en'] });
        }
    })
}