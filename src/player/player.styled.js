import styled from "styled-components";
import theme from "../styles/themes";

const StylePlayer = styled.div`
  margin-top: 30px;
  padding: 0px 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 1032px) {
    padding: 0;
  }
  @media (max-width: 998px) {
    padding: 0px 70px;
    flex-direction: column;
    margin-bottom: 40px;
  }
  @media (max-width: 568px) {
    padding: 0;
  }
`;

const Image = styled.div`
  width: 100%;
  margin-right: 50px;
  text-align: center;
  .image {
    width: 600px;
    @media (max-width: 1032px) {
      width: 480px;
    }
    @media (max-width: 998px) {
      width: 100%;
    }
  }
`;

const AudioPlayer = styled.div`
  padding-top: 45px;
  margin-right: 80px;
  width: 100%;
  .heading {
    margin-bottom: 18px;
    font-family: "Roboto Mono";
    font-size: 25px;
    font-weight: 700;
  }
  .audio {
    text-algn: center;
    .slider {
      width: 100%;
      height: 6px;
      background: #e4dfdb;
      border-radius: 2px;
      transition: 0.2s all;
      div {
        width: ${props => props.width};
        height: 6px;
        margin-top: 1px;
        background: #826c61;
        border-radius: 2px;
      }
    }

    .controls {
      margin-top: 20px;
      margin-bottom: 15px;
      display: flex;
      justify-content: center;
      button:nth-child(2) {
        margin-left: 30px;
        margin-right: 30px;
      }
    }

    .play {
      padding: 0 3px;
      x: 0px;
      y: 0px;
      enable-background: new 0 0 25 25;

      g {
        stroke: #e4dfdb;
        stroke-width: 1;
        stroke-miterlimit: 10;

        path {
          fill: #e4dfdb;
        }
      }
    }

    .play:hover {
      cursor: pointer;
      g {
        stroke: #826c61;
        cursor: pointer;

        path {
          fill: #826c61;
          cursor: pointer;
        }
      }
    }

    .step-backward {
      x: 0px;
      y: 0px;
      enable-background: new 0 0 25 25;
      margin-bottom: 5px;

      g polygon {
        fill: #e4dfdb;
      }
    }

    .step-foreward {
      x: 0px;
      y: 0px;
      enable-background: new 0 0 25 25;
      margin-bottom: 5px;

      g polygon {
        fill: #e4dfdb;
      }
    }

    .pause {
      x: 0px;
      y: 0px;
      enable-background: new 0 0 25 25;
      cursor: pointer;

      rect {
        fill: #e4dfdb;
      }
    }

    .pause:hover rect {
      fill: #826c61;
    }

    .step-backward g polygon:hover,
    .step-foreward g polygon:hover {
      fill: #826c61;
      cursor: pointer;
    }
  }
  @media (max-width: 568px) {
    margin: 0;
    padding: 0 57px;
  }
`;

const Title = styled.div`
  text-transform: capitalize;
  .sub-title {
    font-size: 13px;
    color: ${theme.colors.textColorLight};
  }
`;

const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
`;

export { StylePlayer, Image, AudioPlayer, Title, Button };
