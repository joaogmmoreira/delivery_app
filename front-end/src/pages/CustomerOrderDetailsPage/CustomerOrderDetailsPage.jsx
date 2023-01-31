import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ProductDetailsRowOrder from '../../components/ProductDetailsRowOrder';
import getAllUsers from '../../services/getAllUsers';
import getSaleProducts from '../../services/getSaleProducts';
import updateOrderStatus from '../../services/updateOrderStatus';

export default function CustomerOrderDetailsPage() {
  // const orders = useProductsRowsMocks();
  const [products, setProducts] = useState([]);
  const [sellerName, setSellerName] = useState([]);
  const [saleStatus, setSaleStatus] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getSale() {
      const allUsers = await getAllUsers();
      const saleProductsResult = await getSaleProducts(id);
      const { status } = saleProductsResult.data.message[0].sales;
      setSaleStatus(status);
      const { sellerId } = saleProductsResult.data.message[0].sales;
      const userName = allUsers.data.message.find((user) => user.id === sellerId).name;
      setSellerName(userName);
      setProducts(saleProductsResult.data.message);
    }
    getSale();
    console.log(products);
    console.log(id);
  }, []);

  async function handleClick() {
    await updateOrderStatus(id, 'Entregue');
    setSaleStatus('Entregue');
  }

  return (
    <div>
      <Navbar />

      <h3>Detalhe do pedido</h3>
      <div>
        <div>
          <span>Pedido</span>
          <span
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {id}
          </span>
          <span>Vendedor(a)</span>
          <span
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            { sellerName }
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            { products.length > 0
            && new Date(products[0].sales.saleDate).toLocaleDateString('pt-br')}
          </span>
          <span>Status do pedido</span>
          <span
            data-testid={
              `customer_order_details__element-order-details-label-delivery-status${id}`
            }
          >
            { saleStatus }
          </span>
          <button
            type="button"
            onClick={ handleClick }
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
        <div>
          {products.map((order, index) => (
            <ProductDetailsRowOrder
              key={ order.products.id }
              product={ order.products }
              quantity={ order.quantity }
              index={ index }
              pageName="order_details"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
