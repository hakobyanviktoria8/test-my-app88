import React, {useContext, useEffect} from 'react';
import {UserContext} from "../../App";
import {Link} from "react-router-dom";
import "./layout.css"

export default function Layout({children}) {
    const userData = useContext(UserContext);

    useEffect(() => {
        console.log("Layout render ", userData)
    },[]);

    return (
        <>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/lists">Lists</Link>
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