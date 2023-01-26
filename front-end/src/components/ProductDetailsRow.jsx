import PropTypes from 'prop-types';

export default function ProductDetailsRow({ product, index, hasRemoveBtn, pageName }) {
  console.log(product);
  return (
    <div>
      <span
        data-testid={ `
        customer_${pageName}__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </span>

      <span
        data-testid={ `customer_${pageName}__element-order-table-name-${index}` }
      >
        {product.name}
      </span>

      <span
        data-testid={ `customer_${pageName}__element-order-table-quantity-${index}` }
      >
        {product.quantity}
      </span>

      <span
        data-testid={
          `customer_${pageName}__element-order-table-unit-price-${index}`
        }
      >
        {product.price}
      </span>

      <span
        data-testid={ `customer_${pageName}__element-order-table-sub-total-${index}` }
      >
        {product.price}
      </span>
      {
        hasRemoveBtn && (
          <button
            type="button"
            onClick={ () => {} }
            data-testid={ `customer_${pageName}__element-order-table-remove-${index}` }
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
    price: PropTypes.string,
    urlImage: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
  hasRemoveBtn: PropTypes.bool.isRequired,
  pageName: PropTypes.string.isRequired,
};
