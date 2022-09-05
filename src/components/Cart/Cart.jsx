import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    clearCart,
    removeFromCart,
    updateCart,
} from '../../redux/features/cartSlice';

const Cart = () => {
    const cartData = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch();

    const totalQuantity = cartData.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = cartData.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handlePlusBtn = (id) => {
        dispatch(updateCart({ typeAction: 'plus', id }));
    };

    const handleMinusBtn = (id) => {
        dispatch(updateCart({ typeAction: 'minus', id }));
    };

    const handleRemoveBtn = (id) => {
        dispatch(removeFromCart({ id }));
    };

    const handleClearBtn = () => {
        dispatch(clearCart());
    };

    return (
        <div>
            <div className="container p-8 mx-auto mt-12 bg-white">
                {cartData.length > 0 ? (
                    <div className="w-full overflow-x-auto">
                        <div className="my-2">
                            <h3 className="text-xl font-bold tracking-wider">
                                Shopping Cart {cartData.length} item
                            </h3>
                        </div>
                        <table className="w-full shadow-inner">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-6 py-3 font-bold whitespace-nowrap">
                                        Product
                                    </th>
                                    <th className="px-6 py-3 font-bold whitespace-nowrap">
                                        Qty
                                    </th>
                                    <th className="px-6 py-3 font-bold whitespace-nowrap">
                                        Price
                                    </th>
                                    <th className="px-6 py-3 font-bold whitespace-nowrap">
                                        Remove
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartData.map((item) => (
                                    <tr key={item.id}>
                                        <td className="p-4 px-6 text-center whitespace-nowrap">
                                            {item.name}
                                        </td>
                                        <td className="p-4 px-6 text-center whitespace-nowrap">
                                            <div>
                                                <button
                                                    onClick={() =>
                                                        handleMinusBtn(item.id)
                                                    }
                                                    className="px-2 py-0 shadow"
                                                >
                                                    -
                                                </button>
                                                <button className="w-12 text-center bg-gray-100 outline-none cursor-text">
                                                    {item.quantity}
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlePlusBtn(item.id)
                                                    }
                                                    className="px-2 py-0 shadow"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-4 px-6 text-center whitespace-nowrap">
                                            ${item.price}
                                        </td>
                                        <td className="p-4 px-6 text-center whitespace-nowrap">
                                            <button
                                                onClick={() =>
                                                    handleRemoveBtn(item.id)
                                                }
                                                className="px-2 py-0 text-red-100 bg-red-600 rounded"
                                            >
                                                x
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                <tr>
                                    <td className="p-4 px-6 text-center whitespace-nowrap"></td>
                                    <td className="p-4 px-6 text-center whitespace-nowrap">
                                        <div className="font-bold">
                                            Total Qty - {totalQuantity}
                                        </div>
                                    </td>
                                    <td className="p-4 px-6 font-extrabold text-center whitespace-nowrap">
                                        Total - ${totalPrice}
                                    </td>
                                    <td className="p-4 px-6 text-center whitespace-nowrap">
                                        <button
                                            onClick={() => handleClearBtn()}
                                            className="px-4 py-1 text-red-600 bg-red-100"
                                        >
                                            Clear All
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-end mt-4 space-x-2">
                            <Link to="/all-products">
                                <button className="px-6 py-3 text-sm text-gray-800 bg-gray-200 hover:bg-gray-400">
                                    Continue Shopping
                                </button>
                            </Link>
                            <button className="px-6 py-3 text-sm text-gray-800 bg-gray-200 hover:bg-gray-400">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <h3 className="text-xl font-bold tracking-wider">
                            Your cart is empty
                        </h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
