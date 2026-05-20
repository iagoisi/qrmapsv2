import React from 'react';

import { cidadeNormal25 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal25 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal25}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal25
