import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utils/renderWithRouter';
import AdminPage from '../pages/AdminPage/AdminPage';

describe('Testes da página Administrador.', () => {
  it('Testando os inputs nome, email, senha e tipo.', () => {
    renderWithRouter(<AdminPage />);
    const inputName = screen.getByTestId('admin_manage__input-name');
    expect(inputName).toBeDefined();

    const inputEmail = screen.getByTestId('admin_manage__input-email');
    expect(inputEmail).toBeDefined();

    const inputPassword = screen.getByTestId('admin_manage__input-password');
    expect(inputPassword).toBeDefined();

    const selectType = screen.getByTestId('admin_manage__select-role');
    expect(selectType).toBeDefined();
  });

  it('Testando o botão de cadastrar pagina admin.', () => {
    renderWithRouter(<AdminPage />);

    const inputName = screen.getByTestId('admin_manage__input-name');
    expect(inputName).toBeDefined();

    const inputEmail = screen.getByTestId('admin_manage__input-email');
    expect(inputEmail).toBeDefined();

    const inputPassword = screen.getByTestId('admin_manage__input-password');
    expect(inputPassword).toBeDefined();

    const selectType = screen.getByTestId('admin_manage__select-role');
    expect(selectType).toBeDefined();

    userEvent.selectOptions(selectType, 'seller');

    expect(screen.getByRole('option', { name: /Default/i }).selected).toBe(false);
    expect(screen.getByRole('option', { name: /Vendedor/i }).selected).toBe(true);
    expect(screen.getByRole('option', { name: /Cliente/i }).selected).toBe(false);

    const btnCadatro = screen.getByRole('button', { name: /cadastrar/i });

    expect(btnCadatro).toBeDefined();

    expect(btnCadatro).toBeDisabled();

    userEvent.type(inputName, 'João da Nica');
    userEvent.type(inputEmail, 'joão@nica.com.br');
    userEvent.type(inputPassword, 'cachorro_loco');
    userEvent.selectOptions(selectType, 'seller');

    expect(btnCadatro).not.toBeDisabled();

    userEvent.click(btnCadatro);
  });
});
