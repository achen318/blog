import styles from '../styles/Title.module.css';

export default function Title() {
  return (
    <section>
      <h1 className={styles.title}>blog ™!</h1>

      <p className={styles.description}>
        this is a very nice blog 10/10 would read
      </p>
    </section>
  );
}
