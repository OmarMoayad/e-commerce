import React from 'react'
import {axiosInstance} from '../API/axiosInstance'
import { useQuery } from '@tanstack/react-query'

export default function useProducts() {
    const getAllProducts = async () => {
        const response = await axiosInstance.get("/Products")
        return response.data;
    }
    const query = useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts,
        staleTime: 1000*60*5,
    })

    return query;
}