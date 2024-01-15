import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar-heading">
        <p>
          <span>Now Hiring:</span> Are you a driven and motivated 1st Line IT
          Support Engineer?
        </p>
        <div className="brands">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
      <div className="navbar">
        <div className="nav-main">
          <div className="logo">
            <img
              src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png"
              alt=""
            />
          </div>
          <div className="pages">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/addPage">Add Page</NavLink>
            <Link>About</Link>
            <Link>Services</Link>
            <Link>Case Study</Link>
            <Link>Contact</Link>
          </div>
        </div>
        <div className="nav-contacts">
          <Link id="quote" to="#">Free Quote</Link>
          <div className="tel">
            <img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/headphones.svg" alt="" />
            <div className="tel-number">
              <p>Have any Question?</p>
              <Link to="tel:10 (78) 837 3647">Call: 10 (78) 837 3647</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
