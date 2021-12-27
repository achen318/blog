import Meta from '../components/Meta';

import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  );
}
