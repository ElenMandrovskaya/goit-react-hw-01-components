import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TransactionsHead,
  TransactionsTr,
  TransactionsTh,
  TransactionsBody,
} from './Transactions.styles';

// import transactions from "../../data/transactions.json";

export default function Transactions({ transactions }) {
  return (
    <TransactionsTable>
      <TransactionsHead>
        <TransactionsTr>
          <TransactionsTh>Type</TransactionsTh>
          <TransactionsTh>Amount</TransactionsTh>
          <TransactionsTh>Currency</TransactionsTh>
        </TransactionsTr>
      </TransactionsHead>
      <TransactionsBody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionsTr key={id}>
            <TransactionsTh>{type}</TransactionsTh>
            <TransactionsTh>{amount}</TransactionsTh>
            <TransactionsTh>{currency}</TransactionsTh>
          </TransactionsTr>
        ))}
      </TransactionsBody>
    </TransactionsTable>
  );
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
