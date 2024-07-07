import { useState } from 'react';

const useTransferForm = () => {
    const [formState, setFormState] = useState({
        fromAccount: { value: '', isValid: true, showError: false, validationMessage: '' },
        toAccount: { value: '', isValid: true, showError: false, validationMessage: '' },
        amount: { value: '', isValid: true, showError: false, validationMessage: '' },
        description: { value: '', isValid: true, showError: false, validationMessage: '' },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: { ...prevState[field], value }
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = value.trim() !== '';
        let validationMessage = isValid ? '' : `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;

        setFormState((prevState) => ({
            ...prevState,
            [field]: { ...prevState[field], isValid, showError: !isValid, validationMessage }
        }));
    };

    return {
        formState,
        handleInputValueChange,
        handleInputValidationOnBlur,
        setFormState
    };
};

export default useTransferForm;