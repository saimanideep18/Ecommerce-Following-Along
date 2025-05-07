import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';

const Payment = () => {
    const [totalAmount,setTotalAmount]=useState(0);
    const navigate = useNavigate();

    useEffect(()=>{
        if(navigate.state && navigate.state.payment){
            setTotalAmount(navigate.state.payment);
        }
    })
  return (
    <div>
      <h1>Payment Successfull for {totalAmount} Rupees</h1>
    </div>
  )
}

export default Payment
