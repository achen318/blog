import fs from 'fs';
import matter from 'gray-matter';

/**
 * Get the metadatas of all posts from the `posts` directory.
 * @return {Array} An array of objects containing the metadatas of all posts.
 */
function getPostsData() {
  // Loop through the contents of the `./posts` directory
  return fs.readdirSync('./posts').map((fileName) => {
    // Remove the .md extension from the file name
    const id = fileName.replace(/\.md$/, '');

    // Read the Markdown content
    const fileContents = fs.readFileSync(`./posts/${fileName}`, 'utf8');
    const matterResults = matter(fileContents);

    // Return an object with keys 'id', 'title', 'author', 'date', and
    // 'description'.
    return {
      id,
      ...matterResults.data
    };
  });
}

/**
 * Sort and return all posts by date, with the most recent post first.
 * @return {Array} A sorted array of objects containing the metadatas of all
 * posts, with the most recent post first.
 */
export function sortedByDate() {
  return getPostsData().sort((a, b) => {
    /*
    If b is newer than a, return a positive value (sort b before a).
    If b is older than a, return a negative value (sort a before b).
    If b is the same age as a, return 0 (keep original order of a and b).
    */
    return new Date(b.date) - new Date(a.date);
  });
}
