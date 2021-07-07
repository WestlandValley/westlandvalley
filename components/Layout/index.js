import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Background from '../Background';
import { LayoutContainer } from './layoutStyles';
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






export default Layout;
