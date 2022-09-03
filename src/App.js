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

function App() {
    return (
        <div className="main">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/shirt" element={<Shirt />} />
                <Route path="/polo" element={<Polo />} />
                <Route path="/jacket" element={<Jacket />} />
                <Route path="/pant" element={<Pant />} />
            </Routes>
        </div>
    );
}

export default App;
