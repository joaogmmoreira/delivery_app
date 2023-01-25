import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function SaleCard({ sale }) {
  const history = useHistory();
  const { id } = sale;

  const directToDetails = () => {
    history.push(`/seller/orders/${id}`);
  };

  return (
    <div
      onClick={ directToDetails }
      // referencia JSX ESLint
      onKeyDown={ () => {} }
      role="button"
      tabIndex={ 0 }
    >
      <div data-testid={ `seller_orders__element-order-id-${id}` }>
        {sale.id}
      </div>
      <div data-testid={ `seller_orders__element-delivery-status-${id}` }>
        {sale.status}
      </div>
      <div data-testid={ `seller_orders__element-order-date-${id}` }>
        {sale.saleDate}
      </div>
      <div data-testid={ `seller_orders__element-card-price-${id}` }>
        {sale.totalPrice}
      </div>
      <div data-testid={ `seller_orders__element-card-address-${id}` }>
        {sale.deliveryAddress}
        ,
        {sale.deliveryNumber}
      </div>
    </div>

  );
}

SaleCard.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
  }).isRequired,
};
