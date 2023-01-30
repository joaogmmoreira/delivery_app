import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from '../../../utils/strings';

export default function ProductCard({ product, cart, setCart }) {
  const [quantity, setQuantity] = useState(0);
  const [priceFormatted, setPriceFormatted] = useState('');

  // function editProductQuantity() {
  //   const updateState = {
  //     ...cart,
  //     [product.name]: {
  //       quantity,
  //       price: product.price,
  //     },
  //   };
  //   setCart(updateState);
  //   // console.log('updateState', updateState);
  // }

  // const updateState = {
  //   name: product.name,
  //   quantity,
  //   price: product.price,
  // };

  function editProductQuantity() {
    const storage = localStorage.getItem('cart');
    const parseStorage = JSON.parse(storage);

    if (parseStorage.length) {
      console.log('dentro', parseStorage.length);
      const storageCheck = parseStorage
        .filter((element) => element.name !== product.name);
      const updateState = [
        ...storageCheck,
        {
          name: product.name,
          quantity,
          // price: priceFormatted,
          price: product.price,
          id: product.id,
        }];
      return setCart(updateState);
    }

    const updateState = [
      ...cart,
      {
        name: product.name,
        quantity,
        // price: priceFormatted,
        price: product.price,
      }];
    return setCart(updateState);
  }

  function handleOnClickAddProduct() {
    setQuantity((prevState) => prevState + 1);
  }

  function handleOnClickRemoveProduct() {
    setQuantity(((prevState) => ((prevState - 1) < 0
      ? 0
      : prevState - 1)));
  }

  function formatProductPriceOnProduceChanges() {
    if (!product) return;

    const productPriceFormatted = product.price.toString().replace('.', ',');
    setPriceFormatted(productPriceFormatted);
  }

  useEffect(() => {
    formatProductPriceOnProduceChanges();
  }, [product]);

  useEffect(() => {
    editProductQuantity();
  }, [quantity]);

  // const setCartEmptyOnFirstLoad = () => {
  //   const cart = localStorage.getItem('cart');
  //   if (!cart) {

  //   }
  // };

  useEffect(() => {
    setCart([]);
  }, []);

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
            onChange={ ({ target: { value } }) => {
              setQuantity(Number(value));
              product.quantity = Number(quantity);
            } }
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
  cart: PropTypes.arrayOf(Object).isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    productId: PropTypes.number,
    quantity: PropTypes.number,
    urlImage: PropTypes.string,
  }).isRequired,
  setCart: PropTypes.func.isRequired,
};
