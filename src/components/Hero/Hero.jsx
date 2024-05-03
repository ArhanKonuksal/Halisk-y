import React from 'react'
import { Link } from 'react-router-dom'
import resim1 from "../../assets/5.jpeg"
import resim2 from "../../assets/1.jpg"
import resim3 from "../../assets/2.jpg"
import resim4 from "../../assets/3.jpeg"
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-side'>
        <h1>Sofranın Taze Lezzeti</h1>
        <p>Yazılar gelecek kaan dan inşallah</p>
        <Link  to="/Ürünlerimiz">
        <button>Ürünlerimiz</button>
        </Link>
      </div>
      <div className='right-side'>
        <img src={resim1} className='images' alt='true'></img>
        <img src={resim2} className='images' alt='true'></img>
        <img src={resim3} className='images' alt='true'></img>
        <img src={resim4} className='images' alt='true'></img>
      </div>
    </div>
  )
}

export default Hero