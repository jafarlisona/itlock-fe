import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Add from "../components/Add";

function AddPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>IT Solution | Add Page</title>
        <link
          rel="shortcut icon"
          href="https://preview.colorlib.com/theme/itlock/assets/img/icon/favicon.png.webp"
          type="image/x-icon"
        />
      </Helmet>
      <Add />
    </HelmetProvider>
  );
}

export default AddPage;
