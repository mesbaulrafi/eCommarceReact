import React from 'react'
import Benner from '../layouts/Benner'
import Body from '../layouts/Body'
import NewArrivals from '/src/components/layouts/NewArrivals'
import Bestsellers from '/src/components/layouts/Bestsellers'
import Offers from '../layouts/Offers'
import BodyAD2 from '../layouts/BodyAD2'

const Home = () => {
  return (
    <>
   <Benner/>
   <Body/>
   <NewArrivals/>
   <Bestsellers/>
   <BodyAD2/>
   <Offers/>
    </>
  )
}

export default Home