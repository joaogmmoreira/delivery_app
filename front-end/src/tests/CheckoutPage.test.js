import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './utils/renderWithRouter';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage';
// import App from '../App';

describe('Testes da tela de Checkout.', () => {
  it('Testa se tem um botão de remover.', () => {
    localStorage.setItem(
      'cart',
      JSON.stringify([{ name: 'Skol Lata 250ml', quantity: 1, price: '2.20' }]),
    );
    renderWithRouter(<CheckoutPage />);

    const btnRemover = screen.getByRole('button', { name: /remover/i });
    expect(btnRemover).toBeDefined();
    // userEvent.click(btnRemove);
  });
});
