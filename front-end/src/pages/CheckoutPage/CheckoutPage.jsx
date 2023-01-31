import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ProductDetailsRow from '../../components/ProductDetailsRow';
/* import useProductsRowsMocks from '../../mocks/useProductsRowsMocks'; */
import addNewOrder from '../../services/addNewOrder';
import getAllUsers from '../../services/getAllUsers';

export default function CheckoutPage() {
  const [products, setProducts] = useState([]);
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [totalPrice, setTotalPrice] = useState('0');
  const [allSellers, setAllSellers] = useState([]);
  const [sellerId, setSellerId] = useState(1);

  /*   const mockProducts = useProductsRowsMocks(); */
  const history = useHistory();

  function getProductsFromDeliveryCart() {
    const productsFromLocalStorage = JSON
      .parse(localStorage.getItem('cart'));

    const productsWithQuantity = productsFromLocalStorage
      .filter((product) => {
        if (product.quantity > 0) return product;
        return null;
      });
    setProducts(productsWithQuantity);
  }

  function getTotalPrice() {
    const total = products.map((product) => (
      product.quantity * Number(product.price)))
      .reduce((acc, cur) => cur + acc, 0);

    console.log(total.toFixed(2).toString().replace('.', ','));
    setTotalPrice(total
      .toFixed(2)
      .toString()
      .replace('.', ','));
  }
  console.log(Number(totalPrice.replace(',', '.')).toFixed(2));

  useEffect(() => {
    getProductsFromDeliveryCart();
  }, []);

  useEffect(() => {
    if (products !== 0) { getTotalPrice(); }
  }, [products]);

  async function postNewOrder() {
    const productToBeAdded = {
      userId: JSON.parse(localStorage.getItem('user')).id,
      sellerId,
      totalPrice: Number(totalPrice.replace(',', '.')).toFixed(2),
      deliveryAddress,
      deliveryNumber: Number(deliveryNumber),
      status: 'Pendente',
      products: JSON.parse(localStorage.getItem('cart')),
    };

    console.log('Product to be added:', productToBeAdded);

    const response = await addNewOrder(productToBeAdded);

    console.log(response.data.message);
    history.push(`/customer/orders/${response.data.message.id}`);
  }

  function handleOnClickSubmitOrder() {
    postNewOrder();
  }

  async function getAllSellers() {
    const { data } = await getAllUsers();
    const allUsers = data.message;
    const allSellersFound = allUsers
      .filter((user) => user.role === 'seller');

    setAllSellers(allSellersFound);
    console.log('all users here', allSellersFound);
  }

  useEffect(() => {
    getAllSellers();
  }, []);

  return (
    <div>
      <Navbar />
      {/* <section data-testid="customer_checkout__element-order-total-price"> */}
      <div>
        <h2>Finalizar pedido</h2>
        {
          products.map((product, index) => (
            <ProductDetailsRow
              key={ `${product.quantity}-${index}-${product}` }
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
          <select
            data-testid="customer_checkout__select-seller"
            name="select"
            value={ sellerId }
            onChange={ ({ target: { value } }) => setSellerId(value) }
          >
            {allSellers.map((seller) => (
              <option key={ seller.id } value={ seller.id }>{ seller.name }</option>
            )) }
          </select>

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
