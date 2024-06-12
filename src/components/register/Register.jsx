import React, { useState } from "react";
import { Input } from "../Input";
import { useRegister } from "../../shared/hooks/useRegister";
import useRegisterForm from "../../shared/hooks/useRegisterForm";
import "./register.css";

export const Register = () => {
    const { formState, handleInputValueChange, handleInputValidationOnBlur } = useRegisterForm();
    const { register, isLoading, serverErrors } = useRegister();
    const [activeSection, setActiveSection] = useState("personal");

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Formulario de registro', formState);

        const missingFields = [];
        for (const [field, state] of Object.entries(formState)) {
            if (!state.isValid) {
                missingFields.push(field);
            }
        }

        if (missingFields.length > 0) {
            alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
        } else {
            await register(
                formState.username.value,
                formState.names.value,
                formState.lastNames.value,
                formState.dpi.value,
                formState.address.value,
                formState.phone.value,
                formState.email.value,
                formState.job.value,
                formState.monthlyIncome.value,
                formState.type.value
            );
        }
    };

    const isSubmitButtonDisabled =
        isLoading ||
        !formState.username.isValid ||
        !formState.names.isValid ||
        !formState.lastNames.isValid ||
        !formState.dpi.isValid ||
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
                                        validationMessage="Please enter a valid username."
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
                                        validationMessage="Please enter valid names."
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
                                        validationMessage="Please enter valid last names."
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
                                        validationMessage="Please enter a valid DPI."
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
                                        validationMessage="Please enter a valid address."
                                    />
                                </div>
                                <div className="input-field">
                                    <Input
                                        field="phone"
                                        label="Phone"
                                        value={formState.phone.value}
                                        onChangeHandler={handleInputValueChange}
                                        type="tel"
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.phone.showError}
                                        validationMessage="Please enter a valid phone number."
                                    />
                                </div>
                                <div className="input-field">
                                    <Input
                                        field="email"
                                        label="Email"
                                        value={formState.email.value}
                                        onChangeHandler={handleInputValueChange}
                                        type="email"
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.email.showError}
                                        validationMessage="Please enter a valid email address."
                                    />
                                </div>
                                <div className="input-field">
                                    <Input
                                        field="job"
                                        label="Job"
                                        value={formState.job.value}
                                        onChangeHandler={handleInputValueChange}
                                        type="text"
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.job.showError}
                                        validationMessage="Please enter a valid job title."
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
                                        field="monthlyIncome"
                                        label="Monthly Income"
                                        value={formState.monthlyIncome.value}
                                        onChangeHandler={handleInputValueChange}
                                        type="number"
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.monthlyIncome.showError}
                                        validationMessage="Please enter a valid monthly income."
                                    />
                                </div>
                                <div className="input-field">
                                    <select
                                        name="type"
                                        value={formState.type.value}
                                        onChange={(e) => handleInputValueChange('type', e.target.value)}
                                        onBlur={(e) => handleInputValidationOnBlur('type')}
                                    >
                                        <option value="">Select Type</option>
                                        <option value="MONETARY">MONETARY</option>
                                        <option value="SAVING">SAVING</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                    <button type="submit" disabled={isSubmitButtonDisabled}>
                        {isLoading ? "Registering..." : "Register"}
                    </button>
                    {serverErrors.length > 0 && (
                        <div className="server-errors">
                            {serverErrors.map((error, index) => (
                                <div key={index} className="error-message">
                                    {error.msg}
                                </div>
                            ))}
                        </div>
                    )}
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