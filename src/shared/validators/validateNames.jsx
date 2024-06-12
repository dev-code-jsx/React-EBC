export const validateNames = (names) => {
    return /^[a-zA-Z\s]{1,50}$/.test(names);
};

export const namesValidationMessage = 'Los nombres deben tener hasta 50 caracteres y no contener símbolos especiales';