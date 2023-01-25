import { useEffect, useState } from 'react';
import getOneSaleDetails from '../../services/getOneSaleDetails';
import updateOrderStatus from '../../services/updateOrderStatus';

export default function SellerOrderDetailsPage() {
  const [sale, setSale] = useState({});
  const [id, setId] = useState({});
  const [orderStatus, setOrderStatus] = useState('Pendente');

  useEffect(() => {
    const urlArray = (window.location.href).split('/');
    const saleId = urlArray[urlArray.length - 1];
    setId(saleId);
    async function getSale() {
      const saleResult = await getOneSaleDetails(saleId);
      setSale(saleResult.data.message);
    }
    getSale();
  }, [orderStatus]);

  useEffect(() => {
    setOrderStatus(sale.status);
  }, [sale]);

  const prepareOrder = async () => {
    const update = await updateOrderStatus(id, 'Preparando');
    setOrderStatus('Preparando');
    window.alert(update.data.message);
  };

  const deliveryOrder = async () => {
    const update = await updateOrderStatus(id, 'Em Trânsito');
    setOrderStatus('Em Trânsito');
    window.alert(update.data.message);
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
    </div>
  );
}
