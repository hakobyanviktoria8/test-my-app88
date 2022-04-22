import React, {useContext, useEffect} from 'react';
import {UserContext} from "../../App";
import {Link} from "react-router-dom";
import "./layout.css"
import logo from "./../../images/logo.png"
import user from "./../../images/user.png"
import buy from "./../../images/Buy.png"
import wallet from "./../../images/Wallet.png"

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
            <nav className='leftMenu'>
                <Link to="/" className='logo'><img src={logo} /></Link>
                <Link to="/"><img src={buy} /></Link>
                <Link to="/"><img src={wallet} /></Link>
                <Link to="/"><img src={user} /></Link>
            </nav>
            <main>
                <h2>Welcome {userData?.user}</h2>

                {/*main content render here*/}
                {children}
            </main>
            <footer>
                Footer
            </footer>

        </>
    );
}