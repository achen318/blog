import Meta from '../components/Meta.jsx';
import Posts from '../components/Posts.jsx';
import Title from '../components/Title.jsx';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Meta
        title="Home"
        author="Anthony Chen"
        description="very bloggy website"
      />

      <main className={styles.main}>
        <Title />
        <Posts />
      </main>
    </>
  );
}
