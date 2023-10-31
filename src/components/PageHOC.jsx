import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import Alert from './Alert';
import { useGlobalContext } from '../context';
import { logoHeader } from '../assets';
import styles from '../styles';

// bg Home
import ninjaBg from '../assets/ninja.gif'

const PageHOC = (Component, title, description) => () => {
  const { showAlert } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <div className={styles.hocContainer} >
      {showAlert?.status && <Alert type={showAlert.type} message={showAlert.message} />}

      <div className={styles.hocContentBox}  style={{backgroundImage: `url(${ninjaBg}), linear-gradient(to right, rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.60))`}}>
        <div className={styles.logoContainBox}>
          <img src={logoHeader} alt="logo" className={styles.hocLogo} onClick={() => navigate('/')} />
          <a href="./"><p className='logoText'>NinjaGambit</p></a>
        </div>

        <div className={styles.hocBodyWrapper}>
          <div className="flex flex-row w-full">
            <h1 className={`flex ${styles.headText} head-text`}>{title}</h1>
          </div>

          <p className={`${styles.normalText} my-10`}>{description}</p>

          <Component />
        </div>
      </div>
    </div>
  );
};

export default PageHOC;
