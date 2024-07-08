import "./transferMForm.css";
import { Input } from "../Input";
import { useState } from "react";
import {FavoriteModal} from "./FavoriteModal.jsx"
import useTransfer from "../../shared/hooks/useTransfer.jsx";
import { useEffect } from "react";
import useTransferForm from "../../shared/hooks/useTransferForm.jsx"
export const TransferMForm = () => {
  const { formState, handleInputValueChange, handleInputValidationOnBlur, setFormState } = useTransferForm();
  const { transferFunds, isLoading, error, accountDetails } = useTransfer();
  const [isFavoriteModalOpen, setIsFavoriteModalOpen] = useState(false);

  useEffect(() => {
    if (!isLoading) {
        setFormState({
          fromAccount: { value: '', isValid: true, showError: false, validationMessage: '' },
          toAccount: { value: '', isValid: true, showError: false, validationMessage: '' },
          amount: { value: '', isValid: true, showError: false, validationMessage: '' },
          description: { value: '', isValid: true, showError: false, validationMessage: '' },
        });
    }
}, [isLoading, error, setFormState]);

  const handleAddFavoriteClick = () => {
    setIsFavoriteModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await transferFunds({
      toAccount: formState.toAccount.value,
      amount: Number(formState.amount.value),
      description: formState.description.value,
  });

  if (result && result.errors) {
      console.error('Server validation errors:', result.errors);
      result.errors.forEach(error => {
          const { path, msg } = error;
          setFormState(prevState => ({
              ...prevState,
              [path]: {
                  ...prevState[path],
                  isValid: false,
                  showError: true,
                  validationMessage: msg
              }
          }));
      });
  } else {
      console.log('Transaction done correctly:', result);
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