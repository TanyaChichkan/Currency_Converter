import styled from 'styled-components';
import useWindowSize from '../../custom_hooks/useWindowResize';
import flagEU from '../../images/eu-flag.png';
import flagUSD from '../../images/usd-flag.png';
import flagRU from '../../images/ru-flag.png';

const ListItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3%;

  display: ${(props) =>
    props.ccy === 'RUR' && props.width < 768 ? 'none' : 'flex'};
`;

const SpanStyled = styled.span``;

const ListItem = ({ ccy, buy, sale }) => {
  const { width } = useWindowSize();

  const getCurrencyFlag = (currency) => {
    const flags = {
      USD: { flag: flagUSD, sign: '$' },
      EUR: { flag: flagEU, sign: '€' },
      RUR: { flag: flagRU, sign: '₽' },
    };

    return flags[currency] ?? flagUSD;
  };

  return (
    <ListItemStyled ccy={ccy} width={width}>
      {width > 320 && (
        <img
          src={getCurrencyFlag(ccy).flag}
          alt={`sign-of-${ccy}`}
          width='40'
          height={ccy === 'USD' || ccy === 'RUR' ? '20' : '35'}
        />
      )}
      <SpanStyled>
        {getCurrencyFlag(ccy).sign}
        {width > 768 && ccy}
      </SpanStyled>
      <SpanStyled>{buy.toFixed(2)}</SpanStyled>
      <span>/</span>
      <SpanStyled>{sale.toFixed(2)}</SpanStyled>
    </ListItemStyled>
  );
};

export default ListItem;
