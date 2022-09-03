import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const { id, image, name, price } = product;
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
            <Link to={`/product/${id}`} className="">
                <button className="bg-cyan-500 hover:bg-black text-white font-bold py-2 px-5 rounded mt-2 inline-flex duration-500">
                    <FaCartPlus className="mr-2 text-xl" /> View Product
                </button>
            </Link>
        </div>
    );
};

export default ProductCard;
