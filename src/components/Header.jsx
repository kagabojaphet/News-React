import { Link } from "react-router-dom";
import photo from "../assets/logo.png";
import React from "react";

function Header(){
    return(

<>
<nav className="nav">
            <div className="logo">
                <img src={photo} alt="" />
            </div>
            <ul className="nav-links">
            <li>
                <a href="#"> Tel:+250789550495</a></li>
                <li><Link to="#">Sign-In</Link></li>
            </ul>
        </nav>
        <div className="catrgory">
            <div className="category-links">
                <li><a href="@" className="category-links--link">Health</a></li>
                <li><a href="@" className="category-links--link">Political</a></li>
                <li><a href="@" className="category-links--link">Education</a></li>
                <li><a href="@" className="category-links--link">Fashion</a></li>
                <li><a href="@" className="category-links--link">Music</a></li>
                <li><a href="@" className="category-links--link">Flim</a></li>
                <li><a href="@" className="category-links--link">Religion</a></li>
            </div>
        </div>
</>

    )
}
export default Header;