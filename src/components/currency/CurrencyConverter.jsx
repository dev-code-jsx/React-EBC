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
                <label>Mi Saldo:</label>
                <div className="amount-display">{balance.toFixed(2)} GTQ</div>
            </div>
            <div className="form-group">
                <label>De:</label>
                <div className="conversion-input">
                    <select value="GTQ" disabled>
                        <option value="GTQ">GTQ - Quetzal</option>
                    </select>
                    <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                        {currencyOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <button onClick={handleConvert} disabled={loading}>
                        {loading ? 'Convirtiendo...' : 'Convertir'}
                    </button>
                </div>
            </div>

            {error && <p className="error">{error}</p>}

            {convertedAmount && (
                <div className="result">
                    <h3>Resultado de la Conversión</h3>
                    <p>Saldo Actual: {balance} GTQ</p>
                    <p>Tasa de Conversión: {conversionRate}</p>
                    <p>Monto Convertido: {convertedAmount} {toCurrency}</p>
                </div>
            )}
        </div>
    );
};

export default CurrencyConverter;