import React from 'react';

import { cidadeNormal19 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal19 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal19}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal19
