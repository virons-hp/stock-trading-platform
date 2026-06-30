import React from 'react'
import { Herosection } from './Herosection'
import { Awards } from './Awards'
import { Education } from './Education'
import { Pricing } from './Pricing'
import { Stats } from './Stats'
import { OpenAccount } from '../OpenAccount'
import { Footer } from '../Footer'
import { Navbar } from './Navbar'

export const HomePage = () => {
  return (
    <>
    <Navbar />
      <Herosection />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  )
}
