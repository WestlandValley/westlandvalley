import styled from 'styled-components';




export const Bg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: brightness(20%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: radial-gradient(circle, #20002CC7, #441555D2);
    z-index: 2;
    object-fit: cover;
    @media screen and (max-width: 480px){
        background-image: linear-gradient(to right, #8121A3F1, #161218F3);
    }


`


/*background: #11998e; 
background: -webkit - linear - gradient(to right, #38ef7d, #11998e);  
background: linear - gradient(to right, #38ef7d, #11998e); 
*/