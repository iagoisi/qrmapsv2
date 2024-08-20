import React from 'react';

import { cidadeMaster37 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeMaster37 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeMaster37}/>
    <Footer />
      
    </>
  )
}

export default CidadeMaster37
