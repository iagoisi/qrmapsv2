import React from 'react';

import { cidadeNormal27 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal27 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal27}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal27
