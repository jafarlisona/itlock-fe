import React from "react";
import { Link } from "react-router-dom";

function Insights() {
  return (
    <section id="insights">
      <div className="container">
        <div className="content">
          <h1>
            Insights to help you do what you do better, faster and more
            profitably.
          </h1>
          <p>
            We understand the complexities of modern markets and translate them
            into real business solutions for automotive, financial, insuranc.
          </p>
          <Link to="#">Learn More</Link>
        </div>
        <div className="image">
          <img
            src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/about1.jpg.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Insights;
