import React from 'react';

import { cidadeNormal22 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal22 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal22}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal22
