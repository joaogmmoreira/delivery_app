// Login
const password = '1c37466c159755ce1fa181bd247cb925';

const loginModelOutput = {
  dataValues: {
    name: 'Cliente Zé Birita',
    id: 3,
    role: 'customer',
    password,
  },
};

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkNsaWVudGUgWsOpIEJpcml0YSIsImVtYWlsIjoiemViaXJpdGFAZW1haWwuY29tIiwicGFzc3dvcmQiOiIxYzM3NDY2YzE1OTc1NWNlMWZhMTgxYmQyNDdjYjkyNSIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY3NDg1NzMwNCwiZXhwIjoxNjc1NDYyMTA0fQ.AnwkGxitzFmgvkXZwLDEwPlADZZRrnQG2itf9BkdF8M';

const loginServiceReturn = {
  type: null,
  message: {
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    id: 3,
    role: 'customer',
    token,
  },
};

const wrongLoginServiceReturn = {
  message: 'Invalid fields',
  type: 404,
};

const registerUserReqBody = {
  name: 'teste sobrenome',
  email: 'teste@email.com',
  password: '$#zebirita#$',
};

const createUserReturn = {
  dataValues: {
    name: 'teste sobrenome',
    email: 'teste@email.com',
    password,
    id: 4,
    role: 'customer',
    token,
  },
};

const loginServiceRegisterUserReturn = {
  type: null,
  message: {
    name: 'teste sobrenome',
    email: 'teste@email.com',
    role: 'customer',
    token,
  },
};

const userExistsError = { type: 409, message: 'User already exists' };

// Customer
const customerOrdersModelOutput = [
  {
    id: 1,
    userId: 1,
    sellerId: 1,
    totalPrice: '13',
    deliveryAddress: 'rua de ca',
    deliveryNumber: '2',
    saleDate: '2023-01-25T16:02:39.000Z',
    status: 'Preparando',
    user_id: 1,
    seller_id: 1,
  },
  {
    id: 2,
    userId: 1,
    sellerId: 2,
    totalPrice: '3232',
    deliveryAddress: '2',
    deliveryNumber: '3',
    saleDate: '2023-01-25T16:06:38.000Z',
    status: 'Em Trânsito',
    user_id: 1,
    seller_id: 2,
  },
];

// Admin
const newUserObjInput = {
  name: 'Silver Lanches',
  email: 'teste@teste',
  password: '$#zebirita#$', // 1c37466c159755ce1fa181bd247cb925
  role: 'customer',
};

const newUserObjOutput = {
  name: 'Silver Lanches',
  email: 'teste@teste',
  role: 'customer',
  token,
};

module.exports = {
  loginModelOutput,
  token,
  loginServiceReturn,
  wrongLoginServiceReturn,
  registerUserReqBody,
  createUserReturn,
  loginServiceRegisterUserReturn,
  userExistsError,
  customerOrdersModelOutput,
  newUserObjInput,
  newUserObjOutput,
};
