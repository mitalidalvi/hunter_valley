import React from 'react'
import Hero from '../home/hero'
import About from '../home/about'
import Quote from '../home/quote'
import Facility from '../home/facilities'
import "../globals.css"

export default function Home() {
  return <div>
    <Hero />
    <About />
    <Quote />
    {/* <Facility /> */}
  </div>
}