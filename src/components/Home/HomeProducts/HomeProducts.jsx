import React from 'react';
import ProductCard from '../../Card/ProductCard/ProductCard';
import productsData from './../../../services/data/productsData';

const HomeProducts = () => {
    return (
        <div className="my-28 container mx-auto">
            <h2 className="text-center text-4xl font-bold">Popular Products</h2>
            <div className="grid grid-cols-5 gap-x-4 gap-y-10 my-12">
                {productsData.slice(0, 15).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomeProducts;
