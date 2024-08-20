import React from 'react';

import { cidadeMaster44 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeMaster44 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeMaster44}/>
    <Footer />
      
    </>
  )
}

export default CidadeMaster44
