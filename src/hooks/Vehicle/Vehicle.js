import React, { useEffect } from "react";
import axios from "axios";
import styles from "./Vehicle.module.css";
import Header from "../../components/Header/Header";
import Popular from "../../components/Popular/Popular";
import Footer from "../../components/Footer/Footer";
import SearchIcon from "@material-ui/icons/Search";
import Card from "../../components/Card/Card";

const Vehicle = (props) => {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}vehicle`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={styles.vehicle}>
      <Header />
      <div className={styles.vehicle__input}>
        <input placeholder='Search Vehicle' />
        <SearchIcon fontSize='large' />
      </div>
      <Popular />
      {/* HERE */}
      <h2>Vehicle List</h2>
      <div className={styles.vehicle__list}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Vehicle;
