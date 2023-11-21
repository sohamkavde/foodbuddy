import React from 'react';
import { useState,useEffect } from 'react';
import './navigation.css';
import { Link } from 'react-router-dom';
import food from './foodbuddy-logo.png';
function Navigation() {
   


    return (
        <nav>
            <div className='icon'>
                   <Link to="/">
                    <img src={food} alt="title img" />
                   </Link>                   
                    
            </div>
            <div className="search">
            <p><b>other</b>&nbsp;
               <span>Bhopal,Madhyapradesh
                </span> </p>
            </div>
            <div className="options">
                <ul>
                    <li style={{cursor:'pointer'}}><i className="fa-solid fa-magnifying-glass"></i> Search</li>
                    <li style={{cursor:'pointer'}}><i className="fa-duotone fa-tire-rugged"></i> Offer</li>
                    <li style={{cursor:'pointer'}}><i className="fa fa-hand-holding-hand"></i> Help</li>
                    <li style={{cursor:'pointer'}}><i className="fa-regular fa-user"></i> Sign In</li>
                    <li style={{cursor:'pointer'}}><Link to="/cart"><i className="fa-solid fa-cart-shopping"></i> Cart </Link></li>
                
                
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;
