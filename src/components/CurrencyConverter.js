import { useEffect, useState, useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

import Input from './structural_components/Input';
import SelectElement from './structural_components/Select';
import Wrapper from './structural_components/Wrapper';
import {
  calcRateFromData,
  formatNumber,
} from '../helper_functions/converter-helpers';

const CurrencyConverterCopy = () => {
  const { currencyData } = useContext(CurrencyContext);

  const [amountInFrom, setAmountInFrom] = useState(true);
  const [amount, setAmount] = useState(1);

  const [currencyFrom, setCurrencyFrom] = useState('UAH');
  const [currencyTo, setCurrencyTo] = useState('USD');

  const [rate, setRate] = useState(
    () => currencyData.length && calcRateFromData(currencyData, currencyTo)
  );

  let result = amount * rate;
  const [amountRated, setAmountRated] = useState(() => formatNumber(result));

  useEffect(() => {
    setAmountRated(formatNumber(result));
  }, [result]);

  useEffect(() => {
    if (currencyData.length) {
      const rateForCurrencyFrom = calcRateFromData(currencyData, currencyFrom);
      const rateForCurrencyTo = calcRateFromData(currencyData, currencyTo);

      setRate(
        amountInFrom
          ? rateForCurrencyFrom / rateForCurrencyTo
          : rateForCurrencyTo / rateForCurrencyFrom
      );
    }
  }, [
    currencyTo,
    currencyFrom,
    currencyData.length,
    currencyData,
    amountInFrom,
  ]);

  const handleAmountChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'inputFirst':
        setAmount(value);
        setAmountInFrom(true);
        break;

      case 'inputSecond':
        setAmount(value);
        setAmountInFrom(false);
        break;

      default:
        return;
    }
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;

    name === 'selectFirst' ? setCurrencyFrom(value) : setCurrencyTo(value);
  };

  const currencyNames = [...currencyData.map((item) => item.ccy), 'UAH'];

  return (
    <form>
      <Wrapper>
        <Input
          name='inputFirst'
          value={amountInFrom ? amount : amountRated}
          handleChange={handleAmountChange}
        />

        <SelectElement
          textForLabel='Choose currency'
          name='selectFirst'
          value={currencyFrom}
          handleChange={handleSelectChange}
          optionsData={currencyNames}
        />
      </Wrapper>

      <Wrapper>
        <Input
          name='inputSecond'
          value={amountInFrom ? amountRated : amount}
          handleChange={handleAmountChange}
        />

        <SelectElement
          textForLabel='Choose currency'
          name='selectSecond'
          value={currencyTo}
          handleChange={handleSelectChange}
          optionsData={currencyNames}
        />
      </Wrapper>
    </form>
  );
};

export default CurrencyConverterCopy;
