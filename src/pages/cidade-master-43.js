import React from 'react';

import { cidadeMaster43 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeMaster43 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeMaster43}/>
    <Footer />
      
    </>
  )
}

export default CidadeMaster43
