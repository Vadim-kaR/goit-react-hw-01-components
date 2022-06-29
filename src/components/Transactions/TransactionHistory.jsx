import PropTypes from 'prop-types';
import { Table, TableHeader, TableData, TableRow } from './transactions.styled';

const TransactionHistory = ({ items }) => (
  <Table>
    <TableHeader>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </TableHeader>
    <tbody>
      {items.map(({ type, amount, currency, id }) => (
        <TableRow key={id}>
          <TableData>{type}</TableData>
          <TableData>{amount}</TableData>
          <TableData>{currency}</TableData>
        </TableRow>
      ))}
    </tbody>
  </Table>
);

TransactionHistory.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
