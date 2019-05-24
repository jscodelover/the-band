import styled from "styled-components";
import theme from "../styles/themes";

const StyleHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0px 140px;
  padding-top: 67px;
  height: 85vh;
  box-sizing: content-box;
  background-color: ${theme.colors.primaryColor};
  text-align: center;
  @media (max-width: 998px) {
    flex-direction: column;
    height: auto;
    padding: 0px 40px;
  }
`;

const Image = styled.div`
  position: relative;
  height: 100%;
  .image {
    height: 86.5vh;
    @media (max-width: 568px) {
      height: 56vh;
    }
  }
  .image-text {
    position: absolute;
    right: 36px;
    bottom: 78px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 80px;
    font-family: "Roboto Mono", monospace;
    font-weight: 700;
    line-height: 78px;
    letter-spacing: -6px;
    text-transform: uppercase;
    &--1 {
      color: ${theme.colors.textColorLight};
    }
    &--2 {
      color: ${theme.colors.textColorDark};
    }
    @media (max-width: 568px) {
      right: 34px;
      bottom: 62px;
      font-size: 40px;
      line-height: 44px;
      letter-spacing: 0;
    }
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  font-family: "Inconsolata";
  .heading {
    font-family: "Avenir", sans-serif;
    font-size: 30px;
    font-weight: 600;
    vertical-align: top;
    margin-bottom: 20px;
    @media (max-width: 998px) {
      margin-top: 20px;
    }
    @media (max-width: 568px) {
      font-size: 28px;
    }
  p {
    text-align: justify;
    @media (max-width: 568px) {
      font-size: 15.5px;
    }
  }

  @media (max-width: 998px) {
    margin-bottom: 43px;
  }
`;

export { StyleHeader, Image, Text };
