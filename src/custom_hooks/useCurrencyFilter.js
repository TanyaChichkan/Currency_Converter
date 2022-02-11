import { useEffect, useState } from 'react';
import { constantsText } from '../constants/constants';
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
      .filter((item) => item.ccy !== constantsText.BTC);
    setFrequentlyUsedCurrency(filteredByUsdEur);
  }, [currencyRatesAll]);

  return { currencyData: frequentlyUsedCurrency };
};
