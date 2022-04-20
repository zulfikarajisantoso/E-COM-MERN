import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import {useHistory } from 'react-router-dom'

const key = "pk_test_51JxnZ7IUgXLU4As3EbgcxydveBrKRed3vUboDr4LlV2lCHR2QEVDHwyidNZFPzhjsgWk9kOCI2RozaabHYHIg9hi00ILp7I4mO"
const Pay = () => {

    const [stripetoken, setstripetoken] = useState(null)
    const history = useHistory()

    const onToken = (token) => {
        setstripetoken(token);
    }

    useEffect(() => {
        
        const makerq =  async () => {
            try {
                const res = axios.post('http://localhost:5000/api/checkout/payment', {
                    tokenId: stripetoken.id, 
                    amount: 2000
                })
                history.push('/success')
            } catch (error) {
                console.log(error);
            }
        }
        stripetoken && makerq
    }, [stripetoken, history])
    

  return (
    <div className="flex justify-center">
      <StripeCheckout
        name="Tounbasok"
        billingAddress
        shippingAddress
        description="Your total is $21"
        amount={2000}
        token={onToken}
        stripeKey={key}
      >
        <button>Pay</button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
