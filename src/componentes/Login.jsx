import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./css/loginRegister.css";
import { useNavigate } from "react-router-dom";

const Login = ({ gestionarLogin }) => {
  const URL = `${process.env.REACT_APP_BACKEND_URL}/docentes/login`;
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navegar = useNavigate();

  const usuLogin = async (e) => {
    e.preventDefault();

    await axios
      .post(URL, {
        email: email,
        password: pass,
      })
      .then((resp) => {
        console.log("Login correcto");
        gestionarLogin();
        localStorage.setItem(
          "DatosUsuario",
          JSON.stringify({
            userId: resp.data.userId,
            token: resp.data.token,
            email: resp.data.email,
          })
        );
      })
      .catch((error) => {
        console.log(error.message);
      });

    if (email.trim() === "" || pass.trim() === "") {
      return;
    }
    gestionarLogin(true);

    navegar("/personal");
    setEmail("");
    setPass("");
  };

  const gestorEmail = (e) => {
    setEmail(e.target.value);
  };
  const gestorPass = (e) => {
    setPass(e.target.value);
  };
  useEffect(() => {}, []);

  return (
    <div className="login">
      <form action="#">
        <div className="form-container-login">
          <div className="label-container-login">
            <label>ENTRAR</label>
          </div>
          <div className="input-container-login">
            <input
              className="form-input-login"
              type="email"
              name="email"
              value={email}
              onChange={gestorEmail}
              placeholder="EMAIL"
            ></input>
            <input
              className="form-input-login"
              type="password"
              name="name"
              value={pass}
              onChange={gestorPass}
              placeholder="PASSWORD"
            ></input>
          </div>
          <div className="button-container-login">
            <button className="enviar" onClick={usuLogin}>
              LOGIN
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
