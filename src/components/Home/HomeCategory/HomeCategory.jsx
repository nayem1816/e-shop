import React from 'react';
import categoryData from '../../../services/data/categoryData';
import { Link } from 'react-router-dom';
import './HomeCategory.css';

const HomeCategory = () => {
    return (
        <div className="my-10 container mx-auto">
            <h2 className="text-center font-bold text-6xl">
                This is what your shop could look <br /> like
            </h2>
            <p className="text-center lg:mx-20 mx-3 text-lg my-2">
                Here's how your homepage could look with this theme. On the
                homepage you can have image carrousels, featured products,
                videos, almost anything you want! For every theme, every single
                aspect can be swapped out to suit your brand, products and
                industry. Take a look around.
            </p>
            <div className="category my-10">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
                    {categoryData.map((data) => (
                        <div key={data.id} className="border p-2 rounded">
                            <span className="relative text-center text-white">
                                <img
                                    className="h-72 w-full"
                                    src={data.categoryImage}
                                    alt="IMG"
                                />
                                <div className="text-over-img">
                                    <h2 className="text-xl">
                                        <span className="bg-black p-1">
                                            {data.categoryName}
                                        </span>
                                    </h2>
                                    <Link to={`/${data.id}`}>
                                        <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-5 rounded mt-2">
                                            Discover Now
                                        </button>
                                    </Link>
                                </div>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeCategory;
