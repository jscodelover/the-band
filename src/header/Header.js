import React from "react";
import { StyleHeader, Image, Text } from "./styled.header";

function Header() {
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
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </Text>
    </StyleHeader>
  );
}

export default Header;
