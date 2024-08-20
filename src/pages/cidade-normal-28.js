import React from 'react';

import { cidadeNormal28 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal28 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal28}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal28
