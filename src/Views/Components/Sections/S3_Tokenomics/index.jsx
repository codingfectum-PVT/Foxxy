import emotionStyled from '@emotion/styled'
import React from 'react';
import bg from '../../../../assets/tokenomics-bg.jpg'
import logo from '../../../../assets/logo.png'
import headerimg from '../../../../assets/tokenomicsimg.png'
import { Box, Grid, Typography } from '@mui/material';
import {MenuLink} from '../../LockerMenu/styles'
import { buySellTax, CA, supply, uniSwapLink } from '../../../../links';
const Wrapper = emotionStyled.div`
    height: 100vh;
    background-color: #FF274C;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    text-align: center;
    z-index: 0;
`

const RightContent = emotionStyled.div`
    margin: auto;
    max-width: 55vw;
    height: 100vh;
    padding: 8vh 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media(max-width: 1380px){ 
        max-width: 75vw;
    }
    @media(max-width: 899px){
        padding: 10vh 20px;
        max-width: unset;
    }
`

const RightImage = emotionStyled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    margin: auto;
    max-width: 40vh;
    z-index: -1;
    
    @media(max-width: 899px){
        display:none;
    }
`

const CardBody = emotionStyled.div`
    background: #E92849;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 6px 10px 6px rgba(0, 0, 0, 0.33);
    text-align: center;
`
const Tokenomics = () => {
  return (
    <Wrapper>
        <RightContent>
            <Typography variant='h3' marginBottom={3}>Tokenomics</Typography>
            <Grid container>
                <Grid item xs={12} padding={2}>
                    <CardBody>
                        <Typography maxWidth={'unset'} variant='h4'>Contract</Typography>
                        <Typography maxWidth={'unset'} variant='body2'>{CA}</Typography>
                    </CardBody>
                </Grid>
                <Grid item xs={12} sm={4} padding={2}>
                    <CardBody>
                        <Typography variant='h4'>Taxes</Typography>
                        <Typography variant='body2'>{buySellTax}</Typography>
                    </CardBody>
                </Grid>
                <Grid item xs={12} sm={4} padding={2}>
                    <CardBody>
                        <Typography variant='h4'>Network</Typography>
                        <Typography variant='body2'>Ethereum</Typography>
                    </CardBody>
                </Grid>
                <Grid item xs={12} sm={4} padding={2}>
                    <CardBody>
                        <Typography variant='h4'>Supply</Typography>
                        <Typography variant='body2'>{supply}</Typography>
                    </CardBody>
                </Grid>
            </Grid>
        </RightContent>
        <RightImage src={headerimg} />
    </Wrapper>
  )
}

export default Tokenomics