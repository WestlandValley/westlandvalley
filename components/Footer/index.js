import React, { useEffect, useState } from 'react'
import { FooterContainer, FooterContent, FooterLogo, FooterRights, MiddleLine, } from './footerStyles';
import FooterSvg from './footersvg';
import SocialIconsPack from './socialIconsPack';
import { variants } from './footerAnimation';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';


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
    const isMobile = useMediaQuery({
        query: '(max-device-width: 480px)'
    })


    return (
        <>
            <FooterContainer>
                <FooterContent>
                    <FooterLogo>
                        <FooterSvgContainer>
                            <FooterSvg/>
                        </FooterSvgContainer>
                        {
                            isMobile && <FooterContainer>
                                <FooterSvg/>
                            </FooterContainer>
                        }
                        <FooterRights>
                            <span>&copy;2021 Westland Valley. All Rights Reserved. </span>
                        </FooterRights>
                    </FooterLogo>
                    <MiddleLine layout variants={variants} hidden='hidden' animate={scrollPosition > 360 ? 'show' : 'hidden'} />
                    <SocialIconsPack scrollPosition={scrollPosition}/>
                </FooterContent>
            </FooterContainer>
        </>

    );

}
const FooterSvgContainer = styled.svg`
    display: flex;
    height: 2rem;
    width: 13rem;
    position: absolute;
    z-index: 4;
    @media screen and (max-width: 480px){
        width: 10rem;
        left: 10%;
        top: 25%;
        transform: translate(50%,-50%)
    }

`






export default Footer;