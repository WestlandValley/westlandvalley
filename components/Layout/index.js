import React, {useEffect, useState} from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Background from '../Background';
import { LayoutContainer } from './layoutStyles';
const Layout = ({ children }) => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if (document.readyState !== 'loading'){
            setLoaded(!loaded)
        }


    },[loaded])
    return (
        <>
            {
                loaded &&

                <LayoutContainer>
                    <NavBar />
                    <Background loaded={loaded}/>
                    {children}
                    <Footer />
                </LayoutContainer>
            }


        </>
    )
}






export default Layout;
