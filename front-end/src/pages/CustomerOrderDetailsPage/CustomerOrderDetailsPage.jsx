import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import ProductDetailsRow from '../../components/ProductDetailsRow';
import useProductsRowsMocks from '../../mocks/useProductsRowsMocks';

export default function CustomerOrderDetailsPage() {
  const orders = useProductsRowsMocks();

  useEffect(() => {

  }, []);
  return (
    <div>
      <Navbar />

      <h3>Detalhe do pedido</h3>
      <div>
        <div>
          <span
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            Pedido x
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            Vendedora
          </span>
          <span data-testid="">Data</span>
          <span>Status do pedido</span>
          <button
            type="button"
            onClick={ () => {} }
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
        <div>
          {
            orders.map((order, index) => (
              <ProductDetailsRow
                key={ order.id }
                product={ order }
                index={ index }
                pageName="order_details"
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}
