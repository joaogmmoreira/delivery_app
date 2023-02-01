import { useEffect, useState } from 'react';
import NavbarsSeller from '../../components/NavbarSeller';
import getOneSaleDetails from '../../services/getOneSaleDetails';
import getSaleProducts from '../../services/getSaleProducts';
import updateOrderStatus from '../../services/updateOrderStatus';
import SaleProductsTable from './components/SaleProductsTable';

const PREPARANDO = 'Preparando';
const PENDENTE = 'Pendente';
const EMTRANSITO = 'Em Trânsito';
const ENTREGUE = 'Entregue';

export default function SellerOrderDetailsPage() {
  const [sale, setSale] = useState({});
  const [saleProducts, setSaleProducts] = useState([]);
  const [id, setId] = useState({});
  const [orderStatus, setOrderStatus] = useState(PENDENTE);

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
    console.log(orderStatus);
  }, [orderStatus]);

  useEffect(() => {
    setOrderStatus(sale.status);
  }, [sale]);

  const prepareOrder = async () => {
    await updateOrderStatus(id, PREPARANDO);
    setOrderStatus(PREPARANDO);
  };

  const deliveryOrder = async () => {
    await updateOrderStatus(id, EMTRANSITO);
    setOrderStatus(EMTRANSITO);
  };

  return (
    <div>
      <NavbarsSeller />
      <h2>Detalhes do Pedido</h2>
      <div data-testid="seller_order_details__element-order-details-label-order-id">
        Pedido
        {' '}
        {sale.id}
      </div>
      <div data-testid="seller_order_details__element-order-details-label-order-date">
        {new Date(sale.saleDate).toLocaleDateString('pt-br')}
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
        disabled={ orderStatus === PREPARANDO || orderStatus === ENTREGUE }
      >
        PREPARAR PEDIDO
      </button>
      <button
        type="button"
        onClick={ deliveryOrder }
        data-testid="seller_order_details__button-dispatch-check"
        disabled={
          orderStatus !== PREPARANDO
          || orderStatus === EMTRANSITO
          || orderStatus === ENTREGUE
        }
      >
        SAIU PARA ENTREGA
      </button>
      <SaleProductsTable saleProducts={ saleProducts } />
      <span>
        Preço Total:
        {' '}
      </span>
      <div data-testid="seller_order_details__element-order-total-price">
        {String(sale.totalPrice).replace('.', ',')}
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
