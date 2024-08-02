import emotionStyled from '@emotion/styled'
import React from 'react';
import bg from '../../../../assets/community-bg.jpg'
import headerimg from '../../../../assets/tokenomicsimg.png'
import tg from '../../../../assets/tg.png'
import x from '../../../../assets/x.png'
import ds from '../../../../assets/ds.png'
import dt from '../../../../assets/dt.png'
import { Box, Grid, Typography } from '@mui/material';
import {MenuLink} from '../../LockerMenu/styles'
import { buySellTax, CA, dexScreenerLink, dexToolsLink, supply, tgLink, uniSwapLink, xLink } from '../../../../links';
const Wrapper = emotionStyled.div`
    height: 100vh;
    background-color: #000000;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    text-align: center;
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
    @media(max-width: 899px){
        padding: 10vh 20px;
        max-width: unset;
    }
`

const Footer = emotionStyled.div`
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    background: #E92849;
    text-align: center;
`

const CardBody = emotionStyled.div`
    background: #E92849;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 6px 10px 6px rgba(0, 0, 0, 0.33);
    text-align: center;
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
const Community = () => {
  return (
    <Wrapper>
        <RightContent>
            <Typography maxWidth={'unset'} variant='h3' marginBottom={6}>Join  our  community</Typography>
            <Grid container justifyContent={'center'}>
                <Grid item xs={12} sm={9} md={8.5} padding={2}>
                    <CardBody>
                        <Box marginTop={'-8%'}>
                            <SocialLink href={xLink} target='_blank'>
                                <img src={x} />
                            </SocialLink>
                            <SocialLink href={tgLink} target='_blank'>
                                <img src={tg} />
                            </SocialLink>
                            <SocialLink href={dexScreenerLink} target='_blank'>
                                <img src={ds} />
                            </SocialLink>
                            <SocialLink href={dexToolsLink} target='_blank'>
                                <img src={ds} />
                            </SocialLink>
                        </Box>
                        <Typography maxWidth={'unset'} variant='body2'>info@kaboruto</Typography>
                    </CardBody>
                </Grid>
            </Grid>
        </RightContent>
        <Footer>
            <Typography maxWidth={'unset'} variant='body2'>© 2024 Kaboruto Token. All rights reserved.</Typography>
        </Footer>
    </Wrapper>
  )
}

export default Community