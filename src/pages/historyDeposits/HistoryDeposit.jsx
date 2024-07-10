import { useEffect, useState } from 'react'
import { getDeposits, revertDeposit } from '../../services';

export const HistoryDeposit = () => {
  const [receivedDeposit, setReceivedDeposit] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeposits = async () => {
      try {
        const response = await getDeposits();
        console.log('Deposits:', response.data);
        if (response && response.data && response.data) {
          setReceivedDeposit(response.data);
        } else {
          setReceivedDeposit([]);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDeposits();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleRevert = async (idDeposit) => {
    try {
      const response = await revertDeposit(idDeposit);

      if (response && response.data && response.data.updatedDeposit) {
        const updatedDeposit = response.data.updatedDeposit;
        const updatedDeposits = receivedDeposit.map(deposit => {
          if (deposit.idDeposit._id === updatedDeposit._id) {
            return { ...deposit, idDeposit: updatedDeposit };
          }
          return deposit;
        });
        setReceivedDeposit(updatedDeposits);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>To Account</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {receivedDeposit.length > 0 ? (
            receivedDeposit.map(deposit => (
              <tr key={deposit._id}>
                <td>{deposit.toAccount}</td>
                <td style={{ color: 'blue' }}>{deposit.amount}</td>
                <td>{formatDate(deposit.date)}</td>
                <td>{deposit.status}</td>
                <td>
                  {deposit.reversible && (
                    <button className='btn-revertir' onClick={() => handleRevert(deposit._id)}>Revertir</button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No deposits found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};