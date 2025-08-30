import '../styles/globals.css';

import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rafli Permana Putra | IT Support Specialist & Help Desk Engineer</title>
        <meta name="description" content="Portfolio website of Rafli, IT Support Specialist and future SOC Analyst." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;