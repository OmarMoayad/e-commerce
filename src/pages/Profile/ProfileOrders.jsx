import React from "react";
import {Box,Card,CardContent,Typography,Divider,Chip,} from "@mui/material";
import useProfile from "../../hooks/useProfile";
import { useTranslation } from "react-i18next";

export default function ProfileOrders() {
  const { data } = useProfile();
  const { t } = useTranslation();
console.log(data)
  return (
    <Box sx={{maxWidth: 900,mt: 4 ,mx:"auto"}}>
      <Typography variant="p" sx={{fontWeight: "bold", fontSize: 24, mb: 4}}>
        {t("Orders")}
      </Typography>

      {data?.orders?.length === 0 ? (
        <Typography variant="p" sx={{fontWeight: "bold", fontSize: 18, mb: 4}}>
          {t("No orders found.")}
        </Typography>
      ) : (
        data?.orders?.map((order) => (
          <Card key={order.id} elevation={0} sx={{mb: 3,border: "1px solid",borderColor: "divider",borderRadius: 3,}}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{display: "flex",justifyContent: "space-between",alignItems: "center",flexWrap: "wrap",gap: 2,mb: 3,}}>
                <Typography variant="p" sx={{fontWeight: "bold", fontSize: 24, mb: 4}}>
                  {t("Order #")} {order.id}
                </Typography>

                <Typography variant="p" sx={{fontWeight: "bold", fontSize: 24, mb: 4}}>
                  ${order.amountPaid}
                </Typography>
              </Box>

              <Divider sx={{ mb: 3 }} />

              <Box sx={{display: "grid",gridTemplateColumns: {xs: "1fr",sm: "1fr 1fr",},gap: 3,}}>
                <Box>
                  <Typography variant="p" sx={{fontWeight: "bold", fontSize: 24, mb: 4}}>
                    {t("Payment Status")}
                  </Typography>

                  <Box mt={1}>
                    <Chip label={order.paymentStatus} color={order.paymentStatus === 'paid'?"success":"warning"} size="small"/>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="p" sx={{fontWeight: "bold", fontSize: 24, mb: 4}}>
                    {t("Order Status")}
                  </Typography>

                  <Box mt={1}>
                    <Chip label={order.status} color={order.status === "3"?"success":order.status === "Active"?"primary": "success"} size="small"/>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="p" sx={{fontWeight: "bold", fontSize: 24, mb: 4}}>
                    {t("Order Date")}
                  </Typography>

                  <Typography mt={1}>
                    {new Date(order.orderDate).toLocaleDateString()}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="p" sx={{fontWeight: "bold", fontSize: 24, mb: 4}}>
                    {t("Amount Paid")}
                  </Typography>

                  <Box mt={1}>
                    <Typography  variant="p" >
                      ${order.amountPaid}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
}