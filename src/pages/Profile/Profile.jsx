import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Outlet, useNavigate } from 'react-router'
import { Link } from 'react-router'
import useProfile from '../../hooks/useProfile'
import { useTranslation } from 'react-i18next'
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import DarkModeIcon from "@mui/icons-material/DarkMode";



export default function Profile() {
    const { data } = useProfile();
    const navigate = useNavigate();

    const { t } = useTranslation()
    const hour = new Date().getHours();

    let greeting;
    let GreetingIcon;

    if (hour < 12) {
        greeting = t("Good Morning");
        GreetingIcon = WbSunnyIcon;
    } else if (hour < 18) {
        greeting = t("Good Afternoon");
        GreetingIcon = WbTwilightIcon;
    } else {
        greeting = t("Good Evening");
        GreetingIcon = DarkModeIcon;
    }

    return (
        <Box sx={{ padding: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <GreetingIcon sx={{ fontSize: 22, color: "text.secondary", }} />
                <Typography sx={{ fontWeight: "bolder", fontSize: "20px", }}>{greeting}, {data?.fullName}</Typography>
            </Box>
            <Box sx={{ m: 4, display: "flex", gap: 2 }}>
                <Button variant="outlined" onClick={() => navigate("")} sx={{ px: 4, py: 1, color: "text.primary", borderColor: "black", "&:hover": { borderColor: "black", bgcolor: "#f5f5f5", }, }}>
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
