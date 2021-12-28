import Meta from '../components/Meta.jsx';
import PostCard from '../components/PostCard.jsx';

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

          <div className={styles.postsContainer}>
            <PostCard
              url="first-post"
              title="First Post"
              author="a"
              date="tomorrow"
              description="Yes a very nice blog"
            />

            <PostCard
              url="second-post"
              title="Second Post"
              author="b"
              date="at least a year ago"
              description="No"
            />

            <PostCard
              url="third-post"
              title="Third Post"
              author="beng"
              date="literally right now"
              description="e"
            />
          </div>
        </main>
      </div>
    </>
  );
}
