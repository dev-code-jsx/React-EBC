export const validateType = (type) => {
    return type === "saving" || type === "monetary";
};

export const typeValidationMessage = 'Por favor seleccione un tipo de cuenta válido';