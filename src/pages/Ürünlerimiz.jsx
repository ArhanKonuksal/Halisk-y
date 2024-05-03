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
      <p>Halisköy süt ürünleri, yüksek kaliteli malzemelerden üretilir ve özenle işlenir. Her bir ürün, taze ve doğal malzemeler kullanılarak üretilir ve titizlikle kontrol edilir. Halisköy süt ürünleri, lezzetli ve sağlıklı bir seçenek sunar, kalite ve tazelik konusunda öne çıkar.</p>
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