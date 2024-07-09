import { useState, useEffect } from "react";
import { Input } from "../Input";
import useFavoriteForm from "../../shared/hooks/useFavoriteForm";
import useFavorite from "../../shared/hooks/useFavorite";
import "./favoriteModal.css"
export const FavoriteModal = ({ isOpen, onClose, toAccount }) => {
    const { formState, handleInputValueChange, handleInputValidationOnBlur, setFormState } = useFavoriteForm();
    const { addFavoriteAccount, isLoading, error } = useFavorite();

    useEffect(() => {
        if (!isLoading) {
            setFormState({
                toAccount: { value: toAccount, isValid: true, showError: false, validationMessage: '' },
                alias: { value: '', isValid: true, showError: false, validationMessage: '' },
            });
        }
    }, [isLoading, toAccount, setFormState]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addFavoriteAccount({
            accountNumber: formState.toAccount.value,
            alias: formState.alias.value
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
            console.log('Favorite added correctly:', result);
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Add to Favorite</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-field">
                            <Input
                                field="toAccount"
                                label="To Account"
                                value={formState.toAccount.value}
                                type="text"
                                readOnly
                            />
                        </div>
                        <div className="input-field">
                            <Input
                                field="alias"
                                label="Alias"
                                value={formState.alias.value}
                                onChangeHandler={handleInputValueChange}
                                onBlurHandler={handleInputValidationOnBlur}
                                type="text"
                                showErrorMessage={formState.alias.showError}
                                validationMessage={formState.alias.validationMessage}
                            />
                        </div>
                    </div>
                    <div className="button-container">
                        <button type="submit" className="submit-button" disabled={isLoading}>
                            {isLoading ? 'Adding...' : 'Add Favorite'}
                        </button>
                    </div>
                </form>
                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    );
};