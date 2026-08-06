import React from 'react'
import useAuthStore from '../../auth/useAuthStore';
import { Navigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { CircularProgress, Typography,Box ,Button } from '@mui/material';
import useUpdateCart from '../../hooks/useUpdateCart';
import useRemovefromCart from '../../hooks/useRemovefromCart';
import useClearCart from '../../hooks/useClearCart';


export default function Cart() {
  const { data, isLoading, isError, error } = useCart();
  const { mutate: updateCart ,isPending:updatePending } = useUpdateCart();
  const { mutate: removeFromCart ,isPending:removePending } = useRemovefromCart();
  const { mutate: clearCart ,isPending:clearPending } = useClearCart();

  if(isLoading) return <CircularProgress />
  if(isError) return <Typography color="error">{error.message}</Typography>
  if(data.items.length === 0) return <Typography variant="h6">No items in cart</Typography>
  console.log(data)

  return (
    <div>
      <Button variant="contained" color="error" onClick={() => clearCart()} >
        Clear Cart
      </Button>
      {data.items.map((item) => (
        console.log(item),
        <Box key={item.productId} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, margin: 2 }}>
          <Typography variant="h6">{item.productName}</Typography>
          <Typography variant="h6">{item.price}</Typography>
          <Button variant="outlined" color="primary" onClick={() => updateCart({ cartItemId: item.productId, quantity: item.count - 1 })} >
            -
          </Button>
          <Typography variant="h6">{item.count}</Typography>
          <Button variant="outlined" color="primary" onClick={() => updateCart({ cartItemId: item.productId, quantity: item.count + 1 })} >
            +
          </Button>
          <Button color="error" variant="contained" onClick={() => removeFromCart(item.productId)} >
            Remove
            </Button>
        </Box>
      ))}
    </div>
  )
}
