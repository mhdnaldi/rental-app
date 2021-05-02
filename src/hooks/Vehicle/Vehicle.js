import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Vehicle.module.css";
import Header from "../../components/Header/Header";
import Popular from "../../components/Popular/Popular";
import Footer from "../../components/Footer/Footer";
import SearchIcon from "@material-ui/icons/Search";
import Card from "../../components/Card/Card";
import Pagination from "@material-ui/lab/Pagination";

const Vehicle = (props) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [vehicle, setVehicle] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get(
          `${process.env.REACT_APP_URL}products?search=${search}&page=${page}&limit=4&category=${category}`
        )
        .then((res) => {
          setVehicle(res.data.data.result);
          console.log(res.data.data);
          setTotal(res.data.data.total / 4);
          setPage(res.data.data.page);
        })
        .catch((err) => console.log(err));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [category, search, page]);

  const changeCategoryhandler = (e) => {
    setCategory(e);
    setPage(1);
  };

  let cardElement = null;
  if (vehicle.length > 0) {
    cardElement = vehicle.map((el) => (
      <Card key={el.id} title={el.vehicle_name} text={el.vehicle_type} />
    ));
  }
  return (
    <div className={styles.vehicle}>
      <Header />

      <Popular />
      <div className={styles.vehicle__grid}>
        <div className={styles.vehicle__input}>
          <input
            placeholder='Search Vehicle'
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon fontSize='large' />
        </div>
        <div className={styles.vehicle__dropdown}>
          <select onChange={(e) => changeCategoryhandler(e.target.value)}>
            <option value=''>All</option>
            <option value='Bike'>Bike</option>
            <option value='Cars'>Cars</option>
            <option value='Motorbike'>Motorbike</option>
          </select>
        </div>
      </div>
      <h2>Vehicle List</h2>
      <div className={styles.vehicle__list}>{cardElement}</div>
      <div className={styles.vehicle__pagination}>
        <Pagination
          count={Math.ceil(total)}
          onChange={(e, page) => setPage(page)}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Vehicle;
