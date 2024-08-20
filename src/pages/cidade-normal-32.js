import React from 'react';

import { cidadeNormal32 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal32 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal32}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal32
