import React from 'react'
import Header from '../Components/Header'
import Steps from '../Components/Steps'
import Descriptions from '../Components/Descriptions'
import Testimonials from '../Components/Testimonials'
import GenerateBtn from '../Components/GenerateBtn'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Descriptions/>
      <Testimonials/>
      <GenerateBtn/>
    </div>
  )
}

export default Home
