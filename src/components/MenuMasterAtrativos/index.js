import React, { useState, useEffect } from 'react';


import ArrowRight from '../../images/arrowRight.png';
import ImgMasterList1 from '../../images/MenuMaster/gold.png'
import ImgMasterList2 from '../../images/MenuMaster/balnearios.png'
import ImgMasterList3 from '../../images/MenuMaster/flutuacoes.png'
import ImgMasterList4 from '../../images/MenuMaster/contemplacao.png'
import ImgMasterList5 from '../../images/MenuMaster/aventura.png'
import ImgMasterList6 from '../../images/MenuMaster/grutas.png'
// import ImgMasterList7 from '../../images/MenuMaster/rapel.png'
// import ImgMasterList8 from '../../images/MenuMaster/cavalgada.png'
import ImgMasterList9 from '../../images/MenuMaster/pantanal.png'
import ImgMasterList10 from '../../images/MenuMaster/atrativos_urbanos.png'
import ImgMasterList11 from '../../images/MenuMaster/trilhas_e_cachoeiras.png'

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
    WrapperLogo,
    UlDataItemListSimpleBusiness,
    WrapContentList,
    H3TitleOutros,
    LiItemSimpleBusiness,
    H3ItemSimpleBusiness,
    // ImgLogoItem,
    H3Name
 } from './MenuMasterAtrativosElements';

 const getLocalNumber = () => {
    let number = localStorage.getItem('STATE_ACCORDION_MASTER');
    console.log('STATE_ACCORDION_MASTER');

    if (number) {
        return JSON.parse(localStorage.getItem('STATE_ACCORDION_MASTER'))
    } else {
        return [];
    }
 }

const MenuMasterAtrativos = () => {

    const dataGold = [
        {
            "nome": "Refúgio da Barra",
            "description": "La Bonita",
            "fachada": require("../../images/fachadas/refugio_da_barra_fachada.jpg"),
            "link": '/atrativos-gold-01',
            "logo": require("../../images/logos/la_bonita_logo.png")
        },
        {
            "nome": "Bonito Scuba",
            "description": "Vuoi",
            "fachada": require("../../images/fachadas/bonito_scuba_fachada.jpg"),
            "link": '/atrativos-gold-02',
            "logo": require("../../images/logos/vuoi_logo.png")
        },
        {
            "nome": "Estrela do Formoso",
            "description": "La Bonita",
            "fachada": require("../../images/fachadas/estrela_fachada.jpg"),
            "link": '/atrativos-gold-03',
            "logo": require("../../images/logos/pastel_logo.png")
        },
        {
            "nome": "Balneário do Sol",
            "description": "La Bonita",
            "fachada": require("../../images/fachadas/balneario_do_sol_fachada.jpg"),
            "link": '/atrativos-gold-04',
            "logo": require("../../images/logos/ygarape_logo.png")
        },
        {
            "nome": "Eco Park Porto da Ilha",
            "description": "La Bonita",
            "fachada": require("../../images/fachadas/porto_da_ilha_fachada.jpg"),
            "link": '/atrativos-gold-05',
            "logo": require("../../images/logos/ygarape_logo.png")
        },
        {
            "nome": "Recanto Zeus",
            "description": "La Bonita",
            "fachada": require("../../images/fachadas/recanto_zeus_fachada.jpg"),
            "link": '/atrativos-gold-06',
            "logo": require("../../images/logos/brasa_logo.png")
        },
        {
            "nome": "O Guardado | Lendas & Causos do Pantanal",
            "description": "La Bonita",
            "fachada": require("../../images/fachadas/o_guardado_fachada.jpg"),
            "link": '/cidade-alpha-guardado',
            "logo": require("../../images/logos/varandas_logo.png")
        },
        {
            "nome": "Nascente Azul",
            "description": "Cozinha Regional",
            "fachada": require("../../images/fachadas/nascente_azul_fachada.jpg"),
            "link": '/atrativos-gold-08',
            "logo": require("../../images/logos/bacuri_logo.png")
        },
        {
            "nome": "Camping Rio Formoso",
            "description": "Cozinha Regional",
            "fachada": require("../../images/fachadas/camping_rio_formoso_fachada.jpg"),
            "link": '/atrativos-gold-09',
            "logo": require("../../images/logos/bacuri_logo.png")
        }
    ]

    const dataBalnearios = [
        {
            "nome": "Parque Ecológico Rio Formoso",
            "link": 'https://www.google.com/maps/place/Parque+Ecol%C3%B3gico+Rio+Formoso/data=!4m2!3m1!19sChIJk00M1UH2fJQRzWHqqO9mcSI',
        },
    
        {
            "nome": "Estrela do Formoso",
            "link": 'https://www.google.com/maps/place/Estrela+do+Formoso/data=!4m2!3m1!19sChIJ-9gZ44X3fJQRvNZoMHzbVHo',
        },
        {
            "nome": "Balneário do Sol",
            "link": 'https://www.google.com/maps/place/Balne%C3%A1rio+do+Sol/data=!4m2!3m1!19sChIJb8p9UHVYfJQRwyNoExV1qcA',
        },
        {
            "nome": "Eco Park Porto da Ilha",
            "link": 'https://www.google.com/maps/place/Eco+Park+Porto+da+Ilha/data=!4m2!3m1!19sChIJGR9tc-L3fJQR76fdhGZaZc4',

        },
        {
            "nome": "Recanto Zeus",
            "link": 'https://maps.app.goo.gl/dpfj9KSd7WcBb1A46',
        },

        {
            "nome": "Camping Rio Formoso",
            "link": 'https://maps.app.goo.gl/yUm39FMvp6jjFGk5A',
        },

        {
            "nome": "Balneário Jardim Eco Park",
            "link": 'https://www.google.com/maps/place/Balne%C3%A1rio+Jardim+Ecopark/data=!4m2!3m1!19sChIJH3gjZW_pfJQRmyQ_b9xwMQs',
        },

        {
            "nome": "Bosque das Águas",
            "link": 'https://maps.app.goo.gl/fcL6U6wcv1vaDBUc7',
        },

        {
            "nome": "Balneário Municipal de Bonito",
            "link": 'https://www.google.com/maps/place/Balne%C3%A1rio+Municipal+de+Bonito/data=!4m2!3m1!19sChIJZ4sTZUD2fJQRrNUEZsnftH8',
        },

        {
            "nome": "Eco Serrana Park",
            "link": 'https://www.google.com/maps/place/Eco+Serrana+Park/data=!4m2!3m1!19sChIJG48P3G0PfJQRKwHHb1cCgHA',
        },

        {
            "nome": "Aldeia Aquapark",
            "link": 'https://www.google.com/maps/place/Aldeia+Aquapark/data=!4m2!3m1!19sChIJq8b5OaBZfJQRLQQypdJwAG8',
        },
        {
            "nome": "Praia da Figueira",
            "link": 'https://www.google.com/maps/place/Praia+da+Figueira/data=!4m2!3m1!19sChIJm_7srzZffJQRoQ8THbVCaUk',
        },
        {
            "nome": "Balneário Ilha Bonita",
            "link": 'https://www.google.com/maps/place/Balne%C3%A1rio+Ilha+Bonita/data=!4m2!3m1!19sChIJz81jjeH3fJQR8cnvB3xjXZA',
        }
    ]

    const dataFlutuacoes = [
        {
            "nome": "Aquário Natural",
            "link": 'https://www.google.com/maps/place/Aqu%C3%A1rio+Natural/data=!4m2!3m1!19sChIJfcFyfTr2fJQRVivig5bQFos',
        },
    
        {
            "nome": "Recanto Ecológico Rio da Prata",
            "link": 'https://maps.app.goo.gl/UGNue1jJJjbmw8Zt9',
        },
        {
            "nome": "Lagoa Misteriosa",
            "link": 'https://www.google.com/maps/place/Lagoa+Misteriosa+-+jardim+-+Ms/data=!4m2!3m1!19sChIJJYHzM_DpfJQR5p5l_ACmn1I',

        },
        {
            "nome": "Barra do Sucuri",
            "link": 'https://www.google.com/maps/place/Barra+do+Sucuri/data=!4m2!3m1!19sChIJQcVDHFjzfJQRoApi00cU4h0',
        },
        {
            "nome": "Rio Sucuri",
            "link": 'https://www.google.com/maps/place/Rio+Sucuri+Ecoturismo+Bonito/data=!4m2!3m1!19sChIJFdglsVGLfJQRfF-RlZq6QTE',
        },

        {
            "nome": "Gruta do Mimoso",
            "link": 'https://www.google.com/maps/place/Gruta+do+Mimoso/data=!4m2!3m1!19sChIJ26neQqJBfJQRwVHmRCYtRso',
        },

        {
            "nome": "Nascente Rio Azul",
            "link": 'https://www.google.com/maps/place/Nascentes+Rio+Azul/data=!4m2!3m1!19sChIJXTW-a-enfpQRJc55OLpzimA',
        }
    ]

    const dataContemplacao = [
        {
            "nome": "Buraco das Araras",
            "link": 'https://www.google.com/maps/place/Buraco+das+Araras/data=!4m2!3m1!19sChIJrSFCw73CfJQRFEU_St-mcQk',
        },
    
        {
            "nome": "Bio Park",
            "link": 'https://www.google.com/maps/place/Bio+Park/data=!4m2!3m1!19sChIJnVN3_n9efJQRZoQ0NU9C3RA',
        },

        {
            "nome": "Chácara Beija-flor",
            "link": 'https://goo.gl/maps/62kKvkkDnWwhQ6Uo9',
        }
    ]

    const dataAventura = [
        {
            "nome": "Hotel Cabanas",
            "link": 'https://www.google.com/maps/place/Hotel+Cabanas/data=!4m2!3m1!19sChIJ236uCz_2fJQRhID1nFCRIns',
        },
    
        {
            "nome": "Bonito Passeio de Bote",
            "link": 'https://www.google.com/maps/place/Bonito+Passeio+de+Bote/data=!4m2!3m1!19sChIJQeGrxbT3fJQRz5vqcUNq_so',
        },

        {
            "nome": "Trilha Boiadeira",
            "link": 'https://www.google.com/maps/place/Trilha+boiadeira/data=!4m2!3m1!19sChIJeWHNrCNffJQRwvRIt9Sbw6I',
        },

        {
            "nome": "Abismo Anhumas",
            "link": 'https://www.google.com/maps/place/Abismo+Anhumas/data=!4m2!3m1!19sChIJ5TjkGlZgfJQRTNZTN9e1yfY',
        },

        {
            "nome": "Rotta Zagaia",
            "link": 'https://www.google.com/maps/place/Rotta+Zagaia/data=!4m2!3m1!19sChIJJ5b0sMFffJQReoC6kYwGJQI',
        }
    ]
    
    const dataGrutas = [
        {
            "nome": "Gruta Catedral",
            "link": 'https://www.google.com/maps/place/Gruta+Catedral%2FMuseu/data=!4m2!3m1!19sChIJF4-XR79YfJQRsAzs2_ZNVgY',
        },
    
        {
            "nome": "Gruta do Lago Azul",
            "link": 'https://www.google.com/maps/place/Gruta+do+Lago+Azul/data=!4m2!3m1!19sChIJS22ZGV9gfJQR-9k5T_7cnFg',
        },

        {
            "nome": "Grutas de São Miguel",
            "link": 'https://www.google.com/maps/place/Grutas+de+S%C3%A3o+Miguel/data=!4m2!3m1!19sChIJKYUbC7dgfJQRtiJC5ckZNj4',
        },
    ]

    const dataPantanal = [
        {
            "nome": "Pousada Pequi",
            "link": 'https://www.google.com/maps/place/Pousada+Pequi/data=!4m2!3m1!19sChIJAYrZrvttfpQRbtepey3H-Zw',
        },
    
        {
            "nome": "Pousada Aguape",
            "link": 'https://www.google.com/maps/place/Pousada+Aguape/data=!4m2!3m1!19sChIJS2Gmaw5pfpQRXkJOUxlIvl8',
        },

        {
            "nome": "Pantanal Experiência",
            "link": 'https://www.google.com/maps/place/Pantanal+Experi%C3%AAncia/data=!4m2!3m1!19sChIJWQr0sPKHfpQROWaW4K4bUnk',
        },

        {
            "nome": "Projeto Salobra",
            "link": 'https://www.google.com/maps/place/Projeto+Salobra+Ecologia+e+Turismo/data=!4m2!3m1!19sChIJYRHLBI-VfpQRQ0n2dG1q91A',
        },

        {
            "nome": "Fazenda San Francisco",
            "link": 'https://www.google.com/maps/place/Fazenda+San+Francisco+Agro+Ecoturismo+Safari+e+Passeio+de+Chalana/data=!4m2!3m1!19sChIJ2764VnHBfpQRD6d5Pn8Luhc',
        },

        {
            "nome": "Jungle Lodge",
            "link": 'https://www.google.com/maps/place/Pantanal+Jungle+Lodge/data=!4m2!3m1!19sChIJy2wrFUK2eJQRSPkzG29Covg',
        },

        {
            "nome": "Passo do Lontra Hotel",
            "link": 'https://www.google.com/maps/place/Passo+do+Lontra+Parque+Hotel/data=!4m2!3m1!19sChIJ3wXR8Ey3eJQRhWJpCis-VqY',
        },

        {
            "nome": "Pousada Santa Clara",
            "link": 'https://www.google.com/maps/place/Pousada+Pantanal+Santa+Clara/data=!4m2!3m1!19sChIJUYtdP-SoeJQRXkf9E5tvZUU',
        },
    ]

    const dataAtrativosUrbanos = [
        {
            "nome": "O Guardado Lendas & Causos do Pantanal",
            "link": 'https://maps.app.goo.gl/27p75WcU5X7dMP3F7',
        },
    
        {
            "nome": "Projeto Jiboia",
            "link": 'https://maps.app.goo.gl/gm9oJsFhzm8hGjC17',
        },

        {
            "nome": "Casa da Memória Raída",
            "link": 'https://maps.app.goo.gl/9ScCnLuZv5mg1YnY8',
        },
    ]

    const dataTrilhasECachoeiras = [
        {
            "nome": "Parque das Cachoeiras",
            "link": 'https://www.google.com/maps/place/Parque+das+Cachoeiras-Bonito-ms/data=!4m2!3m1!19sChIJrzQvFc9cfJQR7PFRmZwmFk8',
        },
    
        {
            "nome": "Recanto das Águas",
            "link": 'https://www.google.com/maps/place/Recanto+das+%C3%81guas/data=!4m2!3m1!19sChIJ94wlnypDfJQR9SZJp1SXK0A',
        },

        {
            "nome": "Cavalgada Recanto do Peão",
            "link": 'https://www.google.com/maps/place/Cavalgada+Recanto+Do+Pe%C3%A3o/data=!4m2!3m1!19sChIJy1U0GD5ffJQRVtPwV7tvHI8',
        },

        {
            "nome": "Projeto Salobra",
            "link": 'https://www.google.com/maps/place/Projeto+Salobra+Ecologia+e+Turismo/data=!4m2!3m1!19sChIJYRHLBI-VfpQRQ0n2dG1q91A',
        },

        {
            "nome": "Estância Mimosa",
            "link": 'https://www.google.com/maps/place/Est%C3%A2ncia+Mimosa+Ecoturismo+-+Cachoeiras+em+Bonito,+MS/data=!4m2!3m1!19sChIJa0f4miBDfJQRHkuv2RQpCGM',
        },

        {
            "nome": "Rio do Peixe",
            "link": 'https://www.google.com/maps/place/Rio+do+Peixe/data=!4m2!3m1!19sChIJDwdnpQVBfJQRq6wWqvR68sU',
        },

        {
            "nome": "Ceita Corê",
            "link": 'https://www.google.com/maps/place/Fazenda+Ceitacore+Eco-Turismo/data=!4m2!3m1!19sChIJXUGpQitpfJQRaQPbQksXnAE',
        },

        {
            "nome": "Cacheira Boca da Onça",
            "link": 'https://www.google.com/maps/place/Cachoeira+Boca+da+On%C3%A7a/data=!4m2!3m1!19sChIJJV3BFiQQfJQRcNFsXdhmMW0',
        },

        {
            "nome": "Cachoeiras Serra da Bodoquena",
            "link": 'https://www.google.com/maps/place/Hotel+e+Atrativo+Cachoeiras+Serra+da+Bodoquena/data=!4m2!3m1!19sChIJu_yG5XEefJQR6aLmk_3SmyU',
        },
        
        {
            "nome": "Yeshuah Lazer e Refúgio",
            "link": 'https://www.google.com/maps/place/Yeshuah+Lazer+%26+Ref%C3%BAgio/data=!4m2!3m1!19sChIJjRSKFeenfpQRDK17xsQgN8A',
        },

    ]


    const [ accordion, setAccordion ] = useState(getLocalNumber());
    function toogleAccordion(i) {
        setAccordion(i === accordion ? 0 : i);
    }

    useEffect(() => {
        localStorage.setItem('STATE_ACCORDION_MASTER', accordion)
        console.log(accordion)
    }, [ accordion ])




  return (
    <>
    <MenuMaster>
        <WrapperUl>
            <UlMaster>
                <LiMaster
                    id='oi' 
                    onClick={() => toogleAccordion(1)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList1} />
                        <H3Li>Melhores Recomendações</H3Li>
                        <ButtonLi style={{
                            backgroundColor: '#5EA4FF',
                        }}>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>
                <WrapperDiv
                className={accordion === 1 ? "active" : "inactive"}
                >
                    <DivBusiness>
                        <WrapperList>
                            {dataGold.map((item, index) => 
                            <LiDataItem to={item.link} key={index}
                            style={{
                                backgroundImage: `url(${item.fachada})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            >
                                <WrapperLogo>
                                    {/* <ImgLogoItem src={item.logo} /> */}
                                    <H3Name>{item.nome}</H3Name>
                                </WrapperLogo>
                            </LiDataItem>
                            )}
                        </WrapperList>

                    </DivBusiness>
                </WrapperDiv>

                <LiMaster 
                    id='oii'
                    onClick={() => toogleAccordion(2)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList2} />
                        <H3Li>Balneários</H3Li>
                        <ButtonLi style={{
                            backgroundColor: '#FFEE00',
                        }}>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>
                <WrapperDiv
                className={accordion === 2 ? "active" : "inactive"}
                >
                    <DivBusiness>
                        <WrapperList>
                            <UlDataItemListSimpleBusiness>
                                <WrapContentList>
                                    <H3TitleOutros>Outros</H3TitleOutros>
                                    {dataBalnearios.map((item, index) => 
                                        <LiItemSimpleBusiness to={item.link} key={index}>
                                            <H3ItemSimpleBusiness to={item.link}>{item.nome}</H3ItemSimpleBusiness>
                                        </LiItemSimpleBusiness>
                                    )}
                                </WrapContentList>
                            </UlDataItemListSimpleBusiness>

                        </WrapperList>

                    </DivBusiness>
                </WrapperDiv>

                <LiMaster 
                    onClick={() => toogleAccordion(3)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList3} />
                        <H3Li>Flutuações</H3Li>
                        <ButtonLi style={{
                            backgroundColor: '#008BAA',
                        }}>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>
                <WrapperDiv
                className={accordion === 3 ? "active" : "inactive"}
                >
                    <DivBusiness>
                        <WrapperList>

                            <UlDataItemListSimpleBusiness>
                                <WrapContentList>
                                    <H3TitleOutros>Outros</H3TitleOutros>
                                    {dataFlutuacoes.map((item, index) => 
                                        <LiItemSimpleBusiness to={item.link} key={index}>
                                            <H3ItemSimpleBusiness to={item.link}>{item.nome}</H3ItemSimpleBusiness>
                                        </LiItemSimpleBusiness>
                                    )}
                                </WrapContentList>
                            </UlDataItemListSimpleBusiness>
                        </WrapperList>

                    </DivBusiness>
                </WrapperDiv>

                <LiMaster 
                    onClick={() => toogleAccordion(4)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList4} />
                        <H3Li>Comtemplação</H3Li>
                        <ButtonLi style={{
                            backgroundColor: '#808080',
                        }}>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>
                <WrapperDiv
                className={accordion === 4 ? "active" : "inactive"}
                >
                    <DivBusiness>
                        <WrapperList>
                        <UlDataItemListSimpleBusiness>
                                <WrapContentList>
                                    <H3TitleOutros>Outros</H3TitleOutros>
                                    {dataContemplacao.map((item, index) => 
                                        <LiItemSimpleBusiness to={item.link} key={index}>
                                            <H3ItemSimpleBusiness to={item.link}>{item.nome}</H3ItemSimpleBusiness>
                                        </LiItemSimpleBusiness>
                                    )}
                                </WrapContentList>
                            </UlDataItemListSimpleBusiness>
                        </WrapperList>

                    </DivBusiness>
                </WrapperDiv>

                <LiMaster 
                    onClick={() => toogleAccordion(5)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList5} />
                        <H3Li>Aventura</H3Li>
                        <ButtonLi style={{
                            backgroundColor: '#004989',
                        }}>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>
                <WrapperDiv
                className={accordion === 5 ? "active" : "inactive"}
                >
                    <DivBusiness>
                        <WrapperList>
                        <UlDataItemListSimpleBusiness>
                                <WrapContentList>
                                    <H3TitleOutros>Outros</H3TitleOutros>
                                    {dataAventura.map((item, index) => 
                                        <LiItemSimpleBusiness to={item.link} key={index}>
                                            <H3ItemSimpleBusiness to={item.link}>{item.nome}</H3ItemSimpleBusiness>
                                        </LiItemSimpleBusiness>
                                    )}
                                </WrapContentList>
                        </UlDataItemListSimpleBusiness>
                        </WrapperList>

                    </DivBusiness>
                </WrapperDiv>
                

                <LiMaster 
                    onClick={() => toogleAccordion(6)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList6} />
                        <H3Li>Grutas</H3Li>
                        <ButtonLi style={{
                            backgroundColor: '#784A43',
                        }}>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>
                <WrapperDiv
                className={accordion === 6 ? "active" : "inactive"}
                >
                    <DivBusiness>
                        <WrapperList>
                            <UlDataItemListSimpleBusiness>
                                    <WrapContentList>
                                        <H3TitleOutros>Outros</H3TitleOutros>
                                        {dataGrutas.map((item, index) => 
                                            <LiItemSimpleBusiness to={item.link} key={index}>
                                                <H3ItemSimpleBusiness to={item.link}>{item.nome}</H3ItemSimpleBusiness>
                                            </LiItemSimpleBusiness>
                                        )}
                                    </WrapContentList>
                            </UlDataItemListSimpleBusiness>
                            
                        </WrapperList>

                    </DivBusiness>
                </WrapperDiv>

                <LiMaster 
                    onClick={() => toogleAccordion(7)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList9} />
                        <H3Li>Pantanal</H3Li>
                        <ButtonLi style={{
                            backgroundColor: '#FF8D00',
                        }}>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>
                <WrapperDiv
                className={accordion === 7 ? "active" : "inactive"}
                >
                    <DivBusiness>
                        <WrapperList>
                            <UlDataItemListSimpleBusiness>
                                <WrapContentList>
                                    <H3TitleOutros>Outros</H3TitleOutros>
                                    {dataPantanal.map((item, index) => 
                                        <LiItemSimpleBusiness to={item.link} key={index}>
                                            <H3ItemSimpleBusiness to={item.link}>{item.nome}</H3ItemSimpleBusiness>
                                        </LiItemSimpleBusiness>
                                    )}
                                </WrapContentList>
                            </UlDataItemListSimpleBusiness>
                        </WrapperList>

                    </DivBusiness>
                </WrapperDiv>


                <LiMaster 
                    onClick={() => toogleAccordion(8)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList10} />
                        <H3Li>Atrativos Urbanos</H3Li>
                        <ButtonLi style={{
                            backgroundColor: '#B01D03',
                        }}>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>
                <WrapperDiv
                className={accordion === 8 ? "active" : "inactive"}
                >
                    <DivBusiness>
                        <WrapperList>
                            <UlDataItemListSimpleBusiness>
                                <WrapContentList>
                                    <H3TitleOutros>Outros</H3TitleOutros>
                                    {dataAtrativosUrbanos.map((item, index) => 
                                        <LiItemSimpleBusiness to={item.link} key={index}>
                                            <H3ItemSimpleBusiness to={item.link}>{item.nome}</H3ItemSimpleBusiness>
                                        </LiItemSimpleBusiness>
                                    )}
                                </WrapContentList>
                            </UlDataItemListSimpleBusiness>
                        </WrapperList>

                    </DivBusiness>
                </WrapperDiv>


                <LiMaster 
                    onClick={() => toogleAccordion(9)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList11} />
                        <H3Li>Trilhas e Cachoeiras</H3Li>
                        <ButtonLi style={{
                            backgroundColor: '#137D3E',
                        }}>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>
                <WrapperDiv
                className={accordion === 9 ? "active" : "inactive"}
                >
                    <DivBusiness>
                        <WrapperList>
                            <UlDataItemListSimpleBusiness>
                                <WrapContentList>
                                    <H3TitleOutros>Outros</H3TitleOutros>
                                    {dataTrilhasECachoeiras.map((item, index) => 
                                        <LiItemSimpleBusiness to={item.link} key={index}>
                                            <H3ItemSimpleBusiness to={item.link}>{item.nome}</H3ItemSimpleBusiness>
                                        </LiItemSimpleBusiness>
                                    )}
                                </WrapContentList>
                            </UlDataItemListSimpleBusiness>
                        </WrapperList>

                    </DivBusiness>
                </WrapperDiv>
                

                
            </UlMaster>
        </WrapperUl>
    </MenuMaster>
      
    </>
  )
}

export default MenuMasterAtrativos

