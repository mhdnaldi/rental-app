import React from "react";
import styles from "./Header.module.css";
import group from "../../assets/images/group.png";
import { NavLink, useHistory } from "react-router-dom";
import Button from "../Button/Button";

const Header = (props) => {
  const history = useHistory();
  return (
    <div className={styles.header}>
      <img src={group} alt='' />
      <div className={styles.header__nav}>
        <ul className={styles.header__link}>
          <li>
            <NavLink exact activeStyle={{ color: "#393939" }} to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={{ color: "#393939" }} to='/vahicle'>
              Vehicle Type
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={{ color: "#393939" }} to='/history'>
              History
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.header__button}>
        <Button
          style={{
            height: "30px",
            fontSize: "14px",
            width: "120px",
            borderRadius: "4px",
          }}
          class='button button__primary'
          click={() => history.push("/login")}>
          Login
        </Button>
        <Button
          style={{
            height: "30px",
            fontSize: "14px",
            width: "120px",
            borderRadius: "4px",
          }}
          class='button button__secondary'
          click={() => history.push("/register")}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Header;
