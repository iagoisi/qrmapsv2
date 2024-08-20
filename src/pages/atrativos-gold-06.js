import React from 'react';

import { atrativosGold06 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const AtrativosGold06 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...atrativosGold06}/>
    <Footer />
      
    </>
  )
}

export default AtrativosGold06
