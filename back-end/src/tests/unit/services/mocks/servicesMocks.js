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

module.exports = {
  loginModelOutput,
  token,
  loginServiceReturn,
  wrongLoginServiceReturn,
  registerUserReqBody,
  createUserReturn,
  loginServiceRegisterUserReturn,
  userExistsError,
};
