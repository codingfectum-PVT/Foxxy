import emotionStyled from '@emotion/styled'
import React from 'react';
import bg from '../../../../assets/tokenomics-bg.jpg'
import bgMob from '../../../../assets/tokenomics-bg-mob.jpg'
import { Box, Grid, Typography } from '@mui/material';
import { buySellTax, CA, dexScreenerLink, dexToolsLink, supply, tgLink, uniSwapLink, xLink } from '../../../../links';
const Wrapper = emotionStyled.div`
    height: 100vh;
    background-color: #0C2442;
    background-image: url(${bg});
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    text-align: center;

    @media(max-width: 899px){
        background-image: url(${bgMob});
        background-position: center;
    }
`

const RightContent = emotionStyled.div`
    height: 100vh;
    padding: 8vh 3.5vw 8vh 3.5vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    
    p br{ display: none; }

    @media(max-width: 899px){
        padding: 10vh 20px;
        max-width: unset;
        align-items: center;
        justify-content: flex-end;

        p br{ display: block; }
    }
`

const SocialLink = emotionStyled.a`
    margin: 0 1.5vw;
    img{
        width: 4.2vw;
        height: auto;
        
        @media(max-width: 899px){
            width: 70px;
        }
    }
`
const DiscBox =  emotionStyled(Box)`
    position: absolute;
    bottom: 10%;
    max-width: 23vw;
`
const Tokenomics = () => {
  return (
    <Wrapper>
        <RightContent>
            <Box>
                <Typography maxWidth={'unset'} variant='h3' marginBottom={6} textAlign={{md:'right', xs: 'left'}}>Tokenomics</Typography>
                <Typography maxWidth={'unset'} variant='body2' textAlign={{md:'right', xs: 'left'}}>Total Supply: <br />{supply}</Typography>
                <Typography maxWidth={'unset'} variant='body2' textAlign={{md:'right', xs: 'left'}}>Transaction Tax: <br />{buySellTax} on buy/sell</Typography>
                <Typography maxWidth={'unset'} variant='body2' textAlign={{md:'right', xs: 'left'}}>Liquidity: Locked</Typography>
                <Typography maxWidth={'unset'} variant='body2' textAlign={{md:'right', xs: 'left'}}>Blockchain: <br />Ethereum (ERC-20)</Typography>
                <Typography maxWidth={'unset'} variant='body2' textAlign={{md:'right', xs: 'left'}}>Contract Address: <br />{CA}</Typography>
            </Box>
        </RightContent>
    </Wrapper>
  )
}

export default Tokenomics