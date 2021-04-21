import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ImageIcon from "@material-ui/icons/Image";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/index";

import styles from "./Profile.module.css";

const Profile = (props) => {
  const history = useHistory();
  const [images, setImages] = useState(undefined);
  const [profiles, setProfiles] = useState({
    username: {
      label: "Username",
      value: "",
      type: "text",
    },
    password: {
      label: "Password",
      value: "",
      type: "password",
    },
    address: {
      label: "Address",
      value: "",
      type: "text",
    },
    phone: {
      label: "Phone Number",
      value: "",
      type: "number",
    },
  });

  let formElement = [];
  for (let key in profiles) {
    formElement.push({
      id: key,
      config: profiles[key],
    });
  }

  const inputChangeHandler = (e, id) => {
    const updatedForm = { ...profiles };
    profiles[id].value = e.target.value;
    setProfiles(updatedForm);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    let uid = JSON.parse(localStorage.getItem("UID"));
    let id = uid.data.result.id;
    props.patchStart({ ...profiles, images }, id);
  };

  const logoutHandler = () => {
    props.logout();
    history.push("/");
  };

  formElement = formElement.map((el) => (
    <Input
      key={el.id}
      labelStyle={styles.profile__edit}
      label={el.config.label}
      value={el.config.value}
      type={el.config.type}
      placeholder={el.config.placeholder}
      className={styles.profile__edit}
      change={(e) => inputChangeHandler(e, el.id)}
    />
  ));

  return (
    <div>
      <Header />
      {props.user && (
        <div className={styles.profile}>
          <h2>Profile</h2>
          <div className={styles.profile__details}>
            <img
              src={`${process.env.REACT_APP_URL}${props.user.images}`}
              alt=''
              className={styles.profile__image}
            />

            <div className={styles.file__input}>
              <ImageIcon style={{ color: "FEA832" }} />
              <input
                type='file'
                onChange={(e) => setImages(e.target.files[0])}
              />
            </div>
            <h3>{props.user.username}</h3>
            <p>{props.user.email}</p>
            <p>+62{props.user.phone}</p>
          </div>
          <h2>Edit Profile</h2>
          <div className={styles.profile__edit}>
            <form onSubmit={submitFormHandler}>
              {formElement}
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  gap: "20px",
                }}>
                <Button
                  style={{
                    height: "40px",
                    borderRadius: "4px",
                    fontSize: "20px",
                  }}
                  type='submit'
                  class='button'>
                  Save Change
                </Button>
                <Button
                  style={{
                    height: "40px",
                    borderRadius: "4px",
                    fontSize: "20px",
                  }}
                  click={logoutHandler}
                  type='button'
                  class='button button__secondary'>
                  Logout
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
    patchStart: (payload, id) => dispatch(actions.patchUserStart(payload, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
