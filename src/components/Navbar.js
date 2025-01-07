'use client';  // Marking this as a client-side component

import { useState } from 'react';
import './Navbar.css';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo">
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <Image
                        src="images/reglogo.svg"
                        alt="Logo"
                        width={0}
                        height={0}
                        style={{ width: 'auto', height: 'auto' }}
                    />
                </Link>
            </div>

            {/* Desktop Navbar: visible only on larger screens */}
            <div className="desktop-navbar hidden md:flex flex-grow justify-end items-center space-x-6">
                <Link href="/" className="tab">Home</Link>
                <a href="#" className="tab">Our Services</a>
                <a href="#" className="tab">Blog</a>
                <a href="#" className="tab">Contact Us</a>
                <button className="talk-expert-btn">Talk an Expert</button>
            </div>

            {/* Mobile Navbar: visible only on small screens */}
            <div className="mobile-navbar md:hidden flex justify-between items-center w-full">
                {/* Hamburger Menu */}
                <div className="hamburger" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                {/* Logo */}
                {/* <div className="logo">
                    <a href="/">Logo</a>
                </div> */}

                {/* Mobile Menu: show when hamburger is clicked */}
                {isMobileMenuOpen && (
                    <div className="mobile-menu absolute top-16 right-0 w-full bg-white shadow-lg p-4">
                        <Link href="/" className="tab">Home</Link>
                        <a href="#" className="tab">Our Services</a>
                        <a href="#" className="tab">Blog</a>
                        <a href="#" className="tab">Contact Us</a>
                        <button className="talk-expert-btn">Talk an Expert</button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
