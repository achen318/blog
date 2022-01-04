import fs from 'fs';
import matter from 'gray-matter';
import { Converter } from 'showdown';

/**
 * Get the metadatas of all posts from the `posts` directory.
 * @return {Array} An array of objects containing the metadatas of all posts.
 */
function getPostsMetadata() {
	/* Example of the returned array:
	[
	  {
		"id": "first-post",
		"title": "First Post",
		"author": "John Doe",
		"date": "2020-01-01",
		"description": "I am the first post"
	  },
	  {
		"id": "second-post",
		"title": "Second Post",
		"author": "Jane Doe",
		"date": "2020-01-02",
		"description": "I am the second post"
	  }
	]
	*/

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
 * Get all IDs of posts.
 * @return {Array} An array of objects of objects containing the IDs of all posts.
 */
export function getPostIds() {
	/* Example of the return value:
	  [
		{
		  params: {
			id: 'first-post'
		  }
		},
		{
		  params: {
			id: 'second-post'
		  }
		}
	  ]
	*/

	// Loop through the contents of the `./posts` directory
	return fs.readdirSync('./posts').map((fileName) => {
		// Return an object with key 'param' and value of an object with key 'id'.
		return {
			params: {
				id: fileName.replace(/\.md$/, '')
			}
		};
	});
}

/**
 * Get the metadata of a post given its ID.
 * @param {string} id The ID of the post.
 * @return {Array} An object containing the metadata of the post.
 */
export function getPostData(id) {
	/* Example of the returned object:
	  {
		"id": "first-post",
		"title": "First Post",
		"author": "John Doe",
		"date": "2020-01-01",
		"description": "I am the first post"
	  }
	*/


	var converter = new Converter({ tables: true });
	const fileContents = fs.readFileSync(`./posts/${id}.md`, 'utf8');
	const matterResults = matter(fileContents);

	const contentHtml = converter.makeHtml(matterResults.content);

	// Return an object with keys 'id', 'title', 'author', 'date', and
	// 'description'.
	return {
		id,
		contentHtml,
		...matterResults.data
	};
}

/**
 * Sort and return all posts by date, with the most recent post first.
 * @return {Array} A sorted array of objects containing the metadatas of all
 * posts, with the most recent post first.
 */
export function sortedByDate() {
	return getPostsMetadata().sort((a, b) => {
		/*
		If b is newer than a, return a positive value (sort b before a).
		If b is older than a, return a negative value (sort a before b).
		If b is the same age as a, return 0 (keep original order of a and b).
		*/
		return new Date(b.date) - new Date(a.date);
	});
}
