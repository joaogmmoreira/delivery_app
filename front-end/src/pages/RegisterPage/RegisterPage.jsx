import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { registerService } from '../../services/useLoginService';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isNameValid, setNameValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isRegisterBtnDisabled, setIsRegisterBtnDisabled] = useState(true);

  const [emailExists, setEmailExist] = useState(true);
  const [nameExists, setNAmeExists] = useState(true);

  const history = useHistory();

  const validateEmail = (emailString) => /\S+@\S+\.\S+/.test(emailString);

  useEffect(() => {
    setNameValid(false);

    const MIN_NAME_LENGTH = 12;
    if (name.length < MIN_NAME_LENGTH) return;

    setNameValid(true);
  }, [name]);

  useEffect(() => {
    setEmailValid(validateEmail(email));
  }, [email]);

  useEffect(() => {
    setPasswordValid(false);

    const MIN_PASSWORD_LENGTH = 6;

    if (password.length < MIN_PASSWORD_LENGTH) return;

    setPasswordValid(true);
  }, [password]);

  useEffect(() => {
    setIsRegisterBtnDisabled(true);

    if (!isNameValid) return;
    if (!isEmailValid) return;
    if (!isPasswordValid) return;

    setIsRegisterBtnDisabled(false);
  }, [isNameValid, isEmailValid, isPasswordValid]);

  const handleClickInvalid = async () => {
    try {
      const response = await registerService({
        name,
        email,
        password,
      });

      localStorage.setItem('user', JSON.stringify(response));

      history.push('/customer/products');
    } catch (e) {
      console.log(e);
    }

    setEmailExist(true);
    if (email !== validateEmail(email) || name === name) {
      return setEmailExist(false);
    }
    set
  };

  return (
    <main>
      <div>Cadastro</div>
      <input
        type="text"
        placeholder="Seu nome"
        data-testid="common_register__input-name"
        value={ name }
        onChange={ ({ target: { value } }) => setName(value) }
      />
      <input
        type="text"
        placeholder="Seu email"
        data-testid="common_register__input-email"
        value={ email }
        onChange={ ({ target: { value } }) => setEmail(value) }
      />
      <input
        type="text"
        placeholder="Sua senha"
        data-testid="common_register__input-password"
        value={ password }
        onChange={ ({ target: { value } }) => setPassword(value) }
      />
      <button
        type="button"
        data-testid="common_register__button-register"
        disabled={ isRegisterBtnDisabled }
        onClick={ handleClickInvalid }
      >
        Cadastrar
      </button>

      { !emailExists && (
        <p
          data-testid="common_register__element-invalid_register"
        >
          Register invalid!
        </p>
      )}
      {/* <p
        data-testid="common_register__element-invalid_register"
      >
        This email is invalid!
      </p> */}
    </main>
  );
}

export default RegisterPage;
