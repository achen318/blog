import Meta from '../components/Meta.jsx';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Meta
        title="Home"
        author="Anthony Chen"
        description="very bloggy website"
      />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>blog ™!</h1>

          <p className={styles.description}>
            this is a very nice blog 10/10 would read
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Bruh</h3>
              <p>really bruh</p>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
