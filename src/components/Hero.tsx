import logo from "~/assets/logo.svg";

import styles from "./Hero.module.css";

export function Hero(): JSX.Element {
  return (
    <div className={styles.hero}>
      <hgroup className={styles.hgroup}>
        <h1 className={styles.heading}>
          <img alt="幾望" src={logo} className={styles.img} />
        </h1>
        <p className={styles.lead}>Coming Soon...</p>
      </hgroup>
    </div>
  );
}
