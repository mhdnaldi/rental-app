import React from "react";
import styles from "./Footer.module.css";
import group from "../../assets/images/group.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__details}>
        <img src={group} alt='' />
        <p>
          Plan and book your perfect trip with expert advice, travel tips for
          vehicle information from us
        </p>
        <p>©2020 Vehicle Rental Center. All rights reserved</p>
      </div>
      <div className={styles.footer__nav}>
        <p>Destinations</p>
        <p>Bali</p>
        <p>Bandung</p>
        <p>Jakarta</p>
        <p>Medan</p>
      </div>
      <div className={styles.footer__nav}>
        <p>Vehicle</p>
        <p>Bike</p>
        <p>Cars</p>
        <p>Motorbike</p>
        <p>Return Times</p>
        <p>FAQs</p>
      </div>
      <div className={styles.footer__nav}>
        <p>Interest</p>
        <p>Adventure Travel</p>
        <p>Art and Culture</p>
        <p>Wildlife and Nature</p>
        <p>Family Holidays</p>
        <p>Culinary Trip</p>
      </div>
    </div>
  );
};

export default Footer;
