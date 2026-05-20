import React from 'react';

import { cidadeNormal16 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal16 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal16}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal16
