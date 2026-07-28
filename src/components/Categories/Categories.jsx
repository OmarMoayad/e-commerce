import React, { useEffect } from 'react'
import axiosInstance from '../../API/axiosInstance'
import { useQuery } from '@tanstack/react-query'
import { CircularProgress, Typography ,Box} from '@mui/material'
import useCategories from '../../hooks/useCategories'



export default function Categories() {
    const { data, isLoading, isError, error } = useCategories();

    if (isLoading) {
        return <CircularProgress />
    }
    if (isError) {
        return <Typography color="error">Error: {error.message}</Typography>
    }

    return (
        <>
            {data.response.data.map((category) => (
                <Box key={category.id}>
                    <Typography variant="h5">{category.name}</Typography>
                </Box>
            ))}
        </>
    )
}