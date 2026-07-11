import newspaper from "../../assets/background.png";
import titleWolverine from "../../assets/title-wolverine.svg";
import carrage from "../../assets/locationIcons/carrage.svg";
import left from "../../assets/locationIcons/left.svg";
import right from "../../assets/locationIcons/right.svg";
import cabin from "../../assets/locationIcons/cabin.svg";
import pin from "../../assets/locationIcons/pin.svg";

import styles from "./index.module.scss";

const Timetable = () => {
  return (
    <div className={styles.locationWrapper}>
      <img className={styles.newspaper} src={newspaper} alt="newspaper" />
      <div className={styles.titleWrapper}>
        <img src={titleWolverine} alt="titleWolverine" />
        <h2 className={styles.sectionTitle}>Как да стигна?</h2>
        <img src={titleWolverine} alt="titleWolverine" />
      </div>
      <div className={styles.locationContentWrapper}>
        <div className={styles.cabinWrapper}>
          <img src={cabin} alt="cabin" className={styles.cabin} />
          <div className={styles.textWrapper}>
            <a
              href="https://maps.app.goo.gl/VndwQM76SUVs7q7B7"
              className={styles.title}
            >
              <img src={pin} alt="pin" className={styles.pinIcon} />
              Golden Park Varna Events Голдън парк
            </a>
            <p>
              72WV+62, Primorski, 9007, Varna (43, 2889462, 28.0351450, 9009
              Варна)
            </p>
          </div>
        </div>
        <div className={styles.carrageWrapper}>
          <div className={styles.carrageIconsWrapper}>
            <img src={left} alt="left" className={styles.left} />
            <img src={carrage} alt="carrage" />
            <img src={right} alt="right" className={styles.right} />
          </div>
          <div className={styles.boxes}>
            <div className={styles.textBox}>
              <h4>ТРИУМФ ТАКСИ</h4>
              <p>+359 52 644 44</p>
              <p>+359 879 644 444</p>
              <a
                href="https://www.triumftaxi.com/"
                target="_blank"
                className={styles.link}
              >
                www.triumftaxi.com
              </a>
            </div>
            <div className={styles.textBox}>
              <h4>ХИПО ТАКСИ</h4>
              <p>+359 52 344 444</p>
              <p>+359 876 344 444</p>
              <a
                href="https://hippotaxi.bg/"
                target="_blank"
                className={styles.link}
              >
                www.hippotaxi.bg
              </a>
            </div>
            <div className={styles.textBox}>
              <h4>ЙЕЛОУ ТАКСИ</h4>
              <p>+359 882 021 124</p>
              <a
                href="https://www.yellow333.com/"
                target="_blank"
                className={styles.link}
              >
                www.yellow333.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
