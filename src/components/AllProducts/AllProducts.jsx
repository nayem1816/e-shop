import React from 'react';
import productsData from './../../services/data/productsData';
import ProductCard from './../Card/ProductCard/ProductCard';

const AllProducts = () => {
    return (
        <div className="">
            <div className="bg-black">
                <div className="all-product-heading py-20">
                    <h2 className="text-2xl text-white text-center">
                        All Products
                    </h2>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 my-12">
                    {productsData.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
