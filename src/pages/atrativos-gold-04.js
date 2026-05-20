import React from 'react';

import { atrativosGold04 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const AtrativosGold04 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...atrativosGold04}/>
    <Footer />
      
    </>
  )
}

export default AtrativosGold04
