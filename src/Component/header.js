import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <header className="header-section">
        <div className="container">
            <div className="header-holder">
                <div className="header-primary d-flex flex-wrap justify-content-between align-items-center">
                    <div className="brand-logo d-none d-lg-inline-block">
                        <div className="logo">
                            <a href="index.html">
                                <img src="assets/images/logo/aradchain_logo.png" alt="logo"/>
                            </a>
                        </div>
                    </div>
                    <div className="header-wrapper justify-content-lg-end">
                        <div className="mobile-logo d-lg-none">
                            <a href="index.html"><img src="assets/images/logo/aradchain_logo.png" alt="logo"/></a>
                        </div>
                        <div className="menu-area">
                            <ul className="menu">
                                <li>
                                    <Link to={'/'}>Home</Link>
                                    
                                </li>
                             
                                <li>
                                    <Link to={'/profile'}>profile</Link>
                                    
                                </li>
                               
                                <li>
                                    <Link to={"/login"}>login</Link>
                                    
                                </li>
                                <li>
                                    <Link to={"/sginUp"}>register</Link>
      
                                    
                                </li>
                                
                            </ul>
                            <a className="wallet-btn" href="#" data-bs-toggle="modal" data-bs-target="#wallet-option">
                                Contact
                           </a>

                            
                            <div className="header-bar d-lg-none">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </header>
  )
}

export default header