import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 80dvh;
`
export const WrapperFrame = styled.div`
    width: 90%;
    height: 80%;
    border-radius: 30px;
    border: solid 3px #A9CDFC;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`
export const TopFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 25%;
`

export const WrapperButtonBack = styled(LinkR)`
    dispaly: flex;
    width: 100%;
`

export const BackButton = styled(LinkR)`
    background: #5EA4FF;
    display: flex;
    width: 50px;
    height: 50px;
    position: absolute;
    margin-top: -25px;
    margin-left: -10px;
    border-radius: 50%;
    justify-content: center;

    &:hover {
        transform: scale(1.1);
        transition: ease-in-out .2s;
    }
`


export const ImgBackButton = styled.img`
    dispaly: flex;
    width: 100%;
    padding: 5px;
`

export const WrapperName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 100px;
    border-radius: 30px;
    background-color: rgb(255, 255, 255, .6);
`

export const H2TitleBussines = styled.h2`
    font-size: 30px;
    display: flex;
    color: #060606;
    text-align: center;

`
export const H3SubtitelBusiness = styled.h3`
    display: flex;
    font-size: 25px;
    color: #060606;
`
export const WrapperLogoCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;
`

export const WrapLogo = styled.div`
    display: flex;
    justify-content: center;
    width: 70%;
    height: auto;
`

export const Logo = styled.img`
    display: flex;
`
export const WrapperFooterFrame = styled.ul`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10%;
`


export const WrapFooterElements = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-around;
    position: fixed;
    padding: 10px;

    &:hover {
        transform: scale(1.1);
        transition: ease-in-out .2s;
    }
`

export const ElementsFooterFrame = styled(LinkR)`
    display: flex;
    width: 80px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    height: 80px;
    background: #5EA4FF;
    border: solid 3px white;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        transition: ease-in-out .2s;
    }
`
export const IconFooter = styled.img`
    width: 60px;
    height: 60px
`







