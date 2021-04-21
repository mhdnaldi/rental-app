import React from "react";
import AwesomeSlider from "react-awesome-slider";

import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwsSliderStyles from "react-awesome-slider/dist/styles.css";
import one from "../../assets/images/1.png";
import two from "../../assets/images/2.png";
import three from "../../assets/images/3.png";
import styles from "./Carousel.module.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const CarouselImage = () => {
  return (
    <div className={styles.container}>
      <h1>Explore And</h1>
      <h1>Travel.</h1>
      <AutoplaySlider
        play={true}
        interval={6000}
        className={styles.carousel}
        cssModule={AwsSliderStyles}
        bullets={false}>
        <div>
          <img src={one} alt='' />
        </div>
        <div>
          <img src={two} alt='' />
        </div>
        <div>
          <img src={three} alt='' />
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default CarouselImage;
