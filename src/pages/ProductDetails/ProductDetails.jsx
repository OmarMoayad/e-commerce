import React from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../../hooks/useProduct'
import { CircularProgress, Typography, Button, Box } from '@mui/material'
import { Card, CardMedia, CardContent, Grid } from '@mui/material'
import useAddtoCart from '../../hooks/useAddtoCart'
import StarIcon from '@mui/icons-material/Star'

export default function ProductDetails() {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useProduct(id);
    const { mutate: addToCart } = useAddtoCart();
    console.log(data);


    if (isLoading) {
        return <CircularProgress />
    }
    if (isError) {
        return <Typography color="error">Error: {error.message}</Typography>
    }
    return (
        <>
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

                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{
                            py: 1.6,
                            borderRadius: 1,
                            bgcolor: "black",
                            "&:hover": {
                                bgcolor: "#222",
                            },
                        }}
                        onClick={() =>
                            addToCart({
                                productId: data.response.id,
                                count: 1,
                            })
                        }
                    >
                        ADD TO CART
                    </Button>
                </Grid>
            </Grid>


            <Grid container sx={{ maxWidth: 1400, mx: "auto", px: 3, pb: 8, }}>
                <Grid size={12} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, }}>
                    <Box>
                        <Typography variant="h4" fontWeight="bold">
                            Client Reviews
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                            {'★'.repeat(Math.round(data.response.rate || 0))}{'☆'.repeat(5 - Math.round(data.response.rate || 0))}  
                            <Typography> based on {data.response.reviews.length} reviews</Typography>
                        </Box>
                    </Box>

                    <Button
                        variant="outlined"
                        sx={{ px: 4, py: 1, color: "black", borderColor: "black", "&:hover": { borderColor: "black", bgcolor: "#f5f5f5", } }}>
                        Write a Review
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
        </>
    )
};