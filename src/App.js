import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AllProducts from './components/AllProducts/AllProducts';
import Shirt from './components/Shirts/Shirt';
import Polo from './components/Polo/Polo';
import Jacket from './components/Jacket/Jacket';
import Pant from './components/Pants/Pant';
import Footer from './components/Footer/Footer';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Cart from './components/Cart/Cart';

function App() {
    return (
        <div
            style={{ height: '100vh' }}
            className="main grid grid-cols-1 content-between"
        >
            <div className="">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/all-products" element={<AllProducts />} />
                    <Route path="/shirt" element={<Shirt />} />
                    <Route path="/polo" element={<Polo />} />
                    <Route path="/jacket" element={<Jacket />} />
                    <Route path="/pant" element={<Pant />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    );
}

export default App;
