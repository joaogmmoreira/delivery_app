import { Link, useHistory } from 'react-router-dom';

export default function NavbarsSeller() {
  const history = useHistory();
  function handleOnClickLoggout() {
    localStorage.clear();
    history.push('/login');
  }

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <header>
      <Link
        to="/seller/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        PEDIDOS
      </Link>

      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user?.name}
      </span>

      <button
        onClick={ handleOnClickLoggout }
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </header>
  );
}
