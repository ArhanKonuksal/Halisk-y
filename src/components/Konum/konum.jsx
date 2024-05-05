import React from 'react'
import "./konum.css"

const konum = () => {
  return (
    <div className='konum'>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484715.54939428356!2d32.825282790087606!3d35.1546591985946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de3f1fdaad06d1%3A0xebfce5eea536b848!2zQmV5a8O2eSBTw7x0IEZhYnJpa2FzxLE!5e0!3m2!1str!2s!4v1714757382250!5m2!1str!2s" 
        width="1440" 
        height="600"
        style={{ border: "0" }}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
  )
}

export default konum