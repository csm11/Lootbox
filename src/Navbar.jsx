import { Link } from "react-router-dom";
import React from 'react'
export default function Navbar() {
    return (
    
    <nav className="nav">
        <Link to="/" className="Instructions" > Instructions </Link>
        <ul>
            <CustomLink to="/Game"> Game</CustomLink>
    
            <CustomLink to="/Survey"> Survey </CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname

    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}