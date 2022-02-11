import { useEffect, useState, useReducer } from 'react';
import { constantsText, constantsNumbers } from '../constants/constants';
import { fetchCurrencyRates } from '../services/currencyAPI';

const initialState = {
  isLoading: true,
  error: false,
  success: false,
};

const loadingReducer = (state, action) => {
  switch (action.type) {
    case constantsText.loading:
      return { ...state, isLoading: true };
    case constantsText.success:
      return { ...state, isLoading: false, success: true };
    case constantsText.error:
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
    dispatch({ type: constantsText.loading });
    try {
      const data = await fetchCurrencyRates();
      setCurrencyRatesAll(data.data);

      //added  Loader component, so here this setTimeout  is for Loader component showing when the page is loaded for the 1st time, as the data is fetched from BE immediately
      setTimeout(
        () => dispatch({ type: constantsText.success }),
        constantsNumbers.startPageDelay
      );
    } catch (err) {
      console.log(err);
      dispatch({ type: constantsText.error });
    }
  };

  return { currencyRatesAll, loadingInfo: state };
};
