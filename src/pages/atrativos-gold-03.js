import React from 'react';

import { atrativosGold03 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const AtrativosGold03 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...atrativosGold03}/>
    <Footer />
      
    </>
  )
}

export default AtrativosGold03
