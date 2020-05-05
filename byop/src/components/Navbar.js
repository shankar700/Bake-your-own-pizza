import React from 'react'
import {Link} from 'react-router-dom';
import '../Main.css';

export default function Navbar() {
    return (
        <ul className="navbar">
            <li><Link to="/offers">Offers!</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/order-history">Order History</Link></li>
            <li><Link to="/help-desk">Help Desk</Link></li>
        </ul>
    )
}
