import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";

import Navbar from "../src/common/Navbar";
import Footer from "../src/common/Footer";
import Landing from "../src/components/Landing";
import GetInvolved from "../src/components/GetInvolved";
import ContactUs from "../src/components/ContactUs";
import FAQ from "../src/components/FAQ";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>GDSC KIIT</title>
        <meta
          name="description"
          content="Google Developer Students Club KIIT"/>
        <meta name="keywords" content="KIIT, GDSC KIIT, Learn and Grow, Developers, Coding Club" />
        <meta name="author" content="GDSC KIIT"/>
        <meta name="viewport" content="width=width-device,initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        id="chat-bot-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w, d) { w.CollectId = "631465d7f9bc0c46b6db599b"; var h = d.head || d.getElementsByTagName("head")[0]; var s = d.createElement("script"); s.setAttribute("type", "text/javascript"); s.async=true; s.setAttribute("src", "https://collectcdn.com/launcher.js"); h.appendChild(s); })(window, document);`,
        }}
      />
      <Navbar></Navbar>
      <Landing></Landing>
      <GetInvolved></GetInvolved>
      <FAQ></FAQ>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
