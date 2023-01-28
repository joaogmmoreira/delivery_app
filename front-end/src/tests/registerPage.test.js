import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utils/renderWithRouter';
import RegisterPage from '../pages/RegisterPage/RegisterPage';

describe('Testes da página Cadastro.', () => {
  it('Testando os inputs nome, email, senha.', () => {
    renderWithRouter(<RegisterPage />);
    const inputName = screen.getByPlaceholderText(/seu nome/i);
    expect(inputName).toBeDefined();

    const inputEmail = screen.getByPlaceholderText(/seu email/i);
    expect(inputEmail).toBeDefined();

    const inputPassword = screen.getByPlaceholderText(/sua senha/i);
    expect(inputPassword).toBeDefined();
  });

  it('Testando o botão de cadastrar.', () => {
    renderWithRouter(<RegisterPage />);

    const inputName = screen.getByPlaceholderText(/seu nome/i);
    expect(inputName).toBeDefined();

    const inputEmail = screen.getByPlaceholderText(/seu email/i);
    expect(inputEmail).toBeDefined();

    const inputPassword = screen.getByPlaceholderText(/sua senha/i);
    expect(inputPassword).toBeDefined();

    const btnCadatro = screen.getByRole('button', { name: /cadastrar/i });

    expect(btnCadatro).toBeDefined();

    expect(btnCadatro).toBeDisabled();

    userEvent.type(inputName, 'João da Nica');
    userEvent.type(inputEmail, 'joão@nica.com.br');
    userEvent.type(inputPassword, 'cachorro_loco');

    expect(btnCadatro).not.toBeDisabled();

    userEvent.click(btnCadatro);
  });
});
