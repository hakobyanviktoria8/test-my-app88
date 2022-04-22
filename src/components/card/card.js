import React from 'react';
import { Link } from 'react-router-dom';
import "./../../styles/card.css"

export default function Card({mobDevices="0", members="0", gps="-", analytics="-", map="-"}) {
  return (
    <div className='card'>
        <h3>Micro</h3>
        <div className='rowWrapper'>
            <div className='row'>
                <span>Mobile devices</span>
                <span>up to {mobDevices}</span>
            </div>
            <div className='row'>
                <span>Team members</span>
                <span>{members}</span>
            </div>
            <div className='row'>
                <span>GPS tracking</span>
                <span>{gps}</span>
            </div>
            <div className='row'>
                <span>Analytics</span>
                <span>{analytics}</span>
            </div>
            <div className='row'>
                <span>Map</span>
                <span>{map}</span>
            </div>
            <div className='linkRegister'>
                <Link to="/register">Start free trial</Link>
            </div>
        </div>
    </div>
  );
}
