import React from 'react'
import './Home.css'
import HoroscopeImg from './img/hs.png'
import Header from './Header';

function Home() {
  return (
    <>
        <Header />
        <div className='section' >
        <h1 className="txt">Astrology Horoscope</h1><br />
        <div id="img"><a href="/Prediction"><img src={HoroscopeImg} alt=''/></a></div>
        </div>
    </>
  )
}

export default Home