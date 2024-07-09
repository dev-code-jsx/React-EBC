import { useGetUsers } from "../../shared/hooks/userGetUsers";
import './accountAdmin.css'

export const AccountAdmin = () => {
  const { accounts, loading } = useGetUsers();


  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>DPI</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Email</th>
            <th>Monthly Income</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((user) => (
            <tr key={user._id}>
              <td>{user.names}</td>
              <td>{user.lastNames}</td>
              <td>{user.dpi}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.email}</td>
              <td>{user.monthlyIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
