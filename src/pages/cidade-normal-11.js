import React from 'react';

import { cidadeNormal11 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal11 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal11}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal11
