import styled from "styled-components";

const Heading = styled.div.attrs({
  className: props => props.className
})`
  font-family: "Roboto Mono";
  font-size: 25px;
  font-weight: 700;
`;

export default Heading;
