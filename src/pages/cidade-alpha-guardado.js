import React from 'react';

import { atrativosGold07 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const AtrativosGold07 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...atrativosGold07}/>
    <Footer />
      
    </>
  )
}

export default AtrativosGold07
