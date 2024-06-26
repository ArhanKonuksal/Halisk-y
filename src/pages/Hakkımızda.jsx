import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from "../components/Footer/Footer"
import Kişiler from '../components/Kişiler/Kişiler'

const Hakkımızda = () => {
  return (
    <>
    <Navbar />
    <div className='heading'>
      <h1>Fabrikamızı Keşfedin !</h1>
      <p>Merhaba! Biz Halışköy, lezzetli ve sağlıklı fırın ve süt ürünleri sunan bir şirketiz. Misyonumuz, müşterilerimize en kaliteli ürünleri sunmak ve onların damak zevklerine hitap etmektir. Yılların deneyimiyle, size en taze ve doğal ürünleri sunmak için çalışıyoruz. Bizimle tanışmaktan ve ürünlerimizi denemekten mutluluk duyacaksınız!</p>
    </div>
    <Kişiler />
    <Footer />
    </>
  )
}

export default Hakkımızda