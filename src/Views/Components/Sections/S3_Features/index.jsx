import emotionStyled from '@emotion/styled'
import React from 'react';
import bg from '../../../../assets/features-bg.jpg'
import bgMob from '../../../../assets/features-bg-mob.jpg'
import { Box, Typography } from '@mui/material';

const Wrapper = emotionStyled.div`
    min-height: 100vh;
    background-color: #000000;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
        z-index: 1;
        
    @media(max-width: 899px){
        background-image: url(${bgMob});
    }
`

const RightContent = emotionStyled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
`
const CardWrapepr = emotionStyled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3vh;

    @media(max-width: 899px){
        flex-direction: column;
    }
`
const Cards = emotionStyled(Box)`
    padding: 2.3vw;

    div{
        background: #001b3975;
        backdrop-filter: blur(10px);
        border-radius: 12px;
        padding: 6vh 2.2vw 4vh;
        max-width: 470px;
        p{
            padding-top: 20px;
            min-height: 245px; 
            @media(max-width: 899px){
                padding-top: 0px;
                min-height: unset;
                margin: unset !important;
            }
        }
            
        @media(max-width: 899px){
            padding: 20px 2.2vw 20px;
        }
    }
`

const Features = () => {
  return (
    <Wrapper>
        <RightContent>
            <Typography variant='h3' textAlign={'center'} marginLeft={3} fontFamily={'headingFont'}>Key Features</Typography>
            <CardWrapepr>
                <Cards textAlign={'center'}>
                    <div>
                        <Typography variant='h4' textAlign={'center'} marginLeft={3} fontFamily={'headingFont'}>Zero Tax</Typography>
                        <Typography variant='body2' textAlign={'center'}>With $FOXXY you get what you pay for without giving anyone else a cut with 0% tax on every transaction.</Typography>
                    </div>
                </Cards>
                <Cards textAlign={'center'}>
                    <div>
                        <Typography variant='h4' textAlign={'center'} marginLeft={3} fontFamily={'headingFont'}>Meme Potential</Typography>
                        <Typography variant='body2' textAlign={'center'}>With its playful fox-dog theme and community-driven spirit, $FOXXY is poised to become the next viral sensation in the meme token world.</Typography>
                    </div>
                </Cards>
                <Cards textAlign={'center'}>
                    <div>
                        <Typography variant='h4' textAlign={'center'} marginLeft={3} fontFamily={'headingFont'}>Long Term</Typography>
                        <Typography variant='body2' textAlign={'center'}>Backed by a detailed roadmap and continuous development, $FOXXY is designed for sustainable growth, making it more than just a fleeting meme.</Typography>
                    </div>
                </Cards>
            </CardWrapepr>
        </RightContent>
    </Wrapper>
  )
}

export default Features