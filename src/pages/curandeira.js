import React from 'react';

import { curandeira } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const Curandeira = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...curandeira}/>
    <Footer />
      
    </>
  )
}

export default Curandeira
