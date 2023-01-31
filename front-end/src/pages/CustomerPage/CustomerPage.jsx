import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import getAllCustomerOrders from '../../services/getAllCustomerOrders';
import OrderCard from './Components/OrderCard';

export default function CustomerPage() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  const getUserId = () => {
    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user);
    const { id } = userObj;

    return id;
  };

  const fetchCustomerOrders = async () => {
    // const id = 15;
    const id = getUserId();
    const customerOrders = await getAllCustomerOrders(id);
    setOrders(customerOrders.data.message);
  };

  useEffect(() => {
    (async () => {
      fetchCustomerOrders();
    })();
  }, []);

  const renderCustomerOrders = () => orders.map((order) => {
    const { id, status, saleDate, totalPrice } = order;
    // console.log(order);
    return (
      <OrderCard
        key={ `${id + saleDate}` }
        id={ id }
        status={ status }
        saleDate={ saleDate }
        totalPrice={ totalPrice }
        onClick={ () => history.push('/') }
      />
    );
  });

  return (
    <>
      <Navbar />
      <h2>Meus Pedidos</h2>
      {
        orders ? renderCustomerOrders() : <h1>Loading...</h1>
      }
    </>
  );
}
