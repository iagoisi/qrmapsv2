import React from 'react'
import { useNavigate } from "react-router-dom";

import ImgBackButtonPNG from '../../images/arrow_back_button.png';

// import LogoLB from '../../images/logos/la_bonita_logo.png';
// import Fachada from '../../images/fachadas/la_bonita_fachada_B.jpg';

import { 
    Container,
    WrapperFrame,
    TopFrame,
    WrapperButtonBack,
    BackButton,
    ImgBackButton,
    H2TitleBussines,
    H3SubtitelBusiness,
    WrapperLogoCenter,
    WrapLogo,
    Logo,
    WrapperFooterFrame,
    WrapFooterElements,
    ElementsFooterFrame,
    IconFooter
 } from './HeroBusinessElements';

const HeroBusiness = ({
    name, 
    sobrenome, 
    logo, fachada, 
    link1, link2, 
    link3, 
    iconButton1, 
    iconButton2, 
    iconButton3
}) => {
    let navigate = useNavigate();

    const goBack = () => {
		navigate(-1);
    }

  return (
    <>
        <Container>
            <WrapperFrame
                style={{
                    backgroundImage: `url(${fachada})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <TopFrame>
                    <WrapperButtonBack>
                        <BackButton>
                            <ImgBackButton onClick={goBack} src={ImgBackButtonPNG} />
                        </BackButton>
                    </WrapperButtonBack>
                    <H2TitleBussines>{name}</H2TitleBussines>
                    <H3SubtitelBusiness>{sobrenome}</H3SubtitelBusiness>
                </TopFrame>
                <WrapperLogoCenter>
                    <WrapLogo>
                        <Logo src={logo} />
                    </WrapLogo>
                </WrapperLogoCenter>
                <WrapperFooterFrame>
                    <WrapFooterElements>
                        <ElementsFooterFrame target='blank' to={link1}>
                            <IconFooter src={iconButton1}/>
                        </ElementsFooterFrame>

                        <ElementsFooterFrame target='blank' to={link2}>
                            <IconFooter src={iconButton2}/>
                        </ElementsFooterFrame>

                        <ElementsFooterFrame target='blank' to={link3} >
                            <IconFooter src={iconButton3}/>
                        </ElementsFooterFrame>
                    </WrapFooterElements>
                </WrapperFooterFrame>
            </WrapperFrame>
        </Container>
      
    </>
  )
}

export default HeroBusiness
