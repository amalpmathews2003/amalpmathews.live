// import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/main";
import { AnimatePresence } from "framer-motion";
import Script from "next/script";
import Head from "next/head";
function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CYWF32SRCC"
        strategy="worker"
        id="google-analytics"
        onReady={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag() { window.dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-CYWF32SRCC');
        }}
      />



      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.router} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default Website;
