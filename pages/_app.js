import { createGlobalStyle } from 'styled-components';
import React, { useEffect, useState } from 'react';



const GlobalStyle = createGlobalStyle`
  *,html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    visibility: visible;


  }
  


    
  &::-webkit-scrollbar {
    width: 11px;
  }

  &::-webkit-scrollbar-track {
  background: #f1f1f1;
 }

  &::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  


 


`

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (document.readyState !== 'loading') {
      setLoaded(true)
    }


  }, []);


  return (
    <>
      <GlobalStyle />
      {
        loaded &&
        <Component {...pageProps} />
      }



    </>

  )
}

export default MyApp
