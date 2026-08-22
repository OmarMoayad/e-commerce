import React, { useState } from "react";
import { Box, Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem, Button, } from "@mui/material";
import useCheckout from "../../hooks/useCheckout";
import { useTranslation } from "react-i18next";
import CustomAlert from "../../components/Alert/Alert";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { mutate: checkout } = useCheckout();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("Visa");
  const [alertOpen, setAlertOpen] = useState(false);

  const handleCheckout = () => {
    checkout(
      { PaymentMethod: paymentMethod },
      {
        onSuccess: (data) => {
          if (paymentMethod === "Visa") {
            window.location.href = data.url;
          } else {
            setAlertOpen(true);
            setTimeout(() => navigate("/"), 2500);
          }
        },
      }
    );
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", py: 8, px: 3 }}>
      <Typography variant="p" fontWeight="bold" mb={5}>
        {t("Checkout")}
      </Typography>

      <CustomAlert
        open={alertOpen}
        setOpen={setAlertOpen}
        message={t("Order placed successfully")}
        severity="success"
      />

      <Card elevation={0} sx={{ border: "1px solid", borderColor: "divider", borderRadius: 3, mt: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="p" fontWeight="bold" mb={4}>
            {t("Payment Method")}
          </Typography>

          <FormControl fullWidth>
            <Select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <MenuItem value="Visa">{t("Visa")}</MenuItem>
              <MenuItem value="Cash">{t("Cash on Delivery")}</MenuItem>
            </Select>
          </FormControl>

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 5, py: 1.5, bgcolor: "text.primary", "&:hover": { bgcolor: "#222" } }}
            onClick={handleCheckout}
          >
            {t("Complete Order")}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}