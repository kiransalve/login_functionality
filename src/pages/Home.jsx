import React from "react";
import Content from "../components/Content";

const Home = () => {
  const homepage = {
    heading: "This is Home Page",
  };
  return (
    <div>
      <Content heading={homepage.heading} />
    </div>
  );
};

export default Home;
