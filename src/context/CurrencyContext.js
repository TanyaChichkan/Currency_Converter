import { createContext } from 'react';
import { useCurrencyFilter } from '../custom_hooks/useCurrencyFilter';
import { useCurrencyRequest } from '../custom_hooks/useCurrencyRequest';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const { currencyData } = useCurrencyFilter();
  const { loadingInfo } = useCurrencyRequest();

  return (
    <CurrencyContext.Provider
      value={{
        currencyData,
        loadingInfo,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
