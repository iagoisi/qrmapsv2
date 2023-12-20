import styled from 'styled-components';


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

export const UlMaster = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 55dvh;
    padding: 20px 25px;
    overflow-y: visible;

    &::-webkit-scrollbar {
        width: 0px;

`
export const LiMaster = styled.li`
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
    width: 12%;
    margin-right: -10px;
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
    background: #5EA4FF;
    border-radius: 10px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ImgButton = styled.img`
    width: 30%;
`

export const DivBusiness = styled.div`
    display: flex;
    width: 90%;
    height: 100%;
    align-self: center;
    justify-content: center;
    background: blue;
    `
    
    
export const WrapperList = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const LiDataItem = styled.li`
    display: flex;
    width: 48%;
    height: 100px;
    justify-content: center;
    border-radius: 10px;
    background: red;
    align-items: center;
`

export const H3Name = styled.h3`
    font-size: 1rem;
    color: white;
    
`