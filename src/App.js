import "./App.css";
// npm install react-router-dom
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  NavLink,
} from "react-router-dom";
import Login from "./componentes/Login";
import Register from "./componentes/Register";
import Docentes from "./componentes/Docentes";
import Cursos from "./componentes/Cursos";
import Error from "./componentes/Error";
import Logout from "./componentes/Logout";
import Inicio from "./componentes/Inicio";
import Personal from "./componentes/Personal";
import { useState } from "react";

const App = () => {
  const [login, setLogin] = useState(false);
  const [estado, setEstado] = useState("Desconectado");
  const gestionarLogin = () => {
    setLogin(true);
    conexion();
  };
  const gestionarLogout = () => {
    setLogin(false);
    conexion();
  };
  const conexion = () => {
    if (login) {
      setEstado("Conectado");
    } else {
      setEstado("Desconectado");
    }
  };

  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <div className="navposition">
            <div className="navButton">
              <NavLink className={"navlink"} to="/">
                INICIO
              </NavLink>
            </div>
            <div className="navButton">
              <NavLink className={"navlink"} to="/login">
                LOGIN
              </NavLink>
            </div>
            <div className="navButton">
              <NavLink className={"navlink"} to="/registro">
                REGISTRO
              </NavLink>
            </div>
            {/* Pendiente if para que no se tenga acceso a los botones si no estas registrado */}

            <div className="navButton">
              <NavLink className={"navlink"} to="/docentes">
                DOCENTES
              </NavLink>
            </div>
            <div className="navButton">
              <NavLink className={"navlink"} to="/cursos">
                CURSOS
              </NavLink>
            </div>
            <div className="navButton">
              <NavLink className={"navlink"} to="/logout">
                LOGOUT
              </NavLink>
            </div>
            <div className="navButton">
              <NavLink className={"navlink"} to="/personal">
                PERSONAL
              </NavLink>
            </div>
          </div>
        </div>
        {/* A donde se dirige, el componente */}

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route
            path="/login"
            element={<Login gestionarLogin={gestionarLogin} />}
          />
          <Route
            path="/registro"
            element={<Register gestionarLogout={gestionarLogout} />}
          />
          <Route path="/404" element={<Error />} />
          {/* En caso de que se ponga algo distinto */}
          <Route path="*" element={<Navigate to="/404" replace />} />
          {/* <Route path="/docentes/personal" element={<Personal />} /> */}
          <Route path="/docentes" element={<Docentes />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route
            path="/logout"
            element={<Logout gestionarLog={gestionarLogout} />}
          />
          <Route path="/personal" element={<Personal />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
