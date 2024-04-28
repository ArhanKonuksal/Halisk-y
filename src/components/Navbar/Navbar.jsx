import React, {useState, useEffect} from 'react'
import logo from "../../assets/Beykoy_Logo.png"
import { Link } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import "./Navbar.css"


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  
    const [setColor] = useState(false);
    
    useEffect(() => {
      const changeColor = () => {
        if (window.scrollY >= 100) {
          setColor(true);
        } else {
          setColor(false);
        }
      };

      if (typeof window!== 'undefined') {
        window.addEventListener("scroll", changeColor)
      }

      return () => {
        if (typeof window!== 'undefined') {
          window.removeEventListener("scroll", changeColor);
        }
      };
    }, []);


return (
  <div className='navbar'>
      <Link to="/">
      <img  className="photo-container" alt="logo" size="3px" src={logo}></img> 
      </Link>
      <ul className={click? "nav-menu active" : "nav-menu"}>
          <li>
              <Link to="/Ürünlerimiz">Ürünlerimiz</Link>
          </li>
          <li>
              <Link to="/Hakkımızda">Hakkımızda</Link>
          </li>
          <li>
              <Link to="/İletişim">İletişim</Link>
          </li>
      </ul>
      <div onClick={handleClick}>
          {click? (
              <FaTimes size={20} style={{color:
              "#fff"}}/>
              ):(<FaBars size={20} style={{color: "#fff"
           }} />
          )}
      </div>
  </div>
)
}

export default Navbar