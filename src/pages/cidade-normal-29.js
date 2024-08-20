import React from 'react';

import { cidadeNormal29 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal29 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal29}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal29
