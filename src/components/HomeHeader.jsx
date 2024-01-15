import React from "react";
import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <section id="header">
      <div className="header-content">
        <h1>Best IT Solution <br />in your city</h1>
        <p>
          Prevent data loss with encrypted storage and virtualized <br /> recovery,
          then enjoy increased productivity.
        </p>
        <Link to="#">Find Out More</Link>
      </div>
    </section>
  );
}

export default HomeHeader;
