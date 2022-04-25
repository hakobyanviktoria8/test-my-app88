import React from 'react';
import Layout from '../components/Layout';
import "./../styles/lists.css"

export default function Lists() {
  return (
    <Layout>
        <h2>Lists page</h2>
        <div id="circleWrapper">
           <div id='circleBorder'>
            <div id="squar">
                <div id="circle1" className='circle'></div>
                <div id="circle2" className='circle'></div>
                <div id="circle3" className='circle'></div>
                <div id="circle4" className='circle'></div>
            </div> 
          </div> 
        </div>
    </Layout>
  );
}
