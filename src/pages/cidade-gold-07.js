import React from 'react';

import { cidadeGold07 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeGold07 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeGold07}/>
    <Footer />
      
    </>
  )
}

export default CidadeGold07
