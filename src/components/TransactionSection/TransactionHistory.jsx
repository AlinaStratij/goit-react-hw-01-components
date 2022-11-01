import PropTypes from 'prop-types';

import {
  TransactionHistoryTable,
  TableThead,
  Tablebody,
  TableRow,
} from 'components/TransactionSection/TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionHistoryTable>
      <TableThead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableThead>
      <Tablebody>
        {items.map(item => (
          <TableRow key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </TableRow>
        ))}
      </Tablebody>
    </TransactionHistoryTable>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
