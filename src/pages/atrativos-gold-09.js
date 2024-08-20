import React from 'react';

import { atrativosGold09 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const AtrativosGold09 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...atrativosGold09}/>
    <Footer />
      
    </>
  )
}

export default AtrativosGold09
