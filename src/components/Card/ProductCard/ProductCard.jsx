import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/features/cartSlice';

const ProductCard = ({ product }) => {
    const { id, image, name, price } = product;

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="bg-white rounded-lg shadow-lg text-center py-2 px-1">
            <Link to={`/product/${id}`}>
                <img
                    src={image}
                    alt={name}
                    className="w-full h-56 rounded-t-lg"
                />
            </Link>

            <Link to={`/product/${id}`}>
                <h3 className="text-center text-lg font-bold my-2">{name}</h3>
            </Link>
            <h2 className="text-center text-2xl font-bold my-2">{price} $</h2>
            <div className="grid grid-cols-2 gap-1">
                <Link to={`/product/${id}`} className="w-full">
                    <button className="bg-cyan-500 hover:bg-black text-white font-bold py-2 px-1 rounded mt-2 inline-flex duration-500 text-sm w-full justify-center">
                        View Product
                    </button>
                </Link>
                <button
                    onClick={() => handleAddToCart()}
                    className="bg-cyan-500 hover:bg-black text-white font-bold py-2 px-1 rounded mt-2 inline-flex duration-500 text-sm w-full justify-center"
                >
                    <FaCartPlus className="mr-2 text-xl" /> Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
