import React from "react";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <div>
      <Header />
      <Carousel />
      Home
    </div>
  );
};

export default Home;
