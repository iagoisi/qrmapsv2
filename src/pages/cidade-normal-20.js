import React from 'react';

import { cidadeNormal20 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal20 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal20}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal20
