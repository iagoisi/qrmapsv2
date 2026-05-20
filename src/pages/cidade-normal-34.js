import React from 'react';

import { cidadeNormal34 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal34 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal34}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal34
