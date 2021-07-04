import styled from 'styled-components';




export const Bg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, #34414EB7, #4B134FA2);
    z-index: 1;
    object-fit: cover;


`
export const ImageContainer = styled.video`
   position: absolute;
   filter: brightness(10%);
   width: 100%;
   height: 100%;
   object-fit: cover;
   z-index: -1;
   
`