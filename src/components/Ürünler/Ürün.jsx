import React from 'react';
import './Ürün.css';

const Ürün = ({ data }) => {
  if (!data) {
    return null; 
  }

  return (
    <div className='ürün'>
      <img src={data.ÜrünResmi} alt={data.Ürünİsmi} />
      <h2>{data.Ürünİsmi}</h2>
    </div>
  );
};


export default Ürün;