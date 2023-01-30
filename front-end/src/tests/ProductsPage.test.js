import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utils/renderWithRouter';
// import App from '../App';
import ProductsPage from '../pages/ProductsPage/ProductsPage';

// const waitForLoading = async () => {
//   await waitFor(() => {
//     expect(screen
//       .getByTestId('customer_products__element-navbar-link-orders')).toBeDefined();
//   });
// };;

describe('Testes da tela de Produtos.', () => {
  it('Testando os links do NavBar de Produtos.', () => {
    renderWithRouter(<ProductsPage />);
    const linkProdutos = screen.getByRole('link', { name: /produtos/i });
    expect(linkProdutos).toBeDefined();
    const linkMeusProdutos = screen.getByRole('link', { name: /meus pedidos/i });
    expect(linkMeusProdutos).toBeDefined();
  });

  // it('Testa se tem um cliente sendo renderizado.', () => {

  // });

  it('Testa se tem um um botão de sair.', () => {
    const { history } = renderWithRouter(<ProductsPage />);
    const btnSair = screen.getByRole('button', { name: /sair/i });
    expect(btnSair).toBeDefined();
    userEvent.click(btnSair);
    const { pathname } = history.location;
    expect(pathname).toBe('/login');
  });

  it('Testa se tem um botão de Adicionar.', async () => {
    const { history } = renderWithRouter(<ProductsPage />);
    const btnAdd = await waitFor(() => screen.getAllByRole('button', { name: /add/i }));
    expect(btnAdd).toBeDefined();
    userEvent.click(btnAdd[0]);
    const btnVerCarrinho = screen.getByRole('button', { name: /ver carrinho/i });
    expect(btnVerCarrinho).toBeDefined();
    userEvent.click(btnVerCarrinho);
    expect(btnVerCarrinho).not.toBeDisabled();
    const { pathname } = history.location;
    expect(pathname).toBe('/customer/checkout');
  });
});
