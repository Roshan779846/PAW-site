import React from "react";
import './NavBar.css'

const NavBar = () =>{
    return(
        <div className="NavBar">
            <div className="n-right">
                PAW
            </div>
            <div className="n-left">
                <ul className="navList"> 
                    <li className="navItem">
                        <a href="#" className="navLink">Home</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">About</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Join</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}


export default NavBar;