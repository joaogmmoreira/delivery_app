import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isLoginBtnDisabled, setIsLoginBtnDisabled] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function getIsValidEmailByStr(str) {
    return /\S+@\S+\.\S+/.test(str);
  }

  useEffect(() => {
    setIsValidEmail(getIsValidEmailByStr(email));
  }, [email]);

  useEffect(() => {
    setIsValidPassword(false);

    const MIN_PASSWORD_LENGTH = 6;
    if (password.length < MIN_PASSWORD_LENGTH) return;

    setIsValidPassword(true);
  }, [password]);

  useEffect(() => {
    setIsLoginBtnDisabled(true);

    if (!isValidEmail) return;
    if (!isValidPassword) return;

    setIsLoginBtnDisabled(false);
  }, [isValidEmail, isValidPassword]);

  return (
    <div>
      <header>
        <Link to="/login">
          <span>Login Page</span>
        </Link>

        <Link to="/">
          <span>Home Page</span>
        </Link>
      </header>

      <h1>My Login Page</h1>

      <input
        type="text"
        data-testid="common_login__input-email"
        placeholder="Email"
        value={ email }
        onChange={ ({ target: { value } }) => setEmail(value) }
      />

      <input
        type="text"
        data-testid="common_login__input-password"
        placeholder="Password"
        value={ password }
        onChange={ ({ target: { value } }) => setPassword(value) }
      />

      <button
        data-testid="common_login__button-login"
        onClick={ () => { } }
        type="button"
        disabled={ isLoginBtnDisabled }
      >
        Login
      </button>

      <button
        data-testid="common_login__button-register"
        onClick={ () => { } }
        type="button"
      >
        Register
      </button>

      {
        !isValidEmail && (
          <p
            data-testid="common_login__element-invalid-email"
          >
            This email is invalid!
          </p>)
      }
    </div>
  );
}
