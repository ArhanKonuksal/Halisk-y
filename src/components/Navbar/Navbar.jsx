import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/Beykoy_Logo.png';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const changeColor = () => {
            setScroll(window.scrollY >= 100);
        };

        window.addEventListener('scroll', changeColor);

        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <nav className={scroll ? 'navbar scrolled' : 'navbar'}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={() => setClick(false)}>
                    <img src={logo} alt="Beyköy Süt Ürünleri" className="navbar-icon" />
                    Beyköy Süt Ürünleri
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes className="menu-icon-close" /> : <FaBars className="menu-icon-bars" />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/Ürünlerimiz" className="nav-links" onClick={() => setClick(false)}>
                            Ürünlerimiz
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Hakkımızda" className="nav-links" onClick={() => setClick(false)}>
                            Hakkımızda
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/İletişim" className="nav-links" onClick={() => setClick(false)}>
                            İletişim
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;