import "./transferMForm.css";
import { Input } from "../Input";
import { useState } from "react";
import {FavoriteModal} from "./FavoriteModal.jsx"
import useTransfer from "../../shared/hooks/useTransfer.jsx";
import useTransferForm from "../../shared/hooks/useTransferForm.jsx"
export const TransferMForm = () => {
  const { formState, handleInputValueChange, handleInputValidationOnBlur } = useTransferForm();
  const { transferFunds, isLoading, error, accountDetails } = useTransfer();

  const [isFavoriteModalOpen, setIsFavoriteModalOpen] = useState(false);

  const handleAddFavoriteClick = () => {
    setIsFavoriteModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const amount = formState.amount.value;
    const toAccount = formState.toAccount.value;

    const response = await transferFunds(amount, toAccount);

    if (!response.error) {
      alert('Transfer successful');
    } else {
      alert('Transfer failed: ' + response.message);
    }
  };

  return (
    <div className="general-container">
      <div className="header">
        <h2 className="header-text">Formulario para Transferir</h2>
        <p className="subtitle">
          Transfiera una cantidad de dinero a la cuenta seleccionada
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-field">
              <Input
                field="fromAccount"
                label="From Account"
                value={accountDetails.accountNumber}
                type="text"
                readOnly
              />
            </div>
            <div className="info-field">
              <label>Account Balance: {accountDetails.balance} Quetzales</label>
              <label>Date: {new Date().toLocaleDateString()}</label>
            </div>
            <div className="input-field">
              <Input
                field="amount"
                label="Amount to Transfer"
                value={formState.amount.value}
                onChangeHandler={handleInputValueChange}
                onBlurHandler={handleInputValidationOnBlur}
                type="text"
                showErrorMessage={formState.amount.showError}
                validationMessage={formState.amount.validationMessage}
              />
            </div>
            <div className="input-field to-account-field">
              <div className="to-account-group">
                <Input
                  field="toAccount"
                  label="To Account"
                  value={formState.toAccount.value}
                  onChangeHandler={handleInputValueChange}
                  onBlurHandler={handleInputValidationOnBlur}
                  type="text"
                  showErrorMessage={formState.toAccount.showError}
                  validationMessage={formState.toAccount.validationMessage}
                />
                <button
                  type="button"
                  className="fav-button"
                  disabled={!formState.toAccount.value}
                  onClick={handleAddFavoriteClick}
                >
                  Add to Favorite
                </button>
                <button type="button" className="fav-list-button">
                  Favorite List
                </button>
              </div>
            </div>
            <div className="input-field">
              <Input
                field="description"
                label="Description"
                value={formState.description.value}
                onChangeHandler={handleInputValueChange}
                onBlurHandler={handleInputValidationOnBlur}
                type="text"
                showErrorMessage={formState.description.showError}
                validationMessage={formState.description.validationMessage}
              />
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading ? 'Transferring...' : 'Transferir'}
            </button>
          </div>
        </form>
      </div>
      {error && <div className="error-message">{error}</div>}
      <FavoriteModal 
        isOpen={isFavoriteModalOpen} 
        onClose={() => setIsFavoriteModalOpen(false)} 
        toAccount={formState.toAccount.value} 
      />
    </div>
  );
};