import emotionStyled from '@emotion/styled'
import React from 'react';
import bg from '../../../../assets/header-bg.jpg'
import bgMob from '../../../../assets/header-bg-mob.jpg'
import logo from '../../../../assets/logo.png'
import x from '../../../../assets/x.png'
import tg from '../../../../assets/tg.png'
import { Box, Typography } from '@mui/material';
import {MenuLink} from '../../LockerMenu/styles'
import { dexToolsLink, tgLink, uniSwapLink, xLink } from '../../../../links';
import { SnowfallA } from '../../Snowfall';

const Wrapper = emotionStyled.div`
    height: 100vh;
    background-color: #111E51;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    z-index: 0;
    
    @media(max-width: 899px){
    background-image: url(${bgMob});
    }
`

const RightContent = emotionStyled.div`
    background: linear-gradient(0deg, #111E51 10%, transparent 50%);
    height: 100vh;
    padding: 8vh 0 0 8vw;
    @media(max-width: 899px){
        padding: 4vh 20px;
    }
`

const LogoImage = emotionStyled.img`
    width: 100%;
    max-width: 20vw;
    height: auto;
    @media(max-width: 899px){
        max-width: 400px;
    }
    @media(max-width: 599px){
        max-width: 325px;
    }
`

const RightBox = emotionStyled(Box)`
    position: absolute;
    right: 5%;
    top: 40%;
    z-index: 0;
    display: inline-block;
    @media(max-width: 899px){
        top: unset;
        max-width: 400px;
    }
    @media(max-width: 599px){
        top: unset;
        max-width: 300px;
    }
`
const SocialLinks = emotionStyled.a`
    background: #263c93;
    display: block;
    padding: 0;
    backdrop-filter: drop-shadow(2px 4px 6px black);
    border-radius: 50%;
    box-shadow: 0px 0px 10px 2px #263c93;
    padding: 12px 12px 7px;
    margin-bottom: 25px;
    transition-duration: 0.5s;
    &:hover{
        backdrop-filter: unset;
        box-shadow: 0px 0px 14px 3px #263c93;
        transition-duration: 0.5s;
    }
`

const Header = () => {
  return (
    <Wrapper>
        <SnowfallA />
        <RightContent>
            <Box display={{sm:'flex'}} alignItems={'center'} textAlign={{xs:'center', md: 'unset'}} marginBottom={{xs:2, sm:4}}>
                <LogoImage src={logo} />
                {/* <Typography variant='h3'  marginLeft={{sm:3}} marginTop={{xs: 3,sm:'0'}} fontFamily={'headingFont'}>Welcome to Kaboruto !</Typography> */}
            </Box>
            <Box position='absolute' bottom={{xs: "10%", md:"16%"}} textAlign='center' left='0px' right={'0px'} >
                <Typography margin={'auto'} marginBottom={'3%'} variant='h4'>Welcome to the World of $FOXXY, The Clever yet Playful Token on the Ethereum Blockchain!</Typography>
                <Box marginTop={3} textAlign='center'>
                    <MenuLink href={uniSwapLink} target='_blank'>Buy Now</MenuLink>
                    <MenuLink href={dexToolsLink} target='_blank' className='black'>Chart</MenuLink>
                </Box>
            </Box>
        </RightContent>
        <RightBox>
            <SocialLinks href={xLink} target='_blank' className='black'>
                <img src={x} style={{width: 30, height: 30}} />
            </SocialLinks>
            <SocialLinks href={tgLink} target='_blank' className='black'>
                <img src={tg} style={{width: 30, height: 30}} />
            </SocialLinks>
        </RightBox>
    </Wrapper>
  )
}

export default Header