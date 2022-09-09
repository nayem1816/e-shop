import React from 'react';
import {
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsDribbble,
    BsYoutube,
} from 'react-icons/bs';

const Footer = () => {
    let year = new Date().getFullYear();
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
    return (
        <div>
            <footer className="text-center text-white bg-black">
                <div className="footer-icon flex justify-center gap-5 py-8">
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center"
                    >
                        <BsFacebook className="text-white" />
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center"
                    >
                        <BsInstagram className="text-white" />
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center"
                    >
                        <BsTwitter className="text-white" />
                    </a>
                    <a
                        href="https://dribbble.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center"
                    >
                        <BsDribbble className="text-white" />
                    </a>
                    <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center"
                    >
                        <BsYoutube className="text-white" />
                    </a>
                </div>
                <hr className="" />
                <div className="footer-bottom py-6">
                    <p className="text-sm">
                        &copy; {year} All Rights Reserved. Designed by{' '}
                        <a
                            href="https://dev-nym.web.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                        >
                            Md Nayem Hossain
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
