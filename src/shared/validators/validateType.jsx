export const validateType = (type) => {
    return type === "SAVING" || type === "MONETARY";
};

export const typeValidationMessage = 'Por favor seleccione un tipo de cuenta válido';