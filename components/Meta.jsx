import Head from 'next/head';

export default function Meta(props) {
  // Props: { title, author, description, image }
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{props.title}</title>

      <link rel="icon" href="../public/favicon.ico" />

      <meta name="author" content={props.author} />
      <meta name="description" content={props.description} />

      <meta name="copyright" content={props.author} />

      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={props.image} />

      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.description} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:image" content={props.image} />
    </Head>
  );
}
