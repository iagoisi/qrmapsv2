import React from 'react'
import LogoQr from '../../images/logo_qr_maps_blue.png';

import { 
  Container,
    WrapperMenu,
    HomeLink,
    LogoQrMaps
 } from './HeaderMenuElements';

const HeaderMenu = () => {
  return (
    <>
    <Container>
      <WrapperMenu>
          <HomeLink to='/master'>
              <LogoQrMaps src={LogoQr}/>
          </HomeLink>
      </WrapperMenu>
    </Container>
      
    </>
  )
}

export default HeaderMenu
