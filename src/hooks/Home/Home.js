import React from "react";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./Home.module.css";
import Footer from "../../components/Footer/Footer";
import Popular from "../../components/Popular/Popular";
import user from "../../assets/images/user.png";
import vector from "../../assets/images/vector.png";

const Home = (props) => {
  return (
    <div className={styles.home}>
      <Header />
      <Carousel />
      <Popular />
      <div className={styles.testimonial__section}>
        <h2>Testimonials</h2>
        <div className={styles.testimonial__grid}>
          <div className={styles.testimonial__details}>
            <div className={styles.testimonial__vector}>
              <img src={vector} alt='' />
              <img src={vector} alt='' />
              <img src={vector} alt='' />
              <img src={vector} alt='' />
              <img src={vector} alt='' />
            </div>
            <p>
              ”It was the right decision to rent vehicle here, I spent less
              money and enjoy the trip. It was an amazing experience to have a
              ride for wildlife trip!”
            </p>
            <p>Edward Newgate</p>
            <p>Founder Circle</p>
          </div>
          <div className={styles.testimonial__image}>
            <img src={user} alt='' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
