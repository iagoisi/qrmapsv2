import React from 'react';


import HeaderMenu from '../components/HeaderMenu/';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';
import { cidadeGold02 } from '../components/HeroBusiness/Data';



const CidadeGold02 = () => {
  return (
    <>
    <HeaderMenu />
      <HeroBusiness {...cidadeGold02}/>
    <Footer />
    </>
  )
}

export default CidadeGold02
