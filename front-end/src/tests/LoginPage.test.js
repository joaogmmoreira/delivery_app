import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utils/renderWithRouter';
import App from '../App';
import LoginPage from '../pages/LoginPage/LoginPage';

const waitForLoading = async () => {
  await waitFor(() => {
    expect(screen
      .getByTestId('customer_products__element-navbar-link-orders')).toBeInTheDocument();
  });
};

describe('Testes da página Login.', () => {
  it('Testando os inputs email e senha.', () => {
    renderWithRouter(<LoginPage />);
    const inputEmail = screen.getByPlaceholderText(/email/i);
    expect(inputEmail).toBeDefined();
    const inputPassword = screen.getByPlaceholderText(/password/i);
    expect(inputPassword).toBeDefined();
  });

  it('Testando o botão de login.', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/login');
    const inputEmail = screen.getByPlaceholderText(/email/i);
    expect(inputEmail).toBeDefined();
    const inputPassword = screen.getByPlaceholderText(/password/i);
    expect(inputPassword).toBeDefined();
    const EMAIL_USER = 'zebirita@email.com';
    const SENHA_USER = '$#zebirita#$';
    const buttonLogin = screen.getByRole('button', { name: /login/i });
    expect(buttonLogin).toBeDisabled();
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.type(inputPassword, SENHA_USER);
    expect(buttonLogin).toBeDefined();
    expect(buttonLogin).not.toBeDisabled();
    userEvent.click(buttonLogin);
    screen.logTestingPlaygroundURL();
    const { pathname } = history.location;
    history.push('/customer/products');
    await waitForLoading();
    expect(pathname).toBe('/customer/products');
  });

  it('Testando o botão de register.', () => {
    const { history } = renderWithRouter(<App />);
    const buttonRegister = screen.getByRole('button', { name: /register/i });
    expect(buttonRegister).toBeDefined();
    userEvent.click(buttonRegister);
    const { pathname } = history.location;
    expect(pathname).toBe('/register');
  });
});
