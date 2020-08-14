import styled from "styled-components";

const ColWrapper = styled.div`
  width: ${({width}) => (width || '400px')};
  margin: 0 auto;
`;

export { ColWrapper }
