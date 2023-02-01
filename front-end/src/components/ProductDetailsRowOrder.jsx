import PropTypes from 'prop-types';

export default function ProductDetailsRowOrder({
  product,
  quantity,
  index }) {
  return (
    <div>
      <div
        data-testid={
          `customer_order_details__element-order-table-item-number-${index}`
        }
      >
        {index + 1}
      </div>

      <div
        data-testid={
          `customer_order_details__element-order-table-name-${index}`
        }
      >
        {product.name}
      </div>

      <div
        data-testid={
          `customer_order_details__element-order-table-quantity-${index}`
        }
      >
        {quantity}
      </div>

      <div
        data-testid={
          `customer_order_details__element-order-table-unit-price-${index}`
        }
      >
        {((product.price)).toString().replace('.', ',')}
      </div>

      <div
        data-testid={
          `customer_order_details__element-order-table-sub-total-${index}`
        }
      >
        {(Number(product.price.replace(',', '.')) * Number(quantity)).toFixed(2)
          .toString().replace('.', ',')}
      </div>
    </div>
  );
}
// referencia PropTypes https://stackoverflow.com/questions/41771217/react-linter-airbnb-proptypes-array
ProductDetailsRowOrder.propTypes = {
  product: PropTypes.arrayOf(Object).isRequired,
  index: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
