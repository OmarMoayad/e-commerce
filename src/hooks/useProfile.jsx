import { useQueryClient, useQuery } from '@tanstack/react-query'
import axiosInstanceWithToken from '../API/axiosInstance'

export default function useProfile() {
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            const response = await axiosInstanceWithToken.get("/Profile");
            return response.data;
        }
    })
}
