import React from 'react';

import { cidadeMaster45 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeMaster45 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeMaster45}/>
    <Footer />
      
    </>
  )
}

export default CidadeMaster45
