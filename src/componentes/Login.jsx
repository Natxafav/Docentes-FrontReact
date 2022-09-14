import React from "react";
import { useState } from "react";
import axios from "axios";
import "./css/formularios.css";
import { useNavigate } from "react-router-dom";

const Login = ({ changeLogin }) => {
  // const URL = `${process.env.REACT_APP_BACKEND_URL}/docentes/login`;
  const URL =
    "https://winged-carrier-361708.oa.r.appspot.com/api/docentes/login";
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
        if (resp.data.docenteok === false) {
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
          changeLogin(true);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });

    if (email.trim() === "" || pass.trim() === "") {
      return;
    }

    navegar("/");
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
      <form className="form-container login" action="#" onSubmit={usuLogin}>
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
          <button type="submit" className="enviar">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
