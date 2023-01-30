const salesModelOutput = [
  {
    id: 1,
    userId: 1,
    sellerId: 1,
    totalPrice: '13,00',
    deliveryAddress: 'rua de casa',
    deliveryNumber: '2',
    saleDate: '2023-01-25T16:02:39.000Z',
    status: 'Preparando',
    user_id: 1,
    seller_id: 1,
  },
  {
    id: 3,
    userId: 2,
    sellerId: 1,
    totalPrice: '23,00',
    deliveryAddress: 'Avenida Brasil',
    deliveryNumber: '4',
    saleDate: '2023-01-25T16:06:38.000Z',
    status: 'Pendente',
    user_id: 2,
    seller_id: 1,
  },
];

const oneSaleModelOutput = {
  message: {
    id: 1,
    userId: 1,
    sellerId: 1,
    totalPrice: '13,00',
    deliveryAddress: 'rua de casa',
    deliveryNumber: '2',
    saleDate: '2023-01-25T16:02:39.000Z',
    status: 'Preparando',
    user_id: 1,
    seller_id: 1,
  },
};

const productsFromSale = [
  {
    saleId: 1,
    productId: 1,
    quantity: 2,
    product_id: 1,
    sale_id: 1,
    sales: {
      id: 1,
      userId: 1,
      sellerId: 1,
      totalPrice: '13',
      deliveryAddress: 'rua de casa',
      deliveryNumber: '2',
      saleDate: '2023-01-25T16:02:39.000Z',
      status: 'Preparando',
      user_id: 1,
      seller_id: 1,
    },
    products: {
      id: 1,
      name: 'Skol Lata 250ml',
      price: '2.20',
      urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
    },
  },
  {
    saleId: 1,
    productId: 2,
    quantity: 4,
    product_id: 2,
    sale_id: 1,
    sales: {
      id: 1,
      userId: 1,
      sellerId: 1,
      totalPrice: '13',
      deliveryAddress: 'rua de casa',
      deliveryNumber: '2',
      saleDate: '2023-01-25T16:02:39.000Z',
      status: 'Preparando',
      user_id: 1,
      seller_id: 1,
    },
    products: {
      id: 2,
      name: 'Heineken 600ml',
      price: '7.50',
      urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
    },
  },
];

const updateSaleMessage = '1 sale status updated successfully to: Entregue';

const saleData = {
  userId: 1,
  sellerId: 1,
  totalPrice: 10,
  deliveryAddress: 'Rua da padaria',
  deliveryNumber: 100,
  products: [
    {
      id: 1,
      quantity: 3,
    },
    {
      id: 2,
      quantity: 2,
    },
  ],
};

const createSaleModelOutput = {
  id: 5,
  userId: 1,
  sellerId: 1,
  totalPrice: '10',
  deliveryAddress: 'Rua da padaria',
  deliveryNumber: '100',
  saleDate: '2023-01-25T16:41:39.000Z',
  status: 'Preparando',
  user_id: 1,
  seller_id: 1,
};

module.exports = {
  salesModelOutput,
  oneSaleModelOutput,
  productsFromSale,
  updateSaleMessage,
  saleData,
  createSaleModelOutput,
};
