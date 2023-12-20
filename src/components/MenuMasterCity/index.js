import React, { useState } from 'react';


import ArrowRight from '../../images/arrowRight.png';
import ImgMasterList1 from '../../images/MenuMaster/gold.png'
import ImgMasterList2 from '../../images/MenuMaster/agencias.png'
import ImgMasterList3 from '../../images/MenuMaster/utilitarios.png'
import ImgMasterList4 from '../../images/MenuMaster/restaurantes.png'
import ImgMasterList5 from '../../images/MenuMaster/hoteis.png'
import ImgMasterList6 from '../../images/MenuMaster/lojas.png'

import { 
    MenuMaster,
    WrapperUl,
    UlMaster,
    LiMaster,
    ContentLi,
    ImgLi,
    H3Li,
    ButtonLi,
    ImgButton,
    WrapperDiv,
    DivBusiness,
    WrapperList,
    LiDataItem,
    ImgLogoItem,
    H3Name
 } from './MenuMasterCityElements';

const MenuMasterCity = () => {

    const dataMap = [
        {
            "nome": "La Bonita",
            "description": "La Bonita",
            "fachada": require("../../images/fachadas/la_bonita_fachada_B.jpg"),
            "link": '/cidade-gold-01',
            "logo": require("../../images/logos/la_bonita_logo.png")
        },
        {
            "nome": "Vuoi Tratoria",
            "description": "La Bonita",
            "fachada": "",
            "link": '/cidade-gold-02',
            "logo":require("../../images/isi_tech.png")
        },
        {
            "nome": "Pastel Bonito",
            "description": "La Bonita",
            "fachada": "",
            "link": '/cidade-gold-03',
            "logo":require("../../images/isi_tech.png")
        },
        {
            "nome": "Agência Ygarapé",
            "description": "La Bonita",
            "fachada": "",
            "link": 'localhost:3000/cidade-gold-01',
            "logo":require("../../images/isi_tech.png")
        },
        {
            "nome": "Brasa Bonito",
            "description": "La Bonita",
            "fachada": "",
            "link": '/cidade-gold-04',
            "logo":require("../../images/isi_tech.png")
        },
        {
            "nome": "Varandas Restaurante",
            "description": "La Bonita",
            "fachada": "",
            "link": '/cidade-gold-05',
            "logo":require("../../images/isi_tech.png")
        },
        {
            "nome": "Bacuri Cozinha Regional",
            "description": "La Bonita",
            "fachada": "",
            "link": '/cidade-gold-06',
            "logo": require("../../images/isi_tech.png")
        }
    ]


    const [ accordion, setAccordion ] = useState(false);
    function toogleAccordion(i) {
        setAccordion(i === accordion ? null : i);
    }


  return (
    <>
    <MenuMaster>
        <WrapperUl>
            <UlMaster>
                <LiMaster 
                    onClick={() => toogleAccordion(1)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList1} />
                        <H3Li>Melhores Recomendações</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>
                <WrapperDiv
                className={accordion === 1 ? "active" : "inactive"}
                >
                    <DivBusiness>
                        <WrapperList>
                            {dataMap.map((item, index) => 
                            <LiDataItem to={item.link} key={index}
                            style={{
                                backgroundImage: `url(${item.fachada})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            >
                                <ImgLogoItem src={item.logo} />
                                {/* <H3Name>{item.nome}</H3Name> */}
                            </LiDataItem>
                            )}
                        </WrapperList>

                    </DivBusiness>
                </WrapperDiv>

                <LiMaster 
                    onClick={() => toogleAccordion(2)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList2} />
                        <H3Li>Utilitários</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>
                <WrapperDiv
                className={accordion === 2 ? "active" : "inactive"}
                >
                    <DivBusiness>
                        <WrapperList>
                            {dataMap.map((item, index) => 
                            <LiDataItem key={index}
                            style={{
                                backgroundImage: `url(${item.logo})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            >
                                <ImgLogoItem src={item.logo} />
                                <H3Name>{item.nome}</H3Name>
                            </LiDataItem>
                            )}
                        </WrapperList>

                    </DivBusiness>
                </WrapperDiv>

                <LiMaster 
                    onClick={() => toogleAccordion(3)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList3} />
                        <H3Li>Agências de Turismo</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>
                <WrapperDiv
                className={accordion === 3 ? "active" : "inactive"}
                >
                    <DivBusiness>
                        <WrapperList>
                            {dataMap.map((item, index) => 
                            <LiDataItem key={index}
                            style={{
                                backgroundImage: `url(${item.logo})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            >
                                <ImgLogoItem src={item.logo} />
                                <H3Name>{item.nome}</H3Name>
                            </LiDataItem>
                            )}
                        </WrapperList>

                    </DivBusiness>
                </WrapperDiv>

                <LiMaster 
                    onClick={() => toogleAccordion(4)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList4} />
                        <H3Li>Restaurantes e Similares</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>
                <WrapperDiv
                className={accordion === 4 ? "active" : "inactive"}
                >
                    <DivBusiness>
                        <WrapperList>
                            {dataMap.map((item, index) => 
                            <LiDataItem key={index}
                            style={{
                                backgroundImage: `url(${item.logo})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            >
                                <ImgLogoItem src={item.logo} />
                                <H3Name>{item.nome}</H3Name>
                            </LiDataItem>
                            )}
                        </WrapperList>

                    </DivBusiness>
                </WrapperDiv>

                <LiMaster 
                    onClick={() => toogleAccordion(5)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList5} />
                        <H3Li>Hospedagens</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>
                <WrapperDiv
                className={accordion === 5 ? "active" : "inactive"}
                >
                    <DivBusiness>
                        <WrapperList>
                            {dataMap.map((item, index) => 
                            <LiDataItem key={index}
                            style={{
                                backgroundImage: `url(${item.logo})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            >
                                <ImgLogoItem src={item.logo} />
                                <H3Name>{item.nome}</H3Name>
                            </LiDataItem>
                            )}
                        </WrapperList>

                    </DivBusiness>
                </WrapperDiv>
                

                <LiMaster 
                    onClick={() => toogleAccordion(6)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList6} />
                        <H3Li>Lojas</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>
                <WrapperDiv
                className={accordion === 6 ? "active" : "inactive"}
                >
                    <DivBusiness>
                        <WrapperList>
                            {dataMap.map((item, index) => 
                            <LiDataItem key={index}
                            style={{
                                backgroundImage: `url(${item.logo})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            >
                                <ImgLogoItem src={item.logo} />
                                <H3Name>{item.nome}</H3Name>
                            </LiDataItem>
                            )}
                        </WrapperList>

                    </DivBusiness>
                </WrapperDiv>
                

                
            </UlMaster>
        </WrapperUl>
    </MenuMaster>
      
    </>
  )
}

export default MenuMasterCity



// "dataMap": [
    //     "cidade": {
    //         "gold": [
    //                 {
    //                     "nome": "La Bonita",
    //                     "descrição": "La Bonita",
    //                     "foto": "",
    //                     "logo":""
    //                 },
    //                 {
    //                     "nome": "Vuoi Tratoria",
    //                     "descrição": "Vuoi Tratoria",
    //                     "foto": "",
    //                     "logo":""
    //                 },
    //                 {
    //                     "nome": "Pastel Bonito",
    //                     "descrição": "Pastel Bonito",
    //                     "foto": "",
    //                     "logo":""
    //                 },
    //                 {
    //                     "nome": "Agência Ygarapé",
    //                     "descrição": "Agência Ygarapé",
    //                     "foto": "",
    //                     "logo":""
    //                 },
    //                 {
    //                     "nome": "Brasa Bonito",
    //                     "descrição": "Brasa Bonito",
    //                     "foto": "",
    //                     "logo":""
    //                 },
    //                 {
    //                     "nome": "Varandas",
    //                     "descrição": "Varandas",
    //                     "foto": "",
    //                     "logo":""
    //                 },
    //                 {
    //                     "nome": "Bacuri Cozinha Regional",
    //                     "descrição": "Bacuri Cozinha Regional",
    //                     "foto": "",
    //                     "logo":""
    //                 }
    //         ],

    //         "nomal": [
    //             {
    //                 "agencias": {
    //                     "normal_08": {
    //                                 "nome": "Bacuri Cozinha Regional",
    //                                 "descrição": "Bacuri Cozinha Regional",
    //                                 "foto": "",
    //                                 "logo":""
    //                     }
    //                 },
    //                 "utilitarios": {
    //                     "normal_09": {
    //                         "nome": "Bacuri Cozinha Regional",
    //                         "descrição": "Bacuri Cozinha Regional",
    //                         "foto": "",
    //                         "logo":""
    //                 },
    //                 "normal_10": {
    //                     "nome": "Bacuri Cozinha Regional",
    //                     "descrição": "Bacuri Cozinha Regional",
    //                     "foto": "",
    //                     "logo":""
    //                 },
    //                 "normal_11": {
    //                     "nome": "Bacuri Cozinha Regional",
    //                     "descrição": "Bacuri Cozinha Regional",
    //                     "foto": "",
    //                     "logo":""
    //                 },
    //                 "normal_12": {
    //                     "nome": "Bacuri Cozinha Regional",
    //                     "descrição": "Bacuri Cozinha Regional",
    //                     "foto": "",
    //                     "logo":""
    //                 },
    //                 "normal_13": {
    //                     "nome": "Bacuri Cozinha Regional",
    //                     "descrição": "Bacuri Cozinha Regional",
    //                     "foto": "",
    //                     "logo":""
    //                 },
    //                 "normal_14": {
    //                     "nome": "Bacuri Cozinha Regional",
    //                     "descrição": "Bacuri Cozinha Regional",
    //                     "foto": "",
    //                     "logo":""
    //                 }


    //                 },

    //                 "restaurantes": [],
    //                 "hoteis": [],
    //                 "lojas": []
    //             }
    //         ]

    //     },
    //     "atrativos": {}
    // }