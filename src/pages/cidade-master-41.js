import React from 'react';

import { cidadeMaster41 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeMaster41 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeMaster41}/>
    <Footer />
      
    </>
  )
}

export default CidadeMaster41
