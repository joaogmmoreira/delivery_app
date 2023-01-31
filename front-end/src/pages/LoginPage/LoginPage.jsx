import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginService } from '../../services/useLoginService';

export default function LoginPage() {
  const [doesUserExist, setDoesUserExist] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isLoginBtnDisabled, setIsLoginBtnDisabled] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

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

  function redirectToManageWhenAdministrator(role) {
    if (role !== 'administrator') return;
    history.push('/admin/manage');
  }

  function redirectToOrdersWhenSeller(role) {
    if (role !== 'seller') return;
    history.push('/seller/orders');
  }

  function redirectToProductsWhenCustomer(role) {
    if (role !== 'customer') return;
    history.push('/customer/products');
  }

  function redirectUserByRole(role) {
    redirectToManageWhenAdministrator(role);
    redirectToOrdersWhenSeller(role);
    redirectToProductsWhenCustomer(role);
  }

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      const { role } = userData;
      if (role === 'customer') {
        history.push('/customer/orders');
      } else {
        redirectUserByRole(role);
      }
    }
  }, []);

  async function handleOnClickLoginBtn() {
    setDoesUserExist(true);

    try {
      const response = await loginService({
        email,
        password,
      });

      // console.log('Login response:', response);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      redirectUserByRole(response.data.user.role);
    } catch (e) {
      setDoesUserExist(false);
      console.log(e);
    }
  }

  return (
    <div>
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
        onClick={ handleOnClickLoginBtn }
        type="button"
        disabled={ isLoginBtnDisabled }
      >
        Login
      </button>

      <button
        data-testid="common_login__button-register"
        onClick={ () => { history.push('/register'); } }
        type="button"
      >
        Register
      </button>

      {
        !doesUserExist && (
          <p
            data-testid="common_login__element-invalid-email"
          >
            This email is invalid!
          </p>
        )
      }
    </div>
  );
}
