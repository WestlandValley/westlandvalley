import Link from 'next/link';
import SideBarAnimate from './sideBarAnimation';
import { AnimatePresence } from 'framer-motion';
import FooterSvg from '../Footer/footersvg';
import { rightSideVariant, socialContainer, item, sideLeftVariant, emailContainerItem } from './sideBarAnimationVar';
import { Email, EmailContainer, EmailDivider, EmailText, Links, Phone, PhoneText, SideBarContainer, SideBarLinks, SideBarMenu, SideLeft, SideRight, SideBarFooterSvg } from './sidebarStyles';



const SideBar = ({ isOpen }) => {

    return (
        <>
            <SideBarContainer>
                <SideBarAnimate isOpen={isOpen} >
                    <SideBarMenu >
                        <AnimatePresence><SideLeft variants={sideLeftVariant}></SideLeft></AnimatePresence>
                        <SideBarFooterSvg>
                            <FooterSvg />
                        </SideBarFooterSvg>
                        <SideBarLinks variants={socialContainer} initial='hidden' animate='show' exit='exit'>
                            <Links variants={item}><Link href=''>Home</Link></Links>
                            <Links variants={item}><Link href=''>Services</Link></Links>
                            <Links variants={item}><Link href=''>Team</Link></Links>
                            <Links variants={item}><Link href=''>Our Work</Link></Links>
                        </SideBarLinks>
                        <AnimatePresence>
                            <SideRight layout variants={rightSideVariant} >
                                <EmailContainer layout variants={socialContainer}>
                                    <Email variants={emailContainerItem}>westlandvalley@gmail.com</Email>
                                    <EmailText layout variants={emailContainerItem}>Get In Touch With Us</EmailText>
                                    <EmailDivider layout variants={emailContainerItem}></EmailDivider>
                                    <Phone variants={emailContainerItem}>+233 546 075 591</Phone>
                                    <PhoneText layout variants={emailContainerItem}>The Fastest Way To Reach Us</PhoneText>
                                </EmailContainer>
                            </SideRight>
                        </AnimatePresence>
                    </SideBarMenu>
                </SideBarAnimate>
            </SideBarContainer>


        </>
    )
}





    




export default SideBar;
