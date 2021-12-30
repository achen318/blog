import Link from 'next/link';
import Meta from '../components/Meta.jsx';
import Title from '../components/Title.jsx';
import { sortedByDate } from '../lib/posts';
import styles from '../styles/Home.module.css';

export default function Home({ postsData }) {
  return (
    <>
      <Meta
        title="Home"
        author="Anthony Chen"
        description="very bloggy website"
      />

      <main className={styles.main}>
        <Title />

        <section className={styles.postCardContainer}>
          {postsData.map(({ id, title, author, date, description }) => (
            // Loop through postsData and create a post card for each post

            <Link href={`/posts/${id}`} key={id}>
              <a className={styles.card}>
                <h2>{title}</h2>

                <p className={styles.authorDate}>
                  By {author}, {date}
                </p>

                <p className={styles.cardDescription}>{description}</p>
              </a>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const postsData = sortedByDate();

  return {
    props: { postsData }
  };
}
