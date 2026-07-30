import React from 'react'
import { useMutation } from '@tanstack/react-query'
import axiosInstanceWithToken from '../API/axiosInstance'

export default function useAddtoCart() {

    return useMutation({
        mutationFn: async (values) => {
            const response = await axiosInstanceWithToken.post(`/Carts`, {
                productId: values.productId,
                count: values.count
            });
            return response;

        }
    })
}
