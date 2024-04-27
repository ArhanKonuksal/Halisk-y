import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from "../components/Footer/Footer"
import Ürünler from "../components/Ürünler/Ürünler"

const Ürünlerimiz = () => {
  return (
    <>
    <Navbar />
    <div>Ürünlerimiz</div>
      <Ürünler />
    <Footer />
    </>
  )
}

export default Ürünlerimiz