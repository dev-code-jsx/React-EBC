import { useState } from "react";
import { Input } from "../Input";


export const Register = () => {

    const [formState, setFormSatate] = useState({
        username: {
            value: "",
            isValid: false,
            showError: false,
        },
        names: {
            value: "",
            isValid: false,
            showError: false,
        },
        lastNames: {
            value: "",
            isValid: false,
            showError: false,
        },
        role: {
            value: "",
            isValid: false,
            showError: false,
        },  
        dpi: {
            value: "",
            isValid: false,
            showError: false,
        },
        address: {
            value: "",
            isValid: false,
            showError: false,
        },
        phone: {
            value: "",
            isValid: false,
            showError: false,
        },
        email: {
            value: "",
            isValid: false,
            showError: false,
        },
        job: {
            value: "",
            isValid: false,
            showError: false,
        },
        monthlyIncome: {
            value: "",
            isValid: false,
            showError: false,
        },
    });

    const handleInputValueChange = (value, field) => {
        setFormSatate((prevState) => ({
            ...prevState,
            [field]: {
                ...prevStare[field],
                value,
            },
        }));
    };

  return (
    <div>
      
    </div>
  )
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