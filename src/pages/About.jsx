import React from "react";
import Content from "../components/Content";

const About = () => {
  const aboutpage = {
    heading: "This is About Page",
  };
  return (
    <div>
      <Content heading={aboutpage.heading} />
    </div>
  );
};

export default About;
