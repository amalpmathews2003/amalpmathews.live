import { motion } from "framer-motion";
import Head from "next/head";
import { GridItemStyle } from "./grid-item";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 20 },
  exit: { opacity: 0, x: -0, y: 20 },
};
const Layout = ({ children, title }) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: "easeInOut" }}
    style={{ position: "relative" }}
  >
    <>
      {title && (
        <Head>
          <title>{`${title}-Amal P Mathews`}</title>
          <meta name="title" content={title}></meta>
          <meta property="og:title" content={title}></meta>
        </Head>
      )}
      {children}
      {/* <GridItemStyle> </GridItemStyle> */}
    </>
  </motion.article>
);
export default Layout;
