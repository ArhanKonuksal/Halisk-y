import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"
import BgPhoto from "../assets/background.jpeg"

const Anasayfa = () => {
  return (
    <>
    <Navbar />
        <div>
        <img src={BgPhoto}></img>
          <h1>Beyköy Süt Ürünleri</h1>
            <Hero />
          <h1>Sütün Sanata Dönüştüğü Yolculuk !</h1>
          <p>yazı gelecek</p>
            <Link to="/Ürünlerimiz">
          <button className="btn" >Ürünlerimiz</button>
            </Link>
        </div>
    <Footer />
    </>
  )
}

export default Anasayfa
