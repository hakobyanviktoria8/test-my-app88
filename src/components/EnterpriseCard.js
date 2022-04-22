import React from 'react';
import "./../styles/card.css"

export default function EnterpriseCard(){
    return(
        <div className="card enterpriseCard">
            <h3>Enterprise</h3>
            <h4>Need custom solution?</h4>
            <p>Lets talk about what Delivery app can do for your business.</p>
            <a href="tel:+37412800700" className='phpneNumber'>
                <span role="img">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19.693" viewBox="0 0 20 19.693">
                         <path id="contact-us" d="M20.181,9.5h-.909A7.389,7.389,0,0,0,12,2,7.389,7.389,0,0,0,4.727,9.5H3.818A1.847,1.847,0,0,0,2,11.375v3.75A1.847,1.847,0,0,0,3.818,17H6.545V9.5H6.5A5.588,5.588,0,0,1,12,3.828,5.588,5.588,0,0,1,17.5,9.5h-.046v7.086a6.364,6.364,0,0,1-3.882,3A1.947,1.947,0,0,0,12,18.875a1.652,1.652,0,0,0-1.818,1.406A1.652,1.652,0,0,0,12,21.687a1.742,1.742,0,0,0,1.787-1.168A7.3,7.3,0,0,0,18.284,17h1.9A1.847,1.847,0,0,0,22,15.125v-3.75A1.847,1.847,0,0,0,20.181,9.5Z" transform="translate(-2 -2)" fill="#fff"></path>
                    </svg>
                </span>
            +374 12 800700</a>
            <div className='linkRegister'>
                <a href="tel:+37412800700">Request demo</a>
            </div>
        </div>
    )
}