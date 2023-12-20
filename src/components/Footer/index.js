import React from 'react';
import isitech from '../../images/isi_tech.png'

import { 
    Container,
    FooterDiv,
    Logo
 } from './FooterElements';

const Footer = () => {
  return (
    <>
    <Container>
        <FooterDiv>
            <Logo src={isitech} />
        </FooterDiv>
    </Container>
      
    </>
  )
}

export default Footer
