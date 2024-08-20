import React from 'react';

import { cidadeNormal21 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal21 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal21}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal21
