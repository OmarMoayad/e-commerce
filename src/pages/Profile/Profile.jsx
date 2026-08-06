import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Outlet, useNavigate } from 'react-router'
import { Link } from 'react-router'
import useProfile from '../../hooks/useProfile'



export default function Profile() {
    const { data } = useProfile();
    console.log(data);
        const navigate = useNavigate();

  return (
<Box sx={{ padding: 2 }}>


    <Typography variant='h4'>Profile {data?.name} </Typography>

    <Box>
        <Button onClick={() => navigate("")} variant='contained'>Info</Button>
        <Button onClick={() => navigate("orders")} variant='contained'>Orders</Button>
        
    </Box>
    <Box>
        <Outlet />
    </Box>
</Box>
)
}
