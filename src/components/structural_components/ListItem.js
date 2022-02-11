import styled from 'styled-components';
import useWindowSize from '../../custom_hooks/useWindowResize';
import { constantsNumbers, constantsText } from '../../constants/constants';
import flagEU from '../../images/eu-flag.png';
import flagUSD from '../../images/usd-flag.png';
import flagRU from '../../images/ru-flag.png';

const ListItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3%;

  display: ${(props) =>
    props.ccy === constantsText.RUR &&
    props.width < constantsNumbers.screenWidthBig
      ? 'none'
      : 'flex'};
`;

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
      {width > constantsNumbers.screenWidthXXS && (
        <img
          src={getCurrencyFlag(ccy).flag}
          alt={`sign-of-${ccy}`}
          width='40'
          height={
            ccy === constantsText.USD || ccy === constantsText.RUR ? '20' : '35'
          }
        />
      )}
      <span>{getCurrencyFlag(ccy).sign}</span>
      <span>{width > constantsNumbers.screenWidthBig && ccy}</span>
      <span>{buy.toFixed(2)}</span>
      <span>/</span>
      <span>{sale.toFixed(2)}</span>
    </ListItemStyled>
  );
};

export default ListItem;
