import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CaseStudy from "../components/CaseStudy";
import HomeHeader from "../components/HomeHeader";
import Services from "../components/Services";
import WorkTogether from "../components/WorkTogether";
import Insights from "../components/Insights";

function HomePage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>IT Solution | Home</title>
        <link
          rel="shortcut icon"
          href="https://preview.colorlib.com/theme/itlock/assets/img/icon/favicon.png.webp"
          type="image/x-icon"
        />
      </Helmet>
      <HomeHeader />
      <Services />
      <Insights />
      <CaseStudy />
      <WorkTogether />
    </HelmetProvider>
  );
}

export default HomePage;
