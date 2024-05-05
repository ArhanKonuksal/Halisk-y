import React from 'react'
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
    <Footer />
    </>
  )
}

export default Anasayfa
