import { useEffect, useState } from 'react';
import { useCurrencyRequest } from './useCurrencyRequest';

export const useCurrencyFilter = () => {
  const { currencyRatesAll } = useCurrencyRequest();
  const [frequentlyUsedCurrency, setFrequentlyUsedCurrency] = useState([]);
  useEffect(() => {
    const filteredByUsdEur = currencyRatesAll
      .map((currencyObj) => ({
        ...currencyObj,
        buy: Number(currencyObj.buy),
        sale: Number(currencyObj.sale),
      }))
      .filter(item => item.ccy !== 'BTC');
    setFrequentlyUsedCurrency(filteredByUsdEur);
  }, [currencyRatesAll]);

  return { currencyData: frequentlyUsedCurrency};
};
