import { getPostData, getPostIds } from '../../lib/posts';

import Meta from '../../components/Meta.jsx';

export default function Post({ postData }) {
  return (
    <>
      <Meta
        title={postData.title}
        author={postData.author}
        description={postData.description}
      />

      <main>
        <h2>{postData.title}</h2>
        <p>
          By {postData.author}, {postData.date}
        </p>
        <p>{postData.description}</p>
      </main>
    </>
  );
}

/**
 * Retrieves an array of possible values for `id`.
 * @return {Array} An array of possible values for `id`.
 */
export async function getStaticPaths() {
  const paths = getPostIds();

  return { paths, fallback: false };
}

/**
 * Fetch the necessary data for the post given its ID.
 * @param {*} params Contains the ID of the post to fetch.
 * @return {object} The data for the post given its ID.
 */
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);

  return {
    props: { postData }
  };
}
