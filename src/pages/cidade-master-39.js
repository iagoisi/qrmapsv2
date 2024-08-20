import React from 'react';

import { cidadeMaster39 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeMaster39 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeMaster39}/>
    <Footer />
      
    </>
  )
}

export default CidadeMaster39
