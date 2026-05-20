import React from 'react';

import { cidadeNormal24 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal24 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal24}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal24
