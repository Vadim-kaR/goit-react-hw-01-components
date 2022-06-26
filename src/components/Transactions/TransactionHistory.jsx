import PropTypes from 'prop-types';
import {Table, TableHeader,RowInfo} from './transactions.styled'

const TransactionHistory = ({items}) => (
      
      <Table>
      <TableHeader>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHeader>
      <RowInfo>
        {items.map(({type, amount, currency, id}) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}

      </RowInfo>
    </Table>)

TransactionHistory.protoTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })).isRequired
}

export default TransactionHistory;



