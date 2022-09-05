import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eShopLogo from '../../images/Logo/e-shop-logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

const Header = () => {
    const [login, setLogin] = useState(false);

    const handleLogin = () => {
        setLogin(!login);
    };

    const totalCart = useSelector((state) => state.cartReducer.cart.length);

    return (
        <Navbar className="container" rounded={true}>
            <Navbar.Brand href="/">
                <img className="h-16 inline" src={eShopLogo} alt="logo" />
            </Navbar.Brand>
            <div className="flex md:order-2 gap-3">
                {login === false ? (
                    <button
                        onClick={handleLogin}
                        className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-5 hover:bg-cyan-500 rounded"
                    >
                        LOGIN
                    </button>
                ) : (
                    <div className="flex gap-3 items-center">
                        <Link
                            className="text-2xl hover:text-cyan-500 duration-500 flex items-center "
                            to="/cart"
                        >
                            <FaShoppingCart />
                            <span>
                                <sup className="text-xs ml-1">{totalCart}</sup>
                            </span>
                        </Link>

                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={
                                <Avatar
                                    alt="User settings"
                                    img="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    rounded={true}
                                />
                            }
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    Md Nayem Hossain
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    name@gmail.com
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={handleLogin}>
                                Sign out
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                )}
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="/" active={true}>
                    <span className="text-lg hover:text-cyan-500 duration-500">
                        Home
                    </span>
                </Navbar.Link>
                <Navbar.Link href="/all-products">
                    <span className="text-lg hover:text-cyan-500 duration-500">
                        All Products
                    </span>
                </Navbar.Link>
                <Navbar.Link href="/shirt">
                    <span className="text-lg hover:text-cyan-500 duration-500">
                        Shirts
                    </span>
                </Navbar.Link>
                <Navbar.Link href="/polo">
                    <span className="text-lg hover:text-cyan-500 duration-500">
                        Polo
                    </span>
                </Navbar.Link>
                <Navbar.Link href="/jacket">
                    <span className="text-lg hover:text-cyan-500 duration-500">
                        Jacket
                    </span>
                </Navbar.Link>
                <Navbar.Link href="/pant">
                    <span className="text-lg hover:text-cyan-500 duration-500">
                        Pant
                    </span>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
