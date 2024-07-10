// Queries.jsx
import "./queries.css";
import { useQuery } from "../../shared/hooks";

export const Queries = () => {
  const { queries, isLoading } = useQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!queries) {
    return <p>No data available</p>;
  }

  return (
    <div className="table-container">
      <h2>Query Details</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Account Number</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Balance</th>
            <th>Account Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{queries.accountNumber}</td>
            <td>{queries.name}</td>
            <td>{queries.lastName}</td>
            <td>{queries.username}</td>
            <td>{queries.balance}</td>
            <td>{queries.accountType}</td>
            <td>{queries.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
