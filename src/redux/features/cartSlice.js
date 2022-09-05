import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const id = action.payload.id;
            const isProductInCart = state.cart.find(
                (product) => product.id === id
            );

            if (isProductInCart) {
                alert('This product is already in your cart');
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        updateCart: (state, action) => {
            const id = action.payload.id;
            const isProductInCart = state.cart.find(
                (product) => product.id === id
            );

            const type = action.payload.typeAction;

            if (type === 'plus') {
                isProductInCart.quantity += 1;
            } else if (type === 'minus') {
                if (isProductInCart.quantity > 1) {
                    isProductInCart.quantity -= 1;
                } else {
                    alert('Quantity cannot be less than 1');
                }
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload.id;
            const isProductInCart = state.cart.find(
                (product) => product.id === id
            );

            if (isProductInCart) {
                state.cart = state.cart.filter((product) => product.id !== id);
            } else {
                alert('This product is not in your cart');
            }
        },
        clearCart: (state) => {
            state.cart = [];
        },
    },
});

export const { addToCart, updateCart, removeFromCart, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;
