import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eShopLogo from '../../images/Logo/e-shop-logo.png';
import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import { useEffect } from 'react';

const Header = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [login, setLogin] = useState(false);
    const [cart, setCart] = useState(0);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleLogin = () => {
        setLogin(!login);
    };

    useEffect(() => {
        setCart(cart);
    }, [cart]);

    return (
        <div className="navbar shadow bg-white">
            <div className="container mx-auto">
                <nav className="p-5 bg-white lg:flex lg:items-center lg:justify-between">
                    <div className="nav-logo mx-5 flex justify-between items-center">
                        <Link to="/" className="brand-logo">
                            <img
                                className="h-16 inline"
                                src={eShopLogo}
                                alt="logo"
                            />
                        </Link>
                        <span className="mobile-menu text-3xl cursor-pointer lg:hidden block mx-2">
                            {showMenu ? (
                                <HiMenu onClick={handleMenu} />
                            ) : (
                                <IoClose onClick={handleMenu} />
                            )}
                        </span>
                    </div>
                    <ul
                        className={`lg:flex lg:items-center z-[100] lg:z-auto lg:static absolute bg-white w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100 opacity-0 top-[-400] transition-all ease-in duration-500 ${
                            showMenu === false ? 'top-[80px] opacity-100' : ''
                        }`}
                    >
                        <li className="mx-5 my-6 lg:my-0">
                            <Link
                                className="text-xl hover:text-cyan-500 duration-500"
                                to="/"
                            >
                                HOME
                            </Link>
                        </li>
                        <li className="mx-5 my-6 lg:my-0">
                            <Link
                                className="text-xl hover:text-cyan-500 duration-500"
                                to="/all-products"
                            >
                                ALL PRODUCTS
                            </Link>
                        </li>
                        <li className="mx-5 my-6 lg:my-0">
                            <Link
                                className="text-xl hover:text-cyan-500 duration-500"
                                to="/shirt"
                            >
                                SHIRT
                            </Link>
                        </li>
                        <li className="mx-5 my-6 lg:my-0">
                            <Link
                                className="text-xl hover:text-cyan-500 duration-500"
                                to="/polo"
                            >
                                POLO
                            </Link>
                        </li>
                        <li className="mx-5 my-6 lg:my-0">
                            <Link
                                className="text-xl hover:text-cyan-500 duration-500"
                                to="/jacket"
                            >
                                JACKET
                            </Link>
                        </li>
                        <li className="mx-5 my-6 lg:my-0">
                            <Link
                                className="text-xl hover:text-cyan-500 duration-500"
                                to="/pant"
                            >
                                PANT
                            </Link>
                        </li>
                        {login === true && (
                            <li className="mx-5 my-6 lg:my-0">
                                <Link
                                    className="text-xl hover:text-cyan-500 duration-500"
                                    to="/dashboard"
                                >
                                    DASHBOARD
                                </Link>
                            </li>
                        )}
                        <li className="mx-5 my-6 lg:my-0">
                            <Link
                                className="text-xl hover:text-cyan-500 duration-500 flex items-center"
                                to="/cart"
                            >
                                <FaShoppingCart />
                                <span>
                                    <sup className="text-xs ml-1">{cart}</sup>
                                </span>
                            </Link>
                        </li>

                        {login === false ? (
                            <button
                                onClick={handleLogin}
                                className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-5 hover:bg-cyan-500 rounded"
                            >
                                LOGIN
                            </button>
                        ) : (
                            <div
                                onClick={handleLogin}
                                className="overflow-hidden"
                            >
                                <img
                                    className="inline-block mx-5 h-11 w-11 rounded-full ring-2 ring-white cursor-pointer"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
