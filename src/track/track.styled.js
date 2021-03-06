import styled from "styled-components";
import theme from "../styles/themes";

const StyleTrack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 8%;
  margin-bottom: 40px;
  .album {
    width: 90%;
    margin-right: 90px;
    .heading {
      margin-bottom: 18px;
    }
    @media (max-width: 998px) {
      margin-top: 30px;
      margin-right: 0;
      width: 100%;
    }
  }
  .songList {
    width: 90%;
    text-transform: capitalize;
    .main-title {
      margin-bottom: 20px;
    }
    @media (max-width: 998px) {
      width: 100%;
    }
  }
  @media (max-width: 998px) {
    flex-direction: column-reverse;
    padding: 0px 28px;
  }
`;

const Album = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  margin-top: 18px;
  & > * {
    margin-right: 15px;
  }
  .name {
    text-transform: capitalize;
    font-size: 17px;
    width: 40%;
  }
  .year {
    margin-right: 25px;
  }
  .circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${theme.colors.lightBrown};
  }

  .btn {
    width: 63px;
    height: 23px;
    cursor: pointer;
    text-transform: uppercase;
    &:last-child {
      margin-right: 0;
    }
  }
  .light {
    color: ${theme.colors.darkBrown};
    background-color: ${theme.colors.lightBrown};
  }
  .dark {
    color: ${theme.colors.lightBrown};
    background-color: ${theme.colors.darkBrown};
  }
`;

const SongList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-family: "Dancing Script";
  font-size: 13px;
  color: ${theme.colors.textColorLight};
  .song {
    width: 50%;
    margin-right: 35px;
    margin-bottom: 5px;
    .svg {
      fill: ${theme.colors.lightBrown};
      margin-right: 9px;
    }
    .active {
      fill: ${theme.colors.textColorLight};
    }
    .btnTrack {
      color: inherit;
    }
  }
  .time {
    display: flex;
    flex-direction: row;
    width: calc(100% - 50% - 35px);
    align-items: baseline;
    .dot {
      display: inline-block;
      margin-right: 14px;
      width: 100%;
      border-bottom: 2px dotted ${theme.colors.lightBrown};
    }
  }
`;

export { StyleTrack, Album, SongList };
