import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 80dvh;
    display: flex;
    align-items: center;
    flex-direction: column;
`


export const WrapperTabMenu = styled.div`
    display: flex;
    width: 80%;
    height: 56px;
    margin-bottom: 20px;
    border-radius: 13px;
    backgrond: #E2EEFE;
    z-index: 99;

    @media screen and (max-height: 650px) {
        height: 46px;
    }
`

export const TabButton1 = styled.div`
    width: 50%;
    height: 100%;
    background: #E2EEFE;
    // opacity: 0.8;
    border-radius: 17px 0 0 17px;
    border-left: solid 3px #5EA4FF;
    border-top: solid 3px #5EA4FF;
    border-bottom: solid 3px #5EA4FF;
    &:hover {
        background: #BAD7FD;

    }
    &.active {
        background: #BAD7FD;
    }

`
export const ContentButton = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const H2Button1 = styled.h2`
    margin-right: 10px;
    font-size: 18px;
`
export const ImgButton1 = styled.img`
    width: 35px;
`

export const WrapperSeparador = styled.div`
    // position: relative;
    display: flex;
    height: 80%;
    background: red;
    justify-content: center;
    align-items: center;
    align-self: center
`

export const Separador = styled.div`
    display: flex;
    position: absolute;
    width: 6px;
    height: 40px;
    align-self: center;

    // padding: 5px 0 5px 0;
    background: #5EA4FF;
`
export const TabButton2 = styled.div`
    width: 50%;
    height: 100%;
    background: #E2EEFE;
    border-radius: 0 17px 17px 0;
    border-right: solid 3px #5EA4FF;
    border-top: solid 3px #5EA4FF;
    border-bottom: solid 3px #5EA4FF;

    &:hover {
        background: #BAD7FD;

    }

    &.active {
        background: #BAD7FD;
    }
`


export const H2Button2 = styled.h2`
    margin-left: 10px;
    font-size: 18px;

`
export const ImgButton2 = styled.img`
    width: 35px;
`

export const WrapperMasterMenu = styled.div`
    display: flex;
`