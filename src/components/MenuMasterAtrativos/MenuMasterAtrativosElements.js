import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const MenuMaster = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`
export const WrapperUl = styled.div`
    width: 90%;
    height: 100%;
    border-radius: 30px;
    border: solid 3px #A9CDFC;
    display: flex;
`

export const UlMaster = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 55dvh;
    padding: 20px 25px;
    overflow-y: visible;

    &::-webkit-scrollbar {
        width: 0px;

`
export const LiMaster = styled.div`
    display: flex;
    align-items: center;
    padding: 30px 10px 30px 10px;
    width: 100%;
    height: 60px;
    margin: 4px;
    background: #E2EEFE;
    border-radius: 15px;

    &:hover {
        background: #BAD7FD;
    }

    @media screen and (max-height: 650px) {
        padding: 25px;

    }
`
export const ContentLi = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`
export const ImgLi = styled.img`
    max-width: 60px;
    margin-right: 10px;
`
export const H3Li = styled.h3`
    width: 65%;
    height: 100%;
    line-height: 1.2rem;
    font-size: 1.2rem;
`
export const ButtonLi = styled.div`
    width: 40px;
    height: 40px;
    // background: #5EA4FF;
    border-radius: 10px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const ImgButton = styled.img`
    width: 30%;
`

export const WrapperDiv = styled.div`
    display: none;
    width: 100%;
    justify-content: center;

    &.active {
        display: flex;
    }
    &.inactive { 
        display: none;
    }

`

export const DivBusiness = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-self: center;
    justify-content: center;
    padding: 10px 0 30px 0;
`
    
    
export const WrapperList = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const LiDataItem = styled(LinkR)`
    display: flex;
    width: 48%;
    height: 300px;
    flex-direction: column;
    justify-content: end;
    border-radius: 10px;
    align-items: center;
    margin: 10px 2px;
    padding-bottom: 10px;
    cursor: pointer;
    text-decoration: none;
`

export const WrapperLogo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: rgb(255, 255, 255, .8);
    padding: 15px;
    // border-radius: 100px;

`

export const ImgLogoItem = styled.img`
    display: flex;
    width: 50%;
    display: flex;
`

export const H3Name = styled.h3`
    font-size: 1rem;
    text-decoration: none;
    color: #000;
    text-align: center;

    
`

export const UlDataItemListSimpleBusiness = styled.ul`
    display: flex;
    justify-content: center;
    width: 100%;
    `
    
    export const WrapContentList = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;

`



export const H3TitleOutros = styled.h3`
    font-size: 2rem;
    margin-top: 30px;
`


export const LiItemSimpleBusiness= styled.li`
    display: flex;
    background: white;
    margin: 10px 0;
`

export const H3ItemSimpleBusiness = styled(LinkR)`
    text-align: left;
    font-size: 1.2rem;
    color: #010101;
`