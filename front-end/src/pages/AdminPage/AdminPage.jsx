function AdminPage() {
  return (
    <main>
      <input
        type="text"
        data-testid="admin_manage__input-name"
        placeholder="Nome e sobrenome"
      />
      <input
        type="email"
        data-testid="admin_manage__input-email"
        placeholder="seu-email@site.com.br "
      />
      <input
        type="password"
        data-testid="admin_manage__input-password"
        placeholder="********"
      />
      <select
        data-testid="admin_manage__select-role"
      >
        <option value="Default">Default</option>
        <option value="Vendedor">Vendedor</option>
        <option value="Vendedor">Cliente</option>
      </select>
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
