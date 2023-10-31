import React from 'react';
import { playAudio } from "../utils/animation";
import { click } from "../assets";
import styles from '../styles';

const CustomButton = ({ title, handleClick, restStyles }) => (
  <button
    type="button"
    className={`${styles.btn} ${restStyles}`}
    onClick={() => {
      playAudio(click);
      handleClick();
    }}
  >
    {title}
  </button>
);

export default CustomButton;
