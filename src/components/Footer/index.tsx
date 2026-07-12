import newspaper from "../../assets/background.png";

import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <img className={styles.newspaper} src={newspaper} alt="newspaper" />
      <div className={styles.titleWrapper}>
        <h2 className={styles.sectionTitle}>с обич <br /> Татяна и Илия</h2>
      </div>
    </div>
  );
};

export default Footer;
