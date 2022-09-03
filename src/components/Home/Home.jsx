import React from 'react';
import HomeSlider from './HomeSlider/HomeSlider';
import HomeCategory from './HomeCategory/HomeCategory';
import HomeProducts from './HomeProducts/HomeProducts';

const Home = () => {
    return (
        <>
            <HomeSlider />
            <HomeCategory />
            <HomeProducts />
        </>
    );
};

export default Home;
