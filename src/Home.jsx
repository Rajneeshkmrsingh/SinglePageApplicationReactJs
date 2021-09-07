import React from "react";
import Common from "./Common";
import Rocket from "./images/images.png";

const Home = () => {
  return (
    <>
      <Common
        text="Grow your business with "
        btn="Get Started"
        imgSrc={Rocket}
        alternate="grow"
      />
    </>
  );
};
export default Home;