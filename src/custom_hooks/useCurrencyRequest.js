import { useEffect, useState, useReducer } from 'react';
import { fetchCurrencyRates } from '../services/currencyAPI';

const initialState = {
  isLoading: true,
  error: false,
  success: false,
};

const loadingReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'SUCCESS':
      return { ...state, isLoading: false, success: true };
    case 'ERROR':
      return { ...state, isLoading: false, error: true, success: false };
    default:
      return state;
  }
};

export const useCurrencyRequest = () => {
  const [currencyRatesAll, setCurrencyRatesAll] = useState([]);
  const [state, dispatch] = useReducer(loadingReducer, initialState);

  useEffect(() => {
    getCurrencyRates();
  }, []);

  const getCurrencyRates = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await fetchCurrencyRates();
      setCurrencyRatesAll(data.data);
      setTimeout(() => dispatch({ type: 'SUCCESS' }), 1000);
    } catch (err) {
      console.log(err);
      dispatch({ type: 'ERROR' });
    }
  };

  return { currencyRatesAll, loadingInfo: state };
};
