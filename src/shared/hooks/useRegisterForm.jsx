import { useState } from 'react';

const useRegisterForm = () => {
    const [formState, setFormState] = useState({
        username: { value: '', isValid: true, showError: false, validationMessage: '' },
        names: { value: '', isValid: true, showError: false, validationMessage: '' },
        lastNames: { value: '', isValid: true, showError: false, validationMessage: '' },
        dpi: { value: '', isValid: true, showError: false, validationMessage: '' },
        address: { value: '', isValid: true, showError: false, validationMessage: '' },
        phone: { value: '', isValid: true, showError: false, validationMessage: '' },
        email: { value: '', isValid: true, showError: false, validationMessage: '' },
        job: { value: '', isValid: true, showError: false, validationMessage: '' },
        monthlyIncome: { value: '', isValid: true, showError: false, validationMessage: '' },
        type: { value: '', isValid: true, showError: false, validationMessage: '' },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: { ...prevState[field], value }
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        if (field === 'dpi') {
            let isValid = value.trim() !== '';
            let validationMessage = isValid ? '' : 'DPI is required';

            setFormState((prevState) => ({
                ...prevState,
                [field]: { ...prevState[field], isValid, showError: !isValid, validationMessage }
            }));
        } else {
            // Add validations for other fields here if needed
            // Example:
            // let isValid = value.trim() !== '';
            // let validationMessage = isValid ? '' : `${field} is required`;
            // setFormState((prevState) => ({
            //     ...prevState,
            //     [field]: { ...prevState[field], isValid, showError: !isValid, validationMessage }
            // }));
        }
    };

    return {
        formState,
        handleInputValueChange,
        handleInputValidationOnBlur,
        setFormState
    };
};

export default useRegisterForm;
