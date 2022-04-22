import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/card/card';
import EnterpriseCard from '../components/EnterpriseCard';
import "./../styles/package.css"

export default function Package() {
  return (
    <div className="packageWrapper">
      <div className="homeLink">
        <Link to="/"> &lt; Back</Link>
      </div>
      <div className="packageMain">
        <h2>Flexible <span>Plans</span></h2>
        <p>Your first 14 days are free, and you can cancel at any time - no hassle and no questions asked.</p>
        <div className='cardWrapper'>
          <Card mobDevices="5" members="5" gps="-" analytics="-" map="-"/>
          <Card mobDevices="10" members="10" gps="include" analytics="-" map="include"/>
          <Card mobDevices="20" members="2000000000" gps="include" analytics="-" map="include"/>
          <EnterpriseCard/>
        </div>
      </div>
    </div>
  );
}

