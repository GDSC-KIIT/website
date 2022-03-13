import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import SocialMediaBar from '../src/components/SocialMediaBar'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>GDSC KIIT</title>
        <meta name="description" content="Google Developer Students Club KIIT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      <SocialMediaBar></SocialMediaBar>
      <Footer></Footer>
    </div>
  )
}

export default Home
