"use client"
import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* Logo */}
                <Link href="/" className="navbar-logo">
                SSA 
                </Link>

                {/* Desktop Menu */}
                <nav className="navbar-menu">
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#matches">Matches</a></li>
                        <li><a href="#programs">Programs</a></li>
                        <li><a href="#coaches">Coaches</a></li>
                        <li><a href="#amenities">Amenities</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#blogs">Blogs</a></li>
                    </ul>
                </nav>

                {/* Contact Button */}
                <button className="contact-btn">
                Contact Us
                </button>

                {/* Hamburger */}
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </div>

            </div>

            {/* Mobile & Tablet Menu */}
            <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
                <a href="#">About Us</a>
                <a href="#">Matches</a>
                <a href="#">Programs</a>
                <a href="#">Coaches</a>
                <a href="#">Amenities</a>
                <a href="#">Events</a>
                <a href="#">News</a>
                <a href="#">Blogs</a>
                <button>Contact Us</button>
            </div>
        </header>
    );
}