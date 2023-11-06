import React from 'react';
import './TransactionHistory.css';
import TableRaw from './TableRaw';

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
        {items.map((transaction, index) => (
          <TableRaw key={index} item={transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
