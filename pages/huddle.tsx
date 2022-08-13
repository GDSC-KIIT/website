import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../src/common/Navbar";
import Footer from "../src/common/Footer";

import ContactUs from "../src/components/ContactUs";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>GDSC KIIT</title>
        <meta
          name="description"
          content="Google Developer Students Club KIIT"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

      <br></br>
      <br></br>

      <iframe
        src="https://airtable.com/embed/shrj3RJG3ytCQfDzr?backgroundColor=red"
        width="100%"
        height="1774"
      ></iframe>

      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
