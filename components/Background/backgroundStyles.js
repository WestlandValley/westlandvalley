import styled from 'styled-components';




export const Bg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, #34414EB7, #4B134FA2);
    z-index: 2;
    object-fit: cover;
    @media screen and (max-width: 480px){
        background-image: linear-gradient(to top, #34414E69, #4B134F63);

    }


`
export const ImageContainer = styled.video`
   position: absolute;
   filter: brightness(10%);
   width: 100%;
   height: 100%;
   object-fit: cover;
   z-index: 1;
   
`