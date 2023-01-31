import PropTypes from 'prop-types';

export default function OrderCard({ id, status, saleDate, totalPrice }) {
  return (
    <div>
      <p data-testid={ `customer_orders__element-order-id-${id}` }>{ id }</p>
      <p data-testid={ `customer_orders__element-delivery-status-${id}` }>{ status }</p>
      <p data-testid={ `customer_orders__element-order-date-${id}` }>
        { new Date(saleDate).toLocaleDateString('pt-br') }
      </p>
      <p data-testid={ `customer_orders__element-card-price-${id}` }>{ totalPrice }</p>
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};
