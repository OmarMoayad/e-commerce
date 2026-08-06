import { useQuery } from '@tanstack/react-query'
import axiosInstanceWithToken from '../API/axiosInstance'

export default function useCart() {

    const getCartItems = async () => {
        const response = await axiosInstanceWithToken.get(`/Carts`);
        return response.data;
    }
    return useQuery({
        queryKey: ['cart', 'en'],
        queryFn: getCartItems,
        staleTime: 1000 * 60 * 5,
    });
}
