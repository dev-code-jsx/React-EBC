export const validateMonthlyIncome = (monthlyIncome) => {
    const income = parseFloat(monthlyIncome);
    return income >= 100;
};

export const monthlyIncomeValidationMessage = 'El ingreso mensual debe ser mayor o igual a 100';