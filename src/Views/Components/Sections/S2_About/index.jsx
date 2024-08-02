import emotionStyled from '@emotion/styled'
import React from 'react';
import bg from '../../../../assets/about-bg.jpg'
import logo from '../../../../assets/logo.png'
import aboutImage from '../../../../assets/about-image.png'
import { Box, Typography } from '@mui/material';
import {MenuLink} from '../../LockerMenu/styles'
import { uniSwapLink } from '../../../../links';
const Wrapper = emotionStyled.div`
    min-height: 100vh;
    background-color: #000000;
    background-image: url(${bg});
    background-position: right bottom;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
        z-index: 1;
`

const RightContent = emotionStyled.div`
    background: linear-gradient(272deg, #000000, transparent);
    min-height: 100vh;
    padding: 8vh 8vw 0 0;
    position: absolute;
    right: 0;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media(max-width: 899px){
        padding: 10vh 20px;
        position: unset;
    }
`

const LogoImage = emotionStyled.img`
    width: 100%;
    max-width: 13vw;
    height: auto;
`

const RightImage = emotionStyled.img`
    width: 100%;
    height: auto;
    // @media(min-width: 899px){
        position: absolute;
        left: 5vw;
        bottom: 0;
        margin: auto;
        width: 100%;
        height: auto;
        max-width: 80vh;
        z-index: -1;
    // }
`

const About = () => {
  return (
    <Wrapper>
        <RightContent>
            <Typography variant='h3'  marginLeft={3} fontFamily={'headingFont'}>What is Kaboruto</Typography>
            <Typography variant='body2' className='about'>Kaboruto is the next big sensation in the world of dog meme coins, merging the beloved anime universe of "Boruto: Next Generations" with the iconic online celebrity dog, Kabosumama. This unique fusion captures the spirit of a new generation, just as Boruto continues the legacy of Naruto. Kaboruto is not just another meme coin; it's a movement led by Neiro, the new king of the crypto dog world, setting the stage for a revolution in the meme coin space.
                <br />
                <br />
                We're pushing the boundaries of what's possible in the crypto space. With Kaboruto, the adventure is just beginning!
            </Typography>
        </RightContent>
        <RightImage src={aboutImage} />
    </Wrapper>
  )
}

export default About