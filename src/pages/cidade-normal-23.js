import React from 'react';

import { cidadeNormal23 } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const CidadeNormal23 = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...cidadeNormal23}/>
    <Footer />
      
    </>
  )
}

export default CidadeNormal23
