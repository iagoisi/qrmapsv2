import React from 'react';

import { cidadeNormal30 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal30 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal30}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal30
