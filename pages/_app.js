import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
      <Head>
        <title>Game of Defi</title>
        <meta name="description" content="Game of Defi" />
      </Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
