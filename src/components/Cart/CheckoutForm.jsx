import React from 'react';
import { useStripe, CardElement, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/features/cartSlice';

const CheckoutForm = () => {
    const [cardError, setCardError] = React.useState(null);
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
        } else {
            if (paymentMethod) {
                navigate('/');
                setCardError(null);
                toast.success('Payment successful', {
                    position: 'top-center',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                dispatch(clearCart());
            }
        }

        if (cardError) {
            toast.error(cardError, {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };
    return (
        <div className="max-w-lg container mx-auto my-10">
            <h1 className="mb-5 text-center">
                <span className="text-2xl">Payment Details</span>
            </h1>

            <div class="p-6 max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                            for="cardNumber"
                        >
                            Card Number
                        </label>
                    </div>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button
                        className="bg-cyan-400 text-white duration-500 px-6 py-2 hover:bg-cyan-500 rounded mt-5"
                        type="submit"
                        disabled={!stripe}
                    >
                        Pay now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;
