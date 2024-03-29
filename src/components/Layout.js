import React, {useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./../styles/layout.css"
import logo from "./../images/logo.png"
import user from "./../images/user.png"
import buy from "./../images/Buy1.png"
import wallet from "./../images/Wallet.png"
import { UserContext } from '../App';

export default function Layout({children}) {
    const userData = useContext(UserContext);

    // useEffect(() => {
        // console.log("Layout render ", userData)
    // },[]);

    return (
        <>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/lists">Lists</Link>
            </nav>
            <div className='mainContentWrapper'>
                <nav className='leftMenu'>
                    <Link to="/" className='logo'><img src={logo} /></Link>
                    <Link to="/"><img src={buy} /></Link>
                    <Link to="/"><img src={wallet} /></Link>
                    <Link to="/"><img src={user} /></Link>
                </nav>
                <main>
                    {/*main content render here*/}
                    {children}
                </main>
            </div>
            <footer>
                Footer
            </footer>

        </>
    );
}