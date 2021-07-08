import { motion } from 'framer-motion';
import styled from 'styled-components';



export const Social = styled(motion.ul)`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    position: absolute;
    margin-left: 2rem;
    right: -5rem;
    top: 7rem;
    @media screen and (max-width: 480px){
        width: 100%;
        align-items: center;
        bottom: 0;
    }
    @media screen and (max-width: 380px){
        right: -3.8rem;
    }


`
export const SocialIcons = styled(motion.li)`
    display: flex;
    list-style: none;
    margin-right: 3rem;
    flex-direction: column;
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

        }
    }
    &:hover :nth-child(5){
        svg{
            fill: black;

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
    @media screen and (max-width: 480px){
        justify-content: center;
        left: -13px;
        margin-right: 2rem;
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
    visibility: visible !important;
    opacity: 1;

    @media screen and (max-width: 480px){
        width: 100%;
        padding: 0;
    }
    @media screen and (max-height: 750px){
        height: 40vh;
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
export const FooterSvgContainer = styled.svg`
    display: flex;
    flex-direction: column;
    width: 12rem;
    position: relative;
    z-index: 4;
    top: 1rem;
    @media screen and (max-width: 480px){
        width: 9.5rem;
        left: 30%;
        top: 38%;
        transform: translate(50%,-50%);
    }
    @media screen and (max-width: 380px){
        left: 2rem;
    }

`
export const FooterLogo = styled.div`
    width: 100vw;
    margin-right: 40rem;
    display: inline-block;
    @media screen and (max-width: 480px){

    }

`
export const FooterRights = styled.div`
    display: flex;
    text-transform: capitalize;
    font-size: 13px;
    margin-top: 2rem;
    color: hsla(0,0%,74.1%,.4);
    letter-spacing: .4px;
    min-width: 25rem;
    font-family: 'Montserrat Alternates', sans-serif;
    @media screen and (max-width: 480px){
        justify-content: center;
        position: absolute;
        bottom: 0;
        margin-top:0;

        
    }
    @media screen and (max-width: 380px){
        left: -15px;
    }


`
