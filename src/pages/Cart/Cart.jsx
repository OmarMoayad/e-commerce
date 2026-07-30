import React from 'react'
import useAuthStore from '../../auth/useAuthStore';
import { Navigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { CircularProgress, Typography,Box } from '@mui/material';


export default function Cart() {
  const { data, isLoading, isError, error } = useCart();
  if(isLoading) return <CircularProgress />
  if(isError) return <Typography color="error">{error.message}</Typography>
  if(data.items.length === 0) return <Typography variant="h6">No items in cart</Typography>
  console.log(data)

  return (
    <div>
      {data.items.map((item) => (
        <Box key={item.productId} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, margin: 2 }}>
          <Typography variant="h6">{item.productName}</Typography>
          <Typography variant="h6">{item.price}</Typography>
          <Typography variant="h6">{item.count}</Typography>
          <Typography variant="h6">{item.totalPrice}</Typography>
        </Box>
      ))}
    </div>
  )
}
