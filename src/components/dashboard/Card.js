import React from 'react';
import "./dashboard.css"

export default function CardOrder({img, title, amount, quantity, up, down}) {
  return (
    <div className='cardOrder'>
        <div>
          <img src={img} />
          <h3>{title}</h3>
        </div>
        <div className='content'>
          <div>
              <p>Amount</p>
              <h4>{amount}</h4>
              <span className='green'>{up}</span>
          </div>
          <div>
              <p>Quantity</p>
              <h4>{quantity}</h4>
              <span className='red'>{down}</span>
          </div>
        </div>
    </div>
  );
}
