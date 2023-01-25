import PropTypes from 'prop-types';

export default function SaleProductsTable({ saleProducts }) {
  return (
    <table>
      <thead>
        <tr>
          <th>
            Item
          </th>
          <th>
            Descrição
          </th>
          <th>
            Quantidade
          </th>
          <th>
            Valor Unitário
          </th>
          <th>
            Sub-total
          </th>
        </tr>
      </thead>
      <tbody>
        {saleProducts.map((sale, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `seller_order_details__element-order-table-item-number-${index}`
              }
            >
              {index}
            </td>
            <td
              data-testid={
                `seller_order_details__element-order-table-name-${index}`
              }
            >
              {sale.products.name}
            </td>
            <td
              data-testid={
                `seller_order_details__element-order-table-quantity-${index}`
              }
            >
              {sale.quantity}
            </td>
            <td
              data-testid={
                `seller_order_details__element-order-table-unit-price-${index}`
              }
            >
              {sale.products.price}
            </td>
            <td
              data-testid={
                `seller_order_details__element-order-table-sub-total-${index}`
              }
            >
              { sale.quantity * sale.products.price }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

SaleProductsTable.propTypes = {
  saleProducts: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};
