import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <>
        <header>
            <nav>
                <ul className="navbar"> 
                    <li className="navLink"><Link to="/">HOME</Link></li>
                    <li className="navLink"><Link to="/about">ABOUT ME</Link></li>
                    <li className="navLink"><Link to="/portfolio">PORTFOLIO</Link></li>
                    <li className="navLink"><Link to="/resume">RESUME</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}