import React from 'react';

import { cidadeMaster40 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeMaster40 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeMaster40}/>
    <Footer />
      
    </>
  )
}

export default CidadeMaster40
