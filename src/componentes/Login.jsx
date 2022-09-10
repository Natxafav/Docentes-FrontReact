import React from "react";
import { useState } from "react";
import axios from "axios";
import "./css/formularios.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
        console.log("docenteok  " + resp.data.docenteok);
        if (resp.data.docenteok === false) {
          console.log("docent en ifeok  " + resp.data.docenteok);
          navegar("/");
        } else {
          localStorage.setItem(
            "DatosUsuario",
            JSON.stringify({
              userId: resp.data.userId,
              token: resp.data.token,
              email: resp.data.email,
            })
          );

          navegar("/personal");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });

    if (email.trim() === "" || pass.trim() === "") {
      return;
    }

    setEmail("");
    setPass("");
  };

  const gestorEmail = (e) => {
    setEmail(e.target.value);
  };
  const gestorPass = (e) => {
    setPass(e.target.value);
  };

  return (
    <div className="login-page">
      <form className="form-container login" action="#">
        <label className="label-container login"></label>

        <input
          className="form-input login"
          type="email"
          name="email"
          value={email}
          onChange={gestorEmail}
          placeholder="EMAIL"
          minLength="5"
          required
        ></input>
        <input
          className="form-input login"
          type="password"
          name="name"
          value={pass}
          onChange={gestorPass}
          placeholder="PASSWORD"
          minLength="5"
          required
        ></input>

        <div className="button-container login">
          <button className="enviar" onClick={usuLogin}>
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
