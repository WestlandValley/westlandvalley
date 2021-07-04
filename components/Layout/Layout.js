import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Background from '../Background';
const Layout = ({ children }) => {
    return (
        <>
            
            <LayoutContainer>
                    <NavBar />
                    <Background/>
                        {children}
                    <Footer /> 
            </LayoutContainer>



        </>
    )
}

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #242426;

`





export default Layout;
