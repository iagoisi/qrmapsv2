import React from 'react';

import { cidadeNormal26 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal26 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal26}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal26
