import React, { useEffect } from 'react'
import axiosInstance from '../../API/axiosInstance'
import { useQuery } from '@tanstack/react-query'
import { CircularProgress, Typography ,Box} from '@mui/material'



export default function Categories() {


    const getCategories = async () => {
        const response = await axiosInstance.get("/Categories")
        return response.data;
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
        staleTime: 1000 * 60 * 5
    })

    if (isLoading) {
        return <CircularProgress />
    }
    if (isError) {
        return <Typography color="error">Error: {error.message}</Typography>
    }

    return (
        <>
            {data.response.data.map((category) => (
                <Box>
                    <Typography variant="h5">{category.name}</Typography>
                </Box>
            ))}
        </>
    )
}
