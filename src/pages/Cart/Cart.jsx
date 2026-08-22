import React from 'react'
import useAuthStore from '../../auth/useAuthStore';
import { Navigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { CircularProgress, Typography, Box, Button } from '@mui/material';
import useUpdateCart from '../../hooks/useUpdateCart';
import useRemovefromCart from '../../hooks/useRemovefromCart';
import useClearCart from '../../hooks/useClearCart';
import { Link } from 'react-router-dom';
import { Card, CardContent, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import CustomAlert from '../../components/Alert/Alert';



export default function Cart() {
  const { t } = useTranslation();
  const { data, isLoading, isError, error } = useCart();
  const { mutate: updateCart, isPending: updatePending } = useUpdateCart();
  const { mutate: removeFromCart, isPending: removePending } = useRemovefromCart();
  const { mutate: clearCart, isPending: clearPending } = useClearCart();

  if (isLoading) return <CircularProgress />
  if (isError) return (
    <CustomAlert
      open={isError}
      setOpen={() => {}}
      message={error.message}
      severity="error"
    />
  );
  if (data.items.length === 0)
    return (
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h4" mb={2}>
          {t("Your cart is empty")}
        </Typography>
        <Button component={Link} to="/products" variant="contained" sx={{ color: "#fff", bgcolor: "black", "&:hover": { bgcolor: "#222" }, }}>
          {t("Continue Shopping")}
        </Button>
      </Box>
    );

  return (
    <Box sx={{ maxWidth: 1400, mx: "auto", px: 4, py: 6, }}>
      <Typography variant="h3" fontWeight="bold" mb={1}>
        {t("Your Shopping Bag")}
      </Typography>

      <Button component={Link} to="/" sx={{ color: "text.primary", textTransform: "uppercase", letterSpacing: 1, mb: 5, }}>
        {t("Continue Shopping")}
      </Button>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" }, gap: 5, }}>
        <Box>
          {data.items.map((item) => (
            <Card key={item.productId} elevation={0} sx={{ mb: 3, borderRadius: 3, border: "1px solid", borderColor: "divider", }}>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 3, }}>
                  <Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {item.productName}
                    </Typography>

                    <Typography color="text.secondary">
                      ${item.price}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" mt={1}>
                      {t("Total")}: ${item.totalPrice}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
                    <Button variant="outlined" sx={{ color: "text.primary", borderColor: "black", "&:hover": { bgcolor: "#222" }, }} onClick={() => updateCart({ cartItemId: item.productId, quantity: item.count - 1, })}>
                      −
                    </Button>

                    <Typography sx={{ width: 30, textAlign: "center", }}>
                      {item.count}
                    </Typography>

                    <Button variant="outlined" sx={{ color: "text.primary", borderColor: "black", "&:hover": { bgcolor: "#222" }, }}  onClick={() => updateCart({ cartItemId: item.productId, quantity: item.count + 1, })}>
                      +
                    </Button>

                    <Button color="error" onClick={() => removeFromCart(item.productId)}>
                      {t("Remove")}
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Card elevation={0} sx={{ p: 3, borderRadius: 3, border: "1px solid", borderColor: "divider", height: "fit-content", position: "sticky", top: 100, }}>
          <Typography variant="h5" fontWeight="bold" mb={4}>
            {t("Order Summary")}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, }}>
            <Typography>{t("Subtotal")}</Typography>
            <Typography>${data.cartTotal}</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, }}>
            <Typography>{t("Shipping")}</Typography>
            <Typography color="success.main">{t("Complimentary")}</Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4, }}>
            <Typography variant="h6" fontWeight="bold">{t("Total")}</Typography>
            <Typography variant="h6" fontWeight="bold">${data.cartTotal}</Typography>
          </Box>

          <Button component={Link} to="/checkout" variant="contained" fullWidth sx={{ color: "#fff", py: 1.5, bgcolor: "black", "&:hover": { bgcolor: "#222" }, mb: 2, }}>
            {t("Proceed to Checkout")}
          </Button>

          <Button onClick={() => clearCart()} color="error" fullWidth>{t("Clear Cart")}</Button>
        </Card>
      </Box>
    </Box>
  );
}