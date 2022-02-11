import styled from 'styled-components';
import { device } from '../../styles/device-queries';

const StyledDiv = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  &:not(:last-of-type) {
    margin-bottom: 30px;
  }

  @media ${device.mobileL} {
    width: 350px;
    margin: 0 auto;
  }
`;

const Wrapper = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Wrapper;
