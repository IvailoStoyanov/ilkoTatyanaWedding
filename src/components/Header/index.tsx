import styles from "./Header.module.scss";
import varnaTimes from "../../assets/header/varna-times.svg";
import backgroundImage from "../../assets/background.png";
import portrait from "../../assets/header/ilko-and-tatyana.jpg";
import horizontalLine from "../../assets/horizontal-line.svg";

// import { useIsMobile } from "../../hooks/useIsMobile";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        className={`${styles.newspaper}`}
        src={backgroundImage}
        alt="Background"
      />
      <div className={styles.headerIntro}>
        <div className={styles.dateAndLocation}>
          <span>ПЕТЪК, 21 АВГУСТ 2026</span>
          <span className={styles.rightText}>ВАРНА, БЪЛГАРИЯ</span>
        </div>
        <img className={styles.varnaTimes} src={varnaTimes} alt="Invitation" />
      </div>
      <div className={styles.headerContent}>
        <img className={styles.portrait} src={portrait} alt="Portrait" />
        <div className={styles.textWrapper}>
          <span>Скъпи гости, с много обич и вълнение, ние,</span>
          <h1>Татяна & Илия</h1>
          <p>
            имаме щастието да ви поканим на едно от най-вълшебните събития в
            живота ни - нашата сватба! Елате да споделим и отпразнуваме този миг
            заедно!
          </p>
        </div>
        <div className={styles.dateAndLocationBig}>
          <img
            className={styles.horizontalLine}
            src={horizontalLine}
            alt="Location"
          />
          <div className={styles.dateAndLocationContent}>
            <h3>21 Август, 2026 </h3>
            <span>
              Голдън Парк, Варна <br /> k.к. Златни пясъци
            </span>
          </div>
          <img
            className={styles.horizontalLine}
            src={horizontalLine}
            alt="Location"
          />
        </div>
        <div className={styles.bestGuys}>
          <span>Кумуват нашите приятели:</span>
          <h3>
            Елица Момчева <br />и Владимир Илиев
          </h3>
        </div>
      </div>
    </header>
  );
}
