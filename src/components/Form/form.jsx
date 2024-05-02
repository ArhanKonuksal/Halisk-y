import React from 'react';
import './form.css';

const Form = () => {
  return (
    <div className='form'>
      <form>
        <label>İsim</label>
        <input type="text" />

        <label> Soy İsim</label>
        <input type="text" />

        <label>Email</label>
        <input type="text" />

        <label>Mesajınız</label>
        <textarea rows="6" placeholder="Mesajınızı buraya yazınız"></textarea>

        <button className='btn'>GÖNDER</button>
      </form>
    </div>
  );
};

export default Form;
