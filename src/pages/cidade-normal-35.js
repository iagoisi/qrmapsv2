import React from 'react';

import { cidadeNormal35 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal35 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal35}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal35
