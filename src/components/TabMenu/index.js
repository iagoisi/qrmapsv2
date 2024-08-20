import React, { useState, useEffect } from 'react';

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

 const getLocalActiveTab = () => {
    let activeTab = localStorage.getItem('STATE_ACTIVE_TAB_MASTER');
    console.log('STATE_ACTIVE_TAB_MASTER');

    if (activeTab) {
        return JSON.parse(localStorage.getItem('STATE_ACTIVE_TAB_MASTER'))
    } else {
        return 1;
    }
 }

const TabMenu = () => {
    const [ activeTab, setActiveTab ] = useState(getLocalActiveTab());

    const handleTab1 = () => {
        setActiveTab(1);
      };
    
      const handleTab2 = () => {
        setActiveTab(2);
      };

      useEffect(() => {
        localStorage.setItem('STATE_ACTIVE_TAB_MASTER', activeTab)
        console.log(activeTab)
    }, [ activeTab ])


  return (
    <>
    <Container className='Tabs'>
        <WrapperTabMenu>
            
            <TabButton1 
                className={activeTab === 1 ? 'active' : ""}
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
                className={activeTab === 2 ? 'active' : ""}
                onClick={handleTab2}
                >
                <ContentButton>
                    <ImgButton2 src={ImageButton2} />
                    <H2Button2>Atrativos</H2Button2>
                </ContentButton>
            </TabButton2>

        </WrapperTabMenu>
        <WrapperMasterMenu>
            {activeTab === 1 ? <MenuMasterCity /> : <MenuMasterAtrativos />}
        </WrapperMasterMenu>
    </Container>
    </>
  )
}

export default TabMenu;
