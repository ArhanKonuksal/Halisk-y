import "./Navbar.css"

import logo from "../../assets/Beykoy_Logo.png"
import React, {useState} from 'react'
import { Link } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [color, setColor] = useState(false)
  const changeColor = () => {
      if (window.scrollY >= 100) {setColor(true)} else {
          setColor(false)
  }
}

  window.addEventListener("scroll", changeColor)

return (
  <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
      <img alt="logo" size="3px" src={logo}></img> 
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
              <Link to="/ana-sayfa">Ana Sayfa</Link>
          </li>
          <li>
              <Link to="/hizmetler">Hizmetler</Link>
          </li>
          <li>
              <Link to="/hakkımızda">Hakkımızda</Link>
          </li>
          <li>
              <Link to="/iletişim">İletişim</Link>
          </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
          {click ? (
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