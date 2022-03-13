import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import SocialMediaBar from '../src/common/SocialMediaBar'
import Navbar from '../src/common/Navbar'
import Footer from '../src/common/Footer'
import Landing from '../src/components/Landing'
import GetInvolved from '../src/components/GetInvolved'
import ContactUs from '../src/components/ContactUs'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>GDSC KIIT</title>
        <meta name="description" content="Google Developer Students Club KIIT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      <Landing></Landing>
      <GetInvolved></GetInvolved>
      <ContactUs></ContactUs>
      {/* <SocialMediaBar></SocialMediaBar> */}
      <Footer></Footer>
    </div>
  )
}

export default Home
