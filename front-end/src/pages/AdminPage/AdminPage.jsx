import { useState, useEffect } from 'react';

function AdminPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [select, setSelect] = useState();

  const [isNameValid, setNameValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);

  const [adminRegisBtnDisable, setAdminRegisBtnDisable] = useState(true);

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
    setAdminRegisBtnDisable(true);

    if (!isNameValid) return;
    if (!isEmailValid) return;
    if (!isPasswordValid) return;

    setAdminRegisBtnDisable(false);
  }, [isNameValid, isEmailValid, isPasswordValid]);

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
      >
        <option selected>Default</option>
        <option value="Vendedor">Vendedor</option>
        <option value="Vendedor">Cliente</option>
      </select>
      <button
        type="button"
        data-testid="admin_manage__button-register"
        disabled={ adminRegisBtnDisable }
        // onClick={  }
      >
        Cadastrar
      </button>
    </main>
  );
}

export default AdminPage;
