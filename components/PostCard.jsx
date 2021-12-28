import Link from 'next/link';

import styles from '../styles/PostCard.module.css';

export default function PostCard(props) {
  return (
    <Link href={`/posts/${props.url}`}>
      <a className={styles.card}>
        <h2>{props.title}</h2>
        <p>
          <small>
            By {props.author}, {props.date}
          </small>
        </p>
        <p>{props.description}</p>
      </a>
    </Link>
  );
}
