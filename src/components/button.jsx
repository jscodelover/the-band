import styled from "styled-components";

const Button = styled.button.attrs({
  className: props => props.className
})`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

export default Button;
