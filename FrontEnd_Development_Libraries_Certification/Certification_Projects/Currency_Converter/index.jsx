const { useState, useMemo } = React;

const currencies = ["CAD", "USD", "EUR", "GBP", "JPY"];

const exchangeRates = {
  CAD: 1,
  USD: 0.78,
  EUR: 0.62,
  GBP: 0.53,
  JPY: 113.89,
};

export function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("CAD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [currentVal, setCurrentVal] = useState(1);

  const convertRates = useMemo(() => {
    const rates = {};

    currencies.forEach((rate) => {
      rates[rate] = exchangeRates[rate] / exchangeRates[fromCurrency];
    });

    return rates;
  }, [fromCurrency]);

  const convertedCurrency = () => {
    return (currentVal * convertRates[toCurrency] || 0).toFixed(2);
  };

  return (
    <div>
      <input
        type="number"
        value={currentVal}
        onChange={(e) => setCurrentVal(Number(e.target.value) || 0)}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency + "-from"} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency + "-to"} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <div>
        <p>{`${convertedCurrency()} ${toCurrency}`}</p>
      </div>
    </div>
  );
}
