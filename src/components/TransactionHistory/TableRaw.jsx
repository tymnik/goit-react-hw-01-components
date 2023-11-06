import React from "react";

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

export default TableRaw;