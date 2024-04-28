import React from 'react';
import { ÜRÜNLER } from './Ürünler'; // Correct import statement
import './ürün.css';

const Ürün = ({ data }) => { // Changed component name to Ürün
  return (
    <div className='ürün'>
      <img src={data.ÜrünResmi} alt={data.Ürünİsmi} />
      <h2>{data.Ürünİsmi}</h2>
    </div>
  );
};

const Ürünler = () => {
  return (
    <div className='ürün'>
      <div>
        <h1>Ürünlerimiz</h1>
      </div>
      <div className='ürünler'> 
        {ÜRÜNLER.map(ürün => <Ürün key={ürün.id} data={ürün} />)}
      </div>
    </div>
  );
};

export default Ürünler;
