import React from 'react';

import { cidadeMaster42 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeMaster42 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeMaster42}/>
    <Footer />
      
    </>
  )
}

export default CidadeMaster42
