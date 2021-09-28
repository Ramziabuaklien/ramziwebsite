import React from 'react';
import { SideBarContainer, 
    Icon, 
    CloseIcon, 
    SideBarWrapper, 
    SideBarMenu, 
    SideBarLink, 
    SideBtnWrap, 
    SideBarRoute
} from './SideBarElements';

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="aboutme" onClick={toggle} >About Me</SideBarLink>
                    <SideBarLink to="aboutWD" onClick={toggle} >Web Development</SideBarLink>
                    <SideBarLink to="Gaming" onClick={toggle} >Gaming</SideBarLink>
                    <SideBarLink to="React" onClick={toggle} >React</SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to="/contactme">Contact</SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
