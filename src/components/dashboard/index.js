import React from 'react';
import Layout from "../layout/Layout";
import "./dashboard.css"
import CardOrder from './Card';
import buy from "./../../images/buy.png"
import logout from "./../../images/Logout.png"
import discovery from "./../../images/Discovery.png"
import {ChartComp} from './Chart';

export default function Dashboard() {
    return (
      <Layout>
          <div className='dashboardWrapper'>
              <h2>Orders</h2>

              <div className='ordersWrapper'>             
                <CardOrder img={buy} title="Orders" amount="$354.5k" quantity="24" up="+$354.5k (45%)" down="-5 (15%)"/>
                <CardOrder img={logout} title="Returns" amount="$568.3k" quantity="382" up="+$50 (15%)" down="-5 (15%)"/>
                <CardOrder img={discovery} title="Total" amount="$129.3k" quantity="67" up="+$42k (42%)" down="-4 (6%)"/>                
              </div>
              <div className='graphikWrapper'>
                <ChartComp/>
              </div>
          </div>
      </Layout>
  );
}
