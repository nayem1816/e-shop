import React from 'react';
import { Link } from 'react-router-dom';
import eShopLogo from '../../images/Logo/e-shop-logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import navbarData from './../../services/data/navbarData';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../Login/firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const totalCart = useSelector((state) => state.cartReducer.cart.length);

    // path location for active link
    const path = window.location.pathname;

    if (
        path === '/dashboard' ||
        path === '/dashboard/orders' ||
        path === '/dashboard/inbox' ||
        path === '/dashboard/profile' ||
        path === '/dashboard/products'
    ) {
        return null;
    }

    const logout = () => {
        signOut(auth);
    };

    // if (loading) {
    //     return null;
    // }

    return (
        <Navbar className="container" rounded={true}>
            <Navbar.Brand href="/">
                <img className="h-16 inline" src={eShopLogo} alt="logo" />
            </Navbar.Brand>
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
                {user ? (
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={
                            <Avatar
                                alt="User settings"
                                img={
                                    user.photoURL ||
                                    'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                }
                                rounded={true}
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {user.displayName}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {user.email}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            <a className="w-full" href="/dashboard">
                                Dashboard
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a className="w-full" href="/dashboard">
                                Sittings
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            <a className="w-full" onClick={logout} href="/">
                                Sign out
                            </a>
                        </Dropdown.Item>
                    </Dropdown>
                ) : loading ? (
                    <div role="status">
                        <svg
                            className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-cyan-500"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    <Link to="/login">
                        <button
                            // onClick={handleLogin}
                            className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 hover:bg-cyan-500 rounded"
                        >
                            LOGIN
                        </button>
                    </Link>
                )}
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {navbarData.map((item) => (
                    <Navbar.Link key={item.id} href={item.path}>
                        <span className="text-lg hover:text-cyan-500 duration-500">
                            {item.title}
                        </span>
                    </Navbar.Link>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
