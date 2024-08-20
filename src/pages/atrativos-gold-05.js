import React from 'react';

import { atrativosGold05 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const AtrativosGold05 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...atrativosGold05}/>
    <Footer />
      
    </>
  )
}

export default AtrativosGold05
