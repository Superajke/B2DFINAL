import { useNavigate } from "react-router-dom";
import "../css/Home.css";
import { useState } from "react";

function Home() {
  const [blend, setBlend] = useState(false);
  const navigate = useNavigate();

  return (
    <section className={!blend ? "landing" : "landing_fade"}>
      <section className="landing__containter">
        <section className="landing__content">
          <h1 className="landing__h1">Eventos Poli</h1>
          <p className="landing__p">
            {">"} Eventos Poli, creado para la gestión de eventos de facultades
            y programas universitarios.
          </p>
          <p className="landing__p-m">
            {">"} Selecciona la opción acceder para continuar.
          </p>
        </section>
        <div className="landing__buttons">
        <button
          className="profile_button"
          onClick={() => {
            setBlend(true);
            setTimeout(() => {
              navigate("/eventos");
            }, 2200);
          }}
        >
          Acceder
        </button>
        <button
          className="profile_button-m"
          onClick={() => {
            setBlend(true);
            setTimeout(() => {
              navigate("/utilidades");
            }, 2200);
          }}
        >
          Admin
        </button>
        </div>
      </section>
    </section>
  );
}

export default Home;
