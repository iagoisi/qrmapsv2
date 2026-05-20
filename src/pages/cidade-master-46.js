import React from 'react';

import { cidadeMaster46 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeMaster46 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeMaster46}/>
    <Footer />
      
    </>
  )
}

export default CidadeMaster46
