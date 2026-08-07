import React from 'react'
import {axiosInstance} from '../API/axiosInstance'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

export default function useProducts(params) {
    const { i18n } = useTranslation();
    const getAllProducts = async () => {
        const response = await axiosInstance.get("/Products", { params })
        return response.data;
    }
    const query = useQuery({
        queryKey: ["products" , i18n.language, params],
        queryFn: getAllProducts,
        staleTime: 1000*60*5,
    })

    return query;
}