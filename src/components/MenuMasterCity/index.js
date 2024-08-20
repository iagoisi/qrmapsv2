import React, { useState, useEffect } from 'react';


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
    WrapperLogo,
    // ImgLogoItem,
    H3Name
 } from './MenuMasterCityElements';

 const getLocalNumber = () => {
    let number = localStorage.getItem('STATE_ACCORDION_MASTER');
    console.log('STATE_ACCORDION_MASTER');

    if (number) {
        return JSON.parse(localStorage.getItem('STATE_ACCORDION_MASTER'))
    } else {
        return [];
    }
 }

const MenuMasterCity = () => {

    const dataGold = [
        {
            "nome": "La Bonita",
            "description": "La Bonita",
            "fachada": require("../../images/fachadas/la_bonita_fachada.jpg"),
            "link": '/cidade-gold-01',
            "logo": require("../../images/logos/la_bonita_logo.png")
        },
        {
            "nome": "Vuoi",
            "description": "Vuoi",
            "fachada": require("../../images/fachadas/vuoi_fachada.jpg"),
            "link": '/cidade-gold-02',
            "logo": require("../../images/logos/vuoi_logo.png")
        },
        {
            "nome": "Pastel Bonito",
            "description": "La Bonita",
            "fachada": require("../../images/fachadas/pastel_fachada_b.jpg"),
            "link": '/cidade-gold-03',
            "logo": require("../../images/logos/pastel_logo.png")
        },
        {
            "nome": "Agência Ygarapé",
            "description": "La Bonita",
            "fachada": require("../../images/fachadas/ygarape_fachada.jpg"),
            "link": '/cidade-gold-04',
            "logo": require("../../images/logos/ygarape_logo.png")
        },
        {
            "nome": "Brasa Bonito",
            "description": "La Bonita",
            "fachada": require("../../images/fachadas/brasa_fachada_b.jpg"),
            "link": '/cidade-gold-05',
            "logo": require("../../images/logos/brasa_logo.png")
        },
        {
            "nome": "Varandas Restaurante",
            "description": "La Bonita",
            "fachada": require("../../images/fachadas/varandas_fachada.jpg"),
            "link": '/cidade-gold-06',
            "logo": require("../../images/logos/varandas_logo.png")
        },
        {
            "nome": "Bacuri",
            "description": "Cozinha Regional",
            "fachada": require("../../images/fachadas/bacuri_fachada_b.jpg"),
            "link": '/cidade-gold-07',
            "logo": require("../../images/logos/bacuri_logo.png")
        }
    ]

    const dataAgencias = [
        {
            "nome": "Agência Ygarapé",
            "description": "Agência de Turismo",
            "fachada": require("../../images/fachadas/ygarape_fachada.jpg"),
            "link": '/cidade-gold-04',
            "logo": require("../../images/logos/ygarape_logo.png")
        },
        {
            "nome": "Abaetecotur",
            "description": "Agência de Turismo",
            "fachada": require("../../images/fachadas/abaetecotour_fachada.jpg"),
            "link": '/cidade-normal-08',
            "logo": require("../../images/logos/abaetecotur_logo.png")
        },
        {
            "nome": "Roteiro",
            "description": "Agência de Turismo",
            "fachada": require("../../images/fachadas/roteiro_fachada.jpg"),
            "link": '/cidade-master-36',
            "logo": require("../../images/logos/roteiro_logo.png")
        },
        {
            "nome": "Echoes",
            "description": "La Bonita",
            "fachada": require("../../images/fachadas/echoes_fachada.jpg"),
            "link": '/cidade-master-37',
            "logo": require("../../images/logos/echoes_logo.png")
        },
        {
            "nome": "Acqua",
            "description": "Agência de Turismo",
            "fachada": require("../../images/fachadas/acqua_fachada.jpg"),
            "link": '/cidade-master-38',
            "logo": require("../../images/logos/acqua_logo.png")
        },
        {
            "nome": "Agência Galeria Artes",
            "description": "",
            "fachada": require("../../images/fachadas/agencia_galeria_fachada.jpg"),
            "link": '/cidade-master-39',
            "logo": require("../../images/logos/agencia_galeria_logo.png")
        },
        {
            "nome": "Agência Impacto",
            "description": "",
            "fachada": require("../../images/fachadas/impacto_fachada.jpg"),
            "link": '/cidade-master-41',
            "logo": require("../../images/logos/impacto_logo.png")
        },
        {
            "nome": "Bonito Eco Tour",
            "description": "",
            "fachada": require("../../images/fachadas/bonito_eco_tour_fachada.jpg"),
            "link": '/cidade-master-42',
            "logo": require("../../images/logos/bonito_eco_tour_logo.png")
        },
        {
            "nome": "Agência Tô de Férias",
            "description": "",
            "fachada": require("../../images/fachadas/to_de_ferias_fachada.jpg"),
            "link": '/cidade-master-43',
            "logo": require("../../images/logos/to_de_ferias_logo.png")
        },
        {
            "nome": "Bonito Brasil",
            "description": "",
            "fachada": require("../../images/fachadas/bonito_brasil_fachada.jpg"),
            "link": '/cidade-master-44',
            "logo": require("../../images/logos/bonito_brasil_logo.png")
        },
        {
            "nome": "Khárís Tur",
            "description": "",
            "fachada": require("../../images/fachadas/kharis_fachada.jpg"),
            "link": '/cidade-master-46',
            "logo": require("../../images/logos/kharis_logo.png")
        }
    ]

    const dataUtilitarios = [
        {
            "nome": "Atual Mini Mercado",
            "description": "",
            "fachada": require("../../images/fachadas/atual_fachada.jpg"),
            "link": '/cidade-normal-09',
            "logo": require("../../images/logos/atual_logo.png")
        }, 
        {
            "nome": "Academia Power Fit",
            "description": "",
            "fachada": require("../../images/fachadas/power_fachada.jpg"),
            "link": '/cidade-normal-10',
            "logo": require("../../images/logos/power_logo.png")
        }, 
        {
            "nome": "isi tech",
            "description": "",
            "fachada": require("../../images/logos/isi_tech_logo.png"),
            "link": '/alpha-isitech',
            "logo": require("../../images/logos/isi_tech_logo.png")
        }, {
            "nome": "Scooria Tattoo",
            "description": "",
            "fachada": require("../../images/fachadas/scooria_fachada.jpg"),
            "link": '/cidade-normal-12',
            "logo": require("../../images/logos/scooria_logo.png")
        }, {
            "nome": "Papelaria Multiflores",
            "description": "",
            "fachada": require("../../images/fachadas/multiflores_fachada.jpg"),
            "link": '/cidade-normal-13',
            "logo": require("../../images/logos/multiflores_logo.png")
        }, {
            "nome": "Lays Gonçalves Neto",
            "description": "",
            "fachada": require("../../images/fachadas/lays_fachada.jpg"),
            "link": '/cidade-normal-14',
            "logo": require("../../images/logos/lays_logo.png")
        }, 
        {
            "nome": "G2 Esportes",
            "description": "",
            "fachada": require("../../images/fachadas/g2_fachada.jpg"),
            "link": '/cidade-master-45',
            "logo": require("../../images/logos/g2_logo.png")
        },
    ]

    const dataRestaurantes = [
        {
            "nome": "Pub Paulista",
            "description": "",
            "fachada": require("../../images/fachadas/pub_fachada.jpg"),
            "link": '/cidade-normal-15',
            "logo": require("../../images/logos/pub_logo.png")
        }, 
        {
            "nome": "Casarão Restaurante",
            "description": "",
            "fachada": require("../../images/fachadas/casarao_fachada.jpg"),
            "link": '/cidade-normal-16',
            "logo": require("../../images/logos/casarao_logo.png")
        }, 
        {
            "nome": "Açaí Concept",
            "description": "",
            "fachada": require("../../images/fachadas/acai_fachada.jpg"),
            "link": '/cidade-normal-17',
            "logo": require("../../images/logos/acai_logo.png")
        }, 
        {
            "nome": "Quintal Pantaneiro",
            "description": "",
            "fachada": require("../../images/fachadas/quintal_fachada.jpg"),
            "link": '/cidade-normal-18',
            "logo": require("../../images/logos/quintal_logo.png")
        }, 
        {
            "nome": "Sub Way",
            "description": "",
            "fachada": require("../../images/fachadas/sub_way_fachada.jpg"),
            "link": '/cidade-normal-19',
            "logo": require("../../images/logos/sub_way_logo.png")
        }, 
        {
            "nome": "Pizzaria San Marino",
            "description": "",
            "fachada": require("../../images/fachadas/san_marino_fachada.jpg"),
            "link": '/cidade-normal-20',
            "logo": require("../../images/logos/san_marino_logo.png")
        }, 
        {
            "nome": "Ponto Aroeira",
            "description": "",
            "fachada": require("../../images/fachadas/aroeira_fachada.jpg"),
            "link": '/cidade-normal-21',
            "logo": require("../../images/logos/aroeira_logo.png")
        }, 
        {
            "nome": "Sabor da Casa",
            "description": "",
            "fachada": require("../../images/fachadas/sabor_da_casa_fachada.jpg"),
            "link": '/cidade-normal-22',
            "logo": require("../../images/logos/sabor_da_casa_logo.png")
        }, 
        {
            "nome": "Allegra Gelato & Café",
            "description": "",
            "fachada": require("../../images/fachadas/allegra_fachada.jpg"),
            "link": '/allegra',
            "logo": require("../../images/logos/garden_logo.png")
        }, 
        {
            "nome": "Lugano",
            "description": "",
            "fachada": require("../../images/fachadas/lugano_fachada.jpg"),
            "link": '/cidade-normal-24',
            "logo": require("../../images/logos/lugano_logo.png")
        }, 
        {
            "nome": "Bonito Beer & Pizza",
            "description": "",
            "fachada": require("../../images/fachadas/bonito_beer_fachada.jpg"),
            "link": '/cidade-normal-25',
            "logo": require("../../images/logos/bonito_beer_logo.png")
        }, 
    ]

    const dataHopedagens = [
        {
            "nome": "Pousada Arte da Natureza",
            "description": "",
            "fachada": require("../../images/fachadas/arte_da_natureza_fachada.jpg"),
            "link": '/cidade-normal-26',
            "logo": require("../../images/logos/arte_da_natureza_logo.png")
        },
        {
            "nome": "Pousada Galeria Artes",
            "description": "",
            "fachada": require("../../images/fachadas/pousada_galeria_fachada.jpg"),
            "link": '/cidade-normal-27',
            "logo": require("../../images/logos/pousada_galeria_logo.png")
        },
        {
            "nome": "Ypê Flats",
            "description": "",
            "fachada": require("../../images/fachadas/ype_flats_fachada.jpg"),
            "link": '/cidade-normal-28',
            "logo": require("../../images/logos/ype_flats_logo.png")
        },
        {
            "nome": "Chacará Beija-flor",
            "description": "",
            "fachada": require("../../images/fachadas/beija_flor_fachada.jpg"),
            "link": '/cidade-master-40',
            "logo": require("../../images/logos/beija_flor_logo.png")
        },
        {
            "nome": "Pousada Paraíso das Águas",
            "description": "",
            "fachada": require("../../images/fachadas/paraiso_fachada.jpg"),
            "link": '/cidade-normal-29',
            "logo": require("../../images/logos/paraiso_logo.png")
        },
    ]

    const dataLojas = [
        {
            "nome": "Camila Boutique",
            "description": "",
            "fachada": require("../../images/fachadas/camila_fachada.jpg"),
            "link": '/cidade-normal-30',
            "logo": require("../../images/logos/camila_logo.png")
        },
        {
            "nome": "Havaianas",
            "description": "",
            "fachada": require("../../images/fachadas/havaianas_fachada.jpg"),
            "link": '/cidade-normal-31',
            "logo": require("../../images/logos/havaianas_logo.png")
        },
        {
            "nome": "Avatim",
            "description": "",
            "fachada": require("../../images/fachadas/avatim_fachada.jpg"),
            "link": '/cidade-normal-32',
            "logo": require("../../images/logos/avatim_logo.png")
        },
        {
            "nome": "Studio Muriqui",
            "description": "",
            "fachada": require("../../images/fachadas/muriqui_fachada.jpg"),
            "link": '/cidade-normal-33',
            "logo": require("../../images/logos/muriqui_logo.png")
        },
        {
            "nome": "Suéllen Becker",
            "description": "",
            "fachada": require("../../images/fachadas/suellen_fachada.jpg"),
            "link": '/cidade-normal-34',
            "logo": require("../../images/logos/suellen_logo.png")
        },
        {
            "nome": "Galeria Curandeira",
            "description": "",
            "fachada": require("../../images/fachadas/curandeira_fachada.jpg"),
            "link": '/curandeira',
            "logo": require("../../images/logos/soul_bonita_logo.png")
        },

    ]

    // const [ scrollPosition, setScrollPosition ] = useState(0);
    // const handleScroll = () => {
    //     const position = window.LiMaster.
    //     setScrollPosition(position);
    // }

    // useEffect(() => {
    //     localStorage.setItem('STATE_SCROLL', scrollPosition)
    //     console.log(scrollPosition);
    // }, [ scrollPosition ])


    // const element = document.getElementById('oi');

    // console.log(element.offsetTop);



    const [ accordion, setAccordion ] = useState(getLocalNumber());
    function toogleAccordion(i) {
        setAccordion(i === accordion ? 0 : i);
    }

    useEffect(() => {
        localStorage.setItem('STATE_ACCORDION_MASTER', accordion)
        console.log(accordion)
    }, [ accordion ])


    // handleScroll();


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
                        <H3Li>Agências de Turismo</H3Li>
                        <ButtonLi style={{
                            backgroundColor: '#14B81B',
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
                            {dataAgencias.map((item, index) => 
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
                    onClick={() => toogleAccordion(3)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList3} />
                        <H3Li>Utilitários</H3Li>
                        <ButtonLi style={{
                            backgroundColor: '#0266D0',
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
                            {dataUtilitarios.map((item, index) => 
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
                    onClick={() => toogleAccordion(4)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList4} />
                        <H3Li>Restaurantes e Similares</H3Li>
                        <ButtonLi style={{
                            backgroundColor: '#E43C25',
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
                            {dataRestaurantes.map((item, index) => 
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
                    onClick={() => toogleAccordion(5)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList5} />
                        <H3Li>Hospedagens</H3Li>
                        <ButtonLi style={{
                            backgroundColor: '#C082FF',
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
                            {dataHopedagens.map((item, index) => 
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
                    onClick={() => toogleAccordion(6)}
                >
                    <ContentLi>
                        <ImgLi src={ImgMasterList6} />
                        <H3Li>Lojas</H3Li>
                        <ButtonLi style={{
                            backgroundColor: '#FE964B',
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
                            {dataLojas.map((item, index) => 
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
                

                
            </UlMaster>
        </WrapperUl>
    </MenuMaster>
      
    </>
  )
}

export default MenuMasterCity
