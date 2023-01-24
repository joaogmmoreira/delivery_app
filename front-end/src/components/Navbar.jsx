import { Link } from 'react-router-dom';

export default function Navbar() {
  function handleOnClickLoggout() {
    localStorage.clear();
  }

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  return (
    <header>
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        PRODUTOS
      </Link>

      <Link
        to="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        MEUS PEDIDOS
      </Link>

      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user?.name}
      </span>

      <Link
        onClick={ () => handleOnClickLoggout() }
        to="/login"
        data-testid="customer_products__element-navbar-link-logout"
      >
        SAIR
      </Link>
    </header>
  );
}
