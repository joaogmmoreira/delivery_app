import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  return (
    <div>
      <section
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        style={ { backgroundImage: product.url_image } }
      >
        <p data-testid={ `customer_products__element-card-price-${product.id}` }>
          {product.price}
        </p>
      </section>

      <section>
        <p data-testid={ `customer_products__element-card-title-${product.id}` }>
          { product.name }
        </p>

        <button
          data-testid={ `customer_products__button-card-add-item-${product.id}` }
          type="button"
          onClick={ () => {} }
        >
          Add
        </button>

        <button
          data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          type="button"
          onClick={ () => {} }
        >
          Remove
        </button>
      </section>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    url_image: PropTypes.string,
  }).isRequired,
};
