import styled from 'styled-components';
import { useContext } from 'react';
import { CurrencyContext } from '../../context/CurrencyContext';

import ListItem from './ListItem';

const ListStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const List = () => {
  const { currencyData } = useContext(CurrencyContext);

  return (
    <ListStyled>
      {currencyData.map((item) => (
        <ListItem key={item.ccy} {...item} />
      ))}
    </ListStyled>
  );
};

export default List;
