import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import CheckoutSellerSelect from './components/CheckoutSellerSelect';
import ProductDetailsRow from '../../components/ProductDetailsRow';
/* import useProductsRowsMocks from '../../mocks/useProductsRowsMocks'; */

export default function CheckoutPage() {
  const [products, setProducts] = useState([]);
  const [houseNumber, setHouseNumber] = useState('');
  const [address, setAddress] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  /*   const mockProducts = useProductsRowsMocks(); */

  function getProductsFromDeliveryCart() {
    const productsFromLocalStorage = JSON
      .parse(localStorage.getItem('cart'));

    console.log('ooi', productsFromLocalStorage);

    const productsEntries = Object.entries(productsFromLocalStorage);

    console.log('hello', productsEntries[1]);

    const productsWithQuantity = productsEntries
      .filter((product) => {
        if (product[1].quantity > 0) return product;
        return null;
      });
    console.log('blz', productsWithQuantity[1]);
    setProducts(productsWithQuantity);
  }

  function getTotalPrice() {
    const dfg = products.map((product) => (
      product[1].quantity * Number(product[1].price)));
    const total = dfg.reduce((acc, cur) => cur + acc, 0);
    console.log(dfg);
    console.log(total.toFixed(2).toString().replace('.', ','));
    setTotalPrice(total
      .toFixed(2)
      .toString()
      .replace('.', ','));
  }

  useEffect(() => {
    getProductsFromDeliveryCart();
  }, []);

  useEffect(() => {
    if (products !== 0) { getTotalPrice(); }
  }, [products]);

  return (
    <div>
      <Navbar />
      {/* <section data-testid="customer_checkout__element-order-total-price"> */}
      <div>
        <h2>Finalizar pedido</h2>
        {
          products.map((product, index) => (
            <ProductDetailsRow
              key={ `${product[1].quantity}-${index}-${product[0]}` }
              product={ product }
              index={ index }
              hasRemoveBtn
              pageName="checkout"
              reRenderFunc={ () => getProductsFromDeliveryCart() }
            />
          ))
        }

        <h3>Total Price</h3>
      </div>
      <span data-testid="customer_checkout__element-order-total-price">
        {' '}
        {totalPrice.toLocaleString('pt-br', {
          style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2,
        })}
        {' '}
      </span>
      <div>
        <h2>Detalhes e Endereço para Entrega</h2>

        <div>
          <CheckoutSellerSelect />

          <input
            data-testid="customer_checkout__input-address"
            value={ address }
            onChange={ ({ target: { value } }) => setAddress(value) }
            type="text"
            placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
          />

          <input
            data-testid="customer_checkout__input-address-number"
            value={ houseNumber }
            onChange={ ({ target: { value } }) => setHouseNumber(value) }
            type="text"
            placeholder="198"
          />
        </div>

        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
          onClick={ () => {} }
        >
          Finalizar pedido
        </button>
      </div>
      {/* </section> */}
    </div>
  );
}
