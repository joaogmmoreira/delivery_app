import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import getAllProductsService from '../../services/getAllProductsService';
import ProductCard from './components/ProductCard';

export default function ProductsPage() {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    async function getAllProducts() {
      const response = await getAllProductsService();
      setProducts(response.data.message);
    }

    getAllProducts();

    const cart = JSON.parse(localStorage.getItem('delivery_cart'));
    if (!cart) localStorage.setItem('delivery_cart', '[]');
  }, []);

  return (
    <section>
      <Navbar />
      <button
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ () => history.push('/customer/checkout') }
      >
        <span> Ver Carrinho: R$ </span>
        <span data-testid="customer_products__checkout-bottom-value">
          {' '}
          {totalPrice.toLocaleString('pt-br', {
            style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2,
          })}
          {' '}
        </span>
      </button>
      <div>
        {
          products.map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
              setTotalPrice={ setTotalPrice }
            />))
        }
      </div>
    </section>
  );
}
