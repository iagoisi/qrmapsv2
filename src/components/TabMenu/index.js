import React, { useState } from 'react';

import MenuMasterCity from '../MenuMasterCity';
import MenuMasterAtrativos from '../MenuMasterAtrativos';

import ImageButton1 from '../../images/TabMenu/cidade4.png';
import ImageButton2 from '../../images/TabMenu/atrativos4.png';


import { 
    Container,
    WrapperTabMenu,
    TabButton1,
    ContentButton,
    H2Button1,
    ImgButton1,
    WrapperSeparador,
    Separador,
    TabButton2,
    H2Button2,
    ImgButton2,
    WrapperMasterMenu
 } from './TabMenuElements';

const TabMenu = () => {
    const [ activeTab, setActiveTab ] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab("tab1");
      };
    
      const handleTab2 = () => {
        setActiveTab("tab2");
      };

  return (
    <>
    <Container className='Tabs'>
        <WrapperTabMenu>
            
            <TabButton1 
                className={activeTab === 'tab1' ? 'active' : ""}
                onClick={handleTab1}
                >
                <ContentButton>
                    <H2Button1>Cidade</H2Button1>
                    <ImgButton1 src={ImageButton1} />

                </ContentButton>
            </TabButton1>
            
            <WrapperSeparador>
                <Separador></Separador>
            </WrapperSeparador>
            <TabButton2 
                className={activeTab === 'tab2' ? 'active' : ""}
                onClick={handleTab2}
                >
                <ContentButton>
                    <ImgButton2 src={ImageButton2} />
                    <H2Button2>Atrativos</H2Button2>
                </ContentButton>
            </TabButton2>

        </WrapperTabMenu>
        <WrapperMasterMenu>
            {activeTab === "tab1" ? <MenuMasterCity /> : <MenuMasterAtrativos />}
        </WrapperMasterMenu>
    </Container>
    </>
  )
}

export default TabMenu;
