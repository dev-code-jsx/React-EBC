import "./transferMForm.css";
import { Input } from "../Input";
import { useState } from "react";
import { FavoriteModal } from "./FavoriteModal";
import useTransferForm from "../../shared/hooks/useTransferForm";

export const TransferMForm = () => {
  const { formState, handleInputValueChange, handleInputValidationOnBlur } = useTransferForm();

  const [isFavoriteModalOpen, setIsFavoriteModalOpen] = useState(false);

  const handleAddFavoriteClick = () => {
    setIsFavoriteModalOpen(true);
  };
  const toAccountValue = parseInt(formState.toAccount.value);

  return (
    <div className="general-container">
      <div className="header">
        <h2 className="header-text">Formulario para Transferir</h2>
        <p className="subtitle">
          Transfiera una cantidad de dinero a la cuenta seleccionada
        </p>
      </div>
      <div>
        <form>
          <div className="input-group">
            <div className="input-field">
              <Input
                field="fromAccount"
                label="From Account"
                value={formState.fromAccount.value}
                onChangeHandler={handleInputValueChange}
                onBlurHandler={handleInputValidationOnBlur}
                type="text"
                showErrorMessage={formState.fromAccount.showError}
                validationMessage={formState.fromAccount.validationMessage}
              />
            </div>
            <div className="info-field">
              <label>Account Number: 12345678</label>
              <label>Account Balance: 5000 Quetzales</label>
              <label>Date: 01/07/2024</label>
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
            <button className="submit-button">Transferir</button>
          </div>
        </form>
      </div>
      <FavoriteModal 
        isOpen={isFavoriteModalOpen} 
        onClose={() => setIsFavoriteModalOpen(false)} 
        toAccount={formState.toAccount.value} 
      />
    </div>
  );
};