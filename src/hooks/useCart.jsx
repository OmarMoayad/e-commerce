import { useQuery } from '@tanstack/react-query'
import axiosInstanceWithToken from '../API/axiosInstance'
import { useTranslation } from 'react-i18next'


export default function useCart() {
    const { i18n } = useTranslation();

    const getCartItems = async () => {
        const response = await axiosInstanceWithToken.get(`/Carts`);
        return response.data;
    }
    return useQuery({
        queryKey: ['cart', i18n.language],
        queryFn: getCartItems,
        staleTime: 1000 * 60 * 5,
    });
}
