import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import LoadingMsg from './loading-msg/Loading';

function Login() {
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const newUser = async () => {
      if (isLoading) {
        await createUser({ name: userName });
        setIsLoading(false);
        navigate('/search');
      }
    };

    newUser();
  }, [isLoading, userName, navigate]);

  const handleCreateUser = () => {
    setIsLoading(true);
  };

  return (
    <>
      <form>
        <label htmlFor="name">
          Insira seu nome!
          <input
            id="name"
            value={ userName }
            onChange={ ({ target }) => setUserName(target.value) }
            type="text"
            data-testid="login-name-input"
          />
        </label>
      </form>
      <button
        onClick={ handleCreateUser }
        data-testid="login-submit-button"
        disabled={ userName.length < 3 }
      >
        Entrar
      </button>
      { isLoading && <LoadingMsg />}
    </>

  );
}

export default Login;
