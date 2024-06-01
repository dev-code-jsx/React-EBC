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
        dpi: {
            value: "",
            isValid: false,
            showError: false,
            validationMessage: "DPI is required",
        },
        names: {
            value: "",
            isValid: false,
            showError: false,
            validationMessage: "Names are required",
        },
        lastNames: {
            value: "",
            isValid: false,
            showError: false,
            validationMessage: "Last names are required",
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
        address: {
            value: "",
            isValid: false,
            showError: false,
            validationMessage: "Address is required",
        },
        job: {
            value: "",
            isValid: false,
            showError: false,
            validationMessage: "Job is required",
        },
        monthlyIncome: {
            value: "",
            isValid: false,
            showError: false,
            validationMessage: "Monthly Income is required",
        },
    });

    const handleInputValueChange = (value, field) => {
        if (field === "monthlyIncome" && !/^\d*$/.test(value)) {
            return;
        }
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
                                        onBlurHandler={handleInputBlur}
                                        type="text"
                                        showErrorMessage={formState.username.showError}
                                        validationMessage={formState.username.validationMessage}
                                    />
                                    
                                </div>
                                <div className="input-field">
                                    <Input
                                        field="dpi"
                                        label="DPI"
                                        value={formState.dpi.value}
                                        onChangeHandler={handleInputValueChange}
                                        onBlurHandler={handleInputBlur}
                                        type="text"
                                        showErrorMessage={formState.dpi.showError}
                                        validationMessage={formState.dpi.validationMessage}
                                    />
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="input-field">
                                    <Input
                                        field="names"
                                        label="Names"
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
                                        label="Last Names"
                                        value={formState.lastNames.value}
                                        onChangeHandler={handleInputValueChange}
                                        onBlurHandler={handleInputBlur}
                                        type="text"
                                        showErrorMessage={formState.lastNames.showError}
                                        validationMessage={formState.lastNames.validationMessage}
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
                            <div className="input-field">
                                <label htmlFor="address">Address</label>
                                <Input
                                    field="address"
                                    value={formState.address.value}
                                    onChangeHandler={handleInputValueChange}
                                    onBlurHandler={handleInputBlur}
                                    textarea
                                    showErrorMessage={formState.address.showError}
                                    validationMessage={formState.address.validationMessage}
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="role">Role</label>
                                <select
                                    id="role"
                                    name="role"
                                    onChange={(e) => handleInputValueChange(e.target.value, "role")}
                                    onBlur={(e) => handleInputBlur(e.target.value, "role")}
                                    value={formState.role?.value || ""}
                                >
                                    <option value="">Select role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>

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
                                        onBlurHandler={handleInputBlur}
                                        type="text"
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
                                        onBlurHandler={handleInputBlur}
                                        type="text"
                                        showErrorMessage={formState.monthlyIncome.showError}
                                        validationMessage={formState.monthlyIncome.validationMessage}
                                    />

                                </div>
                            </div>
                        </div>
                    )}
                    <div className="button-container">
                        <button type="submit" className="submit-button">Register</button>
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