import PropTypes from 'prop-types';
import { useState } from 'react';

export default function ProductDetailsRow({
  product,
  index,
  hasRemoveBtn,
  // pageName,
  reRenderFunc }) {
  const [, setShouldRender] = useState(true);

  function handleOnClickRemoveProduct() {
    const deliveryCart = JSON.parse(localStorage.getItem('cart'));
    console.log('hi', deliveryCart);

    const newDelivertCart = Object
      .entries(deliveryCart)
      .filter((p) => {
        if (p[0] === product[0]) return;
        return p;
      });

    localStorage
      .setItem('cart', JSON.stringify(Object.fromEntries(newDelivertCart)));

    setShouldRender(deliveryCart);
    reRenderFunc();
  }

  // customer_checkout__element-order-table-item-number

  // return product[1].quantity > 0 && shouldRender && (
  return product[1].quantity > 0 && (
    <div>
      <div
        data-testid={
          `customer_checkout__element-order-table-item-number-${index}`
        }
      >
        {index + 1}
      </div>

      <div
        data-testid={
          `customer_checkout__element-order-table-name-<index>-${index}`
        }
      >
        {product[1].name}
      </div>

      <div
        data-testid={
          `customer_checkout__element-order-table-quantity-${index}`
        }
      >
        {product[1].quantity}
      </div>

      <div
        data-testid={
          `customer_checkout__element-order-table-unit-price-${index}`
        }
      >
        {(product[1].price).toString().replace('.', ',')}
      </div>

      <div
        data-testid={
          `customer_checkout__element-order-table-sub-total-${index}`
        }
      >
        {(Number(product[1].price) * Number(product[1].quantity))
          .toFixed(2).toString().replace('.', ',')}
      </div>
      {
        hasRemoveBtn && (
          <button
            type="button"
            onClick={ handleOnClickRemoveProduct }
            data-testid={
              `customer_checkout__element-order-table-remove-${index}`
            }
          >
            Remover
          </button>
        )
      }
    </div>);
}
// referencia PropTypes https://stackoverflow.com/questions/41771217/react-linter-airbnb-proptypes-array
ProductDetailsRow.propTypes = {
  product: PropTypes.arrayOf(Object).isRequired,
  index: PropTypes.number.isRequired,
  hasRemoveBtn: PropTypes.bool.isRequired,
  // pageName: PropTypes.string.isRequired,
  reRenderFunc: PropTypes.func.isRequired,
};
