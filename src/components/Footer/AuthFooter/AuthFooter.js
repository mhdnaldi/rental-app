import React from "react";
import styles from "./AuthFooter.module.css";
import group from "../../../assets/images/group.png";

import FacebookIcon from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";

const AuthFooter = () => {
  return (
    <div className={styles.authfooter}>
      <img className={styles.authfooter__group} src={group} alt='' />
      <div className={styles.authfooter__text}>
        <div>
          <p>
            Plan and book your perfect trip with expert advice, travel tips for
            vehicle information from us
          </p>
          <p>©2020 Vehicle Rental Center. All rights reserved</p>
        </div>
        <div></div>
      </div>
      <div className={styles.authfooter__underline}></div>
      <div className={styles.authfooter__socmed}>
        <FacebookIcon />
        <Twitter />
        <YouTubeIcon />
        <LinkedIn />
        <Instagram />
      </div>
    </div>
  );
};

export default AuthFooter;
