import { useState } from "react";
import { addFavorite } from "../../services";
import "./favoriteModal.css"
export const FavoriteModal = ({ isOpen, onClose, toAccount }) => {
    const [alias, setAlias] = useState('');

    const handleAddFavorite = async () => {
        try {
            const userDetails = JSON.parse(localStorage.getItem('user'));

            const data = {
                user: userDetails._id, 
                accountNumber: toAccount,   
                alias: alias,
            };

            const result = await addFavorite(data);

            if (!result.error) {
                alert("Favorite added successfully");
                onClose();
            } else {
                alert("Error adding favorite: " + result.message);
            }
        } catch (error) {
            console.error('Error adding favorite:', error);
            alert('Error adding favorite');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Add to Favorite</h2>
                <div>
                    <label>Account Number: {toAccount}</label>
                </div>
                <div>
                    <label>Alias</label>
                    <input
                        type="text"
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)}
                    />
                </div>
                <button onClick={handleAddFavorite}>Add Favorite</button>
            </div>
        </div>
    );
};