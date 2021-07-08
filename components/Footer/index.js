import React, { useEffect, useState } from 'react'
import { FooterContainer, FooterContent, FooterLogo, FooterRights, MiddleLine,FooterSvgContainer } from './footerStyles';
import SocialIconsPack from './socialIconsPack';
import { variants } from './footerAnimation';
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
                    <MiddleLine layout variants={variants} hidden='hidden' animate={scrollPosition > 340 ? 'show' : 'hidden'} />
                    <SocialIconsPack scrollPosition={scrollPosition} />
                </FooterContent>
            </FooterContainer>
        </>

    );

}











export default Footer;