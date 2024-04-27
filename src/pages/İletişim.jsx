import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from "../components/Footer/Footer"
import Form from "../components/Form/form"
import Konum from "../components/Konum/konum"

const İletişim = () => {
  return (
    <>
    <Navbar />
    <div>
      <h1>İletişim</h1>
      <p>Merhaba! İletişim sayfamıza hoş geldiniz. Halışköy ürünleri hakkında daha fazla bilgi almak, sipariş vermek veya herhangi bir soru sormak için bize buradan ulaşabilirsiniz. Size en kısa sürede yanıt vermeyi dört gözle bekliyoruz!</p>
    </div>
    <Form />
    <Konum />
    <Footer />
    </>
  )
}

export default İletişim