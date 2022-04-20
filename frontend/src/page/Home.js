import React from 'react'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newlet from '../components/Newlet'
import Pengumuman from '../components/Pengumuman'
import Popular from '../components/Popular'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Pengumuman />
        <Navbar />
        <Slider />
        <Category />
        <Popular />
        <Newlet />
        <Footer />
    </div>
  )
}

export default Home