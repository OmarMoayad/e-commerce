import React from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../../hooks/useProduct'
import { CircularProgress, Typography, Button, Box } from '@mui/material'
import { Card, CardMedia, CardContent, Grid } from '@mui/material'
import useAddtoCart from '../../hooks/useAddtoCart'
import StarIcon from '@mui/icons-material/Star'
import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Rating } from "@mui/material";
import useAddReview from '../../hooks/useAddReview'
import { useTranslation } from "react-i18next";
import CustomAlert from '../../components/Alert/Alert';


export default function ProductDetails() {
    const { mutate: addReview } = useAddReview();
    const { t } = useTranslation();

    const { id } = useParams();
    const { data, isLoading, isError, error } = useProduct(id);
    const { mutate: addToCart } = useAddtoCart();
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [alertState, setAlertState] = useState({ open: false, message: "", severity: "success" });

    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false);
        setRating(0);
        setComment("");
    };

    const handleReviewSubmit = () => {
        addReview(
            { productId: data.response.id, rating, comment },
            {
                onSuccess: () => {
                    setAlertState({ open: true, message: t("Review added successfully"), severity: "success" });
                    handleClose();
                },
                onError: (err) => {
                    setAlertState({
                        open: true,
                        message: err.response?.data?.message || t("Failed to add review"),
                        severity: "error",
                    });
                    handleClose();
                },
            }
        );
    };

    if (isLoading) {
        return <CircularProgress />
    }
    if (isError) {
        return (
            <CustomAlert
                open={isError}
                setOpen={() => {}}
                message={`Error: ${error.message}`}
                severity="error"
            />
        );
    }
    return (
        <>
            <CustomAlert
                open={alertState.open}
                setOpen={(val) => setAlertState((prev) => ({ ...prev, open: val }))}
                message={alertState.message}
                severity={alertState.severity}
            />
            <Grid container spacing={6} sx={{ maxWidth: 1400, mx: "auto", py: 6, px: 3, alignItems: "flex-start", }}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card elevation={0} sx={{ borderRadius: 4, display: "flex", justifyContent: "center", p: 4, }}>
                        <CardMedia component="img" image={data.response.image} alt={data.response.name} sx={{ width: "100%", maxHeight: 600, objectFit: "contain", }} />
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 2 }}> {data.response.category} </Typography>
                    <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, }}>{data.response.name}</Typography>
                    <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, }}>${data.response.price}</Typography>
                    <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.8, }}> {data.response.description} </Typography>

                    <Button variant="contained" size="large" fullWidth sx={{ color:"white", py: 1.6, borderRadius: 1, bgcolor: "black", "&:hover": { bgcolor: "#222", }, }} onClick={() => addToCart({ productId: data.response.id, count: 1, })}>
                        {t("Add to Cart")}
                    </Button>
                </Grid>
            </Grid>


            <Grid container sx={{ maxWidth: 1400, mx: "auto", px: 3, pb: 8, }}>
                <Grid size={12} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, }}>
                    <Box>
                        <Typography variant="h4" fontWeight="bold">
                            {t("Client Reviews")}
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                            {'★'.repeat(Math.round(data.response.rate || 0))}{'☆'.repeat(5 - Math.round(data.response.rate || 0))}
                            <Typography> {t("based on")} {data.response.reviews.length} {t("reviews")}</Typography>
                        </Box>
                    </Box>

                    <Button variant="outlined" onClick={handleOpen} sx={{ px: 4, py: 1, color: "text.primary", borderColor: "black", "&:hover": { borderColor: "black", bgcolor: "#f5f5f5", }, }}>
                        {t("Write a Review")}
                    </Button>
                </Grid>
                <Grid container spacing={4}>
                    {data.response.reviews.map((user) => (
                        <Grid key={user.id} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card elevation={1} sx={{ height: "100%", borderRadius: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                                        {user.userName}
                                    </Typography>

                                    <Typography sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
                                        {user.rating}<StarIcon fontSize="small" sx={{ color: "#ffc107" }} />
                                    </Typography>

                                    <Typography color="text.secondary">
                                        {user.comment}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ fontWeight: "bold" }}>{t("Write a Review")}</DialogTitle>
                <DialogContent>
                    <Box sx={{ mt: 2 }}>
                        <Typography sx={{ mb: 1 }}>{t("Rating")}</Typography>
                        <Rating value={rating} precision={1} onChange={(event, newValue) => { setRating(newValue);}}/>
                    </Box>

                    <TextField fullWidth multiline rows={5} label="Comment" value={comment} onChange={(e) => setComment(e.target.value)} sx={{ mt: 3 }} />
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                    <Button sx={{ px: 4, py: 1, color: "text.primary", borderColor: "black", "&:hover": { borderColor: "black", bgcolor: "#f5f5f5", } }} variant="outlined" onClick={handleClose}>{t("Cancel")}</Button>
                    <Button sx={{ px: 4, py: 1, color: "text.primary", borderColor: "black", "&:hover": { borderColor: "black", bgcolor: "#f5f5f5", } }} variant="outlined" onClick={handleReviewSubmit}>
                        {t("Submit Review")}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
};