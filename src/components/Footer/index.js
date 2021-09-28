import React  from 'react';
import { FooterLinksContainer,FooterWrap,FooterContainer,FooterLinkItems,FooterLinksWrapper,FooterLinkTitle,
 FooterLink, SocialMedia, SocialMediaWrap, SocialLogo,WebsitRights,SocialIcons,
SocialIconsLink } from './FooterElements';
import {FaFacebook,FaInstagram,FaYoutube,FaDiscord,FaGithub} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social media</FooterLinkTitle>
                                <FooterLink as="a" href="https://www.instagram.com/ramziabuaklein/" target="_blank"
                        aria-label="Instagram">Instagram</FooterLink>
                                <FooterLink as="a" href="https://www.youtube.com/channel/UCGbfb9SM86efY8CuQdlDxQQ" target="_blank"
                        aria-label="YouTube">YouTube</FooterLink>
                                <FooterLink as="a" href="https://discord.gg/eUFXRu7u" target="_blank"
                        aria-label="Discord">Discord</FooterLink>
                                <FooterLink as="a" href="https://www.facebook.com/ramuuz.abuaklien/" target="_blank"
                        aria-label="FaceBook">Facebook</FooterLink>
                                <FooterLink as="a" href="https://github.com/Ramziabuaklien" target="_blank"
                        aria-label="Github">Github</FooterLink>
                        </FooterLinkItems>
                          <FooterLinkItems>
                            <FooterLinkTitle>WebDevelopment</FooterLinkTitle>
                                <FooterLink as="a" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"
                        aria-label="HTML">HTML</FooterLink>
                                <FooterLink as="a" href="https://www.w3schools.com/css/" target="_blank"
                        aria-label="CSS">CSS</FooterLink>
                                <FooterLink as="a" href="https://www.w3schools.com/js/default.asp" target="_blank"
                        aria-label="JS">JS</FooterLink>
                                <FooterLink as="a" href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp" target="_blank"
                        aria-label="Bootstrap">Bootstrap</FooterLink>
                                <FooterLink as="a" href="https://reactjs.org/" target="_blank"
                        aria-label="React">React</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Projects</FooterLinkTitle>
                                <FooterLink to="/BMICul">BMICul</FooterLink>
                        </FooterLinkItems>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>This project from my course</FooterLinkTitle>
                                <FooterLink to="/notesApp">NotesApp </FooterLink>
                                <FooterLink to="/KeeperApp">KeeperApp </FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                    <SocialLogo to="/" onClick={toggleHome}>
                        RamziWebsite
                    </SocialLogo>
                    <WebsitRights>RamziWebsite © {new Date().getFullYear()}</WebsitRights>
                    <SocialIcons>
                        <SocialIconsLink href="//www.facebook.com/ramuuz.abuaklien/" target="_blank"
                        aria-label="FaceBook"><FaFacebook />
                        </SocialIconsLink>
                        <SocialIconsLink href="//www.youtube.com/channel/UCGbfb9SM86efY8CuQdlDxQQ" target="_blank"
                        aria-label="YouTube"><FaYoutube />
                        </SocialIconsLink>
                        <SocialIconsLink href="//www.instagram.com/ramziabuaklein/" target="_blank"
                        aria-label="Instagram"><FaInstagram />
                        </SocialIconsLink>
                        <SocialIconsLink href="//github.com/Ramziabuaklien" target="_blank"
                        aria-label="Github"><FaGithub />
                        </SocialIconsLink>
                        <SocialIconsLink href="//discord.gg/eUFXRu7u" target="_blank"
                        aria-label="Discord"><FaDiscord />
                        </SocialIconsLink>
                    </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;

