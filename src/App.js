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
import NuevoCurso from "./componentes/NuevoCurso";
import CursosModif from "./componentes/CursosModif";
import Buscar from "./componentes/Buscar";

const App = () => {
  const [login, setLogin] = useState();
  const changeLogin = () => {
    setLogin(true);
  };

  const changeLogout = () => {
    setLogin(false);
  };

  return (
    <div className="App">
      <Router>
        <div className="menu-navbar">
          <div className="navbar">
            <input type={"checkbox"} id="checkb"></input>
            <label className="navLabel" htmlFor="checkb">
              <span className="menu-line">&#9776;</span>
            </label>
            {login === false ? (
              <ul className="list">
                <NavLink className={"navlink"} to="/">
                  INICIO
                </NavLink>

                <NavLink className={"navlink"} to="/login">
                  LOGIN
                </NavLink>

                <NavLink className={"navlink"} to="/registro">
                  REGISTRO
                </NavLink>
              </ul>
            ) : (
              <ul className="list">
                <NavLink className={"navlink"} to="/">
                  INICIO
                </NavLink>
                <NavLink className={"navlink"} to="/docentes">
                  DOCENTES
                </NavLink>

                <NavLink className={"navlink"} to="/cursos">
                  CURSOS
                </NavLink>

                <NavLink className={"navlink"} to="/personal">
                  PERSONAL
                </NavLink>

                <NavLink className={"navlink"} to="/logout">
                  LOGOUT
                </NavLink>
              </ul>
            )}
          </div>
        </div>

        {/* A donde se dirige, el componente */}

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login changeLogin={changeLogin} />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route
            path="/registro"
            element={<Register changeLogin={changeLogin} />}
          />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route
            path="/docentes"
            element={<Docentes changeLogin={changeLogin} />}
          />
          <Route
            path="/cursos"
            element={<Cursos changeLogin={changeLogin} />}
          />
          <Route
            path="/logout"
            element={<Logout changeLogout={changeLogout} />}
          />
          <Route
            path="/personal"
            element={<Personal changeLogin={changeLogin} />}
          />
          <Route
            path="/cursos/nuevo"
            element={<NuevoCurso changeLogin={changeLogin} />}
          />
          <Route
            path="/cursos/modificar"
            element={<CursosModif changeLogin={changeLogin} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
