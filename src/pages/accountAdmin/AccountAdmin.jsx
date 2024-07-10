import React, { useState } from 'react';
import { useGetUsers } from "../../shared/hooks/userGetUsers";
import { useNavigate } from "react-router-dom";
import "./accountAdmin.css";
import { useDeleteUser } from '../../shared/hooks/useDeleteUser';
import { Modal } from '../../components/modal';

export const AccountAdmin = () => {
  const { accounts } = useGetUsers();
  const navigate = useNavigate();
  const { handleDelete, error } = useDeleteUser();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const openDeleteModal = (id) => {
    setSelectedUserId(id);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedUserId(null);
    setDeleteModalOpen(false);
  };

  const confirmDelete = async () => {
    if (selectedUserId) {
      await handleDelete(selectedUserId);
      closeDeleteModal();
      window.location.reload();
    }
  };

  const handleEdit = (id) => {
    navigate(`/dashboardAdmin/userEdit/${id}`);
  };

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
            <th>Manage</th>
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
              <td>
              <button className="edit-button" onClick={() => handleEdit(user._id)}>Edit</button>
              <button className="delete-button" onClick={() => openDeleteModal(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de confirmación para eliminar */}
      {deleteModalOpen && (
        <Modal onClose={closeDeleteModal}>
          <h3>Confirm Delete</h3>
          <p>Esta seguro de eliminar este usuario?</p>
          <div className="modal-buttons">
            <button className="delete-button" onClick={confirmDelete}>
              Delete
            </button>
            <button className="cancel-button" onClick={closeDeleteModal}>
              Cancel
            </button>
          </div>
          {error && <p className="delete-error">Error: {error}</p>}
        </Modal>
      )}
    </div>
  );
};
