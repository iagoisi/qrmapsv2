import React from 'react'

// import data from '../../data.js';

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
    DivBusiness,
    WrapperList,
    LiDataItem,
    H3Name
 } from './MenuMasterAtrativosElements';

const MenuMasterAtrativos = () => {
    const dataMap = [
        {
            "nome": "La Bonita",
            "descrição": "La Bonita",
            "foto": "",
            "logo":""
        },
        {
            "nome": "Vuoi Tratoria",
            "descrição": "La Bonita",
            "foto": "",
            "logo":""
        },
        {
            "nome": "Pastel Bonito",
            "descrição": "La Bonita",
            "foto": "",
            "logo":""
        },
        {
            "nome": "Agência Ygarapé",
            "descrição": "La Bonita",
            "foto": "",
            "logo":""
        }
    ]
    
  return (
    <>
    <MenuMaster>
        <WrapperUl>
            <UlMaster>
                <LiMaster>
                    <ContentLi>
                        <ImgLi src={ImgMasterList1} />
                        <H3Li>Melhores Recomendações</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>
                <DivBusiness>
                    <WrapperList>
                        {dataMap.map((item, index) => 
                        <LiDataItem key={index}>
                            <H3Name>{item.nome}</H3Name>

                        </LiDataItem>
                        )}
                    </WrapperList>

                </DivBusiness>

                <LiMaster>
                    <ContentLi>
                        <ImgLi src={ImgMasterList2} />
                        <H3Li>Balneários</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>

                <LiMaster>
                    <ContentLi>
                        <ImgLi src={ImgMasterList3} />
                        <H3Li>Balneário</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>

                <LiMaster>
                    <ContentLi>
                        <ImgLi src={ImgMasterList4} />
                        <H3Li>Flutuação</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>

                <LiMaster>
                    <ContentLi>
                        <ImgLi src={ImgMasterList5} />
                        <H3Li>Contemplação</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>

                <LiMaster>
                    <ContentLi>
                        <ImgLi src={ImgMasterList6} />
                        <H3Li>Aventura</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>

                <LiMaster>
                    <ContentLi>
                        <ImgLi src={ImgMasterList6} />
                        <H3Li>Aventura</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>

                <LiMaster>
                    <ContentLi>
                        <ImgLi src={ImgMasterList6} />
                        <H3Li>Aventura</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>

                <LiMaster>
                    <ContentLi>
                        <ImgLi src={ImgMasterList6} />
                        <H3Li>Aventura</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>

                <LiMaster>
                    <ContentLi>
                        <ImgLi src={ImgMasterList6} />
                        <H3Li>Gruta</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>

                <LiMaster>
                    <ContentLi>
                        <ImgLi src={ImgMasterList6} />
                        <H3Li>Rapel</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>

                <LiMaster>
                    <ContentLi>
                        <ImgLi src={ImgMasterList6} />
                        <H3Li>Cavalgada</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>



                <LiMaster>
                    <ContentLi>
                        <ImgLi src={ImgMasterList6} />
                        <H3Li>Pantanal</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>

                <LiMaster>
                    <ContentLi>
                        <ImgLi src={ImgMasterList6} />
                        <H3Li>Atrativo Urbano</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>

                <LiMaster>
                    <ContentLi>
                        <ImgLi src={ImgMasterList6} />
                        <H3Li>Thilha e Cachoeira</H3Li>
                        <ButtonLi>
                            <ImgButton src={ArrowRight} />
                        </ButtonLi>
                    </ContentLi>
                </LiMaster>
            </UlMaster>
        </WrapperUl>
    </MenuMaster>
      
    </>
  )
}

export default MenuMasterAtrativos;
