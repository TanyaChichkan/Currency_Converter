import styled from 'styled-components';
import List from './List';
import Container from './Container';

const HeaderStyled = styled.header`
  background-color: lightgrey;
  padding: 5px 0;
`;

const HeadingStyled = styled.h1`
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <HeadingStyled>Currency rates</HeadingStyled>
        <List />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
