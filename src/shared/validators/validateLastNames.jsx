export const validateLastNames = (lastNames) => {
    return /^[a-zA-Z\s]{1,50}$/.test(lastNames);
};

export const lastNamesValidationMessage = 'Los apellidos deben tener hasta 50 caracteres y no contener símbolos especiales';