import React from 'react';

import { cidadeNormal14 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal14 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal14}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal14
