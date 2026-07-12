import styles from "./SubHeader.module.scss";
import backgroundImage from "../../assets/background.png";
import horizontalLine from "../../assets/horizontal-line.svg";
import noBaby from "../../assets/no-baby.svg";
import bowTie from "../../assets/bowtie.svg";

export default function SubHeader() {
  return (
    <div className={styles.subHeader}>
      <img className={styles.newspaperDecoration} src={backgroundImage} alt="decoration" />
      <img className={styles.newspaper} src={backgroundImage} alt="newspaper background" />
      <p className={styles.ps}>P.S. Не ни носете цветя, а добро настроение</p>
      <img
        className={styles.horizontalLine}
        src={horizontalLine}
        alt="Horizontal Line"
      />
      <div className={styles.dressCodeWrapper}>
        <span className={styles.dressCodeTitle}>Dress Code</span>
        <img className={styles.bowTie} src={bowTie} alt="Bow Tie" />
        <span>Бъдете яки!</span>
      </div>
      <img
        className={`${styles.horizontalLine} ${styles.inverted}`}
        src={horizontalLine}
        alt="Horizontal Line"
   
      />
      <div className={styles.noBabyWrapper}>
        <img
          className={styles.noBaby}
          src={noBaby}
          alt="no baby"
        />
        <p>
          За да може всички да се отпуснем и насладим на празника, решихме
          нашето сватбено тържество да бъде само за гости над 18 г. Благодарим
          Ви за разбирането!
        </p>
      </div>
    </div>
  );
}
