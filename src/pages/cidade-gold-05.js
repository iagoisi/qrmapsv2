import React from 'react';

import { cidadeGold05 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeGold05 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeGold05}/>
    <Footer />
      
    </>
  )
}

export default CidadeGold05
