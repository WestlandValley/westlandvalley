import React from 'react';
import { ImageContainer, Bg } from './backgroundStyles';

const Background = ({loaded}) => {

    return (
        <>
            {
                loaded &&
                <>
                    <Bg/>
                    <ImageContainer loop='loop' autoPlay='autoPlay' muted='muted' src='/header.mp4' type='video/mp4' />
                </>
            
            }
        </>

    )
}


export default Background;

