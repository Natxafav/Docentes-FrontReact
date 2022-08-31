import React from "react";
import { useState, useEffect, useForm } from "react";
import axios from "axios";
import "./login.css";
const Login = () => {
  const URL = "http://localhost:5000/api/docentes/login";
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const registro = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(pass);
    try {
      const response = await axios.post(URL, {
        email: email,
        password: pass,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
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
        <div className="form-container">
          <div className="label-container">
            <label>LOGIN</label>
          </div>
          <div className="input-container">
            <input
              className="login-form-input"
              type="email"
              name="email"
              value={email}
              onChange={gestorEmail}
              placeholder="EMAIL"
            ></input>
          </div>
          <div className="input-container">
            <input
              className="login-form-input"
              type="password"
              name="name"
              value={pass}
              onChange={gestorPass}
              placeholder="PASSWORD"
            ></input>
          </div>
          <div className="button-container">
            <button className="enviar" onClick={registro}>
              LOGIN
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
