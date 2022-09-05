import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from './../../services/data/productsData';
import ReactStarsRating from 'react-awesome-stars-rating';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { BsBookmarkHeart } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cartSlice';

const SingleProduct = () => {
    const productId = useParams().id;
    const product = productsData.find(
        (product) => parseInt(product.id) === parseInt(productId)
    );
    const { image, name, price, description, rating, quantity } = product;

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <>
            <div className="bg-black">
                <div className="py-10">
                    <h2 className="text-2xl text-white text-center">
                        Product Details
                    </h2>
                </div>
            </div>
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt="IMG"
                        className="lg:w-1/2 w-full lg:h-auto h-64 border rounded"
                        src={image}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">
                            ON SALE
                        </h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                            {name}
                        </h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <span className="text-gray-600 text-xl flex gap-2">
                                    <ReactStarsRating
                                        className="flex"
                                        value={rating}
                                        isEdit={false}
                                        isHalf={false}
                                    />
                                    {rating}
                                </span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s gap-3">
                                <a href="/" className="text-gray-500">
                                    <BsFacebook className="text-xl" />
                                </a>
                                <a href="/" className="text-gray-500">
                                    <BsInstagram className="text-xl" />
                                </a>
                                <a href="/" className="text-gray-500">
                                    <BsYoutube className="text-xl" />
                                </a>
                            </span>
                        </div>
                        <p className="leading-relaxed">{description}</p>
                        <h2 className="my-2">
                            <b className="title-font text-xl text-gray-900">
                                Remaining:
                            </b>
                            <span className="ml-2">{quantity}</span>
                        </h2>
                        <div className="flex items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <IoIosArrowDown className="text-xl" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="title-font font-medium text-2xl text-gray-900">
                                ${price}
                            </span>
                            <button
                                onClick={() => handleAddToCart()}
                                className="flex ml-auto text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded"
                            >
                                Add to cart
                            </button>
                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <BsBookmarkHeart className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;
