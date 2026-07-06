import rings from "../../assets/timetableIcons/rings.svg";
import cocktails from "../../assets/timetableIcons/cocktails.svg";
import camera from "../../assets/timetableIcons/camera.svg";
import presents from "../../assets/timetableIcons/presents.svg";
import diner from "../../assets/timetableIcons/diner.svg";
import kiss from "../../assets/timetableIcons/kiss.svg";
import newspaper from "../../assets/background.png";
import titleWolverine from "../../assets/title-wolverine.svg";
import police from "../../assets/timetableIcons/police.svg";
import party from "../../assets/timetableIcons/party.svg";

import styles from "./index.module.scss";

const Timetable = () => {
  return (
    <div className={styles.timetableWrapper}>
      <div className={styles.start}>
        <div className={styles.titleWrapper}>
          <img
            src={titleWolverine}
            alt="titleWolverine"
          />
          <h2 className={styles.sectionTitle}>Програма</h2>
          <img
            src={titleWolverine}
            alt="titleWolverine"
          />
        </div>
        <img className={styles.newspaper} src={newspaper} alt="newspaper" />
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <img src={cocktails} alt="cocktails" />
            <div className={styles.timeDescriptionWrapper}>
              <h4 className={styles.time}>17:00</h4>
              <p className={styles.description}>пристигане и welcome drink</p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={rings} alt="rings" />
            <div className={styles.timeDescriptionWrapper}>
              <h4 className={styles.time}>17:30</h4>
              <p className={styles.description}>церемония</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.core}>
        <img className={styles.newspaper} src={newspaper} alt="newspaper" />
        <div className={styles.cardsWrapper}>
          <div className={`${styles.card} ${styles.long}`}>
            <img src={camera} alt="camera" />
            <div className={styles.timeDescriptionWrapper}>
              <h4 className={styles.time}>18:00</h4>
              <p className={styles.description}>снимки и поздравления</p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.long}`}>
            <img src={presents} alt="presents" />
            <div className={styles.timeDescriptionWrapper}>
              <h4 className={styles.time}>18:30</h4>
              <p className={styles.description}>
                напитки, фото будка, албум с пожелания
              </p>
            </div>
          </div>
        </div>
        <div className={styles.cardsWrapper}>
          <div className={`${styles.card} ${styles.long}`}>
            <img src={diner} alt="diner" />
            <div className={styles.timeDescriptionWrapper}>
              <h4 className={styles.time}>19:30</h4>
              <p className={styles.description}>
                настаняване за официална вечеря
              </p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.long}`}>
            <img src={kiss} alt="kiss" />
            <div className={styles.timeDescriptionWrapper}>
              <h4 className={styles.time}>20:00</h4>
              <p className={styles.description}>
                посрещане на младоженците и празнична програма
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.party}>
        <img className={styles.newspaper} src={newspaper} alt="newspaper" />
        <div className={styles.partyOrPolice}>
          <div className={styles.partyInformationWrapper}>
            <h4 className={styles.partyTitle}>ВСЯКО НАПУСКАНЕ <br /> ПРЕДИ 01:00 <br /> НЯМА ДА СЕ ТОЛЕРИРА!</h4>
            <div className={styles.card}>
              <img src={party} alt="party" />
              <div className={styles.timeDescriptionWrapper}>
                <h4 className={styles.time}>23:00</h4>
                <p className={styles.description}>
                  пачанга
                  <br />
                  пачанга
                  <br />
                  пачанга
                </p>
              </div>
            </div>
          </div>
          <img className={styles.police} src={police} alt="police" />
        </div>
      </div>
    </div>
  );
};

export default Timetable;
