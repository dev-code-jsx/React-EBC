// shared/hooks/useRegisterForm.js
import { useState } from "react";
import {
    validateUsername,
    validateNames,
    validateLastNames,
    validateDPI,
    validateAddress,
    validatePhone,
    validateEmail,
    validateJob,
    validateMonthlyIncome,
    validateType,
} from "../validators";

const useRegisterForm = () => {
    const initialFormState = {
        username: { value: "", isValid: false, showError: false },
        dpi: { value: "", isValid: false, showError: false },
        names: { value: "", isValid: false, showError: false },
        lastNames: { value: "", isValid: false, showError: false },
        phone: { value: "", isValid: false, showError: false },
        email: { value: "", isValid: false, showError: false },
        address: { value: "", isValid: false, showError: false },
        job: { value: "", isValid: false, showError: false },
        monthlyIncome: { value: "", isValid: false, showError: false },
        type: { value: "", isValid: false, showError: false },
    };

    const [formState, setFormState] = useState(initialFormState);

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case "username":
                isValid = validateUsername(value);
                break;
            case "names":
                isValid = validateNames(value);
                break;
            case "lastNames":
                isValid = validateLastNames(value);
                break;
            case "dpi":
                isValid = validateDPI(value);
                break;
            case "address":
                isValid = validateAddress(value);
                break;
            case "phone":
                isValid = validatePhone(value);
                break;
            case "email":
                isValid = validateEmail(value);
                break;
            case "job":
                isValid = validateJob(value);
                break;
            case "monthlyIncome":
                isValid = validateMonthlyIncome(value);
                break;
            case "type":
                isValid = validateType(value);
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
            },
        }));
    };

    return { formState, handleInputValueChange, handleInputValidationOnBlur };
};

export default useRegisterForm;