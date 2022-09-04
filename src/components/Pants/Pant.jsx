import React from 'react';
import ProductCard from './../Card/ProductCard/ProductCard';
import productsData from './../../services/data/productsData';

const Pant = () => {
    const filteredProducts = productsData.filter(
        (product) => product.category === 'pant'
    );
    return (
        <>
            <div className="bg-black">
                <div className="py-20">
                    <h2 className="text-2xl text-white text-center">Polo</h2>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 my-12">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Pant;
