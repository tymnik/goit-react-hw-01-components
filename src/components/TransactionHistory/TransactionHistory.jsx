import React from 'react';
import transactionsData from '../json/transactions.json';
import './TransactionHistory.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className="transactionHistory">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactionsData.map((transaction, index) => (
          <TableRaw key={index} item={transaction} />
        ))}
      </tbody>
    </table>
  );
};

const TableRaw = ({ item }) => {
  const { type, amount, currency } = item;

  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionHistory;
