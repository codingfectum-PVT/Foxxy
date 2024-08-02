import emotionStyled from '@emotion/styled'
import React from 'react';
import bg from '../../../../assets/header-bg.jpg'
import logo from '../../../../assets/logo.png'
import headerimg from '../../../../assets/headerimg.png'
import { Box, Typography } from '@mui/material';
import {MenuLink} from '../../LockerMenu/styles'
import { uniSwapLink } from '../../../../links';
const Wrapper = emotionStyled.div`
    height: 100vh;
    background-color: #FF274C;
    background-image: url(${bg});
    background-position: right bottom;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    z-index: 0;
`

const RightContent = emotionStyled.div`
    background: linear-gradient(94deg, #E02243, transparent);
    height: 100vh;
    padding: 8vh 0 0 8vw;
    @media(max-width: 899px){
        padding: 10vh 20px;
    }
`

const LogoImage = emotionStyled.img`
    width: 100%;
    max-width: 13vw;
    height: auto;
    @media(max-width: 899px){
        max-width: 200px;
    }
`

const RightImage = emotionStyled.img`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    max-width: 60vh;
    z-index: -1;
    @media(max-width: 899px){
        top: unset;
        max-width: 400px;
    }
    @media(max-width: 599px){
        top: unset;
        max-width: 300px;
    }
`

const Header = () => {
  return (
    <Wrapper>
        <RightContent>
            <Box display={{sm:'flex'}} alignItems={'center'} marginBottom={{xs:2, sm:4}}>
                <LogoImage src={logo} />
                <Typography variant='h3'  marginLeft={{sm:3}} marginTop={{xs: 3,sm:'0'}} fontFamily={'headingFont'}>Welcome to Kaboruto !</Typography>
            </Box>
            <Typography variant='h4'>The New Generation of Dog Meme Coins!</Typography>
            <Typography variant='body2'>Combining the Legacy of Boruto with the Influence of Kabosumama's Neiro!</Typography>
            <Box marginTop={3}>
                <MenuLink href={uniSwapLink} target='_blank'>Buy Now</MenuLink>
                <MenuLink href={uniSwapLink} target='_blank' className='black'>Buy Now</MenuLink>
            </Box>
        </RightContent>
        <RightImage src={headerimg} />
    </Wrapper>
  )
}

export default Header