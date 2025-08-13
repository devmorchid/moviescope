import React from 'react';
import './Navbar.css';
function Navbar() {
    return ( 
        <div className="Navbar">
            <div className="logo">
                <img src="/logo192.png" className="" alt="logo" />
                <h1>MovieScope</h1>
            </div>

            <nav>
                <ul className="nav-links">
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Liste">movies</a></li>
                    <li><a href="/MovieDetail">Movie Detail</a></li>
                </ul>
                
            </nav>  


            
                     
        </div>
    );
}

export default Navbar;
