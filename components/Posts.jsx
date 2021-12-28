import PostCard from './PostCard.jsx';

import styles from '../styles/Posts.module.css';

export default function Posts() {
  return (
    <div className={styles.postCardContainer}>
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
        description="Double, double toil and trouble; Fire burn and caldron bubble."
      />

      <PostCard
        url="third-post"
        title="Third Post"
        author="beng"
        date="literally right now"
        description="eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
      />
    </div>
  );
}
