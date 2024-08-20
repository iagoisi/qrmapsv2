import React from 'react';

import { cidadeNormal13 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal13 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal13}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal13
