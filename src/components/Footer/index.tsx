import newspaper from "../../assets/background.png";
import titleWolverine from "../../assets/title-wolverine.svg";

import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <img className={styles.newspaper} src={newspaper} alt="newspaper" />
      <div className={styles.titleWrapper}>
        <img src={titleWolverine} alt="titleWolverine" />
        <h2 className={styles.sectionTitle}>с обич <br /> Татяна и Илия</h2>
        <img src={titleWolverine} alt="titleWolverine" />
      </div>
    </div>
  );
};

export default Footer;
