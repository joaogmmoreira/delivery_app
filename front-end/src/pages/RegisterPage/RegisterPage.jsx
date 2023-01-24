function RegisterPage() {
  return (
    <main>
      <div>Cadastro</div>
      <input
        type="text"
        placeholder="Seu nome"
        data-testid="common_register__input-name"
      />
      <input
        type="text"
        placeholder="Seu email"
        data-testid="common_register__input-email"
      />
      <input
        type="text"
        placeholder="Sua senha"
        data-testid="common_register__input-password"
      />
      <button
        type="button"
        data-testid="common_register__button-register"
      >
        Cadastrar
      </button>
      <p
        data-testid="common_register__element-invalid_register"
      >
        This email is invalid!
      </p>
    </main>
  );
}

export default RegisterPage;
