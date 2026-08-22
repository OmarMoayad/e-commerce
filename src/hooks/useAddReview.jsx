import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstanceWithToken from '../API/axiosInstance';

export default function useAddReview() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ productId, rating, comment }) =>
            axiosInstanceWithToken.post(`/Products/${productId}/reviews`, {
                rating,
                comment,
            }),
        onSuccess: (_data, variables) => {
            queryClient.invalidateQueries({ queryKey: ['product', String(variables.productId)] });
        }
    });
};