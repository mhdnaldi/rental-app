import React from "react";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./Home.module.css";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

const Home = (props) => {
  return (
    <div className={styles.home}>
      <Header />
      <Carousel />
      <div className={styles.popular__section}>
        <h2>Popular In Town</h2>
        <div className={styles.popular__list}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className={styles.testimonial__section}>
        <h2>Testimonials</h2>
        <div className={styles.testimonial__grid}>
          <div className={styles.testimonial__details}></div>
          <div className={styles.testimonial__image}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
