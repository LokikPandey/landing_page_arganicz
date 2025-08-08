import React from 'react'
import '../Style/Home.css'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Midsection from '../Components/Midsection'
import BottomSection1 from '../Components/BottomSection1'
import BottomSection2 from '../Components/BottomSection2'
import BottomBar from '../Components/BottomBar'

function Home() {
  return (
    <>
    <Navbar />
    <Header/>
    <Midsection />
    <BottomSection1/>
    <BottomSection2/>
    <BottomBar />
    </>
  )
}

export default Home