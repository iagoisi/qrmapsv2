import React from 'react';

import { cidadeGold01 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu/';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeGold01 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeGold01}/>
    <Footer />
      
    </>
  )
}

export default CidadeGold01
