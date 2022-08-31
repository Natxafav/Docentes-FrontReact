import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <form action="#">
        <label>LOGIN</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={gestorEmail}
          placeholder="EMAIL"
        ></input>
        <input
          type="password"
          name="name"
          value={pass}
          onChange={gestorPass}
          placeholder="PASSWORD"
        ></input>

        <button className="enviar" onClick={registro}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
