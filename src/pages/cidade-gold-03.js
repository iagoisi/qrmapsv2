import React from 'react';

import { cidadeGold03 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeGold03 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeGold03}/>
    <Footer />
      
    </>
  )
}

export default CidadeGold03
