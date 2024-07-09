import React from 'react';
import useCurrencyConverter from '../../shared/hooks/useCurrencyConverter';
import './currencyConverter.css';

const CurrencyConverter = () => {
    const {
        balance,
        toCurrency,
        convertedAmount,
        conversionRate,
        loading,
        error,
        setToCurrency,
        handleConvert,
    } = useCurrencyConverter();

    const currencyOptions = [
        { value: 'EUR', label: 'EUR - Euro' },
        { value: 'USD', label: 'USD - Dólar estadounidense' },
        { value: 'GBP', label: 'GBP - Libra esterlina' },
        { value: 'JPY', label: 'JPY - Yen japonés' },
        { value: 'CAD', label: 'CAD - Dólar canadiense' },
        { value: 'AUD', label: 'AUD - Dólar australiano' },
        { value: 'CHF', label: 'CHF - Franco suizo' },
        { value: 'CNY', label: 'CNY - Yuan chino' },
    ];

    return (
        <div className="currency-converter">
            <h2>Convertir</h2>
            <div className="form-group">
                <label>Saldo:</label>
                <input type="number" value={balance} disabled />
            </div>
            <div className="form-group">
                <label>De: GTQ (Moneda Base)</label>
            </div>
            <div className="form-group">
                <label>A:</label>
                <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                    {currencyOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleConvert} disabled={loading}>
                {loading ? 'Convirtiendo...' : 'Convertir'}
            </button>

            {error && <p className="error">{error}</p>}

            {convertedAmount && (
                <div className="result">
                    <h3>Conversion Result</h3>
                    <p>Current Balance: {balance} GTQ</p>
                    <p>Conversion Rate: {conversionRate}</p>
                    <p>Amount Converted: {convertedAmount} {toCurrency}</p>
                </div>
            )}
        </div>
    );
};

export default CurrencyConverter;