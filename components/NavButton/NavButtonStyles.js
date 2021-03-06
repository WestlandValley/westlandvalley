import styled from 'styled-components';



export const Menu = styled.span`
    &:nth-child(1){
        top: ${props => props.isOpen ? '18px' : '0'};
        transform: ${props => props.isOpen ? `rotate(135deg)` : ''};

    } 


    &:nth-child(2){
        top: 10px;
        opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    }

    &:nth-child(3){
        top: ${({ isOpen }) => isOpen ? '18px' : '20px'};
        transform: ${props => props.isOpen ? `rotate(-135deg)` : ''};

    }
    position: absolute;
    display: block;
    border-radius: 80px;
    opacity: 1;
    height: 1.7px;
    width: 100%;
    right: 0;
    color: white;
    background: white;
    transform: rotate(0deg);
    transition: all .5s cubic-bezier(.215, .61, .355, 1);
    @media screen and (max-width: 480px){
        right: -7px;
        height: 1.8px;
        &:nth-child(1){
            top: ${props => props.isOpen ? '8px' : '-5px'};
            transform: ${props => props.isOpen ? `rotate(135deg)` : ''};

        }

        &:nth-child(2) {
        top: 4px;
        opacity: ${({ isOpen }) => isOpen ? '0' : '1'};

        }

        &:nth-child(3){
            top: ${({ isOpen }) => isOpen ? '8px' : '14px'};
            transform: ${props => props.isOpen ? `rotate(-135deg)` : ''};

        }

    }


    
`
export const NavMenu = styled.div`
    position: relative;
    margin: 30px 30px;
    color: #0000;
    width: 30px;
    transition: aa .5 ease-in-out;
    cursor: pointer;
    margin-bottom: 20px;
    z-index: 300;
    @media screen and (max-width: 480px){
        width: 26px;
  

    }

    



    

    

`