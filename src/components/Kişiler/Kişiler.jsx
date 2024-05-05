import React from 'react'
import { Link } from "react-router-dom"
import Özten from "../../assets/özten.jpg"
import Mehmet from "../../assets/Mehmet.jpg"
import "./Kişiler.css"

const Kişiler = () => {
  return (
    <div className="kişiler">
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Özten} className="img" alt="true"></img>
                </div>
            </div>
            </div>
            <div className="left">
            <h1>Özten Özkoç</h1>
            <p>yazılar gelecek</p>
            <Link to="/İletişim">
                <button className="btn">İletişim</button>
            </Link>
        </div>
        
        <div className="right"> 
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Mehmet} className="img" alt="true"></img>
                </div>
            </div>
            </div>
            <div className="left">
            <h1>Mehmet Özkoç</h1>
            <p>yazılar gelecek</p>
            <Link to="/İletişim">
                <button className="btn">İletişim</button>
            </Link>
        </div>
    </div>
  )
}

export default Kişiler