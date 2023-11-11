import React from "react";
import "../../src/css/Content.css";

const Content = ({ heading }) => {
  return (
    <div className="content">
      <div className="text">
        <h1>{heading}</h1>
        <p>This is some dummy text</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
          sapiente voluptatem, asperiores saepe qui odit reprehenderit
          voluptatum veniam fugit aliquid tenetur libero labore laboriosam
          aliquam facilis tempore amet eveniet? Incidunt.
        </p>
      </div>
      <div className="image">
        <img src="https://picsum.photos/600/500" alt="img" />
      </div>
    </div>
  );
};

export default Content;
