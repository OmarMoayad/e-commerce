import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Outlet, useNavigate } from 'react-router'
import { Link } from 'react-router'
import useProfile from '../../hooks/useProfile'
import { useTranslation } from 'react-i18next'



export default function Profile() {
    const { data } = useProfile();
    const navigate = useNavigate();

    const {t} = useTranslation()

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant='p' sx={{fontWeight:"bolder", fontSize:"20px", mb:"2px"}} >{t("Hello")} {data?.fullName} </Typography>
            <Box sx={{m:4,display:"flex",gap:2}}>
                <Button variant="outlined"  onClick={() => navigate("")}  sx={{ px: 4, py: 1, color: "text.primary", borderColor: "black", "&:hover": { borderColor: "black", bgcolor: "#f5f5f5", }, }}>
                    {t("Info")}
                </Button>

                <Button onClick={() => navigate("orders")} variant='outlined' sx={{ px: 4, py: 1, color: "text.primary", borderColor: "black", "&:hover": { borderColor: "black", bgcolor: "#f5f5f5", }, }}>{t("Orders")}</Button>

            </Box>
            <Box>
                <Outlet />
            </Box>
        </Box>
    )
}
