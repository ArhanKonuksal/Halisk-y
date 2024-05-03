import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"

const Anasayfa = () => {
  return (
    <>
    <Navbar />
        <div>
          <h1>Beyköy Süt Ürünleri</h1>
            <Hero />
        </div>
          <h1>Sütün Sanata Dönüştüğü Yolculuk !</h1>
          <p>yazı gelecek</p>
            <Link to="/Ürünlerimiz">
          <button>Ürünlerimiz</button>
            </Link>
    <Footer />
    </>
  )
}

export default Anasayfa
