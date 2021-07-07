import React, { useState, useEffect } from 'react';
import NavButton from '../NavButton';
import SideBar from '../SideBar';
import { NavbarContainer, NavBarItems, IconLine, NavIcon } from './navBarStyles';
import { variants, logoVariantContainer, logoVariant } from './navBarAnimation';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import NavLogo from './navLogoSvg';
import Link from 'next/link';
import Router from 'next/router'

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(
        typeof window !== 'undefined' ? window.pageYOffset : 0,
    );

    useEffect(() => {
        if (typeof window !== 'undefined' && window.pageYOffset !== 1) { //1 here to initiate the scroll
            const handleScroll = () => setScrollPosition(window.pageYOffset);
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);

        }
    }, [scrollPosition]);

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    };


    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <>
            <SideBar isOpen={isOpen} />
            <NavbarContainer>
                <NavBarItems >
                    <NavIcon variants={logoVariantContainer} initial='hidden' animate='show' onClick={() => Router.push('/')}>
                        <SvgAlpha layout variants={logoVariant}><NavLogo/></SvgAlpha>
                    </NavIcon>
                    <IconLine layout variants={variants} initial='hidden' animate={scrollPosition > 50 ? 'show' : 'hidden'} />
                    <NavButton layout isOpen={isOpen} toggleOpen={toggleOpen} />
                </NavBarItems>
            </NavbarContainer>



        </>
    )
}


const SvgAlpha = styled(motion.div)`
    height: 40px;
    width: 40px;
    position: absolute;
    @media screen and (max-width: 480px){
        height: 30px;
        width: 30px;
        left: -9px;

    }

`





export default NavBar;
