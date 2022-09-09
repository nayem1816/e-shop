import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
    'pk_test_51IeGAtHCo9A7jy27XPZM9atry5oeYI1LTwoeWBTN27159qurEdhs2LWdPPdZnmqP5W2j9SrXoZpkahRHYslpplrb001U80gqHq'
);

const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
            <div className="hidden"></div>
        </div>
    );
};

export default Payment;
