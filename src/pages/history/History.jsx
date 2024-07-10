import { useEffect, useState } from 'react';
import { getTransactions, revertTransaction } from '../../services';
import toast from 'react-hot-toast';

export const History = () => {
  const [transactions, setTransactions] = useState([]);
  const [receivedTransactions, setReceivedTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTransactions = async () => {
    try {
      const response = await getTransactions();
      console.log('Transactions:', response.data.transactions);
      setTransactions(response.data.transactions);
      setReceivedTransactions(response.data.receivedTransactions);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleRevert = async (idTransaction) => {
    try {
      const response = await revertTransaction(idTransaction);

        toast.success('Transaction reverted successfully');
        await fetchTransactions();
    } catch (err) {
      setError(err.message);
      toast.error('Error al revertir la transacción');
    }
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
                  <button
                    className='btn-revertir'
                    onClick={() => handleRevert(transaction.idTransaction._id)}
                  >
                    Revertir
                  </button>
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
