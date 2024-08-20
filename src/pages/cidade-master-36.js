import React from 'react';

import { cidadeMaster36 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeMaster36 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeMaster36}/>
    <Footer />
      
    </>
  )
}

export default CidadeMaster36
