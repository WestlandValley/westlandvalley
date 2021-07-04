import React from 'react';
import { ImageContainer, Bg } from './backgroundStyles';

const Background = () => {
    return (
        <>
            <Bg/>
            <ImageContainer loop autoPlay muted src='/header.mp4' type='video/mp4' />
        </>

    )
}


export default Background;

