import React from "react";
import LOGO from "../img/Logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="landing__nav">
      <figure>
        <img
          className="landing__logo"
          src={LOGO}
          alt="Logo del PoliJIC"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
        <figcaption>Eventos Poli</figcaption>
      </figure>
    </nav>
  );
}

export default Navbar;
