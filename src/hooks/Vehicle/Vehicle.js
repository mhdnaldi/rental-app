import React from "react";
import styles from "./Vehicle.module.css";
import Header from "../../components/Header/Header";
import Popular from "../../components/Popular/Popular";
import Footer from "../../components/Footer/Footer";

const Vehicle = (props) => {
  return (
    <div className={styles.vehicle}>
      <Header />
      <Popular />
      <Footer />
    </div>
  );
};

export default Vehicle;
