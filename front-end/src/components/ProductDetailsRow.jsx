import PropTypes from 'prop-types';
import { useState } from 'react';

export default function ProductDetailsRow({
  product,
  index, hasRemoveBtn, pageName,
  reRenderFunc }) {
  const [shouldRender, setShouldRender] = useState(true);

  function handleOnClickRemoveProduct() {
    const deliveryCart = JSON.parse(localStorage.getItem('delivery_cart'));

    const newDelivertCart = Object
      .entries(deliveryCart)
      .filter((p) => {
        if (p[0] === product[0]) return;
        return p;
      });
    /* localStorage.setItem(('delivery_cart', JSON.stringify(newDelivertCart))); */
    console.log(newDelivertCart);

    localStorage
      .setItem('delivery_cart', JSON.stringify(Object.fromEntries(newDelivertCart)));

    setShouldRender(false);
    reRenderFunc();
  }

  return (
    <div>
      {product[1].quantity > 0 && shouldRender && (
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
            {product[0]}
          </span>

          <span
            data-testid={ `customer_${pageName}__element-order-table-quantity-${index}` }
          >
            {product[1].quantity}
          </span>

          <span
            data-testid={
              `customer_${pageName}__element-order-table-unit-price-${index}`
            }
          >
            {(product[1].price).toString().replace('.', ',')}
          </span>

          <span
            data-testid={ `customer_${pageName}__element-order-table-sub-total-${index}` }
          >
            {(Number(product[1].price) * Number(product[1].quantity))
              .toFixed(2).toString().replace('.', ',')}
          </span>
          {
            hasRemoveBtn && (
              <button
                type="button"
                onClick={ handleOnClickRemoveProduct }
                data-testid={
                  `customer_${pageName}__element-order-table-remove-${index}`
                }
              >
                Remover
              </button>
            )
          }
        </div>)}
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
  reRenderFunc: PropTypes.func.isRequired,
};
