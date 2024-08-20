import React from 'react';

import { acquaWash } from '../components/HeroBusiness/Data';

import HeaderMenu from '../components/HeaderMenu';
import HeroBusiness from '../components/HeroBusiness';
import Footer from '../components/Footer';


const AcquaWash = () => {
  return (
    <>
    <HeaderMenu />
    <HeroBusiness {...acquaWash}/>
    <Footer />
      
    </>
  )
}

export default AcquaWash
