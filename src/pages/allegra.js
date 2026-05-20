import React from 'react';

import { allegra } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const Allegra = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...allegra}/>
    <Footer />
      
    </>
  )
}

export default Allegra
