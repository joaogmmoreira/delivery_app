import { useState } from 'react';

export default function CheckoutSellerSelect() {
  const [seller, setSeller] = useState('');
  return (
    <select
      data-testid="customer_checkout__select-seller"
      name="select"
      value={ seller }
      onChange={ ({ target: { value } }) => setSeller(value) }
    >
      <option value="Fulana Pereira">Fulana Pereira</option>
    </select>
  );
}
