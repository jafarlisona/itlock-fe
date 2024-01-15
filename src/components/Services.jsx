import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <section id="services">
      <div className="container">
        <h4>INDUSTRY WE OFFER</h4>
        <h1>Managed IT services customized for your industry</h1>
        <p>
          We understand the complexities of modern markets and translate them
          into real business solutions for automotive, financial, insurance,
          pharma & life sciences
        </p>
        <div className="services-cards">
          <div className="services-card">
            <img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services1.svg" alt="" />
            <p>Industries & Manufacturing</p>
            <Link to="#">Find Out More <i className="fa-solid fa-arrow-right"></i></Link>
          </div>
          <div className="services-card">
            <img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services2.svg" alt="" />
            <p>Industries & Manufacturing</p>
            <Link to="#">Find Out More <i className="fa-solid fa-arrow-right"></i></Link>
          </div>
          <div className="services-card">
            <img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services3.svg" alt="" />
            <p>Industries & Manufacturing</p>
            <Link to="#">Find Out More <i className="fa-solid fa-arrow-right"></i></Link>
          </div>
          <div className="services-card">
            <img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services4.svg" alt="" />
            <p>Industries & Manufacturing</p>
            <Link to="#">Find Out More <i className="fa-solid fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
