import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 17vh;
    // margin-top: -5px;
`

export const WrapperMenu = styled.div`
    width: 100%;
    height: 10dvh;

    background: #5F656A;
    display: flex;
    justify-content: center;
    z-index: 99;
`

export const HomeLink = styled(LinkR)`
    background: #A9CDFC;
    border-radius: 50%;
    width: 110px;
    height: 110px;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    position: absolute;
    align-items: center;
    z-index: 100;

    @media screen and (max-height: 725px) {
        width: 100px;
        height: 100px;

    }
    @media screen and (max-height: 660px) {
        width: 90px;
        height: 90px;

    }
    @media screen and (max-height: 595px) {
        width: 85px;
        height: 85px;

    }

`

export const LogoQrMaps = styled.img`
    width: 100%;
    padding: 10px;
    // margin-top: 30px;
    
`