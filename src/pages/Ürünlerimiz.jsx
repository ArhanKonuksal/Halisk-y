import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from "../components/Footer/Footer"
import Ürün from '../components/Ürünler/Ürün';
import {ÜRÜNLER} from "../components/Ürünler/Ürünler"



const Ürünlerimiz = () => {
  return (
    <>
    <Navbar />
    <div>
      <h1>Ürünlerimiz</h1>
      <p>İşte Ürünlerimiz</p>
    </div>
    <div className='ürünler'>
        {ÜRÜNLER.map(ürün => (
          <Ürün key={ürün.id} data={ürün} />
        ))}
        </div>
    <Ürün />
    <Footer />
    </>
  )
}

export default Ürünlerimiz