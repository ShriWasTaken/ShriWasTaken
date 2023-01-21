import React from "react"
import {NavLink} from "react-router-dom";
const Navbar = ()=>{
   return(
<>

    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-11 ms-auto">

      <nav className="navbar sticky-top navbar-expand-lg navbar-transparent navbar-dark" id="nav1">
      <NavLink  className="brand-name " style={{color:"white"}}  to="/">Shriharsh's Colosseum</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" style={{color:"white"}}></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto brand-desc text-uppercase">
          <li className="nav-item active">
            <NavLink  className="nav-item acitve nav-link "  style={{color:"white"}}  to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link"  style={{color:"white"}}   to="/projects/">Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link"  style={{color:"white"}}  to="/contact/">Contact</NavLink>
   </li>

   <li className="nav-item">
            <NavLink  className="nav-link"  style={{color:"white"}}  to="/blog/">Blog</NavLink>
   </li>

        </ul>
      </div>
    </nav>

        </div>
      </div>
    </div>

   </>
   );
};

export default Navbar;