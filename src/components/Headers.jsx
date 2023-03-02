import React from "react";
import {  Link } from "react-router-dom"
function Headers (){
    return(
        <header>
            <div className="container">
                <nav>
                <ul className="header">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register" >Register</Link></li>
            <li><Link to= "/table">Table</Link></li>
        </ul>
                </nav>
            </div>
        </header>
    )
}

export default Headers;