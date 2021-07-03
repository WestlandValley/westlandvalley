import styled from 'styled-components';




export const Bg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-attachment: fixed;
    background-image: linear-gradient(to top, #2F353BCE, #4B134F73);
    z-index: 1;
    @media screen and (max-width: 480px){
        background-image: linear-gradient(to bottom, #222529D3, #1C161FE5);
        height: 100%;
    }

`
export const ImageContainer = styled.video`
   position: fixed;
   filter: brightness(70%);
   width: 100%;
   height: 100%;
   background-attachment: fixed;
   background-repeat: no-repeat;
   background-position: center center;
   object-fit: cover;
   z-index: -1;
   
`