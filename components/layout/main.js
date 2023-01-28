import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";

export default function Main({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW={"container.lg"} pt={14}>
        {children}
      </Container>
    </Box>
  );
}
