import React from "react";
import {NavLink} from "react-router-dom";
import { FaFacebookSquare,  FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare} from "react-icons/fa";
import "./Navbar.css";


const Navbar = () => {
  
      return (
      
          <>
          <div className="container-fluid nav_bg">
          <div className="row">
          <div className="col-10 mx-auto"> 
           <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink  className="navbar-brand" to="g">LinkTechn</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
     aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link active"
           aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="contact">Contact</NavLink>
        </li>
      </ul>
    </div>

    <div className="social-media">
          <ul className="social-media-desktop">
          <li>
          <a href="https://www.facebook.com/profile.php?id=100007890454627&mibextid=ZbWKwL"
           target="_typist">
          <FaFacebookSquare className="facebook" /> </a>
           </li>
           <li>
          <a href="https://www.youtube.com/channel/UCrGOSdpo4nggd9-zVpsZ1uQ"
           target="_typist">
          <FaInstagramSquare className="instagram" /> </a>
           </li>
           <li>
          <a href="https://www.youtube.com/channel/UCrGOSdpo4nggd9-zVpsZ1uQ"
           target="_typist">
          <FaYoutubeSquare className="youtube" /> </a>
           </li>
           <li>
          <a href="https://www.Twitter.com/Raju78377"
           target="_typist">
          <FaTwitterSquare className="twitter" /> </a>
           </li>
           </ul>
           </div>
  </div>
</nav>
</div> 
          </div> 
          </div>
          </>

      );


}; 
export default Navbar;