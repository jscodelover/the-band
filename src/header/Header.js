import React from "react";
import { StyleHeader, Image, Text } from "./styled.header";

function Header(props) {
  return (
    <StyleHeader>
      <Image>
        <img className="image" src={`${process.env.PUBLIC_URL}/img/boy.png`} alt="boy" />
        <div className="image-text">
          <span className="image-text--1">Curt</span>
          <span className="image-text--2">Shread</span>
        </div>
      </Image>
      <Text>
        <div className="heading">Meet our band </div>
        <p>{props.track.detail}</p>
      </Text>
    </StyleHeader>
  );
}

export default Header;
