import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { container } from './sideBarAnimationVar';
import styled from 'styled-components';



const SideBarAnimate = ({ children, isOpen}) => {
    return (

        <AnimatePresence >
            {
                isOpen && <AlphaSideBarContainer
                    initial='hidden'
                    animate='show'
                    exit='exit'
                    variants={container}
                >
                    {children}
                </AlphaSideBarContainer>
            }
        </AnimatePresence>



    )
}
const AlphaSideBarContainer = styled(motion.div)`
    width: 100vw;
    @media screen and (max-width: 480px){
        width: 138.9vw;
    }
    @media screen and (max-width: 390px){
        width: 71.5vmax;
    }

`

export default SideBarAnimate;