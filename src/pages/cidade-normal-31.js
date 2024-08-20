import React from 'react';

import { cidadeNormal31 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal31 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal31}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal31
