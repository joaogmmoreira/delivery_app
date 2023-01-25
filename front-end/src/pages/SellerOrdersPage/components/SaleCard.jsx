import PropTypes from 'prop-types';
// import { useState } from 'react';

export default function SaleCard({ sale }) {
  return (
    <div data-testid={ `seller_orders__element-order-date-${sale.id}` }>
      {sale.status}
    </div>
  );
}

SaleCard.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
  }).isRequired,
};
