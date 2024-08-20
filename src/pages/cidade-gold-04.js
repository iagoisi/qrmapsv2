import React from 'react';

import { cidadeGold04 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeGold04 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeGold04}/>
    <Footer />
      
    </>
  )
}

export default CidadeGold04
