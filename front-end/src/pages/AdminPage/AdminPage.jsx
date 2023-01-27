import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import adminService from '../../services/postAdminManagement';

function AdminPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('default');

  const [isNameValid, setNameValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isSelectValid, setSelectValid] = useState(false);

  const [errorMessage, setErrorMessage] = useState(true);

  const [adminRegisBtnDisable, setAdminRegisBtnDisable] = useState(true);

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
    setSelectValid(false);

    if (role === 'default') return;

    setSelectValid(true);
  }, [role]);

  useEffect(() => {
    setAdminRegisBtnDisable(true);

    if (!isNameValid) return;
    if (!isEmailValid) return;
    if (!isPasswordValid) return;
    if (!isSelectValid) return;

    setAdminRegisBtnDisable(false);
  }, [isNameValid, isEmailValid, isPasswordValid, isSelectValid]);

  const handleClickAdminRegister = async () => {
    const getToken = JSON.parse(localStorage.getItem('user'));
    try {
      const response = await adminService({
        name,
        email,
        password,
        role,
      }, getToken.token);

      history.push('/admin/manage');
      console.log(response);
      setErrorMessage(true);
    } catch (e) {
      setErrorMessage(false);
      console.log(e);
    }
  };

  return (
    <main>
      <input
        type="text"
        data-testid="admin_manage__input-name"
        placeholder="Nome e sobrenome"
        value={ name }
        onChange={ ({ target: { value } }) => setName(value) }
      />
      <input
        type="email"
        data-testid="admin_manage__input-email"
        placeholder="seu-email@site.com.br"
        value={ email }
        onChange={ ({ target: { value } }) => setEmail(value) }
      />
      <input
        type="password"
        data-testid="admin_manage__input-password"
        placeholder="********"
        value={ password }
        onChange={ ({ target: { value } }) => setPassword(value) }
      />
      <select
        data-testid="admin_manage__select-role"
        name="select"
        value={ role }
        onChange={ ({ target: { value } }) => setRole(value) }
      >
        <option value="default">Default</option>
        <option value="seller">Vendedor</option>
        <option value="customer">Cliente</option>
      </select>
      <button
        type="button"
        data-testid="admin_manage__button-register"
        disabled={ adminRegisBtnDisable }
        onClick={ handleClickAdminRegister }
      >
        Cadastrar
      </button>
      { !errorMessage && (
        <p
          data-testid="admin_manage__element-invalid-register"
        >
          Register invalid!
        </p>
      )}
    </main>
  );
}

export default AdminPage;
