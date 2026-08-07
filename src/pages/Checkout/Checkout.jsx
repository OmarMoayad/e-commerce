import React, { useState } from "react";
import { Box, Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem, Button, } from "@mui/material";
import useCheckout from "../../hooks/useCheckout";
import { useTranslation } from "react-i18next";

export default function Checkout() {
  const { mutate: checkout } = useCheckout();
  const {t} = useTranslation();

  const [paymentMethod, setPaymentMethod] = useState("Visa");

  return (
    <Box sx={{maxWidth: 600,mx: "auto",py: 8,px: 3,}}>
      <Typography variant="p"fontWeight="bold" mb={5}> {t("Checkout")} </Typography>

      <Card elevation={0}sx={{border: "1px solid",borderColor: "divider",borderRadius: 3,}}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="p"fontWeight="bold" mb={4}> {t("Payment Method")} </Typography>

          <FormControl fullWidth>
            <Select value={paymentMethod}onChange={(e) => setPaymentMethod(e.target.value)}>
              <MenuItem value="Visa">{t("Visa")} </MenuItem>

              <MenuItem value="CashOnDelivery"> {t("Cash on Delivery")} </MenuItem>
            </Select>
          </FormControl>

          <Button fullWidth variant="contained" sx={{mt: 5,py: 1.5,bgcolor: "text.primary","&:hover": {bgcolor: "#222"},}}onClick={() =>checkout({PaymentMethod: paymentMethod,})}> {t("Complete Order")} </Button>
        </CardContent>
      </Card>
    </Box>
  );
}