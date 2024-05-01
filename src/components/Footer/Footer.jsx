import React from 'react';
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-info">
     <h4>Beyköy Süt Ürünleri</h4>
     <p>1989'da kurulan Beyköy Süt Ürünleri, geleneksel lezzetlerle modern talepleri buluşturan, uluslararası standartlarda <br/>sürdürülebilir ve kaliteli süt ürünleri üretir.</p>
     <p style={{textAlign: 'left', paddingTop: '50px'}}> Designed and Powered by <strong>Virtue</strong></p>
    </div> 

    <div className="footer-iletisim">
     <h4>İletişim</h4>
     <p>Şehit Turgut Sokak No:6 A. Beyköy/. Lefkoşa.</p>
     <p>beykoy@gmail.com +90 533 888 88 88 </p>
    </div>

    <div className="footer-calisma">
     <h4>Çalışma Saatleri</h4>
     <p>Pazartesi - Cuma: 08:30 - 18:00</p>
     <p>Cumartesi: 08:30 - 13:00</p>
    </div>
 </div>
    );
};

export default Footer