import './listFavoritesModal.css';
import { useGetFavorites } from '../../shared/hooks/useGetFavorites';
import React from 'react';

export const ListFavoritesModal = ({ isOpen, onClose, onSelect }) => {
    const { favorites, loading, error } = useGetFavorites();
  
    if (!isOpen) return null;
  
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Favorite Accounts</h2>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <ul>
            {Array.isArray(favorites) &&
              favorites.map((favorite) => (
                <li key={favorite.accountNumber} onClick={() => onSelect(favorite.accountNumber)}>
                  {favorite.alias} - {favorite.accountNumber}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
};