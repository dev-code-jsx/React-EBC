/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { Input } from "../Input";
import "./register.css";

export const Register = () => {
    const [formState, setFormState] = useState({
        username: {
            value: "",
            isValid: false,
            showError: false,
            validationMessage: "Username is required",
        },
        names: {
            value: "",
            isValid: false,
            showError: false,
            validationMessage: "First name is required",
        },
        lastNames: {
            value: "",
            isValid: false,
            showError: false,
            validationMessage: "Last name is required",
        },
        address: {
            value: "",
            isValid: false,
            showError: false,
            validationMessage: "Address is required",
        },
        phone: {
            value: "",
            isValid: false,
            showError: false,
            validationMessage: "Phone is required",
        },
        email: {
            value: "",
            isValid: false,
            showError: false,
            validationMessage: "Email is required",
        },
        password: {
            value: "",
            isValid: false,
            showError: false,
            validationMessage: "Password is required",
        },
        confirmPassword: {
            value: "",
            isValid: false,
            showError: false,
            validationMessage: "Confirm Password is required",
        },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
                isValid: value !== "",
                showError: value === "",
            },
        }));
    };

    const handleInputBlur = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                showError: value === "",
            },
        }));
    };

    const [activeSection, setActiveSection] = useState("personal");

    const handleSubmit = (e) => {
        e.preventDefault();
        const missingFields = [];

        for (const [field, state] of Object.entries(formState)) {
            if (!state.isValid) {
                missingFields.push(field);
            }
        }

        if (missingFields.length > 0) {
            alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
        } else {
            alert("Form submitted successfully!");
        }
    };

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
                        className={activeSection === "additional" ? "button solid" : "button outline"}
                        onClick={() => setActiveSection("additional")}
                    >
                        Additional Info
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    {activeSection === "personal" && (
                        <div className="form-section">
                            <div className="input-group">
                                <div className="input-field">
                                    <Input
                                        field="names"
                                        label="First name"
                                        value={formState.names.value}
                                        onChangeHandler={handleInputValueChange}
                                        onBlurHandler={handleInputBlur}
                                        type="text"
                                        showErrorMessage={formState.names.showError}
                                        validationMessage={formState.names.validationMessage}
                                    />
                                </div>
                                <div className="input-field">
                                    <Input
                                        field="lastNames"
                                        label="Last name"
                                        value={formState.lastNames.value}
                                        onChangeHandler={handleInputValueChange}
                                        onBlurHandler={handleInputBlur}
                                        type="text"
                                        showErrorMessage={formState.lastNames.showError}
                                        validationMessage={formState.lastNames.validationMessage}
                                    />
                                </div>
                            </div>
                            <div className="input-field">
                                <Input
                                    field="email"
                                    label="Email"
                                    value={formState.email.value}
                                    onChangeHandler={handleInputValueChange}
                                    onBlurHandler={handleInputBlur}
                                    type="email"
                                    showErrorMessage={formState.email.showError}
                                    validationMessage={formState.email.validationMessage}
                                />
                            </div>
                        </div>
                    )}
                    {activeSection === "account" && (
                        <div className="form-section">
                            <div className="input-field">
                                <Input
                                    field="username"
                                    label="Username"
                                    value={formState.username.value}
                                    onChangeHandler={handleInputValueChange}
                                    onBlurHandler={handleInputBlur}
                                    type="text"
                                    showErrorMessage={formState.username.showError}
                                    validationMessage={formState.username.validationMessage}
                                />
                            </div>
                            <div className="input-field">
                                <Input
                                    field="password"
                                    label="Password"
                                    value={formState.password.value}
                                    onChangeHandler={handleInputValueChange}
                                    onBlurHandler={handleInputBlur}
                                    type="password"
                                    showErrorMessage={formState.password.showError}
                                    validationMessage={formState.password.validationMessage}
                                />
                            </div>
                            <div className="input-field">
                                <Input
                                    field="confirmPassword"
                                    label="Confirm Password"
                                    value={formState.confirmPassword.value}
                                    onChangeHandler={handleInputValueChange}
                                    onBlurHandler={handleInputBlur}
                                    type="password"
                                    showErrorMessage={formState.confirmPassword.showError}
                                    validationMessage={formState.confirmPassword.validationMessage}
                                />
                            </div>
                        </div>
                    )}
                    {activeSection === "additional" && (
                        <div className="form-section">
                            <div className="input-field">
                                <Input
                                    field="phone"
                                    label="Phone"
                                    value={formState.phone.value}
                                    onChangeHandler={handleInputValueChange}
                                    onBlurHandler={handleInputBlur}
                                    type="tel"
                                    showErrorMessage={formState.phone.showError}
                                    validationMessage={formState.phone.validationMessage}
                                />
                            </div>
                            <div className="input-field">
                                <Input
                                    field="address"
                                    label="Address"
                                    value={formState.address.value}
                                    onChangeHandler={handleInputValueChange}
                                    onBlurHandler={handleInputBlur}
                                    textarea
                                    showErrorMessage={formState.address.showError}
                                    validationMessage={formState.address.validationMessage}
                                />
                            </div>
                        </div>
                    )}
                    <button type="submit" className="submit-button">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
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