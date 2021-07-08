import { HeaderContainer, HeaderWrap, HeaderTitle, HeaderIntro, ButtonWrap, Button, Arrow } from './headerStyles';
import { container, item } from './headerAnimation';




const Header = () => {

    
    return (
        <>
        

            <HeaderContainer>
                <HeaderWrap variants={container} initial='hidden' animate='show'>
                    <HeaderTitle variants={item}>
                        <h1>Westland Valley: A Digital Agent For Your Business. Think Tech, Choose Us.</h1>
                    </HeaderTitle>
                    <HeaderIntro variants={item}>
                        <h3>Improving lives by challenging ourselves to make Africa better. It means fighting doubts and uncertainties to show that there are problems worth solving.</h3>
                    </HeaderIntro>
                    <ButtonWrap variants={item}>
                        <Button>
                            Learn More
                        </Button>
                        <Arrow />
                    </ButtonWrap>
                </HeaderWrap>
            </HeaderContainer>


        </>
    );
}

export default Header;