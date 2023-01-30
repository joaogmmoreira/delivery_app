import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import CheckoutSellerSelect from './components/CheckoutSellerSelect';
import ProductDetailsRow from '../../components/ProductDetailsRow';
/* import useProductsRowsMocks from '../../mocks/useProductsRowsMocks'; */
import addNewOrder from '../../services/addNewOrder';

export default function CheckoutPage() {
  const [products, setProducts] = useState([]);
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  /*   const mockProducts = useProductsRowsMocks(); */
  const history = useHistory();

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

  async function postNewOrder() {
    const productToBeAdded = {
      userId: 1,
      sellerId: 1,
      totalPrice: Number(totalPrice.replace(',', '.')),
      deliveryAddress,
      deliveryNumber: Number(deliveryNumber),
      status: 'Preparando',
      products: [
        {
          id: 1,
          quantity: 3,
        },
      ],
    };

    console.log('Product to be added:', productToBeAdded);

    const response = await addNewOrder(productToBeAdded);

    console.log(response.data.message);
    history.push(`/customer/orders/${response.data.message.id}`);
  }

  function handleOnClickSubmitOrder() {
    postNewOrder();
  }

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
        {totalPrice }
        {' '}
      </span>
      <div>
        <h2>Detalhes e Endereço para Entrega</h2>

        <div>
          <CheckoutSellerSelect />

          <input
            data-testid="customer_checkout__input-address"
            value={ deliveryAddress }
            onChange={ ({ target: { value } }) => setDeliveryAddress(value) }
            type="text"
            placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
          />

          <input
            data-testid="customer_checkout__input-address-number"
            value={ deliveryNumber }
            onChange={ ({ target: { value } }) => setDeliveryNumber(value) }
            type="text"
            placeholder="198"
          />
        </div>

        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
          onClick={ handleOnClickSubmitOrder }
        >
          Finalizar pedido
        </button>
      </div>
      {/* </section> */}
    </div>
  );
}
