import React from 'react';

import { atrativosGold01 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const AtrativosGold01 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...atrativosGold01}/>
    <Footer />
      
    </>
  )
}

export default AtrativosGold01
