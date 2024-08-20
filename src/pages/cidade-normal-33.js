import React from 'react';

import { cidadeNormal33 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal33 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal33}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal33
