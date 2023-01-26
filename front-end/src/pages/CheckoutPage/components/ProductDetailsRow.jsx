import PropTypes from 'prop-types';

export default function ProductDetailsRow({ product, index, hasRemoveBtn }) {
  return (
    <div>
      <div
        data-testid={ `
        customer_checkout__element-order-table-item-number-${index}` }
      >
        {index}
      </div>

      <div
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {product.name}
      </div>

      <div
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {product.quantity}
      </div>

      <div
        data-testid={
          `customer_checkout__element-order-table-unit-price-${index}`
        }
      >
        {product.price}
      </div>

      <div
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {Number(product.price) * Number(product.quantity)}
      </div>
      {
        hasRemoveBtn && (
          <button
            type="button"
            onClick={ () => {} }
            data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          >
            Remover
          </button>
        )
      }
    </div>
  );
}

ProductDetailsRow.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    urlImage: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
  hasRemoveBtn: PropTypes.bool.isRequired,
};
