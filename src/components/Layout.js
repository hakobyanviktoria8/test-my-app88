import React, {useContext} from 'react';
import {UserContext} from "../App";
import {Link} from "react-router-dom";

export default function Layout() {
    const user = useContext(UserContext);
    console.log("Layout ",user)
    return (
        <>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/lists">Lists</Link>
            </nav>
            <main>
                Layout
            </main>
            <footer>
                Footer
            </footer>

        </>
    );
}