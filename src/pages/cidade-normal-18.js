import React from 'react';

import { cidadeNormal18 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal18 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal18}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal18
