import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axiosInstanceWithToken from '../API/axiosInstance'
import { useNavigate } from 'react-router-dom'


export default function useAddtoCart() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: async (values) => {
            const response = await axiosInstanceWithToken.post(`/Carts`, {
                productId: values.productId,
                count: values.count
            });
            return response;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
        },
        onError: (error) => {
            if(error.response.status === 401){
                navigate("/login");
            }
        }
    })
}
