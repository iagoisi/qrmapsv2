import React from 'react';

import { cidadeNormal12 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal12 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal12}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal12
