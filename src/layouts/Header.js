import React from "react";
import "../styles/Header.css";

import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";

const images = [image1, image2, image3, image4, image5, image6];

const Header = () => {
  const index = Math.floor(Math.random() * 6);

  return <img src={images[index]} alt="city"></img>;
};

export default Header;
