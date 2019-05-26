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
      width: calc(100% - -37px);
      margin-left: -27px;
    }
  }
`;

const AudioPlayer = styled.div`
  padding-top: 45px;
  margin-right: 80px;
  width: 100%;
  .heading {
    margin-bottom: 18px;
  }
  .audio {
    text-algn: center;
    .slider {
      width: 100%;
      height: 6px;
      background: ${theme.colors.lightBrown};
      border-radius: 2px;
      transition: 0.2s all;
      div {
        width: ${props => props.width};
        height: 6px;
        margin-top: 1px;
        background: ${theme.colors.darkBrown};
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
        stroke: ${theme.colors.lightBrown};
        stroke-width: 1;
        stroke-miterlimit: 10;

        path {
          fill: ${theme.colors.lightBrown};
        }
      }
    }

    .play:hover {
      cursor: pointer;
      g {
        stroke: ${theme.colors.darkBrown};
        cursor: pointer;

        path {
          fill: ${theme.colors.darkBrown};
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
        fill: ${theme.colors.lightBrown};
      }
    }

    .step-foreward {
      x: 0px;
      y: 0px;
      enable-background: new 0 0 25 25;
      margin-bottom: 5px;

      g polygon {
        fill: ${theme.colors.lightBrown};
      }
    }

    .pause {
      x: 0px;
      y: 0px;
      enable-background: new 0 0 25 25;
      cursor: pointer;

      rect {
        fill: ${theme.colors.lightBrown};
      }
    }

    .pause:hover rect {
      fill: ${theme.colors.darkBrown};
    }

    .step-backward g polygon:hover,
    .step-foreward g polygon:hover {
      fill: ${theme.colors.darkBrown};
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
    font-family: "Dancing Script";
    font-size: 13px;
    color: ${theme.colors.textColorLight};
  }
`;

export { StylePlayer, Image, AudioPlayer, Title };
