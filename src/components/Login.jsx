import logo from '../assets/img/logo.png'
import {Input} from '../components/Input' 
import '../pages/auth/authPage.css'

export const Login = () => {
/*  const {login, isLoading} = useLogin();
  
  const [formState, setFormState] = useState({
    email: {
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
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      default:
        break;
    }
    setFormState((prevState) =>({
        ...prevState,
        [field]:{
            ...prevState[field],
            isValid,
            showError: !isValid
        }
    }))
  };

  const handleLogin = (event) => {
    event.preventDefault()

    login(formState.email.value, formState.password.value)
  }

  const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid  
*/
  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-logo">
          <img src={logo} alt="Logo" className="login-logo-img" />
        </div>
        <h1 className="login-title">Welcome</h1>
        <form className="login-form">
          <Input
            field="email"
            label="Email"
          //  value={formState.email.value}
      //      onChangeHandler={handleInputValueChange}
            type="text"
        //    onBlurHandler={handleInputValidationOnBlur}
        //    showErrorMessage={formState.email.showError}
         //   validationMessage={emailValidationMessage}
          />
          <Input
            field="password"
            label="Password"
        //    value={formState.password.value}
        //    onChangeHandler={handleInputValueChange}
            type="password"
         //   onBlurHandler={handleInputValidationOnBlur}
         //   showErrorMessage={formState.password.showError}
        //    validationMessage={passwordValidationMessage}
          />
          <button className="login-button" >
            Log in
          </button>
        </form>
        <div className="login-link">

        </div>
      </div>
    </div>
  );
}
