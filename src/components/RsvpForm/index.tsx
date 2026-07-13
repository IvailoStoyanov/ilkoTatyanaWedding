import { useContext } from "react";
import SelectedGuest from "./SelectedGuest";
import NamesComponent from "./NamesComponent";
import NamesList from "./NamesList";
import styles from "./index.module.scss";
import { GuestsContext } from "../../contexts/GuestsContext";
import LoadingNames from "./LoadingNames";
import newspaper from "../../assets/background-two.png";
import underline from "../../assets/underline.svg";

const RsvpForm = () => {
  const context = useContext(GuestsContext);

  if (context === null) {
    return null;
  }

  const { guestsGroupContext, isFetching } = context;

  // TODO: remove form autofocus zoom because on next form name select it doesnt zoom out back
  return guestsGroupContext?.length ? (
    <SelectedGuest />
  ) : (
    <div className={styles.formWrapper}>
      <img src={newspaper} alt="newspaper" className={styles.newspaper} />
      <div className={styles.titleWrapper}>
        <h2>Потвърди присъствие</h2>
      </div>
      <p>
        Молим да потвърдите присъствието си
        <br />
        до 25 Юли 2026 г.
      </p>
      <img src={underline} alt="underline" className={styles.underline} />

      <div className={styles.namesWrapper}>
        <NamesComponent />
        {isFetching ? <LoadingNames /> : <NamesList />}
      </div>
    </div>
  );
};

export default RsvpForm;
