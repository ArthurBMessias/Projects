import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ContextContent from '../Context/ContextContent';
import './Login.css'

function Login() {
  const { email, setEmail } = useContext(ContextContent);
  const [password, setPassword] = useState('');


  return (
    <form className="loginContent">
      <h2>Entrar</h2>
      <input
        placeholder="Email ou número de telefone"
        onChange={ (event) => setEmail(event.target.value) }
        name="email"
        value={ email }
        type="text"
      />
      <input
        placeholder="Senha"
        onChange={ (event) => setPassword(event.target.value) }
        name="password"
        value={ password }
        type="password"
      />
      <Link
        to='/home'
        type="button"
      >
        <p>Entrar</p>
      </Link>
    </form>
  );
}

export default Login;
