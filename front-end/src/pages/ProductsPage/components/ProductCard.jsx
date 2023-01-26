import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from '../../../utils/strings';

export default function ProductCard({ product, setTotalPrice }) {
  const [quantity, setQuantity] = useState(0);
  const [priceFormatted, setPriceFormatted] = useState('');
  const { id } = product;

  function getTotalPrice() {
    const products = JSON.parse(localStorage.getItem('delivery_cart'));
    return products.reduce((acc, cur) => ((cur.quantity * Number(cur.price)) + acc), 0);
  }

  function handleOnClickAddProduct() {
    setTotalPrice(getTotalPrice());
    setQuantity((prevState) => prevState + 1);
    const products = JSON.parse(localStorage.getItem('delivery_cart'));
    const isProductInCart = products.some((p) => p.id === id);

    if (isProductInCart) {
      products.find((p, index) => {
        if (p.id === id) products[index].quantity += 1;
        return true;
      });
      localStorage.setItem('delivery_cart', JSON.stringify(products));
    } else {
      const productToAdd = product;
      productToAdd.quantity = 1;
      const newCart = JSON.stringify([...products, productToAdd]);
      localStorage.setItem('delivery_cart', newCart);
    }
  }

  function handleOnClickRemoveProduct() {
    setQuantity(((prevState) => ((prevState - 1) < 0
      ? 0
      : prevState - 1)));

    const products = JSON.parse(localStorage.getItem('delivery_cart'));
    const isProductInCart = products.some((p) => p.id === id);
    console.log(isProductInCart);

    if (isProductInCart) {
      products.find((p, index) => {
        if (p.id === id && products[index].quantity > 1) {
          products[index].quantity -= 1;
        } else {
          products.splice(index, 1);
        }
        return true;
      });
      localStorage.setItem('delivery_cart', JSON.stringify(products));
    }
  }

  function formatProductPriceOnProduceChanges() {
    if (!product) return;

    const productPriceFormatted = product.price.toString().replace('.', ',');
    setPriceFormatted(productPriceFormatted);
  }

  useEffect(() => {
    formatProductPriceOnProduceChanges();
  }, [product]);

  return (
    <div>
      <section>
        <img
          src={ product.urlImage }
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          alt={ `${capitalizeFirstLetter(product.name)} illustration.` }
        />
        <p data-testid={ `customer_products__element-card-price-${product.id}` }>
          {priceFormatted}
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
            value={ quantity }
            onChange={ ({ target: { value } }) => setQuantity(Number(value)) }
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
    price: PropTypes.string,
    productId: PropTypes.number,
    urlImage: PropTypes.string,
  }).isRequired,
  setTotalPrice: PropTypes.func.isRequired,
};
