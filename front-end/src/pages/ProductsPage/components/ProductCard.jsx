import PropTypes from 'prop-types';
import { useState } from 'react';
import { capitalizeFirstLetter } from '../../../utils/strings';

export default function ProductCard({ product }) {
  const [productQuantity, setProductQuantity] = useState(0);

  function handleOnClickAddProduct() {
    setProductQuantity((prevState) => prevState + 1);
  }

  function handleOnClickRemoveProduct() {
    setProductQuantity(((prevState) => ((prevState - 1) < 0 ? 0 : prevState - 1)));
  }

  return (
    <div>
      <section>
        <img
          src={ product.urlImage }
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          alt={ `${capitalizeFirstLetter(product.name)} illustration.` }
        />
        <p data-testid={ `customer_products__element-card-price-${product.id}` }>
          {product.price}
        </p>
      </section>

      <section>
        <p data-testid={ `customer_products__element-card-title-${product.id}` }>
          { product.name }
        </p>

        <div>
          <button
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            type="button"
            onClick={ handleOnClickAddProduct }
          >
            Add
          </button>

          <input
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
            value={ productQuantity }
            onChange={ ({ target: { value } }) => setProductQuantity(value) }
          />

          <button
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            type="button"
            onClick={ handleOnClickRemoveProduct }
          >
            Remove
          </button>
        </div>
      </section>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    urlImage: PropTypes.string,
  }).isRequired,
};
