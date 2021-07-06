import styled from 'styled-components';
import { motion } from 'framer-motion';


export const IconLine = styled(motion.div)`
    height: .5px;
    top: 4.5rem;
    background: white;
    position: absolute;
    width: 5.8rem;
    left: 0;

    @media screen and (max-width: 500px){
        display: none !important;
    }


    
`
export const NavbarContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;  
    z-index: 7;
    background: transparent;
    height: 70px;

    @media screen and (max-width: 480px){ 
        background: #18181a;
    }
    
    
    
`
export const NavBarItems = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    height: 70px;

`
export const NavIcon = styled(motion.div)`
    display: flex;
    position: relative;
    color: white;
    left: 30px;
    top: 20px;
`