import React from 'react';

import { atrativosGold02 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const AtrativosGold02 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...atrativosGold02}/>
    <Footer />
      
    </>
  )
}

export default AtrativosGold02
