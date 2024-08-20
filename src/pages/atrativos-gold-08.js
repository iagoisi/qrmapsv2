import React from 'react';

import { atrativosGold08 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const AtrativosGold08 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...atrativosGold08}/>
    <Footer />
      
    </>
  )
}

export default AtrativosGold08
