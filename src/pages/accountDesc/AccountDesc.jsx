import { useGetUsersDesc } from "../../shared/hooks/userGetUsersDesc";
import './accountAdmin.css'

export const AccountDesc = () => {
  const { accounts, loading } = useGetUsersDesc();


  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Account Number</th>
            <th>Balance</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((user) => (
            <tr key={user._id}>
              <td>{user.accountNumber}</td>
              <td>{user.balance}</td>
              <td>{user.type}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
