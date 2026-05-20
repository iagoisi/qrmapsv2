import React from 'react';

import { cidadeNormal10 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal10 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal10}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal10
