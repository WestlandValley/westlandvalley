import React, {useEffect, useState} from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Background from '../Background';
import { LayoutContainer } from './layoutStyles';
const Layout = ({ children }) => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const loadHandler = () => setLoaded(true)
        window.addEventListener('load', loadHandler)
        return () => window.removeEventListener('load', loadHandler)

    }, [])
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
