import React from 'react'
import useCheckout from '../../hooks/useCheckout'
import { Box } from '@mui/material'
import { useState } from 'react'

export default function Checkout() {
    const { mutate: checkout } = useCheckout();
    const [paymentMethod, setPaymentMethod] = useState('Visa');
  return (
    <div className='checkout'>
        <h2>Checkout</h2>
        <Box>
            <label>Payment Method</label>
            <select name="PaymentMethod" id="PaymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="Visa">Visa</option>
                <option value="CashOnDelivery">Cash on delivery</option>
            </select>
            <button onClick={() => checkout({PaymentMethod: paymentMethod})}>Checkout</button>
        </Box>
    </div>
  )
}
