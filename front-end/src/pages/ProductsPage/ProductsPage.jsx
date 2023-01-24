import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import getAllProductsService from '../../services/getAllProductsService';
import ProductCard from './components/ProductCard';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getAllProducts() {
      const response = await getAllProductsService();
      setProducts(response.data.message);
    }

    getAllProducts();
  }, []);

  return (
    <section>
      <Navbar />
      <div>
        {
          products.map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
            />))
        }
      </div>
    </section>
  );
}
