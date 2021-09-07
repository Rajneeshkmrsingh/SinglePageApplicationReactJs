import React from "react";
import Common from "./Common";
import AboutImg from "./images/about.png";

const About = () => {
  return (
    <>
      <Common
        text="Welcome to our about page "
        btn="Know more"
        imgSrc={AboutImg}
        alternate="About image"
      />
    </>
  );
};
export default About;
