import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from "../components/Footer/Footer"
import Ürün from '../components/Ürünler/Ürün';


const Ürünlerimiz = () => {
  return (
    <>
    <Navbar />
    <div>
      <h1>Ürünlerimiz</h1>
      <p></p>
    </div>
    <Ürün />
    <Footer />
    </>
  )
}

export default Ürünlerimiz