import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from "../components/Footer/Footer"
import Form from "../components/Form/form"
import Konum from "../components/Konum/konum"
import WpLogo from "../assets/whatsapplogo.png"

const İletişim = () => {
  return (
    <>
    <Navbar />
    <div className='container'>
      <h1>İletişim</h1>
      <p>Merhaba! İletişim sayfamıza hoş geldiniz. Halışköy ürünleri hakkında daha fazla bilgi almak, sipariş vermek veya herhangi bir soru sormak için bize buradan ulaşabilirsiniz. Size en kısa sürede yanıt vermeyi dört gözle bekliyoruz!</p>
    <Form />
    <Link to="https://web.whatsapp.com/">
    <img src={WpLogo} alt='wp-logo' style={{ width: "90%", height: "auto", padding: "0 10%", marginLeft: "5%" }} />    </Link>
    <Konum />
    </div>
    <Footer />
    </>
  )
}

export default İletişim