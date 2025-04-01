import Head from "next/head";
import Container from "react-bootstrap/Container";

import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function Rootlayout({ children }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container as="main" className="py-4 px-3 mx-auto">
        <Header title="Portfolio" />

        {children}

        <Footer />
      </Container>
    </>
  );
}
