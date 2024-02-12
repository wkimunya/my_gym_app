import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
} from '@stripe/react-stripe-js';
import CheckoutForm from '../components/Checkout/CheckoutForm';


const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

const Checkout = () => {
  const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_P_KEY}`);
  // import meta.env.VITE_STRIPE_PK is the publishable key you can either directly paste your stripe key here but not recommending if you are planning to upload the code on github as it should remain only available to you or save the key in .env file
  
  return (
    <section className='h-screen flex justify-center items-center'>
      <div className="relative bg-gray-200 p-36 rounded-md justify-center flex">
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      </div>
    </section>
  );
}

export default Checkout