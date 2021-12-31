import { getPostData, getPostIds } from '../../lib/posts';

export default function Post() {
  // TODO: fix this
  return <h1>Hello</h1>;
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
