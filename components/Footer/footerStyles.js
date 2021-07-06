import { motion } from 'framer-motion';
import styled from 'styled-components';



export const Social = styled(motion.ul)`
    display: flex;
    max-width: 100%;
    position: absolute;
    margin-left: 2rem;
    right: -5rem;
    top: 5.5rem;
    @media screen and (max-width: 480px){
        width: 100vw;
        height: 100%;
        top: 8rem;
    }
    @media screen and (max-width: 380px){
        right: -3.8rem;
    }


`
export const SocialIcons = styled(motion.li)`
    display: inline-block;
    list-style: none;
    margin-right: 3rem;
    width: 24px;
    height: 24px;
    z-index: 1;
    &:hover :before{
        border-radius: 35%;
        transform: scale(2);
        background-color: white;
        transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);


    }
    &:hover :nth-child(1){
        svg{
            fill: #4267B2;
        }
    }    
    &:hover :nth-child(2){
        svg{
            fill: #B46B3A;
        }
    }    
    &:hover :nth-child(3){
        svg{
            fill: #FF0000;
        }
    }    
    &:hover :nth-child(4){
        svg{
            fill: #1DA1F2
;
        }
    }


    &:before {
        list-style: none;
        display: inline-block;
        border-radius: 35%;
        position: absolute;
        background: white;
        content: '';
        height: 24px;
        width: 24px;
        z-index: -1;
        transform: scale(0);
        transition: all .4s cubic-bezier(.19,1,.22,1);


    }

    svg{
        fill: grey;
    }



`
export const MiddleLine = styled(motion.div)`
    position: absolute;
    right: -9rem;
    background-color: grey;
    width: 1px;
    @media screen and (max-width: 768px){
        display: none !important;
    }
    @media screen and (max-width: 480px){
        display: none !important;
    }

`


export const FooterContainer = styled.div`
    display: flex; 
    position: relative;
    background: #262628;
    overflow: hidden;
    max-width: 1350px;
    padding: 4.5rem 0;
    height: 50vh;


    @media screen and (max-width: 480px){
        height: 40vh;
        width: 100%;
    }

    
`
export const FooterContent = styled.div`
    display: flex;
    position: relative;
    max-width: 1024px;
    margin: 0 auto;
    color: white;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 480px){
        width: 100vw;

    }

    



`
export const FooterLogo = styled.div`
    width: 100vw;
    height: 230px;
    margin-right: 40rem;
    display: inline-block;
    @media screen and (max-width: 480px){

    }

`
export const FooterRights = styled.div`
    display: flex;
    margin-top: 5rem;
    text-transform: capitalize;
    font-size: 13px;
    color: hsla(0,0%,74.1%,.4);
    letter-spacing: .4px;
    min-width: 25rem;
    font-family: 'Montserrat Alternates', sans-serif;
    @media screen and (max-width: 480px){
        justify-content: center;
        position: absolute;
        bottom: -30%;
        
    }
    @media screen and (max-width: 380px){
        left: -15px;
    }


`
