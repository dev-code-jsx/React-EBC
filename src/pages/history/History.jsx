import { useEffect, useState } from 'react'
import { getTransactions } from '../../services';

export const History = () => {
  const [transactions, setTransactions] = useState([]);
  const [receivedTransactions, setReceivedTransactions] = useState([]);
  const [receivedDeposit, setReceivedDeposit] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await getTransactions();
        setTransactions(response.data.transactions);
        setReceivedTransactions(response.data.receivedTransactions);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>From Account</th>
            <th>To Account</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.idTransaction._id}>
              <td>{transaction.idTransaction.fromAccount}</td>
              <td>{transaction.idTransaction.toAccount}</td>
              <td style={{ color: 'red' }}>- {transaction.idTransaction.amount}</td>
              <td>{formatDate(transaction.idTransaction.date)}</td>
              <td>{transaction.idTransaction.description}</td>
              <td>{transaction.idTransaction.status}</td>
              <td>
                {transaction.idTransaction.reversible && (
                  <button className='btn-revertir'>Revertir</button>
                )}
              </td>
            </tr>
          ))}
          {receivedTransactions.map(transaction => (
            <tr key={transaction.idTransaction._id}>
              <td>{transaction.idTransaction.fromAccount}</td>
              <td>{transaction.idTransaction.toAccount}</td>
              <td style={{ color: 'green' }}>+ {transaction.idTransaction.amount}</td>
              <td>{formatDate(transaction.idTransaction.date)}</td>
              <td>{transaction.idTransaction.description}</td>
              <td>{transaction.idTransaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
