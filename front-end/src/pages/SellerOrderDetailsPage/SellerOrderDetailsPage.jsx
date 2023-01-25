import { useEffect, useState } from 'react';
import getOneSaleDetails from '../../services/getOneSaleDetails';
import getSaleProducts from '../../services/getSaleProducts';
import updateOrderStatus from '../../services/updateOrderStatus';
import SaleProductsTable from './components/SaleProductsTable';

export default function SellerOrderDetailsPage() {
  const [sale, setSale] = useState({});
  const [saleProducts, setSaleProducts] = useState([]);
  const [id, setId] = useState({});
  const [orderStatus, setOrderStatus] = useState('Pendente');

  useEffect(() => {
    const urlArray = (window.location.href).split('/');
    const saleId = urlArray[urlArray.length - 1];
    setId(saleId);
    async function getSale() {
      const saleResult = await getOneSaleDetails(saleId);
      const saleProductsResult = await getSaleProducts(saleId);
      setSale(saleResult.data.message);
      setSaleProducts(saleProductsResult.data.message);
    }
    getSale();
  }, [orderStatus]);

  useEffect(() => {
    setOrderStatus(sale.status);
  }, [sale]);

  const prepareOrder = async () => {
    await updateOrderStatus(id, 'Preparando');
    setOrderStatus('Preparando');
  };

  const deliveryOrder = async () => {
    await updateOrderStatus(id, 'Em Trânsito');
    setOrderStatus('Em Trânsito');
  };

  return (
    <div>
      details
      <div data-testid="seller_order_details__element-order-details-label-order-id">
        Pedido
        {' '}
        {sale.id}
      </div>
      <div data-testid="seller_order_details__element-order-details-label-order-date">
        {sale.saleDate}
      </div>
      <div
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {orderStatus}
      </div>
      <button
        type="button"
        onClick={ prepareOrder }
        data-testid="seller_order_details__button-preparing-check"
      >
        PREPARAR PEDIDO
      </button>
      <button
        type="button"
        onClick={ deliveryOrder }
        data-testid="seller_order_details__button-dispatch-check"
      >
        SAIU PARA ENTREGA
      </button>
      <div data-testid="seller_order_details__element-order-total-price">
        Preço Total:
        {' '}
        {sale.totalPrice}
      </div>
      <div>
        Endereço:
        {' '}
        {sale.deliveryAddress}
        ,
        {sale.deliveryNumber}
      </div>
      {/* <div>
        {saleProducts.map((s) => (
          <h1 key={ s.products.name }>{s.products.name}</h1>
        ))}
      </div> */}
      <SaleProductsTable saleProducts={ saleProducts } />
    </div>
  );
}
