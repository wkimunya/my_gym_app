import React, { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

 const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (elements == null || stripe == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError?.message) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch('https://4b4f7gqeh9.us.aircode.run/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'usd',
        email: emailInput,
        amount:  100,
        paymentMethodType: "card"
      }),
    });
    
    const { client_secret: clientSecret } = await res.json();

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/home`,
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
      console.log('Here', error.message)
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit} className='px-4'>
      <h2 className=" text-[3rem] font-bold">Get Started Now</h2>
      <div className='mb-3'>
        <label htmlFor="email-input" className="block text-gray-800 font-bold text-xl mb-2" >Email</label>
        <div>
          <input value={emailInput} className=' p-3 w-full bg-[#fff] rounded-[5px] border border-[#e6e6e6] box-shadow-custom h-16' onChange={(e => setEmailInput(e.target.value))} type="email" id="email-input" placeholder='johndoe@gmail.com'  />
        </div>
      </div>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !elements} className="bg-indigo-500 hover:bg-indigo-700 text-white text-2xl w-full h-20  font-bold py-2 px-4 rounded-xl mt-10 focus:outline-none focus:shadow-outline">
        {isLoading ? 'Processing':'Pay'}
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm