import React from 'react';

import { cidadeMaster38 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeMaster38 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeMaster38}/>
    <Footer />
      
    </>
  )
}

export default CidadeMaster38
