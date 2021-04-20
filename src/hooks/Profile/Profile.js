import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import { connect } from "react-redux";

import styles from "./Profile.module.css";

const Profile = (props) => {
  console.log(props);
  return (
    <>
      <Header />
      <div className={styles.profile}>
        <h2>Profile</h2>
        <div className={styles.profile__details}>
          <img
            src={`${process.env.REACT_APP_URL}${props.user.images}`}
            alt=''
            className={styles.profile__image}
          />
          <h3>{props.user.username}</h3>
          <p>{props.user.email}</p>
          <p>+62{props.user.phone}</p>
        </div>
        <h2>Edit Profile</h2>
        <div className={styles.profile__edit}>
          <form>
            <Input
              labelStyle={styles.profile__edit}
              label='Username'
              className={styles.profile__edit}
            />
            <Input
              labelStyle={styles.profile__edit}
              label='Password'
              className={styles.profile__edit}
            />
            <Input
              labelStyle={styles.profile__edit}
              label='Address'
              className={styles.profile__edit}
            />
            <Input
              labelStyle={styles.profile__edit}
              label='Phone Number'
              className={styles.profile__edit}
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Profile);
