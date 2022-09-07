import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eShopLogo from '../../images/Logo/e-shop-logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import navbarData from './../../services/data/navbarData';

const Header = () => {
    const [login, setLogin] = useState(false);

    const handleLogin = () => {
        setLogin(!login);
    };
    const totalCart = useSelector((state) => state.cartReducer.cart.length);

    return (
        <Navbar className="container" rounded={true}>
            {/* <Navbar.Brand href="/"> */}
            <Link to="/">
                <img className="h-16 inline" src={eShopLogo} alt="logo" />
            </Link>
            {/* </Navbar.Brand> */}
            <div className="flex md:order-2 gap-4">
                <Link
                    className="text-2xl text-cyan-500 hover:text-cyan-700 duration-500 
                            flex items-center"
                    to="/cart"
                >
                    <FaShoppingCart />
                    <span>
                        <sup className="text-[16px] text-cyan-900">
                            ({totalCart})
                        </sup>
                    </span>
                </Link>
                {login === false ? (
                    <button
                        onClick={handleLogin}
                        className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 hover:bg-cyan-500 rounded"
                    >
                        LOGIN
                    </button>
                ) : (
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
                )}
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {navbarData.map((item) => (
                    <Navbar.Link key={item.id} href={item.path}>
                        {/* <Link to={item.path} key={item.id}> */}
                        <span className="text-lg hover:text-cyan-500 duration-500">
                            {item.title}
                        </span>
                        {/* </Link> */}
                    </Navbar.Link>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
