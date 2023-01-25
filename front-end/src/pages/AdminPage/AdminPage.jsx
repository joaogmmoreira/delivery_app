import { useState } from 'react';

function AdminPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isNameValid, setNameValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);

  const [adminRegisBtnDisable, setAdminRegisBtnDisable] = useState(true);

  const validateEmail = (emailString) => /\S+@\S+\.\S+/.test(emailString);

  return (
    <main>
      <input
        type="text"
        data-testid="admin_manage__input-name"
        placeholder="Nome e sobrenome"
        // value={}
        // onChange={}
      />
      <input
        type="email"
        data-testid="admin_manage__input-email"
        placeholder="seu-email@site.com.br"
        // value={}
        // onChange={}
      />
      <input
        type="password"
        data-testid="admin_manage__input-password"
        placeholder="********"
        // value={}
        // onChange={}
      />
      {/* <select
       data-testid="admin_manage__select-role"
     >
       <option value="Default">Default</option>
       <option value="Vendedor">Vendedor</option>
       <option value="Vendedor">Cliente</option>
     </select> */}
      <button
        type="button"
        data-testid="admin_manage__button-register"
      >
        Cadastrar
      </button>
    </main>
  );
}

export default AdminPage;
