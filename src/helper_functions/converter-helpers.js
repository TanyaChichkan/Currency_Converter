export const calcRateFromData = (arr, currency) => {
  return (
    arr.find((el) => {
      return el.ccy === currency;
    })?.buy || 1
  );
};
export const formatNumber = (number) => {
  return Number.isInteger(number) ? number : number.toFixed(3);
};
