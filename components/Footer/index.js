import React, { useEffect, useState } from 'react'
import { FooterContainer, FooterContent, FooterLogo, FooterRights, MiddleLine, } from './footerStyles';
import FooterSvg from './footersvg';
import SocialIconsPack from './socialIconsPack';
import { variants } from './footerAnimation';
import styled from 'styled-components'
import WvFooterLogo from './footerLogo';

const Footer = () => {
    const [scrollPosition, setScrollPosition] = useState(
        typeof window !== 'undefined' ? window.pageYOffset : 0,
    );

    useEffect(() => {
        if (typeof window !== 'undefined' && window.pageYOffset !== 1) { //1 here to initiate the scroll
            const handleScroll = () => setScrollPosition(window.pageYOffset);
            window.addEventListener('scroll', handleScroll);
            return () => window.addEventListener('scroll', handleScroll);

        }
    }, [scrollPosition]);



    return (
        <>
            <FooterContainer>
                <FooterContent>
                    <FooterLogo>
                        <FooterSvgContainer>
                                <WvFooterLogo/>
                        </FooterSvgContainer>
                        <FooterRights>
                            <span>&copy;2021 Westland Valley. All Rights Reserved. </span>
                        </FooterRights>
                    </FooterLogo>
                    <MiddleLine layout variants={variants} hidden='hidden' animate={scrollPosition > 360 ? 'show' : 'hidden'} />
                    <SocialIconsPack scrollPosition={scrollPosition} />
                </FooterContent>
            </FooterContainer>
        </>

    );

}




const FooterSvgContainer = styled.svg`
    display: block;
    height: 7rem;
    width: 12rem;
    position: absolute;
    z-index: 4;
    top: 1rem;
    @media screen and (max-width: 480px){
        width: 9.5rem;
        left: 10%;
        top: 5%;
        transform: translate(50%,-50%);
    }
    @media screen and (max-width: 380px){
        left: 2rem;
    }

`






export default Footer;