import React, { useState, useEffect } from 'react';
import { createUser } from '../services/userAPI';
import LoadingMsg from './loading-msg/Loading';

function Login() {
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const newUser = async () => {
      if (isLoading) {
        await createUser({ name: userName });
        setIsLoading(false);
      }
    };

    newUser();
  }, [isLoading, userName]);

  const handleCreateUser = () => {
    setIsLoading(true);
  };

  return (
    <>
      <form>
        <input
          value={ userName }
          onChange={ ({ target }) => setUserName(target.value) }
          type="text"
          data-testid="login-name-input"
        />
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
