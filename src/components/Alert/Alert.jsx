import React from "react";
import { Alert, Box, Collapse, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CustomAlert({ open, setOpen, message, severity = "success" }) {
    return (
        <Collapse in={open}>
            <Box sx={{ display: "flex", justifyContent: "center", px: 2, mb: 2 }}>
                <Alert
                    severity={severity}
                    action={
                        <IconButton
                            size="small"
                            onClick={() => setOpen(false)}
                            sx={{
                                color: "black",
                                "&:hover": {
                                    bgcolor: "rgba(0,0,0,0.05)",
                                },
                            }}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }
                    sx={{
                        width: "100%",
                        maxWidth: 700,
                        bgcolor: "#fafafa",
                        color: "black",
                        border: "1px solid #e0e0e0",
                        borderRadius: 1,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                        alignItems: "center",

                        "& .MuiAlert-icon": {
                            color: "black",
                        },

                        "& .MuiAlert-message": {
                            fontSize: "0.8rem",
                            letterSpacing: 0.5,
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "0.8rem",
                            fontWeight: 500,
                        }}
                    >
                        {message}
                    </Typography>
                </Alert>
            </Box>
        </Collapse>
    );
}