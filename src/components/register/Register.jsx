import React, { useState } from "react";
import { Input } from "../Input";
import { useRegister } from "../../shared/hooks/useRegister";
import useRegisterForm from "../../shared/hooks/useRegisterForm";
import "./register.css";

export const Register = () => {
    const { formState, handleInputValueChange, handleInputValidationOnBlur, setFormState } = useRegisterForm();
    const { register, isLoading, serverErrors, setServerErrors } = useRegister();
    const [activeSection, setActiveSection] = useState("personal");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const missingFields = [];
        for (const [field, state] of Object.entries(formState)) {
            if (!state.isValid && field !== 'dpi') { // Exclude dpi from validation here
                missingFields.push(field);
            }
        }

        if (missingFields.length > 0) {
            alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
        } else {
            const result = await register({
                username: formState.username.value,
                names: formState.names.value,
                lastNames: formState.lastNames.value,
                dpi: Number(formState.dpi.value),
                address: formState.address.value,
                phone: formState.phone.value,
                email: formState.email.value,
                job: formState.job.value,
                monthlyIncome: formState.monthlyIncome.value,
                type: formState.type.value,
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
                setServerErrors(result.errors); // Update serverErrors state
            } else {
                setServerErrors([]); // Clear serverErrors state
                // Handle successful registration if needed
                console.log('User registered successfully:', result);
                // Optionally, redirect or perform any other action upon successful registration
            }
        }
    };

    const isSubmitButtonDisabled =
        isLoading ||
        !formState.username.isValid ||
        !formState.names.isValid ||
        !formState.lastNames.isValid ||
        !formState.address.isValid ||
        !formState.phone.isValid ||
        !formState.email.isValid ||
        !formState.job.isValid ||
        !formState.monthlyIncome.isValid ||
        !formState.type.isValid;

    return (
        <div className="container">
            <div className="header">
                <h1 className="title">Register</h1>
                <p className="subtitle">Create your account to get started.</p>
            </div>
            <div>
                <div className="button-group">
                    <button
                        className={activeSection === "personal" ? "button solid" : "button outline"}
                        onClick={() => setActiveSection("personal")}
                    >
                        Personal Info
                    </button>
                    <button
                        className={activeSection === "account" ? "button solid" : "button outline"}
                        onClick={() => setActiveSection("account")}
                    >
                        Account Details
                    </button>
                    <button
                        className={activeSection === "job" ? "button solid" : "button outline"}
                        onClick={() => setActiveSection("job")}
                    >
                        Job Details
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    {activeSection === "personal" && (
                        <div className="form-section">
                            <div className="input-group">
                                <div className="input-field">
                                    <Input
                                        field="username"
                                        label="Username"
                                        value={formState.username.value}
                                        onChangeHandler={handleInputValueChange}
                                        type="text"
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.username.showError}
                                        validationMessage={formState.username.validationMessage}
                                    />
                                </div>
                                <div className="input-field">
                                    <Input
                                        field="names"
                                        label="Names"
                                        value={formState.names.value}
                                        onChangeHandler={handleInputValueChange}
                                        type="text"
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.names.showError}
                                        validationMessage={formState.names.validationMessage}
                                    />
                                </div>
                                <div className="input-field">
                                    <Input
                                        field="lastNames"
                                        label="Last Names"
                                        value={formState.lastNames.value}
                                        onChangeHandler={handleInputValueChange}
                                        type="text"
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.lastNames.showError}
                                        validationMessage={formState.lastNames.validationMessage}
                                    />
                                </div>
                                <div className="input-field">
                                    <Input
                                        field="dpi"
                                        label="DPI"
                                        value={formState.dpi.value}
                                        onChangeHandler={handleInputValueChange}
                                        type="text"
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.dpi.showError}
                                        validationMessage={formState.dpi.validationMessage}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    {activeSection === "account" && (
                        <div className="form-section">
                            <div className="input-group">
                                <div className="input-field">
                                    <Input
                                        field="address"
                                        label="Address"
                                        value={formState.address.value}
                                        onChangeHandler={handleInputValueChange}
                                        type="text"
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.address.showError}
                                        validationMessage={formState.address.validationMessage}
                                    />
                                </div>
                                <div className="input-field">
                                    <Input
                                        field="phone"
                                        label="Phone"
                                        value={formState.phone.value}
                                        onChangeHandler={handleInputValueChange}
                                        type="text"
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.phone.showError}
                                        validationMessage={formState.phone.validationMessage}
                                    />
                                </div>
                                <div className="input-field">
                                    <Input
                                        field="email"
                                        label="Email"
                                        value={formState.email.value}
                                        onChangeHandler={handleInputValueChange}
                                        type="text"
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.email.showError}
                                        validationMessage={formState.email.validationMessage}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    {activeSection === "job" && (
                        <div className="form-section">
                            <div className="input-group">
                                <div className="input-field">
                                    <Input
                                        field="job"
                                        label="Job"
                                        value={formState.job.value}
                                        onChangeHandler={handleInputValueChange}
                                        type="text"
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.job.showError}
                                        validationMessage={formState.job.validationMessage}
                                    />
                                </div>
                                <div className="input-field">
                                    <Input
                                        field="monthlyIncome"
                                        label="Monthly Income"
                                        value={formState.monthlyIncome.value}
                                        onChangeHandler={handleInputValueChange}
                                        type="text"
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.monthlyIncome.showError}
                                        validationMessage={formState.monthlyIncome.validationMessage}
                                    />
                                </div>
                                <div className="input-field">
                                    <Input
                                        field="type"
                                        label="Type"
                                        value={formState.type.value}
                                        onChangeHandler={handleInputValueChange}
                                        type="text"
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.type.showError}
                                        validationMessage={formState.type.validationMessage}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="form-submit">
                        <button type="submit" className="button solid" disabled={isSubmitButtonDisabled}>
                            {isLoading ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

/*
1.username
2.names
3.lastnames
4.role (este es un comboBox con opciones de admin o user)
5.dpi
6.address 
7.phone
8.email
9job
10.monthlyIncome
*/