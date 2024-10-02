import emotionStyled from '@emotion/styled'
import React from 'react';
import bg from '../../../../assets/about-bg.jpg'
import bgMob from '../../../../assets/about-bg-mob.jpg'
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
    align-items: end;
    padding-bottom: 6%;
    
    @media(max-width: 899px){
        padding: 10vh 20px;
    }
`

const About = () => {
  return (
    <Wrapper>
        <RightContent>
            <Box textAlign={'center'}>
                <Typography variant='h3' textAlign={'center'} marginLeft={3} fontFamily={'headingFont'}>About</Typography>
                <Typography variant='body2' padding={'0 20px 30px'} textAlign={'center'}>$FOXXY is a playful mix of dog and fox, combining the energy and loyalty of a dog with the cleverness and agility of a fox. With a total supply of 420.69 billion tokens and 0% transaction tax, Foxxy is here to bring fun and community-driven growth on the Ethereum blockchain.</Typography>
            </Box>
        </RightContent>
    </Wrapper>
  )
}

export default About