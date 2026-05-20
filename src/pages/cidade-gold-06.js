import React from 'react';

import { cidadeGold06 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeGold06 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeGold06}/>
    <Footer />
      
    </>
  )
}

export default CidadeGold06
