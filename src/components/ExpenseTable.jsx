import React from 'react';

const ExpenseTable = ({ expenses }) => {
  return (
    <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Time</th>
          <th>User Name</th>
          <th>Note</th>
          <th>Expense (BDT)</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length > 0 ? (
          expenses.map((exp) => (
            <tr key={exp.id}>
              <td>{new Date(exp.timestamp).toLocaleString()}</td>
              <td>{exp.user_name}</td>
              <td>{exp.note}</td>
              <td>{exp.amount}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" style={{ textAlign: 'center' }}>
              No expenses recorded.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
