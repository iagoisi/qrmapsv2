import React from 'react';

import { cidadeNormal15 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal15 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal15}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal15
