import PropTypes from 'prop-types';
import transactions from "../../data/transactions.json";
import { TransactionsTable, TransactionsHead, TransactionsTr, TransactionsTh, TransactionsBody } from "./Transactions.styles";

export default function Transactions() {
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
};

Transactions.propTypes = {
  id: PropTypes.node,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};