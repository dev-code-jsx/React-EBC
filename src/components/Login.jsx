import logo from "../assets/img/logo.png";
import { Input } from "../components/Input";
import { useState } from "react";
import { useLogin } from "../shared/hooks/useLogin";
import { validatePassword } from "../shared/validators";
import "../pages/auth/authPage.css";

export const Login = () => {
  const { login, isLoading } = useLogin();

  const [formState, setFormState] = useState({
    codeUser: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: { 
      value: "",
      isValid: false,
      showError: false,
    },
  });

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
      case "codeUser":
 
      case "password":
        isValid = validatePassword(value);
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

  const handleLogin = (event) => {
    event.preventDefault();

    login(formState.codeUser.value, formState.password.value);
  };

  const isSubmitButtonDisabled =
    isLoading || !formState.password.isValid || !formState.codeUser.isValid;
  return (
    <div className="login-body">
    <div className="login-container">
        <div className="login-logo">
            <img src={logo} alt="Logo" className="login-logo-img" />
        </div>
        <h1 className="login-title">Welcome</h1>
        <form className="login-form">
            <Input
                field="codeUser"
                label="CodeUser"
                value={formState.codeUser.value}
                onChangeHandler={handleInputValueChange}
                type="text"
                onBlurHandler={handleInputValidationOnBlur}
                showErrorMessage={formState.codeUser.showError}
                validationMessage="Invalid CodeUser"
            />
            <Input
                field="password"
                label="Password"
                value={formState.password.value}
                onChangeHandler={handleInputValueChange}
                type="password"
                onBlurHandler={handleInputValidationOnBlur}
                showErrorMessage={formState.password.showError}
                validationMessage="Invalid Password"
            />
            <button
                className="login-button"
                onClick={handleLogin}
                disabled={isSubmitButtonDisabled}
            >
                Log in
            </button>
        </form>
        </div>
      </div>
  );
};
