import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, 
    NavBarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu,
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavBarElements';
import { animateScroll as scroll } from 'react-scroll';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = (nav) => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else {
            setScrollNav(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
           <Nav scrollNav={scrollNav}>
               <NavBarContainer>
                   <NavLogo to="/" onClick={toggleHome}>Ramzi Website</NavLogo>
                   <MobileIcon onClick={toggle}>
                       <FaBars />
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLinks to="aboutme" 
                           smooth={true} duration={1000} spy={true} exact="true" offset={-80}
                           >About Me</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="aboutWD"
                           smooth={true} duration={1000} spy={true} exact="true" offset={-80}
                           >Web Development</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="Gaming"
                           smooth={true} duration={1000} spy={true} exact="true" offset={-80}
                           >Gaming</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="React"
                           smooth={true} duration={1000} spy={true} exact="true" offset={-80}
                           >React</NavLinks>
                       </NavItem>
                   </NavMenu>
                   <NavBtn>
                   <NavBtnLink to="/contactme">Contact</NavBtnLink>
                   </NavBtn>
               </NavBarContainer>
           </Nav>
    )
}

export default Navbar
