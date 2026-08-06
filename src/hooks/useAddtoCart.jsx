import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axiosInstanceWithToken from '../API/axiosInstance'

export default function useAddtoCart() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (values) => {
            const response = await axiosInstanceWithToken.post(`/Carts`, {
                productId: values.productId,
                count: values.count
            });
            return response;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart", 'en'] });
        }
    })
}
