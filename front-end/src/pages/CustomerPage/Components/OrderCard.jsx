import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function OrderCard({ id, status, saleDate, totalPrice }) {
  const history = useHistory();

  return (
    <div
      role="button"
      tabIndex={ 0 }
      onKeyDown={ () => history.push(`/customer/orders/${id}`) }
      onClick={ () => history.push(`/customer/orders/${id}`) }
    >
      <p data-testid={ `customer_orders__element-order-id-${id}` }>{ id }</p>
      <p data-testid={ `customer_orders__element-delivery-status-${id}` }>{ status }</p>
      <p data-testid={ `customer_orders__element-order-date-${id}` }>
        { new Date(saleDate).toLocaleDateString('pt-br') }
      </p>
      <p data-testid={ `customer_orders__element-card-price-${id}` }>
        { totalPrice.replace('.', ',') }
      </p>
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};
