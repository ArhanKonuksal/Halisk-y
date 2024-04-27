import React from 'react'

const form = () => {
  return (
    <div className='from'>
        <form>
            <label>İsim</label>
            <input type="text"></input>
            <label> Soy İsim</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>Mesajınız</label>
            <input type="text"></input>
            <textarea rows="6" placeholder="Mesajınızı buraya yazınız"/>
            <button className='btn'>GÖNDER</button>
        </form>
    </div>
  )
}

export default form