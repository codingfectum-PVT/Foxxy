import emotionStyled from '@emotion/styled'
import React from 'react';
import bg from '../../../../assets/community-bg.jpg'
import bgMob from '../../../../assets/community-bg-mob.jpg'
import tg from '../../../../assets/tg-black.png'
import x from '../../../../assets/x-black.png'
import { Box, Grid, Typography } from '@mui/material';
import { buySellTax, CA, dexScreenerLink, dexToolsLink, supply, tgLink, uniSwapLink, xLink } from '../../../../links';
import { SnowfallB } from '../../Snowfall';

const Wrapper = emotionStyled.div`
    height: 100vh;
    background-color: #000000;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    text-align: center;
z-index: 1;

    @media(max-width: 899px){
        background-image: url(${bgMob});
        background-position: center;
    }
`

const RightContent = emotionStyled.div`
    height: 100vh;
    padding: 8vh 1vw 8vh 3.5vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    @media(max-width: 1380px){
        background: linear-gradient(91deg, #071C3A 10%, transparent);
    }
    @media(max-width: 899px){
        background: unset;
        align-items: center;
        justify-content: flex-end;
        padding: 7vh 20px;
        max-width: unset;
    }
`

const SocialLink = emotionStyled.a`
    margin: 0 1.5vw;
    background: #ffffff;
    display: inline-block;
    border-radius: 50%;
    padding: 10px 12px 6px 10px;
    border: 1px solid white;
    box-shadow: 0 0 8px white;
    
    &:hover{
        background: #fffffffa;
    }

    img{
        width: 2vw;
        height: auto;
        

        @media(max-width: 899px){
            width: 70px;
        }
    }
`
const CommBox = emotionStyled(Box)`
    max-width: 27.9vw;
    
    @media(max-width: 1380px){
        max-width: 33vw;
    }
        
    @media(max-width: 1380px){
        max-width: 100%;
    }
`

const DiscBox =  emotionStyled(Box)`
    position: absolute;
    bottom: 10%;
    max-width: 23vw;

    @media(max-width: 1380px){
        max-width: 33vw;
    }

    @media(max-width: 899px){
        max-width: 340px;
        position: static;

        p{
            font-size: 15px !important;
            text-align: center;
        }
    }
`
const Community = () => {
  return (
    <Wrapper>
        <SnowfallB />
        <RightContent>
            <CommBox maxWidth={{xs: "100%", md:"27.9vw"}} marginBottom={'3%'} >
                <Typography maxWidth={'unset'} variant='h4' marginBottom={6}>Join  our  community</Typography>
                <Box>
                    <SocialLink href={xLink} target='_blank'>
                        <img src={x} />
                    </SocialLink>
                    <SocialLink href={tgLink} target='_blank'>
                        <img src={tg} />
                    </SocialLink>
                </Box>
            </CommBox>
            <DiscBox>
                <Typography maxWidth={'unset'} variant='body2' textAlign={'left'}>Disclaimer: Meme token made for fun. Not investment advice. Please do your own research.</Typography>
            </DiscBox>
        </RightContent>
    </Wrapper>
  )
}

export default Community