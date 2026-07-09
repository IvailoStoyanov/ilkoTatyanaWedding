import styles from "./index.module.scss";
import background from "../../assets/background.png";

export default function FormSuccess() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <img
          src={background}
          alt=""
          className={styles.newspaper}
          aria-hidden="true"
        />
        <div className={styles.content}>
          <h1>Формулярът беше изпратен успешно.</h1>
          <p>Благодарим за Вашия отговор!</p>
          <p>Очакваме ви с нетърпение!</p>
        </div>
      </div>
    </main>
  );
}
